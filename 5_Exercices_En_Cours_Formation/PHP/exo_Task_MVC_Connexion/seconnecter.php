<?php
    session_start();

    include "./view/viewConnexion.php";
    include './model/modelUsers.php';
    include './utils/functions.php';

    function seConnecter() {
        if(!isset($_POST["submit"])){
            return "Information incorrecte !";
        }
        $password = sanitize($_POST['mdp_user']);
        print_r($password);
        $bdd = connectBDD($host,$dbname,$login,$password);
        print_r($bdd);
        $user = readUserByLogin($bdd,$login);
        print_r($user);
        $hash = $user[0]['mdp_user'];
        print_r ($hash);
        if (password_verify($password, $hash)) {
            return 'Le mot de passe est valide !';
        } else {
            return 'Le mot de passe est invalide.';
        }
    }
    echo seConnecter();

    echo renderConnexion();

    session_destroy();
?>