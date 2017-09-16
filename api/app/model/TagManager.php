<?php

namespace App\Model;


use App\Model\Entities\Tag;
use Kdyby\Doctrine\EntityManager;

class TagManager
{
    /** @var EntityManager */
    private $em;

    /**
     * TagManager constructor.
     * @param EntityManager $entityManager
     */
    function __construct(EntityManager $entityManager)
    {
        $this->em = $entityManager;
    }

    /**
     * Parse tag string in format '#tag1 #tag2' into array of tags ['tag1', 'tag2'].
     *
     * @param string $tags
     * @return array
     */
    function parseTags(string $tags): array
    {
        preg_match_all("/#(\\w+)/", $tags, $matches);

        return $matches[1];
    }

    /**
     * @param string $canon
     * @return null|Tag
     */
    function findOneByCanon(string $canon)
    {
        return $this->em->getRepository(Tag::class)->findOneBy(['canon' => $canon]);
    }
}