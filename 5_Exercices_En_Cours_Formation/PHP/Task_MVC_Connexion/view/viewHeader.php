<?php
function renderHeader($linkCSS){
    ob_start();
?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href=<?php echo "./css/$linkCSS" ?>>
    </head>
    <body>
        <header>
            <nav>
                <a href="index.php">Accueil</a>
                <a href="seconnecter.php">Connexion</a>
                <a href="moncompte.php">Mon Compte</a>
                <a href="deconnexion.php">Se Déconnecter</a>
            </nav>
        </header>

<?php
    return ob_get_clean();
}
?>