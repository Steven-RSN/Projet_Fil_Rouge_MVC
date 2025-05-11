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

    <div class="contact-container">
        <h1>Nous contacter</h1>
        <p class="speech" >Pour toute demande ou information, nous serons heureux de vous répondre.</p>
        <div class="form-container">
            <form>
                <label for="nom">Nom</label>
                <input type="text" id="nom" placeholder="Votre nom" />

                <label for="prenom">Prénom</label>
                <input type="text" id="prenom" placeholder="Votre prenom" />

                <label for="email">E-mail</label>
                <input type="email" id="email" placeholder="Votre adresse e-mail" />

                <label for="objet">Objet</label>
                <input type="text" id="objet" placeholder="Sujet de votre message" />

                <label for="message">Message</label>
                <textarea id="message" placeholder="Votre message"></textarea>

                <button type="submit">➤ Envoyer</button>
            </form>
        </div>
    </div>

    <footer>
        <div class="fondGrisFooter"></div>
          
            
    </footer>
</body>
</html>