<?php

namespace App\Model\Entities;


use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\UniqueConstraint;

/**
 * @ORM\Entity()
 * @ORM\Table(uniqueConstraints={@UniqueConstraint(name="tagged_unique", columns={"tag_id", "item_id"})})
 */
class Tagged
{
    use Model;

    /**
     * @var Tag
     * @ORM\ManyToOne(targetEntity="Tag")
     */
    private $tag;

    /**
     * @var Item
     * @ORM\ManyToOne(targetEntity="Item", inversedBy="tags")
     */
    private $item;

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    private $count = 0;

    private function __construct()
    {
        $this->created = new \DateTime();
        $this->updated = new \DateTime();
    }

    /**
     * @return Tag
     */
    public function getTag()
    {
        return $this->tag;
    }

    /**
     * @param Item $item
     * @param Tag $tag
     *
     * @return Tagged
     */
    public static function tag(Item $item, Tag $tag)
    {
        $tagged = new Tagged();
        $tagged->item = $item;
        $tagged->tag = $tag;
        $tagged->count = 1;

        $item->addTag($tag);

        return $tagged;
    }

    /**
     * @return Item
     */
    public function getItem()
    {
        return $this->item;
    }

    /**
     * @return int
     */
    public function getCount()
    {
        return $this->count;
    }
}