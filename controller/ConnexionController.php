<?php
session_start();

include './model/user_model.php';
include './utils/function.php';
//include './view/headerConnexion.php';
//include './view/connexion.php';
//include './view/footerConnexion.php';


class ConnexionController
{
    public function connexion()
    {
        $message='';
    
        // verifie si submit du formulaire de creation de compte existe

        if (isset($_POST["submit"])) {


            //verifie si champs du formulaire de creation de compte existe et ne sont pas vide
            if (isset($_POST["email"]) && isset($_POST["password"]) && !empty($_POST["email"]) && !empty($_POST["password"])) {

                // Verifier format de l'email
                if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
                    echo 'dans fliter_var()';
                    return $message = "<p>Veuillez saisir un email au bon format. Ex: votre-email@email.com</p>";
                }

                // Cleaner les données avec sanitize()
                $email = sanitize($_POST["email"]);
                $password = $_POST["password"];

                // Check si l'utilisateur existe deja grace a l'appel de la fonction isUserExist().
                if (!isUserExist(connectBdd(), $email)) {
                    echo 'UserEXist()';

                    return $message = "<p>Aucun est compte associé à cette email.";
                }

                //Appel de la fonction qui ajoute un Utilisateur.
                $dataUser = getUserByEmail(connectBdd(), $email);
                var_dump($dataUser);

                $passwordBdd = "";
                //foreach($dataUser as $info){
                $user = $dataUser[0]; // Prendre le premier élément du tableau
                $passwordBdd = $user['mdp_user'];
                //}
                if (password_verify($password, $passwordBdd)) {
                    header("Location: accueilController.php");
                    return $message =  "";
                } else {

                    return $message =  "Erreur";
                }
            } else {
                return $message = "<p>Veuillez remplir les champs obligatoires !</p>";
            }
        }
    }
}

// function connexion($message){
//     // verifie si submit du formulaire de creation de compte existe

//     if(isset($_POST["submit"])){


//         //verifie si champs du formulaire de creation de compte existe et ne sont pas vide
//         if(isset($_POST["email"]) && isset($_POST["password"]) && !empty($_POST["email"]) && !empty($_POST["password"]) ){

//             // Verifier format de l'email
//             if(!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
//                 echo'dans fliter_var()';
//                 return $message = "<p>Veuillez saisir un email au bon format. Ex: votre-email@email.com</p>";
//             }

//             // Cleaner les données avec sanitize()
//             $email = sanitize($_POST["email"]);
//             $password = $_POST["password"];

//             // Check si l'utilisateur existe deja grace a l'appel de la fonction isUserExist().
//             if(!isUserExist(connectBdd(), $email)){
//                 echo'UserEXist()';

//                 return $message = "<p>Aucun est compte associé à cette email.";
//             }

//             //Appel de la fonction qui ajoute un Utilisateur.
//             $dataUser = getUserByEmail(connectBdd(),$email);
//             var_dump($dataUser);

//             $passwordBdd = "";
//             //foreach($dataUser as $info){
//             $user = $dataUser[0]; // Prendre le premier élément du tableau
//             $passwordBdd = $user['mdp_user']; 
//             //}
//             if (password_verify($password, $passwordBdd)){
//                 header("Location: accueilController.php");
//                 return $message =  "";
//             } else {

//                 return $message =  "Erreur";
//             }      

//         }else{
//             return $message = "<p>Veuillez remplir les champs obligatoires !</p>";
//         }
//     }


// }

// include "../view/header.php";
// include "../view/headerConnexion.php";
// include '../view/connexion.php';
// include "../view/footerConnexion.php";
