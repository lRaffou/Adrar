<h1>Exercice 10 :</h1>
<?php
    // a) Créer une base de données MYSQL avec les informations suivantes :
    // -Nom de la bdd : « article »,
    // -une table nommée articles qui va posséder les champs suivants :
    // id_article (clé primaire),
    // nom_article de type varchar(50),
    // contenu_article de type varchar (255),
    $bddname = "article";
    $user = "root";
    $psswrd = "";
    
    if(isset($_POST["submit"])){
        $bdd = new PDO("mysql:host=localhost;bdname=.$bddname.", $user, $psswrd, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        
        $name = isset($_POST["nom_article"]) && !empty($_POST["nom_article"]);
        $content = isset($_POST["contenu_article"]) && !empty($_POST["contenu_article"]);
        
        $req = $bdd->prepare('INSERT INTO articles (nom_article, contenu_article) VALUES (nom_article, contenu_article)');
        $req->bindParam('nom_article', $name);
        $req->bindParam('contenu_article', $content);

        $req->execute();

        $data = $bdd->prepare('SELECT nom_article, contenu_article FROM articles');
        $data->execute();
        $article = $data->fetch();

    }
    

    // b) Créer une page php qui va contenir un formulaire html avec comme méthode POST (balise form)
    // -A l’intérieur du formulaire rajouter les champs suivants :
    // Un champ input avec comme attribut html name = «nom_article »,
    // Un champ input avec comme attribut html name = «contenu_article »,
    // Un champ input de type submit avec comme attribut html value = «Ajouter»
    // c) Ajouter le code php suivant :
    // -Créer 2 variables $name, $content
    // -Importer le contenu des 2 super globales $_POST[‘nom_article’], $_POST[‘contenu_article’] et tester les avec la méthode isset() dans les variables créés précédemment ($name et $content),
    // -Ajouter le code de connexion à la base de données en vous inspirant des exemples vus dans ce chapitre,
    // -Ajouter une requête simple qui va insérer le contenu des 2 champs dans un nouvel enregistrement (requête SQL insert),
    // d) Bonus :
    // -Utiliser une requête SQL préparée avec Binding de Paramètres à la place de la requête simple.
    // -Afficher dans un paragraphe le nom et le contenu de l’article ajouté en bdd en dessous du formulaire.
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
            <input type="text" name="nom_article" placeholder="nom_article">
            <input type="text" name="contenu_article" placeholder="contenu_article">
            <input type="submit" name="submit" value="Ajouté">
        </form>
    </body>
</html>

<?php