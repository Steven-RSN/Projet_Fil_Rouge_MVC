<?php
//1) Récupérer l'url entrée par l'utilisateur
$url = parse_url($_SERVER['REQUEST_URI']);

//2) Analyser l'intérieur de l'url pour récupérer le path (la partie de l'url se trouvant après le nom de domaine)
$path = isset($url['path']) ? $url['path'] : $path = '/';

$basePath = '/PROJETFILSROUGE_MVC';
$route = str_replace($basePath, '', $path);

//3) Comparer le path obtenu avec les routes mises en place
switch ($route) {
    //Route de la page d'Accueil
    case '/': 
        include './controller/AccueilController.php';
        $controller = new AccueilController();
        $dataRecette = $controller->initRecette();
        include './view/headerAccueil.php';
        include './view/accueil.php';
        include './view/footerAccueil.php';
        break;

    //Route pour la page de compte
    case '/connexion':
        include './controller/ConnexionController.php';
        $controller = new ConnexionController();
        $message = $controller->connexion(); // récupère le message depuis la logique

        // Maintenant, inclure les vues avec $message disponible
        include './view/headerConnexion.php';
        include './view/connexion.php';
        include './view/footerConnexion.php';
        break;
    //Route pour la page d'inscription
    case '/inscription':
        include './controller/inscriptionController.php';
        $controller = new InscriptionController();
        $message = $controller->inscription(); // récupère le message depuis la logique

        include "./view/headInscription.php";
        include "./view/inscription.php";
        include "./view/footerInscription.php";

        break;

    case '/nouvelle_recette':
        include './utils/function.php';
        include "./model/recette_model.php";
        include "./controller/NouvelleRecetteController.php";
        include "./view/headerNewRecipe.php";
        include "./view/newRecipe.php";
        break;

    case '/utilisateur':
        include "./view/utilisateur.php";
        include "./view/headerUtilisateur.php";
        break;

    case '/contact':
        include "./view/contact.php";
        include "./view/headerContact.php";
        break;

    //PAGE Erreur 404
    default:
        echo "<h1>404 NOT FOUND</h1>";
        break;
}
