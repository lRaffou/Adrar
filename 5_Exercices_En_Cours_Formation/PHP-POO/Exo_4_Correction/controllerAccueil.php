<?php
//Inclusion des ressources
include './env.php';
include './BDDConnect.php';
include './index.php';
include './managerUtilisateur.php';
include './viewAccueil.php';

class ControllerAccueil{
    //Attribut
    private ?Utilisateur $modelUtilisateur;
    private ?ViewAccueil $viewAccueil;

    //Constructeur
    public function __construct(){
        $this->modelUtilisateur = new ManagerUtilisateur();
        $this->viewAccueil = new ViewAccueil();
    }

    public function getModelUtilisateur(): ?Utilisateur { return $this->modelUtilisateur; }
    public function setModelUtilisateur(?Utilisateur $modelUtilisateur): self { $this->modelUtilisateur = $modelUtilisateur; return $this; }

    public function getViewAccueil(): ?ViewAccueil { return $this->viewAccueil; }
    public function setViewAccueil(?ViewAccueil $viewAccueil): self { $this->viewAccueil = $viewAccueil; return $this; }
    
    public function displayUtilisateur(?int $id):?string{
        //1. Récupérer les infos de l'utilisateur en BDD
        //1.1 Je donne mon objet de connexion à la BDD et l'id qui m'intéresse
        $this->getModelUtilisateur()->setBdd(new BDDConnect($_ENV['host'], $_ENV['dbname'], $_ENV['login'], $_ENV['password']))->setId($id);

        //1.2 Je demande au model les infos de l'utilisateurs
        // $data = $this->getModelUtilisateur()->readUtilisateurById();

        //2. Mettre en forme pour l'affichage
        ob_start();
        ?>
            <p>Nom : <?php echo $data[0]['nom'] ?></p>
            <p>Prenom : <?php echo $data[0]['prenom'] ?></p>
            <p>Pseudo : <?php echo $data[0]['pseudo'] ?> </p>
            <p>Email : <?php echo $data[0]['email'] ?></p>

        <?php
        return ob_get_clean();
    }

    public function renderView($message):void{
        //3. Donner ce formatage à la Vue et effectuer l'affichage final
        echo $this->getViewAccueil()->setMessage($message)->renderAccueil();

        //4. demander à la vue d'effectuer l'affichage final
        //echo $view->renderAccueil();
    }
}

//Lancement du programme :
//1. Je crée mon controller correspondant à mon écran
$controller = new ControllerAccueil();
//2. Je demande les information de l'utilisateur d'id 1
$message = $controller->displayUtilisateur(1);
//3. Je fais le rendu de l'affichage
$controller->renderView($message);
?>