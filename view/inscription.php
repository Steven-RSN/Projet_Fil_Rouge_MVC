<header>
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

    <div class="divIconUtilisateur">
        <a href="connexion">
            <img id="iconUtilisateur" src="./Image/icons/icons8-cuisinier-homme-100 (1).png" alt="">
        </a>
    </div>
</header>
<h1 class="h1">Inscrivez-vous</h1>
    <main class="mainInsc">
     
       
        <p>Pour ajouter vos recettes et les partager avec vos proches !</p>
        <hr class="petitHr">
    
        <form action="/PROJETFILSROUGE_MVC/inscription" method="POST">
        <!-- <form action="./controller/inscriptionController.php" method="POST" id="formulaire" class="formInscription"> -->
            <label for="email" class="labelInsc"><!--E-mail :--></label>
            <input type="email" id="email" name="email" class="inputInsc" placeholder="Email">

            <label for="identifiant" class="labelInsc"><!--Identifiant :--></label>
            <input type="text" id="identifiant" name="username" class="inputInsc" placeholder="Pseudo ou nom">

            <label for="motDePasse" class="labelInsc"><!--Mot de passe :--></label>
            <input type="password" name="password" id="motDePasse" placeholder="Mot de passe" class="inputInsc">

            <label for="motDePasseConfirm" class="labelInsc"><!--Confirmez votre mot de passe :--></label>
            <input type="password" name="password2" id="motDePasseConfirm" placeholder="Comfirmez mot de passe" class="inputInsc">
           
            <!-- <p id='messageMdp'class="light">* Votre mot de passe doit contenir au moins 8 caractères, inclure une majuscule, une minuscule, un chiffre et un caractère spécial. -->
            <p id='messageMdp'class="light"> 
                <?php echo "* Votre mot de passe doit contenir au moins 8 caractères, inclure une majuscule, une minuscule, un chiffre et un caractère spécial."; ?>
            </p>

            <input type="submit" id="btnIns" name="submit" value="S'inscrire">
        </form>
        <?php echo $message; ?>
    </main>
 