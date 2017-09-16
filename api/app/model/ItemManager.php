<?php

namespace App\Model;


use App\Model\Entities\Item;
use App\Model\Entities\Tag;
use App\Model\Entities\Tagged;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Kdyby\Doctrine\EntityManager;

class ItemManager
{
    /** @var EntityManager */
    private $em;

    private $tagManager;

    /**
     * ItemManager constructor.
     * @param EntityManager $entityManager
     * @param TagManager $tagManager
     */
    function __construct(EntityManager $entityManager, TagManager $tagManager)
    {
        $this->em = $entityManager;
        $this->tagManager = $tagManager;
    }

    /**
     * @param string $url
     * @return string
     * @throws ItemManagerException
     */
    public static function parseType(string $url): string
    {
        $parsed = parse_url($url);
        if (!isset($parsed['host'])) throw new ItemManagerException("Invalid url format: $url");

        $host = $parsed['host'];

        // youtube
        if (in_array($host, ['youtu.be', 'm.youtube.com', 'youtube.com'])) return Item::TYPE_YOUTUBE;

        // gist
        if (in_array($host, ['gist.github.com'])) return Item::TYPE_GIST;

        // github
        if (in_array($host, ['github.com'])) return Item::TYPE_GITHUB;

        // everything else is link
        return Item::TYPE_LINK;
    }

    /**
     * @param string $url
     * @param string $title
     * @param string $tags
     * @return Item
     * @throws ItemManagerException
     */
    function create(string $url, string $title, string $tags)
    {
        $item = new Item();
        $item->setUrl($url);
        $item->setTitle($title);

        $tags = $this->tagManager->parseTags($tags);
        if (empty($tags)) throw new ItemManagerException("No tags has been parsed!");


        // process plain-text tags into corresponding Tag entities
        $tagEntities = [];

        foreach ($tags as $tagName) {
            try {

                // try to create a new tag and persist it to database
                $newTag = new Tag();
                $newTag->setName($tagName);

                $this->em->persist($newTag);
                $this->em->flush();

                $tagEntities[] = $newTag;
            } catch (UniqueConstraintViolationException $e) {

                // fetch existing tag
                $existingTag = $this->tagManager->findOneByCanon(Tag::canonName($tagName));
                $tagEntities[] = $existingTag;
            }
        }

        if (empty($tagEntities)) throw new ItemManagerException("No tags to be assigned found.");

        // set item type
        $type = self::parseType($url);
        $item->setType($type);

        // persist item to the database
        $this->em->persist($item);
        $this->em->flush();


        // create Tagged entities (tag Item $item with Tag $tagEntities tags)
        /** @var Tag $tag */
        foreach ($tagEntities as $tag) {
            $tagged = Tagged::tag($item, $tag);

            $this->em->persist($tagged);
            $this->em->flush();
        }

        return $item;
    }
}

class ItemManagerException extends \Exception
{
}