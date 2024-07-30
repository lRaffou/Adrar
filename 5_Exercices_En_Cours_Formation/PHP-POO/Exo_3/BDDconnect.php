<?php
class BDDConnect {
    private ?string $host;
    private ?string $dbname;
    private ?string $login;
    private ?string $password;

    public function __construct(?string $host, ?string $dbname, ?string $login, ?string $password){
        $this->host = $host;
        $this->dbname = $dbname;
        $this->login = $login;
        $this->password = $password;
    }
    public function getHost():?string{
        return $this->host;
    }
    public function getDbname():?string{
        return $this->dbname;
    }
    public function getLogin():?string{
        return $this->login;
    }
    public function getPassword():?string{
        return $this->password;
    }


    public function setHost(?string $host):self{
        $this->host = $host;
        return $this;
    }
    public function setDbname(?string $dbname):self{
        $this->dbname = $dbname;
        return $this;
    }
    public function setLogin(?string $login):self{
        $this->login = $login;
        return $this;
    }
    public function setPassword(?string $password):self{
        $this->password = $password;
        return $this;
    }

    function BDDconnect() {
        try {
            $pdo = new PDO("mysql:host={$this->getHost()};dbname={$this->getDbname()}", $this->getLogin(), $this->getPassword(), array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));
            return $pdo;
        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }
}

// $co = $user->setBdd(new PDO('mysql:host=localhost;dbname=utilisateur','root','',array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION)));

?>