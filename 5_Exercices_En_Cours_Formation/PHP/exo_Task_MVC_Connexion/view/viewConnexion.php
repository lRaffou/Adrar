<?php

    function renderConnexion() {
        ob_start();
?>
        <h1>Connectez-vous !</h1>
        <form action="" method="post">
            <input type="text" name="login" placeholder="Entrez votre login">
            <input type="password" name="mdp_user" placeholder="Entrez votre mot de passe">
            <input type="submit" name="submit">
        </form>
<?php
        return ob_get_clean();
    }
?>