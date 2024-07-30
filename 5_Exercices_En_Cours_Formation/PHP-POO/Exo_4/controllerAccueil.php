<?php
// 3) Dans un fichier controllerAccueil.php, implémenter la class ControllerAccueil. Son est de récupérer les information d'un utilisateur selon son id, et de formater l'affichage (méthode displayUtilisateur()  : nom, prenom, pseudo, mail) à envoyer à viewAccueil (qui possède l'attribut message pour ça). La méthode renderView() a pour rôle d'afficher le résultat final.

class ControllerAccueil
{
    private $viewAccueil;

    function __construct()
    {
        $this->view = new ViewAccueil();
    }

    function displayUtilisateur(?int $id)
    {

    }

    function renderView()
    {

    }

}

?>