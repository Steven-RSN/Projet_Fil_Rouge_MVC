
<h1 class="h1">Inscrivez-vous</h1>
    <main class="mainInsc">
     
       
        <p>Pour ajouter vos recettes et les partager avec vos proches !</p>
        <hr class="petitHr">
    

        <form action="" method="POST" class="formInscription">
            <label for="email" class="labelInsc"><!--E-mail :--></label>
            <input type="email" id="email" name="email" class="inputInsc" placeholder="Email">

            <label for="identifiant" class="labelInsc"><!--Identifiant :--></label>
            <input type="text" id="identifiant" name="username" class="inputInsc" placeholder="Pseudo ou nom">

            <label for="motDePasse" class="labelInsc"><!--Mot de passe :--></label>
            <input type="password" name="password" name="password" id="motDePasse" placeholder="Mot de passe" class="inputInsc">

            <label for="motDePasseConfirm" class="labelInsc"><!--Confirmez votre mot de passe :--></label>
            <input type="password" name="password2" id="motDePasseConfirm" placeholder="Comfirmez mot de passe" class="inputInsc">
           
            <p id='messageMdp'class="light">* Votre mot de passe doit contenir au moins 8 caractères, inclure une majuscule, une minuscule, un chiffre et un caractère spécial.
            </p>

            <input type="submit" id="btnIns" name="submit" value="S'inscrire">
        </form>
        <?php echo $message; ?>
    </main>
 