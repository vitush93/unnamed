<?php

namespace App\Model\Entities;


use Doctrine\ORM\Mapping as ORM;
use Nette\Utils\Strings;

/**
 * @ORM\Entity()
 */
class Tag
{
    use Model;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    private $name;

    /**
     * @var string canonical name of tag
     * @ORM\Column(type="string", unique=true)
     */
    private $canon;

    function __construct()
    {
        $this->created = new \DateTime();
        $this->updated = new \DateTime();
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getCanon()
    {
        return $this->canon;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;

        $this->canon = Strings::webalize($name);
    }

}