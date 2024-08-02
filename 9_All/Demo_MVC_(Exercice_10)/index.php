<?php
/*Exercice 10*/
include "./functions.php";
include './modelArticle.php';
include './viewArticle.php';
include './viewTemplate.php';

$result = "";


//1) Vérifier que le formulaire est envoyé
if(isset($_POST["submit"])){
    //2) Vérifier si les champs sont vides
    if(isset($_POST["nom"]) && !empty($_POST['nom']) && isset($_POST["contenu"]) && !empty($_POST['contenu'])){
        //3) Nettoyer les données
        $nom = sanitize($_POST['nom']);
        $contenu = sanitize($_POST['contenu']);

        //4) Vérifier le format
        // On saute cette étape car on attend des chaîne de caractère sans format particulier

        //5) Se Connecter à la BDD
        $bdd = connectBDD();

        //6) Vérifier que le nom de l'article est dispo (requête SELECT) :
        try{
            $data = readArticleByNom($bdd,$nom);

            if(empty($data)){
                $result = addArticle($bdd,$nom,$contenu);

            }else{
                $result="Nom d'article déjà pris";
            }
        }catch(EXCEPTION $error){
            die($error->getMessage());
        }
            
    }else{
        $result = "Veuillez remplir les champs";
    }
}

echo render(formArticle(),$result);
?>