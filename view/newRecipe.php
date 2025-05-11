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
            <input type="text" placeholder="Titre de la recette" class="inputAjoutRecette">

            <div class="divRealisation">
         
                <h2>Réalisation :</h2>

            
            
                <select name="listeDifficultée" id="uniteSelect" class="Difficulte">

                    <option value="difficulte">Dificulté</option>
                    <option value="expert">Expert</option>
                    <option value="difficile">Difficile</option>
                    <option value="moyen">Moyen</option>
                    <option value="facile">Facile</option>
                </select>
            

           


                <select name="listeDifficultée" id="uniteSelect" class="sucreSel">

                    <option value="sucre">Sucré</option>
                    <option value="sel">Salé</option>
                   
                </select>
                <select name="listeDifficultée" id="uniteSelect" class="Vg">

                    <option value="sel">Carnée</option>
                    <option value="sel">Véganne</option>
                    <option value="sel">Végétarienne</option>
                    <option value="sel">Pesco-végétarienne</option>
                   
                </select>

                <select name="listeOrigine" id="uniteSelect" class="origine">
                    <option value="">Pays</option>
                    <option value="">Autre</option>

                    <optgroup label="Europe">
                        <option value="italie">Italie</option>
                        <option value="france">France</option>
                        <option value="espagne">Espagne</option>
                        <option value="allemagne">Allemagne</option>
                        <option value="grece">Grèce</option>
                    </optgroup>
                
                    <optgroup label="Amérique">
                        <option value="etats_unis">États-Unis</option>
                        <option value="canada">Canada</option>
                        <option value="bresil">Brésil</option>
                        <option value="argentine">Argentine</option>
                        <option value="mexique">Mexique</option>
                    </optgroup>
                
                    <optgroup label="Asie">
                        <option value="chine">Chine</option>
                        <option value="japon">Japon</option>
                        <option value="indonesie">Indonésie</option>
                        <option value="vietnam">Vietnam</option>
                        <option value="inde">Inde</option>
                    </optgroup>
                
                    <!-- Afrique, avec sous-catégories  -->
                    <optgroup label="Afrique">
                            <option value="ouest">Afrique de l'Ouest</option>
                            <option value="est">Afrique de l'Est</option>
                            <option value="centrale">Afrique Centrale</option>
                            <option value="sud">Afrique du Sud</option>
                    </optgroup>
                
                    <!-- Pays arabes -->
                    <optgroup label="Moyen-Orient">
                        <option value="algerie">Algérie</option>
                        <option value="tunisie">Tunisie</option>
                        <option value="maroc">Maroc</option>
                        <option value="liban">Liban</option>
                    </optgroup>
                </select>
              
      
                <div class="inputRea" >
                    <label for=" ">Temps total :</label>
                    <input type="text"class="inputRea" placeholder="25min,1h30...">
                </div>
                <div class="inputNbPersonne">
                    <label for="" >Pour combien :</label>
                    <input type="text" class="inputNbPersonne"placeholder="1,2,3,4...">
                </div>

            

            </div>


            <fieldset class="formAjoutIngredient" >
                <legend><h3>Ingrédient</h3></legend>
            
                <p>(un à la fois)</p>

                <label for=""></label>
                <input type="text" id="ingredient" placeholder='Pomme, aïl, sucre' class="inputAjoutIngr">

                <div>
                    <div>
                        <label for=""></label>
                        <input type="text"placeholder='1,2,3...' class="inputAjoutIngr" id="ingredientQ">
                    </div>
                    <label for=""><!--chosse unity--></label>
                    <select name="unite" id="uniteSelect" class="inputAjoutIngr">

                        <option value="">Unité</option>
                        <option value="gramme">Gramme</option>
                        <option value="kilos">Kilos</option>
                        <option value="centilires">Centilitres</option>
                        <option value="litres">Litres</option>
                        <option value="cac">Cuillere à C</option>
                        <option value="cas">Cuillere à S</option>

                    </select>
                </div>
                <input type="submit" class="btnAjout" value="Ajouter">
                
                
    
                        


            </fieldset>
            <fieldset class="formTextArea" >
                <legend><h3>Les etapes</h3></legend>
            
                <label for="" class="legende">(Une à la fois)</label>
                <textarea name="" id="etapeDeRealisation" placeholder="Rentrez une etape à la fois"></textarea>
           
                <input type="submit" class="btnAjout" value="Ajouter">
                
            </fieldset>
            
            <h2>Ajouter des Images</h2>

            <form action="/upload" method="POST" enctype="multipart/form-data">
                
                <div class="dropzone">
                    Déposez vos fichiers ici ou cliquez pour les sélectionner.
                    <input type="file" name="files[]" accept="image/*" multiple>
                </div>              


            </form> <!-- - -A modifier ?- - -->


            <div class="status">
                <h3>Définissez le status de la recette :</h3>
                <ul>
                    <li><input type="radio" name="status">Privé</li>
                    <li><input type="radio" name="status">Public </li>
                    <li><input type="radio" name="status">Amie uniquement</li>
                </ul>

            </div>
            
            <input type="submit" value="Ajouter" id="AjouterRecette">

        </form>
    
    </main>

    
    <footer>
        <div class="fondGrisFooter"></div>
        
            
    </footer>
</body>
