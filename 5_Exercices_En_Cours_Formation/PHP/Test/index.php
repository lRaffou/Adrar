<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            // Exercice 2 :

            // -Créer une variable de type int avec pour valeur 5,
            $number = 5;

            // -Afficher le contenu de la variable (utilisation de la fonction php echo),
            echo $number = 5, "\n";

            // -Afficher son type (utilisation de la fonction php gettype),
            echo gettype($number), "\n";

            // -Créer une variable de type String avec pour valeur votre prénom,
            $myName = "Raphaël";

            // -Afficher le contenu de la variable (utilisation de la fonction php echo),
            echo $myName, "\n";
            
            // -Créer une variable de type booléen avec pour valeur false,
            $boolean = true;

            // -Afficher son type (utilisation de la fonction php gettype).
            echo gettype($boolean), "\n";
        ?>
        <?php
            // Exercice 2 :

            // -Ecrire un programme qui prend le prix HT d’un article, le nombre d’articles et le taux de TVA, et qui fournit le prix total TTC correspondant.
            $prixHT = 100;
            $quantite = 5;
            $tva = 0.2;

            // -Afficher le prix HT, le nbr d’articles et le taux de TVA (utilisez la fonction echo),
            echo "<p>".$prixHT."</p>";
            echo "<p>".$quantite."</p>";
            echo "<p>".$tva."</p>";

            // -Afficher le résultat (utilisez la fonction echo).
            // echo "<p>Prix HT : ".$prixHT." euros</p><p>Quantite : ".$quantite."</p><p>TVA : ".($tva*100)."%</p><p>PRIX TTC : ".$prixTTC." euros</p>";

            // Calcul prix TTC :
            
            // prix TTC = prixHT * ( 1 + TVA ) * quantite
            $prixTTC = $prixHT * (1+$tva) * $quantite;
        ?>
        <?php
        // Exercice 3 :
        
        // -Créer une fonction qui soustrait à $a la variable $b (2 paramètres en entrée),
        // -la fonction doit renvoyer le résultat de la soustraction $a-$b (return).
        function result($a, $b) {
            return $a - $b;
        }

        // Exercice 4 :
        // -Créer une fonction qui prend en entrée un nombre à virgule (float),
        // la fonction doit renvoyer l’arrondi (return) du nombre en entrée.
        function number($n) {
            return is_float("<p>".$n."</p>");
        }

        // Exercice 5 :
        // -Créer une fonction qui prend en entrée 3 valeurs et renvoie la somme des 3 valeurs.
        function results($a, $b, $c) {
            return "<p>".$a + $b + $c."</p>";
        }

        // Exercice 6 :
        // -Créer une fonction qui prend en entrée 3 valeurs et retourne la valeur moyenne des 3 valeurs (saisies en paramètre).
        // function division()

        ?>
    </body>
</html>