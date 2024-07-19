<?php
    // $name_user
    // $first_name_user
    // $login_user
    // $mdp_user

    if(isset($_POST["submit"])){
        echo "test1";
        if(isset($_POST["name_user"]) && !empty($_POST['name_user']) && isset($_POST["first_name_user"]) && !empty($_POST['first_name_user']) && isset($_POST["login_user"]) && !empty($_POST['login_user']) && isset($_POST["mdp_user"]) && !empty($_POST['mdp_user'])){
            $name_user = htmlentities(strip_tags(stripslashes(trim($_POST['name_user']))));
            $first_name_user = htmlentities(strip_tags(stripslashes(trim($_POST['first_name_user']))));
            $login_user = htmlentities(strip_tags(stripslashes(trim($_POST['login_user']))));
            $mdp_user = htmlentities(strip_tags(stripslashes(trim($_POST['mdp_user']))));
            echo "test2";
            if(filter_var($login_user,FILTER_VALIDATE_EMAIL)){

                $password = password_hash($mdp_user,PASSWORD_BCRYPT);

                ob_start();
?>
                <p><?php echo $login_user; ?></p>
                <p><?php echo $password;?></p>
<?php
                echo ob_get_clean();
                echo "test3";

                $bdd = new PDO('mysql:host=localhost;dbname=task',"root","",array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

            try{
                $req = $bdd->prepare('INSERT INTO users (name_user,first_name_user, login_user, mdp_user) VALUES (?, ?, ?, ?)');

                $req->bindParam(1,$name_user,PDO::PARAM_STR);
                $req->bindParam(2,$first_name_user,PDO::PARAM_STR);
                $req->bindParam(3,$login_user,PDO::PARAM_STR);
                $req->bindParam(4,$password,PDO::PARAM_STR);

                $req->execute();

            }catch(EXCEPTION $error){
                die($error->getMessage());
            }
            }
        }
    }
?>



<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="" method="post">
            <input type="text" name="name_user" placeholder="name user">
            <input type="text" name="first_name_user" placeholder="first name user">
            <input type="text" name="login_user" placeholder="login user">
            <input type="text" name="mdp_user" placeholder="mdp user">
            <input type="submit" name="submit" value="Ajouter">
        </form>
    </body>
</html>