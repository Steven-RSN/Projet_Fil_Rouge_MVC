<body>
    <header id="header">
        <!-- <img id="iconMenuB" src="Image/icons/icons8-menu-192.png" alt=""> -->
        <label for="menuLabel" id="iconMenuBg">
            <img src="Image/icons/icons8-menu-192.png" id="iconMenuB" alt="Menu">
        </label>
        <input type="checkbox" id="menuLabel" class="menuLabel">

        <nav class="menuBurger">
            <ul class="ulMenuBurger">
                
            <li><a href="./">Accueil</a></li>
            <li><a href="utilisateur">Mes favoris</a></li>
            <li><a href="nouvelle_recette">Ajouter une recette</a></li>
            <li><a href="utilisateur">Mon compte</a></li>
            <li><a href="contact">Contact</a></li>
              
            </ul>
        </nav>
        <h1 class="marque">- Stivi's Kitchen - </h1>

        <!-- <img id="Stivisk" src="Image/icons/iconMarque.png" alt=""> -->
        <div class="divIconUtilisateur">
            <a href="connexion.html">
                <img id="iconUtilisateur" src="Image/icons/icons8-cuisinier-homme-100 (1).png" alt="">
            </a>
        </div>
    </header>

   <div class="fondGris_">
    <h1>Nouvelle recette</h1>
</div>

<main class="mainAjoutR">
    <form action="" class="formAjoutRecette">
        <label for=""><!--titre--></label>
        <input type="text" name="titre" placeholder="Titre de la recette" class="inputAjoutRecette">


        <div class="divRealisation">

            <h2>Réalisation :</h2>

            <select name="listeDifficultée" id="difficulteSelect" class="Difficulte">
                <?php
                foreach ($difficult as $row) {
                    echo '<option value="' . $row['id_difficulty'] . '">' . $row['difficulty'] . '</option>';
                }
                ?>
            </select>



            <select name="type" id="typeSelect" class="sucreSel">
                <?php
                foreach ($type as $row) {
                    echo '<option value="' . $row['Id_type_recette'] . '">' . $row['type_recette'] . '</option>';
                }
                ?>

            </select>

            <select name="regime" id="regimSelect" class="Vg">
                <?php
                foreach ($diet as $row) {
                    echo '<option value="' . $row['Id_regime'] . '">' . $row['regime'] . '</option>';
                }
                ?>

            </select>

            <select name="listeOrigine" id="regionSelect" class="origine">

                <option value="30">Pays</option>
                <?php
                foreach ($regions as $region) {
                    echo '<option value="' . $region['Id_region'] . '">' . $region['region'] . '</option>';
                }
                ?>
            </select>


            <div class="inputRea">
                <label for=" ">Temps total :</label>
                <input type="text" name='temps' class="inputRea" id="tempsTotal" placeholder="25min,1h30...">
            </div>
            <div class="inputNbPersonne">
                <label for="">Pour combien :</label>
                <input type="text" name="combien" class="inputNbPersonne" id="nbPersonne" placeholder="1,2,3,4...">
            </div>



        </div>


        <fieldset class="formAjoutIngredient">
            <legend>
                <h3>Ingrédient</h3>
            </legend>

            <p id='h3Ingredient'>(un à la fois)</p>

            <label for=""></label>
            <input type="text" id="ingredient" name="ingredient" placeholder='Pomme, aïl, sucre' class="inputAjoutIngr">

            <div>
                <div>
                    <label for=""></label>
                    <input type="text" placeholder='1,2,3...' name="ingredientQ" class="inputAjoutIngr" id="ingredientQ">
                </div>


                <label for=""><!--chosse unity--></label>
                <select name="unite" id="uniteSelect" default='Unité' class="inputAjoutIngr">

                    <?php

                    foreach ($unite as $row) {
                        echo '<option value="' . $row['nom_unite'] . '" id="' . $row['Id_unite'] . '">' . $row['nom_unite'] . '</option>';
                    }
                    ?>


                </select>
            </div>
            <button type="button" id="btnAjoutIngredient" class="btnAjout">Ajouter</button>
            <!-- <input type="submit" id="btnAjoutIngredient" name='submitIng' class="btnAjout" value="Ajouter"> -->
            <ul id="listeIngredients"></ul>




        </fieldset>

        <fieldset class="formTextArea">
            <legend>
                <h3 id='EtapeH3'>Les etapes</h3>
            </legend>

            <label for="" class="legende">(Une à la fois)</label>
            <textarea id="etapeDeRealisation" name='etapes' placeholder="Rentrez une etape à la fois"></textarea>

            <button name='submitEtapes' id="btnEtape" class="btnAjout">Ajouter</button>

        </fieldset>

        <h2>Ajouter des Images</h2>

        <form action="/upload" method="POST" enctype="multipart/form-data">

            <div class="dropzone">
                Déposez vos fichiers ici ou cliquez pour les sélectionner.
                <input type="file" id="inputImage" name="files[]" accept="image/*" multiple>
            </div>
            <div id="previewImages" style="display: flex; gap: 10px; margin-top: 10px;"></div>

        </form> <!-- - -A modifier ?- - -->


        <div class="status">
            <h3>Définissez le status de la recette :</h3>
            <ul>
                <li><input type="radio" class="radioStatu" name="status" value="1" checked>Privé</li>
                <li><input type="radio" class="radioStatu" name="status" value="2">Public </li>
                <li><input type="radio" class="radioStatu" name="status" value="3">Ami uniquement</li>
            </ul>

        </div>

        <!-- <input type="submit" value="Ajouter"> -->
        <button type="button" name="submitRecette" id="AjouterRecette">Ajouter un recette</button>

    </form>


</main>