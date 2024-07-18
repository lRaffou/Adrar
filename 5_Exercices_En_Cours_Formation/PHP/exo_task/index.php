<?php
    $name_user
    $first_name_user
    $login_user
    $mdp_user

    if(isset($_POST["submit"])){
        if(isset($_POST["name_user"]) && !empty($_POST['name_user']) && isset($_POST["first_name_user"]) && !empty($_POST['first_name_user']) && isset($_POST["login_user"]) && !empty($_POST['login_user']) && isset($_POST["mdp_user"]) && !empty($_POST['mdp_user'])){
            $name_user = htmlentities(strip_tags(stripslashes(trim($_POST['name_user']))));
            $first_name_user = htmlentities(strip_tags(stripslashes(trim($_POST['first_name_user']))));
            $login_user = htmlentities(strip_tags(stripslashes(trim($_POST['login_user']))));
            $mdp_user = htmlentities(strip_tags(stripslashes(trim($_POST['mdp_user']))));

            $bdd = new PDO('mysql:host=localhost;dbname=task',"root","",array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

            try{
                $req = $bdd->prepare('SELECT name_user,first_name_user, login_user, mdp_user FROM task WHERE name_user = ?, first_name_user = ?, login_user = ?, mdp_user = ?');
            }

        }

    }


?>



<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="" method="post">
            <input type="text" name="name_user" placeholder="name user">
            <input type="text" name="first_name_user" placeholder="first name user">
            <input type="text" name="login_user" placeholder="login user">
            <input type="text" name="mdp_user" placeholder="mdp user">
            <input type="submit" value="Ajouter">
        </form>
    </body>
</html>