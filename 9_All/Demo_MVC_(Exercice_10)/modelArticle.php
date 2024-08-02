<?php
function readArticleByNom($bdd,$nom){
    //6.1) Préparer la requête
    $req=$bdd->prepare('SELECT nom FROM articles WHERE nom = ?');

    //6.2) Binding de Param
    $req->bindParam(1,$nom,PDO::PARAM_STR);

    //6.3)Exécuter la requête
    $req->execute();

    //6.4) Vérifier la réponse de la BDD : si la réponse est vide, le nom est dispo, et donc je passe à l'enregistrment
    return $req->fetchAll(PDO::FETCH_ASSOC);
}

function addArticle($bdd,$nom,$contenu){
    //7) préparation de la requête d'enregistrement
    $req=$bdd->prepare('INSERT INTO articles (nom, contenu) VALUES (?,?)');

    //8) Binding de Param
    $req->bindParam(1,$nom,PDO::PARAM_STR);
    $req->bindParam(2,$contenu,PDO::PARAM_STR);

    //9) Exécution de la requête
    $req->execute();

    return "$nom, dont le contenu est : $contenu, a été enregistré en BDD";
}

?>