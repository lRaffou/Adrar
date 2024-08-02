<!-- VUE DE LA PAGE D'ACCUEIL -->
<!-- 1) Dans le fichier view_accueil.php, créer une fonction renderView() qui affiche un formulaire
permettant d’enregistrer un nouveau joueur, et une section qui permettra d’afficher la liste
des joueurs avec leur pseudo et leur score (NOTE : vous créerez ce fichier, au choix en
procédural, ou en orienté objet) -->

<?php
function renderView(){
    ob_start();
?>
    <main>
        <section>
            <h1>Accueil</h1>
            <form action="" method="post">
                <input type="text" name="pseudo" placeholder="Pseudo">
                <input type="text" name="email" placeholder="Email">
                <input type="text" name="score" placeholder="Score">
                <input type="submit" name="submit">
            </form>
        </section>
    </main>

<?php
    return ob_get_clean();
}
// echo renderView();
?>