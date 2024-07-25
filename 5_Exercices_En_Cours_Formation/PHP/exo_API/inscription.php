<?php
    include './env.php';
    include './utilisateurs.php';
    include './utils/functions.php';
    include './model/modelUtilisateur.php';

    function inscription() {
        if(!isset($_POST["submit"])){
            return "Information incorrecte !";
        }

        if(!isset($_POST['nom']) || empty($_POST['nom']) ||
            !isset($_POST['prenom']) || empty($_POST['prenom']) ||
            !isset($_POST['pseudo']) || empty($_POST['pseudo']) ||
            !isset($_POST['email']) || empty($_POST['email']) ||
            !isset($_POST['mdp']) || empty($_POST['mdp']) ||
            !isset($_POST['dob']) || empty($_POST['dob'])){

            return "Veulliez remplir tous les champs";
        }

        $nom = sanitize($_POST['nom']);
        $prenom = sanitize($_POST['prenom']);
        $pseudo = sanitize($_POST['pseudo']);
        $email = sanitize($_POST['email']);
        $mdp = sanitize($_POST['mdp']);
        $dob = sanitize($_POST['dob']);

        $password = password_hash($mdp,PASSWORD_BCRYPT);

        $bdd = connectBDD($host,$dbname,$login,$password);

        $data = readUserByLogin($bdd,$pseudo);

        if(!empty($data)){
            return "Le Login existe déjà en BDD";
        }

        if (password_verify($password, $hash)) {
            return 'Le mot de passe est valide !';
        } else {
            return 'Le mot de passe est invalide.';
        }

        $data = addUser($bdd,$nom,$prenom,$pseudo,$mdp);
    }
?>