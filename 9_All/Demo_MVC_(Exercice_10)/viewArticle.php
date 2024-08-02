<?php
function formArticle(){
    ob_start();
?>
    <form action="" method="post">
        <input type="text" name="nom" placeholder="nom de l'article">
        <input type="text" name="contenu" placeholder="contenu de l'article">
        <input type="submit" name="submit">
    </form>
<?php
return ob_get_clean();
}
?>