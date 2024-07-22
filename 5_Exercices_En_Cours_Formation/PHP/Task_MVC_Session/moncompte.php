<?php
//J'active la session
session_start();

//J'inclus les fichiers des View
include './view/viewHeader.php';
include './view/viewMonCompte.php';
include './view/viewFooter.php';

//Je remplis la Session
$_SESSION["toto"] = "J'ai visité la page mon compte !";

function showConnexion(){
    if(!empty($_SESSION["toto"])){
        ob_start();
?>
        <a href="deconnexion.php">Déconnexion</a>
<?php
        $connexion = ob_get_clean();
        return [$_SESSION["toto"],$connexion];
    }
    return ['',""];
}

//J'affiche le rendu du HTML, en passant les données nécessaire ($message, $listUsers)
echo renderHeader('styleAccueil.css',showConnexion()[1]);
echo renderMonCompte();
echo renderFooter('accueil.js');
?>