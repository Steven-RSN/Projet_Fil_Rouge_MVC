<?php
session_start();

include __DIR__ . '/../model/user_model.php';
include __DIR__ . '/../utils/function.php';
// $message = '';
// $message = inscription($message);

class InscriptionController
{
    function inscription()
    {

        $message = '';
        // verifie si submit du formulaire de creation de compte existe
        $regexMDP = "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/";
        $messageMDP = "* Votre mot de passe doit contenir au moins 8 caractères, inclure une majuscule, une minuscule, un chiffre et un caractère spécial.";


        if (isset($_POST["submit"])) {


            //verifie si champs du formulaire de creation de compte existe et ne sont pas vide
            if (isset($_POST["username"]) && isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["password2"]) && !empty($_POST["username"]) && !empty($_POST["email"]) && !empty($_POST["password"]) && !empty($_POST["password2"])) {

                // Verifier format de l'email
                if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
                    echo 'dans fliter_var()';

                    return $message = "<p>Veuillez saisir un email au bon format. Ex: votre-email@email.com</p>";
                }

                // Verifier la correspondance des mot de passe
                if ($_POST["password"] != $_POST["password2"]) {
                    echo 'dans password =passord2';
                    return $message = "<p>Veuillez saisir correctement les mots de passe. </p>";
                }

                if (!preg_match($regexMDP, $_POST["password"])) { // TODO : mettre en rouge le message
                    return $message = ""; //= "<p style='color:red;'>Mot de passe non sécurisé. Il doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.</p>";
                }

                // Cleaner les données avec sanitize()
                $username = sanitize($_POST["username"]);
                $email = sanitize($_POST["email"]);
                $password = sanitize($_POST["password"]);
                // Check si l'utilisateur existe deja grace a l'appel de la fonctionis UserExist().
                if (isUserExist(connectBdd(), $email)) {
                    echo 'UserEXist()';

                    return $message = "<p>Un compte associé à cette email existe deja.";
                }

                //Hashage du mot de passe
                $password = password_hash($_POST["password"], PASSWORD_BCRYPT);

                //Appel de la fonction qui ajoute un Utilisateur.
                $message = addUser(connectBdd(), $email, $password, $username);


                return $message;
            } else {
                return $message = "<p>Veuillez remplir les champs obligatoires !</p>";
            }
        }
    }
}

// include "./view/headInscription.php";
// include "./view/header.php";
// include "./view/inscription.php";
// include "./view/footerInscription.php";
