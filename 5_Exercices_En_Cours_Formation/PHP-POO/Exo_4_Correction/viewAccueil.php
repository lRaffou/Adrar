<?php
class ViewAccueil{
    //Attribut
    private ?string $message;

    //Constructeur
    public function __construct(?string $message = ""){
        $this->message = $message;
    }

    //Getter
    public function getMessage():?string{
        return $this->message;
    }

    //Setter
    public function setMessage(?string $newMessage):?self{
        $this->message = $newMessage;
        return $this;
    }

    //Methode
    public function renderAccueil():?string{
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
            <h1>Accueil</h1>
            <article>
                <?php echo $this->getMessage() ?>
            </article>
        </body>
        </html>
    <?php
        return ob_get_clean();
    }
}

?>