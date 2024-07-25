<?php
//J'active la session
session_start();

include './env.php';
include './utils/functions.php';
include './model/modelUsers.php';
include './view/viewHeader.php';
include './view/viewFooter.php';
include "./components/viewCardUser.php";




//Analyse de l'URL avec parse_url() et retourne ses composants
$url = parse_url($_SERVER['REQUEST_URI']);

//test soit l'url a une route sinon on renvoi à la racine
$path = isset($url['path']) ? $url['path'] : '/';
print_r($path);


/*--------------------------ROUTER -----------------------------*/
//test de la valeur $path dans l'URL et import de la ressource
switch($path){

    case "/exo_Task_Routeur/" :
        include './view/viewAccueil.php';
        include './controller/accueil.php';
    break ;

    case "/exo_Task_Routeur/moncompte":
        include './view/viewMonCompte.php';
        include './controller/moncompte.php';
    break ;

    case "/exo_Task_Routeur/connexion":
        include './view/viewConnexion.php';
        include './controller/seconnecter.php';
    break ;

    //route par default
    default :
    include './controller/404.php';
    break;
}
?>