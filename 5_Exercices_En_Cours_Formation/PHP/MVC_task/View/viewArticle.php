<?php
    function insertUser() {
        //8) Préparer la requête d'enregistrement
        $req=$bdd->prepare('INSERT INTO users (name_users, first_name_users, login_users, mdp_users) VALUES (?,?,?,?)');

        //9) Binding de Param
        $req->bindParam(1,$name,PDO::PARAM_STR);
        $req->bindParam(2,$firstname,PDO::PARAM_STR);
        $req->bindParam(3,$login,PDO::PARAM_STR);
        $req->bindParam(4,$password,PDO::PARAM_STR);
        
        //10) Executer la requête
        $req->execute();
        
        $message="Nom : $name - Prenom : $firstname - Login : $login - PASSWORD : $password";
    }
?>