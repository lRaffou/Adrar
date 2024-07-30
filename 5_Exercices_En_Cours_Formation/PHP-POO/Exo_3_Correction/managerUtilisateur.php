<?php
include './env.php';
include './BDDConnect.php';
include './index.php';

class ManagerUtilisateur extends Utilisateur
{
    //METHODE de model
    public function readUtilisateurById()
    {
        try {
            //Récupère l'objet BDDConnect (parce que je dois l'utiliser pour générer l'objet PDO)
            $bddConnect = $this->getBdd();
            //On instancie l'objet de connexion PDO
            $bdd = $bddConnect->connect();

            //Requête préparée
            $req = $bdd->prepare('SELECT id, nom, prenom, pseudo, email, mdp, dob FROM utilisateurs WHERE id = ?');

            //Récupération de l'id
            $id = $this->getId();

            //Binding de Param
            $req->bindParam(1, $id, PDO::PARAM_INT);

            //Execution de la requête
            $req->execute();

            //Récupérer les données et les renvoyer
            $data = $req->fetchAll(PDO::FETCH_ASSOC);

            return $data;

        } catch (EXCEPTION $error) {
            return $error->getMessage();
        }
    }

    public function displayUtilisateur()
    {
        echo $this->getNom() . ' ' . $this->getPrenom() . ' - ' . $this->getPseudo();
        echo "<br>Yeepikaye ! Mother F**r !";
    }
}

//Création de l'objet utilisateur
$user = new ManagerUtilisateur(1);

//Récupération de l'utilisateur selon l'id (1) en BDD
$data = $user->setBdd(new BDDConnect($_ENV['host'], $_ENV['dbname'], $_ENV['login'], $_ENV['password']))->readUtilisateurById();

//Remplissage des propriété nom, prenom et pseudo, et affichage
$user->setNom($data[0]["nom"])->setPrenom($data[0]["prenom"])->setPseudo($data[0]["pseudo"])->displayUtilisateur();
