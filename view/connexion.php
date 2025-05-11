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
<h1 class="h1">Connectez vous</h1>


<main class="mainCenterConnexion">

    <div>
        <p class="centrer">Pour ajouter vos recettes et les partager avec vos proches !</p>
        <hr class="petitHr">
    </div>

    <form action="/connexion/login" class="formConnection" method="POST">
        <label for="identifiantConnexion" class="labelConnec"><!--Identifiant:--></label>
        <input type="email" name="email" class="inputConnec" id="identifiantConnexion" placeholder="E-mail ou pseudo">

        <label for="motDePasseConnexion" class="labelConnec"><!--Mot de passe:--></label>
        <input type="password" name='password' class="inputConnec" id="motDePasseConnexion" placeholder="Mot de passe">
        <p class="pMotPasse">Mot de passe oublié ?</p>
        <?php echo $message; ?>

        <input type="submit" name="submit" value="Se connecter">
        <p>Pas encore de compte ? <span><a href="inscription" class="aIns">Inscrivez-vous ici</a></span> pour accéder à toutes les fonctionnalités.</p>

    </form>

    <div class="faceInstaGoogle">
        <button id="googleSingIn">Se connecter avec Google <img src="./Image/icons/ReseauxSo/icons8-logo-google-100 (1).png" alt="Logo Google"></button>
        <button id="facebookSingIN">Se connecter avec Facebook <img src="./Image/icons/ReseauxSo/icons8-facebook-nouveau-100.png" alt="Logo Facebook"></button>
        <button id="instagramSingIN">Se connecter avec Instagram <img src="./Image/icons/ReseauxSo/icons8-instagram-100.png" alt="Logo Instagram"></button>
    </div>

</main>