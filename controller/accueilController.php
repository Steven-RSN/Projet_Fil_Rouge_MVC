<?php

session_start();
include './model/user_model.php';
include './utils/function.php';
include './model/recette_model.php';


class AccueilController
{
    public function initRecette()
    {
        $dataImages = '';

        $dataRecette = getRecette(connectBdd());
        error_log(print_r('ICUDBJIHFDCB IJSBDFJIBCIJDS', true));
        error_log(print_r($dataRecette, true));

        // foreach ($dataRecette as $data) {
        //     $dataname[] = $data['nom_recette'];
        //     error_log(print_r($dataname, true));
        // }
        // // error_log(print_r($dataRecette[0]['nom_recette'], true));
        // error_log(print_r("dataname", true));
        // error_log(print_r($dataname, true));

        return $dataRecette;
    }

    // public function initImage()
    // {
    //     $dataRecette = getRecette(connectBdd());
    //     foreach ($dataRecette as $data) {
    //         // error_log(print_r('$data', true));

    //         // error_log(print_r($data, true));

    //         $dataImage = getImagePathByIdRecette(connectBdd(), $data['Id_recette']);
    //         error_log(print_r($dataImage, true));
    //     }

    //     return $dataImage;
    // }
}
