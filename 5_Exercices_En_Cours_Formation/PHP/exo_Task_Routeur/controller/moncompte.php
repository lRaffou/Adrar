<?php
//J'active la Session
// session_start();
//J'inclus ma vue
// include './view/viewMonCompte.php';
// include './view/viewHeader.php';
// include './view/viewFooter.php';

//Récupérer les données de Session
function afficherCompte(){
    //1) Vérifier que l'utilisateur est connecté
    if(!isset($_SESSION['isConnected'])){
        return ["message" => "Vous n'êtes pas connecté", "nom" => "", "prenom" => '', 'login'=> ''] ;
    }

    //2) Je transmets à la vue les données du compte
    return ["message" => "", "nom" => $_SESSION['nom'], "prenom" => $_SESSION['prenom'], 'login'=> $_SESSION['login']] ;
}

//J'appelle la fonction qui affiche la vue en transmettant les données
echo showMonCompte(afficherCompte()['nom'],afficherCompte()['prenom'],afficherCompte()['login'],afficherCompte()['message']);
// echo renderHeader("");
// echo renderFooter("");

echo renderHeader('styleAccueil.css',showConnexion()[1]);
// echo renderAccueil(showConnexion()[0],registerUser(),showUsersAll());
echo renderFooter('accueil.js');