<?php
function renderAccueil($message,$listUsers){
    ob_start();
?>
    <main>
        <section>
            <h1>Accueil</h1>
            <form action="" method="post">
                <input type="text" name="name_user" placeholder="Nom">
                <input type="text" name="first_name_user" placeholder="Prénom">
                <input type="text" name="login_user" placeholder="Login">
                <input type="password" name="mdp_user" placeholder="Mdp">
                <input type="submit" name="submit">
            </form>
            <p><?php echo $message ?></p>
        </section>

        <section>
            <h2>Liste des Utilisateurs</h2>
            <?php echo $listUsers ?>
        </section>
    </main>

<?php
    return ob_get_clean();
}
?>