<?php

namespace App\Model;

use Kdyby\Doctrine\EntityManager;
use Nette;
use Nette\Security\Passwords;


/**
 * Users management.
 */
class UserManager implements Nette\Security\IAuthenticator
{
	use Nette\SmartObject;

	/** @var EntityManager */
	private $em;

    /**
     * UserManager constructor.
     * @param EntityManager $entityManager
     */
	public function __construct(EntityManager $entityManager)
	{
		$this->em = $entityManager;
	}


    /**
     * Performs an authentication.
     * @param array $credentials
     * @return Nette\Security\Identity
     * @throws Nette\Security\AuthenticationException
     */
	public function authenticate(array $credentials)
	{
		list($username, $password) = $credentials;

		// TODO github auth
//		$row = $this->database->table(self::TABLE_NAME)
//			->where(self::COLUMN_NAME, $username)
//			->fetch();
//
//		if (!$row) {
//			throw new Nette\Security\AuthenticationException('The username is incorrect.', self::IDENTITY_NOT_FOUND);
//
//		} elseif (!Passwords::verify($password, $row[self::COLUMN_PASSWORD_HASH])) {
//			throw new Nette\Security\AuthenticationException('The password is incorrect.', self::INVALID_CREDENTIAL);
//
//		} elseif (Passwords::needsRehash($row[self::COLUMN_PASSWORD_HASH])) {
//			$row->update([
//				self::COLUMN_PASSWORD_HASH => Passwords::hash($password),
//			]);
//		}
//
//		$arr = $row->toArray();
//		unset($arr[self::COLUMN_PASSWORD_HASH]);

//		return new Nette\Security\Identity($row[self::COLUMN_ID], $row[self::COLUMN_ROLE], $arr);
        return null;
	}

}



class DuplicateNameException extends \Exception
{
}
