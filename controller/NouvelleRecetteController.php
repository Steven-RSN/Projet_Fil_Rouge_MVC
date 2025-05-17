<?php

session_start();


$regions = '';
$regions = getRegions(connectBdd());

$type = '';
$type = getTypeR(connectBdd());

$diet = '';
$diet = getDiet(connectBdd());

$difficult = '';
$difficult = getDifficult(connectBdd());

$unite = '';
$unite = getUnite(connectBdd());

// On vérifie si la requête est bien de type POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

   //On récupère les données brutes envoyées en JSON et on décode les données JSON
   $rawData = file_get_contents("php://input");
   $data = json_decode($rawData, true);
   // On vérifie si les données ont été reçues
   // error_log(json_encode($data));

   if (isset($data)) {
      //On Boucle sur chaque ingrédient reçu pour pouvoir récuperer sa valeur
      //error_log(print_r($data, true));


      $nom = sanitize($data['nom']);
      $difficulty = sanitize($data['difficulty']);
      $region = sanitize($data['region']);

      $type = sanitize($data['type']);
      $regime = sanitize($data['regime']);

      $statut = sanitize($data['statut']);

      $tempsTotal = sanitize($data['temps']);

      $nbPersonne = sanitize($data['nbPersonne']);

      addRecette(connectBdd(), $nom, $regime, $type, $difficulty, $region, $statut, $tempsTotal, $nbPersonne);
      $idRecette = getRecetteIdByName(connectBdd(), $nom);

      $idRecette = $idRecette[0];
      $uploadDir = dirname(__DIR__) . '/image_upload/';
      if (!is_dir($uploadDir)) {
         mkdir($uploadDir, 0755, true);
      }

      if ($uploadDir == '') {
         error_log(print_r("Pas de dossier", true));
         die;
      }

      $imagePath = [];
      if (isset($data['images'])) { //&& is_array($data['images'])

         foreach ($data['images'] as $index => $base64img) {

            if (preg_match('/^data:image\/(\w+);base64,/', $base64img, $type)) {
               $imageType = strtolower($type[1]); // png, jpg, gif
               $base64Data = substr($base64img, strpos($base64img, ',') + 1);
               $base64Data = str_replace(' ', '+', $base64Data);
               $imageData = base64_decode($base64Data);
               // Création d’un nom unique
               $fileName = uniqid('img_') . '.' . $imageType;
               $filePath = $uploadDir . $fileName;

               // Sauvegarde du fichier
               file_put_contents($filePath, $imageData);

               // Stocker le chemin relatif (pour le front)
               $imagePath = "image_upload/" . $fileName;
               error_log(print_r($imagePath, true));


               addImage(connectBdd(), $imagePath, $idRecette);
            }
         }
      }

      foreach ($data['listeEtape'] as $index => $etape) {
         $etape = sanitize(($etape));
         addEtape(connectBdd(), $etape, $index, $idRecette);
      }


      foreach ($data['ingredients'] as $ingredient) {


         $ingredientName = sanitize($ingredient['name']);
         $quantity = sanitize($ingredient['quantity']);
         $unitName = sanitize($ingredient['unit']);
         // $idRecette = sanitize($ingredient['idRecette']);

         $quantity = (int) $quantity; // Conversion en entierclean

         // Ajoute l'ID de la recette s'il n'existe pas déjà
         //$idR = addRecetteId(connectBdd(), $idRecette);


         //On récupère ID de l'unité  dans la base de données via son nom
         $unitData = getUniteIdByName(connectBdd(), $unitName);
         $unitDataID = $unitData['Id_unite'];


         //error_log('nom unité : ' . $unitName . ' avec id:' . $unitDataID);

         if (empty($unitDataID)) {
            error_log('probleme dans unitData => vide !');
         }

         // Vérifier si l'ingrédient existe déjà dans la base de données
         $ingredientData =getIngredientById(connectBdd(), $ingredientName);
         $ingredientId = ingredientAdd(connectBdd(), $ingredientName, $unitDataID);

         // if (!$ingredientData) {
         //     error_log(print_r('LA', true));
         //     error_log(print_r($ingredientData, true));
         // }
         // } else {
         //     // Sinon on ajoute l'ingrédient
         //     $ingredientId = ingredientAdd(connectBdd(), $ingredientName, $unitDataID);
         // }

         if ($ingredientId) {
            // Associer l'ingrédient avec la recette dans la table lier
            $success = addIngredientToRecette(connectBdd(), $ingredientId, $idRecette, $quantity);
            if ($success) {
               error_log("Ingrédient associé à la recette avec succès : $ingredientName");
            } else {
               error_log("Erreur lors de l'association de l'ingrédient : $ingredientName");
            }
         }
      }
   } else {
      error_log("Données invalides, veuillez réessayer.");
   }
}
