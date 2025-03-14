<?php

    function addUser($co, $email, $password, $usename){
        try{
            //  1) méthode prepare()
            $requete = $co->prepare("INSERT INTO users (name_user,email_user, mdp_user) VALUES (?,?,?,?)");
            //  2) Compléter les ? avec un binding des paramètres
            $requete->bindParam(1, $usename, PDO::PARAM_STR);
            $requete->bindParam(2, $email, PDO::PARAM_STR);
            $requete->bindParam(3, $password, PDO::PARAM_STR);
            //  3) exécuter la requête avec execute()
            $requete->execute();

            return "$usename Ajout de l'utilisateur à la table users réussi !";

        }catch(EXCEPTION $e){
            return "Erreur de connexion à la base de données : " . $e->getMessage();
        }
    }


    function isUserExist($co, $email){
        try {
           
            // 1) Requête SQL pour sélectionner l'utilisateurs
            $requete = $co->prepare("SELECT email_user FROM users WHERE ? = email_user LIMIT 1");
            // 2) compléter les ? avec un binding des paramètres
            $requete->bindParam(1, $email, PDO::PARAM_STR);
            //  3) Exécuter la requête avec execute()
            $requete->execute();

            $data = $requete->fetchAll();

            if(!empty($data)){
                return ;
            }

        } catch(PDOException $e) {
            echo "Erreur de connexion à la base de données : " . $e->getMessage();
        }
        return false;
    }

    function getUserByEmail($co, $email){
        try{
            // 1) Requête SQL pour sélectionner l'utilisateurs
            $requete= $co->prepare("SELECT id, name_user, email_user, mdp_user FROM users WHERE ? = email_user LIMIT 1");
            // 2) compléter les ? avec un binding des paramètre
            $requete->bindParam(1, $email, PDO::PARAM_STR);
            $requete->execute();
            // 3) Exécuter la requête avec execute()
            $data = $requete->fetchAll(PDO::FETCH_ASSOC);
            // 4) Vérifier si l'utilisateur existe
            if(empty($data)){
                return "Utilisateur non trouvé";
            }
            // 5) Retourne les données utilisateur
            return $data;

        }catch(EXCEPTION $e){
            echo "Erreur de connexion à la base de données : " . $e->getMessage();
        }
    }

?>