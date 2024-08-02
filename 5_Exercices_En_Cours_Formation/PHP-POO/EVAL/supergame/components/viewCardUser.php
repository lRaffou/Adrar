<?php
function renderCardUser($pseudo,$email,$score){
    ob_start();
?>

<article class="card">
        <p>Pseudo : <?php echo $pseudo ?></p>
        <p>Email : <?php echo $email ?></p>
        <p>Score : <?php echo $score ?></p>
</article>

<?php
    return ob_get_clean();
}
?>