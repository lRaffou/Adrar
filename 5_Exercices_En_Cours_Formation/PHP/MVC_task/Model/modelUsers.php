<?php
    function connexion() {
        //AFFICHER LISTE UTILSATEURS EN ENTRANT SUR LA PAGE
        //1)Connexion à la BDD
        $bdd = new PDO('mysql:host=localhost;dbname=task2',"root","root",array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

        //2) Prepare la requête SELECT
        $req=$bdd->prepare('SELECT name_users, first_name_users, login_users FROM users');

        //3) Executer la requête
        $req->execute();

        //4) Récupérer la réponse de la BDD
        $data = $req->fetchAll(PDO::FETCH_ASSOC);
    }

    function clean() {
        //4) Nettoyer les données
        $name = htmlentities(strip_tags(stripslashes(trim($_POST['name_user']))));
        $firstname = htmlentities(strip_tags(stripslashes(trim($_POST['firstname_user']))));
        $login = htmlentities(strip_tags(stripslashes(trim($_POST['login_user']))));
        $password = htmlentities(strip_tags(stripslashes(trim($_POST['password_user']))));
    }

    function hashPassword() {
        //5) Hasher un mot de passe
        $password = password_hash($password,PASSWORD_BCRYPT);
    }

    function readLogin() {
        //7) Vérifier que le login est dispo
        $req=$bdd->prepare('SELECT login_users FROM users WHERE login_users = ?');
        
        $req->bindParam(1,$login,PDO::PARAM_STR);
        
        $req->execute();
        
        $data = $req->fetchAll();
    }
?>