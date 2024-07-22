<?php
function renderMonCompte(){
    ob_start();
?>
    <main>
        <h1>Bienvenue Sur la Page Mon Compte</h1>
    </main>

<?php
    return ob_get_clean();
}
?>