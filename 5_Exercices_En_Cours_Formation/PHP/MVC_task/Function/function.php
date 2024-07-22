<?php
    function clean($data) {
        //4) Nettoyer les données
        return htmlentities(strip_tags(stripslashes(trim($data))));
        // $firstname = htmlentities(strip_tags(stripslashes(trim($_POST['firstname_user']))));
        // $login = htmlentities(strip_tags(stripslashes(trim($_POST['login_user']))));
        // $password = htmlentities(strip_tags(stripslashes(trim($_POST['password_user']))));
    }

    // Pas besoin car déjà une fonction en elle même.
    // function hashPassword() {
    //     //5) Hasher un mot de passe
    //     $password = password_hash($password,PASSWORD_BCRYPT);
    // }

    function connexion() {
        //1)Connexion à la BDD
        return new PDO('mysql:host=localhost;dbname=task2',"root","root",array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }

?>