<?php
$message = "";


//////////////////////////////////////////
//AFFICHER LISTE UTILSATEURS EN ENTRANT SUR LA PAGE
//1)Connexion à la BDD
$bdd = new PDO('mysql:host=localhost;dbname=task2',"root","root",array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

//2) Prepare la requête SELECT
$req=$bdd->prepare('SELECT name_users, first_name_users, login_users FROM users');

//3) Executer la requête
$req->execute();

//4) Récupérer la réponse de la BDD
$data = $req->fetchAll(PDO::FETCH_ASSOC);
////////////////////////////////


//////////////////////////////////////////////////////
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
//////////////////////////////////////////


//1)Vérifier l'envoie du formulaire
if(isset($_POST["submit"])){
    //2) Vérifier les champs vides
    if(isset($_POST['name_user']) && !empty($_POST['name_user']) &&
        isset($_POST['firstname_user']) && !empty($_POST['firstname_user']) &&
        isset($_POST['login_user']) && !empty($_POST['login_user']) &&
        isset($_POST['password_user']) && !empty($_POST['password_user'])){

        //3) Vérifier le format des données
        //Pas nécessaire


///////////////////////////////////////
        //4) Nettoyer les données
        $name = htmlentities(strip_tags(stripslashes(trim($_POST['name_user']))));
        $firstname = htmlentities(strip_tags(stripslashes(trim($_POST['firstname_user']))));
        $login = htmlentities(strip_tags(stripslashes(trim($_POST['login_user']))));
        $password = htmlentities(strip_tags(stripslashes(trim($_POST['password_user']))));
/////////////////////////////


////////////////////////////////
        //5) Hasher un mot de passe
        $password = password_hash($password,PASSWORD_BCRYPT);
///////////////////////////////////////////


        try{


///////////////////////////////////////////
            //7) Vérifier que le login est dispo
            $req=$bdd->prepare('SELECT login_users FROM users WHERE login_users = ?');

            $req->bindParam(1,$login,PDO::PARAM_STR);

            $req->execute();

            $data = $req->fetchAll();
///////////////////////////////////////////

            if(empty($data)){

//////////////////////////////////
                //8) Préparer la requête d'enregistrement
                $req=$bdd->prepare('INSERT INTO users (name_users, first_name_users, login_users, mdp_users) VALUES (?,?,?,?)');

                //9) Binding de Param
                $req->bindParam(1,$name,PDO::PARAM_STR);
                $req->bindParam(2,$firstname,PDO::PARAM_STR);
                $req->bindParam(3,$login,PDO::PARAM_STR);
                $req->bindParam(4,$password,PDO::PARAM_STR);

                //10) Executer la requête     
                $req->execute();

                $message="Nom : $name - Prenom : $firstname - Login : $login - PASSWORD : $password";
//////////////////////////////////

            }else{
                $message="Le Login existe déjà en BDD";
            }
             
        }catch(EXCEPTION $error){
            die($error->getMessage());
        }
           
    }else{
    $message="Veulliez remplir tous les champs";
    }  
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <main>


        <section>
            <h1>Accueil</h1>
            <form action="" method="post">
                <input type="text" name="name_user" placeholder="Nom">
                <input type="text" name="firstname_user" placeholder="Prénom">
                <input type="text" name="login_user" placeholder="Login">
                <input type="password" name="password_user" placeholder="Mdp">
                <input type="submit" name="submit">
            </form>
            <p><?php echo $message ?></p>
        </section>

        <section>
            <h2>Liste des Utilisateurs</h2>
            <?php echo $listUsers ?>
        </section>
    </main>
</body>
</html>