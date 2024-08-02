<?php
//MODEL POUR LA TABLE JOUEURS

// class   ModelJoueurs {
    function getJoueurByPseudo($bdd,$pseudo){
        try{
            $req=$bdd->prepare('SELECT id, pseudo, email, score FROM joueurs WHERE pseudo = ?');

            $req->bindParam(1,$pseudo,PDO::PARAM_STR);

            $req->execute();

            return $req->fetchAll(PDO::FETCH_ASSOC);

        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }

    function addJoueurs($bdd,$pseudo,$email,$score){
        try{
            $req=$bdd->prepare('INSERT INTO joueurs (pseudo, email, score) VALUES (?,?,?)');

            $req->bindParam(1,$pseudo,PDO::PARAM_STR);
            $req->bindParam(2,$email,PDO::PARAM_STR);
            $req->bindParam(3,$score,PDO::PARAM_STR);

            if($req->execute()){
                return true;
            }
        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }

    function getJoueurs($bdd){
        try{
            $req=$bdd->prepare('SELECT id, pseudo, email, score FROM joueurs');

            $req->execute();

            return $req->fetchAll(PDO::FETCH_ASSOC);
        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }
// }

// class   ModelJoueurs {
//     private ?int $id;
//     private ?string $pseudo;
//     private ?string $email;
//     private ?int $score;
//     private ?BDD $bdd;

//     public function __construct(?int $id=NULL,?string $pseudo =NULL,?string $email =NULL,?int $score=NULL){
//         $this->id = $id;
//         $this->pseudo = $pseudo;
//         $this->email = $email;
//         $this->score = $score;

//         public function getId():?int{
//             return $this->id;
//         }
//         public function getPseudo():?string{
//             return $this->pseudo;
//         }
//         public function getEmail():?string{
//             return $this->email;
//         }
//         public function getScore():?string{
//             return $this->score;
//         }
//         public function getBdd():?BDDConnect{
//             return $this->bdd;
//         }
    
//         public function setId(?int $id):self{
//             $this->id = $id;
//             return $this;
//         }
//         public function setPseudo(?string $pseudo):self{
//             $this->pseudo = $pseudo;
//             return $this;
//         }
//         public function setEmail(?string $email):self{
//             $this->email = $email;
//             return $this;
//         }
//         public function setBdd(?BDDConnect $bdd):self{
//             $this->bdd = $bdd;
//             return $this;
//         }

//     public  function getJoueurByPseudo($bdd,$pseudo){
//         try{
//             $req=$bdd->prepare('SELECT id, pseudo, email, score FROM joueurs WHERE pseudo = ?');

//             $req->bindParam(1,$pseudo,PDO::PARAM_STR);

//             $req->execute();

//             return $req->fetchAll(PDO::FETCH_ASSOC);

//         }catch(EXCEPTION $error){
//             return $error->getMessage();
//         }
//     }

//     public  function addJoueurs($bdd,$pseudo,$email,$score){
//         try{
//             $req=$bdd->prepare('INSERT INTO joueurs (pseudo, email, score) VALUES (?,?,?)');

//             $req->bindParam(1,$pseudo,PDO::PARAM_STR);
//             $req->bindParam(2,$email,PDO::PARAM_STR);
//             $req->bindParam(3,$score,PDO::PARAM_STR);

//             if($req->execute()){
//                 return true;
//             }
//         }catch(EXCEPTION $error){
//             return $error->getMessage();
//         }
//     }

//     public  function getJoueurs($bdd){
//         try{
//             $req=$bdd->prepare('SELECT id, pseudo, email, score FROM joueurs');

//             $req->execute();

//             return $req->fetchAll(PDO::FETCH_ASSOC);
//         }catch(EXCEPTION $error){
//             return $error->getMessage();
//         }
//     }
// }
?>