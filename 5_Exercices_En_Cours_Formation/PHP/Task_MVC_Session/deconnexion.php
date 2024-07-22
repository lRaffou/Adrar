<?php
//J'activer la sessions
session_start();

//je détruis la session
session_destroy();

//Redirection vers la page d'Accueil
header('Location:index.php');
exit();
?>