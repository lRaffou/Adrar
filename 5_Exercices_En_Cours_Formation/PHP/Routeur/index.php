<?php
//J'active la session
session_start();

//J'importe mes fichier utilitaire
include './utils/functions.php';
//j'importe les models
include './model/modelUsers.php';
//j'importe les vues communes
include './view/viewHeader.php';
include './view/viewFooter.php';

//Analyse de l'URL avec parse_url() et retourne ses composants
$url = parse_url($_SERVER['REQUEST_URI']);

//test soit l'url a une route sinon on renvoi à la racine
$path = isset($url['path']) ? $url['path'] : '/';

/*--------------------------ROUTER -----------------------------*/
//test de la valeur $path dans l'URL et import de la ressource
switch($path){
    //route Accueil /Demo/Routeur -> afficher "Hello World !"
    case $path === "/Demo/Routeur/" :
    include './view/viewAccueil.php';
    include './controller/accueil.php';
    render();
    break ;

    //route Mon Compte /Demo/Routeur/Tata
    case $path === "/Demo/Routeur/Tata":
    include './controller/moncompte.php';
    break ;

    //route par default
    default :
    include './controller/404.php';
    break;
}
?>