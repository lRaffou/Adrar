<?php
function render($form,$result = ''){
    ob_start();
?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Article</h1>
        <?php echo $form ?>
        <p><?php echo $result ?></p>
    </body>
    </html>
<?php
    return ob_get_clean();
}
?>