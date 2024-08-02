<?php
//CONTROLER DE LA PAGE D'ACCUEIL

session_start();

include "./utils/utils.php";
include "./view/view_accueil.php";
include "./model/model_joueurs.php";
include "./components/viewCardUser.php";

function registerUser(){
    if(!isset($_POST["submit"])){
        return;
    }

    if(!isset($_POST['pseudo']) || empty($_POST['pseudo']) ||
        !isset($_POST['email']) || empty($_POST['email']) ||
        !isset($_POST['score']) || empty($_POST['score'])){
        return "Veulliez remplir tous les champs";
    }

    $pseudo = sanitize($_POST['pseudo']);
    print_r($pseudo);
    $email = sanitize($_POST['email']);
    print_r($email);
    $score = sanitize($_POST['score']);
    print_r($score);


    $bdd = connect();
    print_r($bdd);

    $data = getJoueurByPseudo($bdd,$pseudo);
    print_r($data);

    if(!empty($data)){
        return "Le Pseudo existe déjà en BDD";
    }

    $data = addJoueurs($bdd,$pseudo,$email,$score);
    print_r($data);

    if($data != true){
        return "Erreur d'enregistrement";
    }

    return "Pseudo : $pseudo - Email : $email";
}

function showUsersAll(){
    $bdd = connect();
    print_r($bdd);

    $data = getJoueurs($bdd);
    print_r($data);

    ob_start();
    foreach($data as $joueurs){
        echo renderCardUser($joueurs['pseudo'],$joueurs['email'],$joueurs['score']);
    }
    return ob_get_clean();
}

echo renderView();
echo registerUser();
echo showUsersAll();
?>