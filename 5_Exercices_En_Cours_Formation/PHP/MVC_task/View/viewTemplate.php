<?php
    function card() {
    //5) Afficher la liste des utilisateur : ob_start, foreach, ob_get_clean

    ob_start();
    foreach($data as $user){
    ?>
        <article class="card">
            <p>Nom : <?php echo $user['name_users']?></p>
            <p>Prénom : <?php echo $user['first_name_users']?></p>
            <p>Login : <?php echo $user['login_users']?></p>
        </article>
    <?php
    }
    $listUsers = ob_get_clean();
    }
?>