<?php
    session_start();

    include '../model/user_model.php';
    include '../utils/function.php';

    $message = inscription($message);

    function inscription($message){
        //verifie si submit du formulaire de creation de compte existe
        if(isset($_POST["submit"])){
            $message="bonjour";
            // //verifie si champs du formulaire de creation de compte existe et ne sont pas vide
            // if(isset($_POST["username"]) && isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["password2"])&& !empty($_POST["username"])&& !empty($_POST["email"]) && !empty($_POST["password"]) && !empty($_POST["password2"])){
                
            //     // Verifier format de l'email
            //     if(!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
            //         return $message = "<p>Veuillez saisir un email au bon format. Ex: votre-email@email.com</p>";
            //     }

            //     // Verifier la correspondance des mot de passe
            //     if($_POST["password"] != $_POST["password2"]){
            //         return $message = "<p>Veuillez saisir correctement les mots de passe. </p>";
            //     }

            //     // Cleaner les données avec sanitize()
            //     $username = sanitize($_POST["username"]);
            //     $email = sanitize($_POST["email"]);

            //     // Check si l'utilisateur existe deja grace a l'appel de la fonctionis UserExist().
            //     if(isUserExist(connectBdd(), $email)){
            //         return $message = "<p>Un compte associé à cette email éxiste deja.";
            //     }

            //     //Hashage du mot de passe
            //     $password=password_hash($_POST["password"], PASSWORD_BCRYPT);

            //     //Appel de la fonction qui ajoute un Utilisateur.
            //     $message = addUser(connectBdd(),$email, $username, $password);
                
                
                return $message;


                
        //     }
        // }else{
        //     return $message = "<p>Veuillez remplir les champs obligatoires !</p>";
        }



    }
    
   

    include "../view/header.php";
    include "../view/inscription.php";
    include "../view/footer.php";
?>
