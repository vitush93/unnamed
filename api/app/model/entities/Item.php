<?php

namespace App\Model\Entities;


use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Nette\InvalidArgumentException;

/**
 * @ORM\Entity()
 */
class Item
{
    const TYPE_GIST = 'gist',
        TYPE_LINK = 'link',
        TYPE_GITHUB = 'github',
        TYPE_YOUTUBE = 'youtube';

    public static $ALLOWED_TYPES = [
        self::TYPE_GIST,
        self::TYPE_GITHUB,
        self::TYPE_LINK,
        self::TYPE_YOUTUBE
    ];

    use Model;

    /**
     * @var ArrayCollection
     * @ORM\OneToMany(targetEntity="Tagged", mappedBy="item")
     */
    private $tags;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    private $url;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    private $title;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    private $type;

    /**
     * Crawled keywords.
     *
     * @var string
     * @ORM\Column(type="string", nullable=true)
     */
    private $keywords;

    function __construct()
    {
        $this->created = new \DateTime();
        $this->updated = new \DateTime();
        $this->tags = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getKeywords()
    {
        return $this->keywords;
    }

    /**
     * @param mixed $keywords
     */
    public function setKeywords($keywords)
    {
        $this->keywords = $keywords;
    }

    /**
     * @param Tag $tag
     */
    function addTag(Tag $tag)
    {
        $this->tags->add($tag);
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param string $type
     */
    public function setType($type)
    {
        if (!in_array($type, self::$ALLOWED_TYPES)) throw new InvalidArgumentException("Unrecognized type: $type");

        $this->type = $type;
    }

    /**
     * @return string
     */
    public function getUrl(): string
    {
        return $this->url;
    }

    /**
     * @param string $url
     */
    public function setUrl(string $url)
    {
        $this->url = $url;
    }
}