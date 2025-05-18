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
        <a href="connexion">
            <img id="iconUtilisateur" src="./Image/icons/icons8-cuisinier-homme-100 (1).png" alt="">
        </a>
    </div>
</header>

<img src="./Image/imgFond/todd-quackenbush-x5SRhkFajrA-unsplash (1) (1).jpg" id="imageFond" alt="">

<form class="formRechercheFiltrer" id="searchFrom" action="search.html" method="post">
    <div>
        <input id="barreRecherche" type="text" name="recherche" id="rechercheInput" placeholder="Rechercher...">

    </div>

</form>

<main class="margin gridTwo">

    <div class="filtrer">
        <h3>Filtrer les recettes</h3>
        <form action="" method="GET" class="formFiltre">
            <!-- Filtre par pays -->
            <label for="pays">
                <h4>Pays d'origine :</h4>
            </label>

            <select id="pays" name="pays">
                <option value="france">France</option>
                <option value="italie">Italie</option>
                <option value="mexique">Mexique</option>
                <option value="japon">Japon</option>
                <option value="inde">Inde</option>
                <option value="autre">Autre</option>
            </select>

            <!-- Filtre par ingrédients à inclure -->
            <label for="ingredients_inclus">
                <h4>Ingrédients à inclure :</h4>
            </label>
            <input type="text" id="ingredientInclus" class="tailleInput" placeholder="Entrez un ingrédient">
            <button type="button" id="btnIngreInclus"></button><br>
            <ul id="ingredients_inclus_liste"></ul>

            <!-- Filtre par ingrédients à exclure -->
            <label for="ingredients_exclus">
                <h4>Ingrédients à exclure :</h4>
            </label>
            <input type="text" id="ingredient_exclus" class="tailleInput" placeholder="Entrez un ingrédient à exclure">
            <button type="button" id="btnEx"></button><br>
            <ul id="ingredients_exclus_liste"></ul>

            <!-- Filtre par temps de préparation -->
            <label for="temps">
                <h4>Temps de préparation :</h4>
            </label>
            <select id="temps" name="temps" class="tailleInput">
                <option value="moins_30">Moins de 30 minutes</option>
                <option value="30_60">30 minutes à 1 heure</option>
                <option value="plus_60">Plus d'une heure</option>
            </select>

            <!-- Filtre par niveau de difficulté -->
            <label for="difficulte">
                <h4>Niveau de difficulté :</h4>
            </label>
            <div>
                <input type="radio" id="facile" name="difficulte" value="facile">
                <label for="facile">Facile</label><br>
                <input type="radio" id="moyen" name="difficulte" value="moyen">
                <label for="moyen">Moyen</label><br>
                <input type="radio" id="difficile" name="difficulte" value="difficile">
                <label for="difficile">Difficile</label>
            </div>
            <!-- Filtre par note des utilisateurs -->
            <label for="note">
                <h4>Note des utilisateurs :</h4>
            </label>
            <div>
                <input type="radio" id="note_1" name="note" value="1">
                <label for="note_1">1 étoile et plus</label><br>
                <input type="radio" id="note_2" name="note" value="2">
                <label for="note_2">2 étoiles et plus</label><br>
                <input type="radio" id="note_3" name="note" value="3">
                <label for="note_3">3 étoiles et plus</label><br>
                <input type="radio" id="note_4" name="note" value="4">
                <label for="note_4">4 étoiles et plus</label><br>
                <input type="radio" id="note_5" name="note" value="5">
                <label for="note_5">5 étoiles</label>
            </div>


            <!-- Autres filtres -->
            <label for="type_alimentation">
                <h4>Type d'alimentation :</h4>
            </label>
            <div>
                <input type="radio" id="carne" name="type_alimentation" value="carne">
                <label for="carne">Carné</label>

                <input type="radio" id="vegetarien" name="type_alimentation" value="vegetarien">
                <label for="vegetarien">Végétarien</label>

                <input type="radio" id="vegan" name="type_alimentation" value="vegan">
                <label for="vegan">Vegan</label>
            </div>

            <input type="submit" value="Filtrer les recettes" class="tailleInput btnSub">
        </form>
    </div>

    <div class="itemPopulaire">

        <h1 class="fondGris">Recette</h1>

        <?php foreach ($dataRecette as $recette): ?>
            <div class="vignette_recette">
                <div class="img_recette" style="background-image: url('<?= htmlspecialchars($recette['url_image']) ?>');">
                    <h6 class="titreRecette"><?= htmlspecialchars($recette['nom_recette']) ?></h6>
                    <div class="temp">
                        <div class="img-utilisateur"></div>
                        <p class="nomUtilisateur">Unknown <? ?></p>
                    </div>
                </div>
                <div class="etoils">

                </div>
            </div>
        <?php endforeach; ?>

    </div>

    </div>
    <button id="voirPlus">Voir plus</button>

</main>