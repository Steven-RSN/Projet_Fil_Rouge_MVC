<?php

function getRegions($co)
{
    try {

        $requete = $co->prepare("SELECT Id_region, region FROM region");
        $requete->execute();
        $data = $requete->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    } catch (EXCEPTION $e) {
        echo $e->getMessage();
    }
}

function getTypeR($co)
{
    try {

        $requete = $co->prepare("SELECT Id_type_recette, type_recette FROM type_recette");
        $requete->execute();
        $data = $requete->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}


function getDiet($co)
{
    try {

        $requete = $co->prepare("SELECT Id_regime, regime FROM regime");
        $requete->execute();
        $data = $requete->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    } catch (EXCEPTION $e) {
        echo $e->getMessage();
    }
}

function getDifficult($co)
{
    try {

        $requete = $co->prepare("SELECT id_difficulty, difficulty FROM Difficulty");
        $requete->execute();
        $data = $requete->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    } catch (EXCEPTION $e) {
        echo $e->getMessage();
    }
}

function getNameRecette($co)
{
    try {
        $requete = $co->prepare("SELECT nom_recette FROM recette");
        $requete->execute();
        $data = $requete->fetchAll(PDO::FETCH_COLUMN);
        return $data;
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

function getRecetteIdByName($co, $nom_recette)
{
    try {

        $requete = $co->prepare("SELECT Id_recette FROM recette WHERE nom_recette = ?");
        $requete->bindParam(1, $nom_recette, PDO::PARAM_STR);
        $requete->execute();
        $data = $requete->fetch();
        return $data;
    } catch (EXCEPTION $e) {
        echo $e->getMessage();
    }
}

//---Statut recette ----------------------------

function getIdStatut($co)
{
    try {
        $request = $co->prepare("SELECT Id_statut from statut WHERE Id_statut = ?");
        $request->execute();
        $data = $request->fetchAll(PDO::FETCH_ASSOC);
        return ($data);
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

function getStatut($co)
{
    try {
        $request = $co->prepare("SELECT Id_statut from statut WHERE statut_recette = ?");
        $request->execute();
        $data = $request->fetchAll(PDO::FETCH_ASSOC);
        return ($data);
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

//---Ingredient recette ----------------------------

//Unité :

function getUnite($co)
{
    try {

        $requete = $co->prepare("SELECT Id_unite, nom_unite FROM unite");
        $requete->execute();
        $data = $requete->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    } catch (EXCEPTION $e) {
        echo $e->getMessage();
    }
}

function getUniteIdByName($co, $unitName)
{
    try {

        $requete = $co->prepare("SELECT Id_unite FROM unite WHERE nom_unite = ?");

        $requete->bindParam(1, $unitName, PDO::PARAM_STR);

        $requete->execute();

        $data = $requete->fetch();
        return $data;
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

function getUniteById($co, $unit)
{
    try {
        $requete = $co->prepare("SELECT Id_unite FROM unite WHERE Id_unite = ?");

        $requete->bindParam(1, $unit, PDO::PARAM_INT);

        $requete->execute();

        $data = $requete->fetch(PDO::FETCH_ASSOC);
        return $data;
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}



//ingredient:
function getIngredientId($co, $ingredient)
{
    try {
        $requete = $co->prepare("SELECT Id_ingredient FROM ingredients WHERE nom_ingredient = ?");
        $requete->bindParam(1, $ingredient, PDO::PARAM_STR);
        $requete->execute();

        $data = $requete->fetch(PDO::FETCH_ASSOC);

        if ($data) {
            return (int) $data['Id_ingredient']; // Retourne l'ID existant
        }
        return null; // Retourne null si l'ingrédient n'existe pas
    } catch (Exception $e) {
        echo $e->getMessage();
        return null;
    }
}

function getIngredientById($co, $ingredient)
{
    try {
        $requete = $co->prepare("SELECT id_ingredient FROM ingredients WHERE nom_ingredient = ?");
        $requete->bindParam(1, $ingredient, PDO::PARAM_STR);
        $requete->execute();
        $data = $requete->fetch(PDO::FETCH_ASSOC);
        return $data;
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

function ingredientByID($co, $ingredient) //getIngredientNameByID !
{

    try {
        $requete = $co->prepare("SELECT Id_ingredient FROM ingredients WHERE nom_ingredient = ?");
        $requete->bindParam(1, $ingredient, PDO::PARAM_STR);
        $requete->execute();

        $data = $requete->fetch(PDO::FETCH_ASSOC);

        return $data;
    } catch (EXCEPTION $e) {
        echo $e->getMessage();
    }
}

function addIduniteInIngredient($co, $ingredientName, $unitDataID)
{
    try {
        $requete = $co->prepare("INSERT INTO ingredients (nom_ingredient, Id_unite) VALUES (?, ?)");
        $requete->bindParam(1, $ingredientName, PDO::PARAM_STR);
        $requete->bindParam(2, $unitDataID, PDO::PARAM_INT);

        $requete->execute();
        return $co->lastInsertId(); // Retourne l'ID du nouvel ingrédient ajouté

    } catch (Exception $e) {
        error_log("Erreur lors de l'ajout de l'ingrédient : " . $e->getMessage());
        return false;
    }
}


function ingredientAdd($co, $ingredient, $id_unite)
{
    try {
        $requete = $co->prepare("INSERT INTO ingredients (nom_ingredient, Id_unite) VALUES (?, ?)");
        $requete->bindParam(1, $ingredient, PDO::PARAM_STR);
        $requete->bindParam(2, $id_unite, PDO::PARAM_INT);
        $requete->execute();

        return $co->lastInsertId(); // Retourner l'ID de l'ingrédient inséré !
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

function addIngredientToRecette($co, $ingredientId, $idRecette, $quantity)
{
    try {

        $requete = $co->prepare("INSERT INTO lier (Id_ingredient, Id_recette, quantite) VALUES (?, ?, ?)");
        $requete->bindParam(1, $ingredientId, PDO::PARAM_INT);
        $requete->bindParam(2, $idRecette, PDO::PARAM_INT);
        $requete->bindParam(3, $quantity, PDO::PARAM_STR);
        $success = $requete->execute();

        return $success;
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}


//---Images recette ----------------------------

function getImagePathByIdRecette($co, $id_recette)
{
    try {
        $request = $co->prepare("SELECT url_image FROM images WHERE id_recette=? ");
        $request->bindParam(1, $id_recette, PDO::PARAM_INT);
        $request->execute();
        $data = $request->fetchAll(PDO::FETCH_COLUMN);

        return $data;
    } catch (Exception $e) {
        error_log("Erreur lors de l'insertion : " . $e->getMessage());
    }
}

function getImagePath($co)
{
    try {
        $request = $co->prepare("SELECT url_image FROM images ");
        $request->execute();
        $data = $request->fetchAll(PDO::FETCH_COLUMN);
        return $data;
    } catch (Exception $e) {
        error_log("Erreur lors de l'insertion : " . $e->getMessage());
    }
}

function addImage($co, $path, $id_recette)
{
    try {
        $request = $co->prepare("INSERT INTO images (url_image,Id_recette) VALUES (?,?)");
        $request->bindParam(1, $path, PDO::PARAM_STR);
        $request->bindParam(2, $id_recette, PDO::PARAM_INT);
        $request->execute();
    } catch (Exception $e) {
        error_log("Erreur lors de l'insertion : " . $e->getMessage());
    }
}



//---Etape recette ----------------------------

function getIdEtape($co)
{
    try {
        $request = $co->prepare("SELECT Id_etape FROM etape WHERE Id_etape = ?");
        $request->execute();
        $data = $request->fetchAll(PDO::FETCH_ASSOC);
        return ($data);
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

function getEtape($co)
{
    try {
        $request = $co->prepare("SELECT Id_etape FROM etape WHERE etape_recette = ?");
        $request->execute();
        $data = $request->fetchAll(PDO::FETCH_ASSOC);
        return ($data);
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

function getEtapeNumber($co)
{
    try {
        $request = $co->prepare("SELECT Id_etape FROM etape WHERE numero_etape = ?");
        $request->execute();
        $data = $request->fetchAll(PDO::FETCH_ASSOC);
        return ($data);
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

function addEtape($co, $etape, $index, $idRecette)
{
    try {
        $request = $co->prepare('INSERT INTO etape (etape_recette,numero_etape,Id_recette) VALUES (?,?,?)');
        $request->bindParam(1, $etape, PDO::PARAM_STR);
        $request->bindParam(2, $index, PDO::PARAM_INT);
        $request->bindParam(3, $idRecette, PDO::PARAM_INT);
        $request->execute();
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}


//---Recette-----------------------------------------------

function getRecette($co)
{
    try {
        $request = $co->prepare("SELECT 
        r.Id_recette,
         r.nom_recette,
          reg.regime,
           tr.type_recette,
            d.difficulty,
             region.region,
             s.statut_recette,
             r.duree,
             r.nombre_personnes,
             i.url_image
              FROM recette r
              JOIN regime reg ON r.Id_regime = reg.Id_regime
              JOIN type_recette tr ON r.Id_type_recette = tr.Id_type_recette
              JOIN difficulty d ON r.Id_difficulty = d.Id_difficulty
              JOIN region ON r.Id_region = region.Id_region
              JOIN statut s ON r.Id_statut = s.Id_statut
              LEFT JOIN images i ON i.Id_recette =  r.Id_recette   
              ");
              
        $request->execute();
        $data = $request->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    } catch (Exception $e) {
         die("Erreur SQL : " . $e->getMessage());
        //echo $e->getMessage();
    }
}

function addRecette($co, $nom_recette, $Id_regime, $id_type, $id_difficulty, $id_region, $id_statut, $temp, $nbPersone)
{
    try {
        $request = $co->prepare("INSERT INTO recette (nom_recette,Id_regime,Id_type_recette,Id_difficulty,Id_region,Id_statut,duree,nombre_personnes) VALUES (?,?,?,?,?,?,?,?)");
        $request->bindParam(1, $nom_recette, PDO::PARAM_STR);
        $request->bindParam(2, $Id_regime, PDO::PARAM_INT);
        $request->bindParam(3, $id_type, PDO::PARAM_INT);
        $request->bindParam(4, $id_difficulty, PDO::PARAM_INT);
        $request->bindParam(5, $id_region, PDO::PARAM_INT);
        $request->bindParam(6, $id_statut, PDO::PARAM_INT);
        $request->bindParam(7, $temp, PDO::PARAM_STR);
        $request->bindParam(8, $nbPersone, PDO::PARAM_INT);
        $request->execute();
    } catch (EXCEPTION $e) {
        echo $e->getMessage();
    }
}



// function quantiteExist($co,$ingredient){
//     try{
//         $requete = $co->prepare("SELECT id_ingredient FROM Ingredient WHERE name_ingredient = ?");
//         $requete->bindParam(1,$ingredient, PDO::PARAM_STR);
//         $requete->execute();

//         $data = $requete->fetch(PDO::FETCH_ASSOC);

//         return $data;

//     }catch(EXCEPTION $e){
//         echo $e->getMessage();
//     }
// }

// function addquanite($co,$ingredient){
//     try{
//          $requete = $co->prepare("INSERT INTO Ingredient (name_ingredient) VALUES (?)");

//          $requete->bindParam(1,$ingredient, PDO::PARAM_STR);

//          $requete->execute();


//      }catch(EXCEPTION $e){
//          echo $e->getMessage();
//      }
//  }



// function addIngredients($co, $ingredients, $quantite, $unite){
//     try{
//         $requete=$co->prepare
//     }catch(EXCEPTION $e){

//     }
// }


// function getRecipeById($pdo, $id_recipe) {
//     $sql = "SELECT r.*, u.username, s.statut_recipe
//             FROM Recipe r
//             JOIN User_ u ON r.id_user = u.id_user
//             JOIN Statut s ON r.id_statut = s.id_statut
//             WHERE r.id_recipe = ?";
//     $stmt = $pdo->prepare($sql);
//     $stmt->execute([$id_recipe]);
//     return $stmt->fetch(PDO::FETCH_ASSOC);
// }


// function getRecipeSummary($pdo, $id_recipe) {
//     $sql = "SELECT r.name AS titre, u.username AS auteur, i.url AS image
//             FROM Recipe r
//             JOIN User_ u ON r.id_user = u.id_user
//             LEFT JOIN Image i ON r.id_recipe = i.id_recipe
//             WHERE r.id_recipe = ?
//             LIMIT 1";
//     $stmt = $pdo->prepare($sql);
//     $stmt->execute([$id_recipe]);
//     return $stmt->fetch(PDO::FETCH_ASSOC);
// }


// function getRecipesByStatus($pdo, $statut) {
//     $sql = "SELECT r.id_recipe, r.name AS titre, u.username AS auteur, i.url AS image
//             FROM Recipe r
//             JOIN User_ u ON r.id_user = u.id_user
//             LEFT JOIN Image i ON r.id_recipe = i.id_recipe
//             JOIN Statut s ON r.id_statut = s.id_statut
//             WHERE s.statut_recipe = ?";
//     $stmt = $pdo->prepare($sql);
//     $stmt->execute([$statut]);
//     return $stmt->fetchAll(PDO::FETCH_ASSOC);
// }

// function addRecipe($pdo, $name, $duration, $number_of_persons, $id_statut, $id_user) {
//     $sql = "INSERT INTO Recipe (name, duration, number_of_persons, id_statut, id_user)
//             VALUES (?, ?, ?, ?, ?)";
//     $stmt = $pdo->prepare($sql);
//     return $stmt->execute([$name, $duration, $number_of_persons, $id_statut, $id_user]);
// }


// function updateRecipe($pdo, $id_recipe, $name, $duration, $number_of_persons, $id_statut) {
//     $sql = "UPDATE Recipe SET name = ?, duration = ?, number_of_persons = ?, id_statut = ? WHERE id_recipe = ?";
//     $stmt = $pdo->prepare($sql);
//     return $stmt->execute([$name, $duration, $number_of_persons, $id_statut, $id_recipe]);
// }


// function deleteRecipe($pdo, $id_recipe) {
//     $sql = "DELETE FROM Recipe WHERE id_recipe = ?";
//     $stmt = $pdo->prepare($sql);
//     return $stmt->execute([$id_recipe]);
// }


// function addIngredient($pdo, $ingredients, $id_recipe) {
//     $sql = "INSERT INTO Ingredient (name_ingredient, quantity, id_unit, id_recipe) VALUES (?, ?, ?, ?)";
//     $stmt = $pdo->prepare($sql);
//     return $stmt->execute([$ingredients, 1, 1, $id_recipe]); // Exemple de valeurs par défaut pour quantity et id_unit
// }


// function addStep($pdo, $steps, $id_recipe) {
//     $sql = "INSERT INTO Step (step, step_number, id_recipe) VALUES (?, ?, ?)";
//     $stmt = $pdo->prepare($sql);
//     return $stmt->execute([$steps, 1, $id_recipe]); // Exemple de valeur par défaut pour step_number
// }


// function addNote($pdo, $note, $id_recipe) {
//     $sql = "INSERT INTO Note (note, id_recipe) VALUES (?, ?)";
//     $stmt = $pdo->prepare($sql);
//     return $stmt->execute([$note, $id_recipe]);
// }




// function addAddIngredient($pdo, $id_ingredient, $id_recipe, $quantity) {
//     $sql = "INSERT INTO Add_ingredient (id_ingredient, id_recipe, quantity) VALUES (?, ?, ?)";
//     $stmt = $pdo->prepare($sql);
//     return $stmt->execute([$id_ingredient, $id_recipe, $quantity]);
// }


// function addBookmark($pdo, $id_recipe, $id_user) {
//     $sql = "INSERT INTO Bookmark (id_recipe, id_user) VALUES (?, ?)";
//     $stmt = $pdo->prepare($sql);
//     return $stmt->execute([$id_recipe, $id_user]);
// }
