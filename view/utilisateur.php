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

    <div class="carteProfile">
        <div class="gris">
            <h2>Alain Ducasse</h2>
        </div>
        <div class="contenuUtilisateur">
            <div class="imgUtilisateur"></div>
            <div class="infoUtilisateur">
                <p>Recettes ajoutées : 15</p>
                <p>Meilleure recette : Maki</p>
                <button>Suivre</button>
            </div>
        </div>
        <div class="basCarte"></div> <!-- Ajout d'une section pour la bande colorée -->
    </div>


    <main>
        <div class="center">
            <form class="formRechercheFiltrerUtilisateur" id="searchFrom" action="search.html" method="post">
                <div>
                    <input id="barreRechercheUtilisateur" type="text" name="recherche" placeholder="Rechercher...">
                </div>
            </form>

            <fieldset class="filtrerUtilisateur">
                <label for="checkUtilisateur">Filtrer</label>
                <input type="checkbox" name="checkUtilisateur" id="checkUtilisateur">
            </fieldset>

        </div>

        <div class="connexionMain">
            <div class="fondGrisRecetteU">
                <h1>Recettes</h1>
                <hr class="hrUtilisateur">

            </div>
        </div>

        <div class="itemPopulaire">

            <!-- <div class="vigniette_recette" >
                <div class="img_recette">
                    <h6 class="titreRecette">Burger</h6>
                    <div class="temp">
                        <div class="img-utilisateur"></div>
                        <p class="nomUtilisateur">Alain Ducasse</p>
                    </div>
                </div>
                <div class="etoils">
    
                </div>
            </div> -->
        </div>
    </main>

    <!-- <script src="testvignetteAc.js"></script> -->
    <script src="utilisateur.js" type="module"> </script>