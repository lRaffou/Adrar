<?php
// Exercice POO 4 : View et Controller
// 1) Reprendre l'exercice précédent
// 2) Dans un fichier viewAccueil.php : implémenter la class ViewAccueil.  Le but de renderAccueil() est de renvoyer du code HTML qui permet d'afficher les informations de son attribut message.
// 3) Dans un fichier controllerAccueil.php, implémenter la class ControllerAccueil. Son est de récupérer les information d'un utilisateur selon son id, et de formater l'affichage (méthode displayUtilisateur()  : nom, prenom, pseudo, mail) à envoyer à viewAccueil (qui possède l'attribut message pour ça). La méthode renderView() a pour rôle d'afficher le résultat final.

class viewAccueil {
        private ?string $message;

    public function __construct(?string $message = '') {
        $this->message = $message;
    }

    public function getMessage(): ?string {
        return $this->message;
    }

    public function setMessage(?string $message): self {
        $this->message = $message;
        return $this;
    }

    public function renderAccueil() {
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
            <p><?php echo $this->getMessage() ?></p>
        </body>
    </html>

<?php
    return ob_get_clean();
    }
}


?>