<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Exercice 8</h1>
        <form action="" method="post">
            <input type="number" name="number1" placeholder="le number 1">
            <input type="number" name="number2" placeholder="le number 2">
            <input type="submit" name="submit">
        </form>
        <h2>La somme est égale à : valeur.</h2>
        <?php
            // Exercice 8 :
            // -Créer une page de formulaire dans laquelle on aura 2 champs de formulaire de type nombre.

            // -Afficher dans cette même page la somme des 2 champs avec un affichage du style :
            // La somme est égale à : valeur.

            // $a = "number1";
            // $b = "number2";
            // function addition($a, $b) {
            //     $somme = $a + $b;
            //     return "<h2>La somme est égale à : $somme</h2>";
            // }
            
            // echo addition(1, 2);
            
            if(isset($_POST['number1'])&&(isset($_POST['number2']))) {
                $number1 = $_POST['number1'];
                $number2 = $_POST['number2'];
                $somme = $number1 + $number2;
                echo "<h2>La somme est égale à : $somme</h2>";
            }

            ?>
            <h1>Exercice 9</h1>
            <form action="" method="post">
                <input type="number" name="HT" placeholder="prix HT">
                <input type="number" name="art" placeholder="nombre d’article">
                <input type="number" name="TVA" placeholder="taux de TVA">
                <input type="submit" name="submit">
            </form>
            <?php
            // Exercice 9 :
            // -Créer une page de formulaire dans laquelle on aura 3 champs de formulaire de type nombre :
            // 1 champ de formulaire qui demande un prix HT d’un article,
            // 1 champ de formulaire qui demande le nombre d’article,
            // 1 champ de formulaire qui demande le taux de TVA,
            // -Afficher dans cette même page le prix TTC ( prix HT x ( 1 + taux TVA) x quantité ) avec un affichage du style :
            // Le prix TTC est égal à : valeur €.
            if(isset($_POST['submit'])) {
                if(isset($_POST['HT']) && !empty($_POST['HT']) && isset($_POST['art']) && !empty($_POST['art']) && isset($_POST['TVA']) && !empty($_POST['TVA'])) {
                    if(filter_var($_POST['HT'],FILTER_VALIDATE_FLOAT) && filter_var($_POST['art'],FILTER_VALIDATE_FLOAT) && filter_var($_POST['TVA'],FILTER_VALIDATE_FLOAT)) {
                        $HT = htmlentities(strip_tags(stripcslashes(trim($_POST["HT"]))));
                        $art = htmlentities(strip_tags(stripcslashes(trim($_POST["art"]))));
                        $TVA = htmlentities(strip_tags(stripcslashes(trim($_POST["TVA"]))));

                        $prixTCC = $HT * (1 + $TVA / 100) * $art;

                        echo "<h2>Le prix TTC est égal à : $prixTCC €.</h2>";

                    }else{
                        $result="Format non valide. Veuillez entrer des nombres.";
                    }
                }else{
                    $result="Veuillez remplir correctement les champs.";
                }
            }
            ?>
            
    </body>
</html>