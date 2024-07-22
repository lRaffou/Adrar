<?php
    function readAll($bdd) {
        //AFFICHER LISTE UTILSATEURS EN ENTRANT SUR LA PAGE
        

        //2) Prepare la requête SELECT
        $req=$bdd->prepare('SELECT name_users, first_name_users, login_users FROM users');

        //3) Executer la requête
        $req->execute();

        //4) Récupérer la réponse de la BDD
        $data = $req->fetchAll(PDO::FETCH_ASSOC);
    }


    function readLogin($bdd, $login) {
        //7) Vérifier que le login est dispo
        $req=$bdd->prepare('SELECT login_users FROM users WHERE login_users = ?');
        
        $req->bindParam(1,$login,PDO::PARAM_STR);
        
        $req->execute();
        
        $data = $req->fetchAll();
    }
?>