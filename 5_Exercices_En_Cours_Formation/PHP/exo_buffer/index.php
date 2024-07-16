<?php
    include './data.php';
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            echo "<h1>".$titre."</h1>";
            foreach ($ingredients as $ingredient) {
                echo "<ul><li>".$ingredients[0]."</li></ul>";
            }
        ?>
    </body>
</html>