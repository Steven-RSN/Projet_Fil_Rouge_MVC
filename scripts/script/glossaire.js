let recueil =[
    {

        titre:'boeuf bourguignon',
        img:'../Image/img_recette/boeuf_bourguignon.png',
        ingredients : [
            { nom: "poivre", quantité: null, unité: null },
            { nom: "sel", quantité: null, unité: null },
            { nom: "farine", quantité: 2, unité: "cuillères à soupe" },
            { nom: "oignons", quantité: 2, unité: null },
            { nom: "vin rouge", quantité: 0.6, unité: "l" },
            { nom: "beurre ou huile", quantité: 50, unité: "g" },
            { nom: "lardons", quantité: 100, unité: "g" },
            { nom: "boeuf pour bourguignon", quantité: 800, unité: "g" },
            { nom: "ail", quantité: 1, unité: "gousse" },
            { nom: "bouquet garni", quantité: 1, unité: null },
            { nom: "champignons de Paris", quantité: 250, unité: "g" } ,
        ],
        nbPersonne:6,
        duree:'1h10',
        corps:[
            `Hacher les oignons. Peler l'ail.`,
            `Dans une cocotte minute, faire roussir la viande et les lardons dans l’huile ou le beurre.`,
            `Ajouter les oignons, les champignons égouttés et saupoudrer de fariner. Mélanger et laisser dorer un instant.`,
            `Mouiller avec le vin rouge qui doit recouvrir la viande.`,
            `Saler et poivrer.`,
            `Ajouter l’ail et le bouquet garni.`,
            `Fermer la cocotte minute.`,
            `Laisser cuire doucement 60 min à partir de la mise en rotation de la soupape.`,
        ],
        statut:'public',
        note:'',
        auteur:'Helene Darroze'
        //com:`${bddcom}`
    },
    {
        titre:'boulette de viande',
        img:'../Image/img_recette/boulette_de_viande.png',
        ingredients: [
            { nom: "poivre", quantité: null, unité: null },
            { nom: "sel", quantité: null, unité: null },
            { nom: "muscade râpée", quantité: 1, unité: "cuillère à café" },
            { nom: "oignons", quantité: 4, unité: null },
            { nom: "viande hachée", quantité: 700, unité: "g" },
            { nom: "tomates pelées", quantité: 12, unité: null },
            { nom: "huile d'olive", quantité: 1, unité: "filet" },
            { nom: "basilic ciselé", quantité: 5, unité: "cuillères à soupe" }
        ],
        nbPersonne:4,
        duree:'45 min',
        corps:[
            `Dans un saladier, mélanger à la main, la viande, le basilique, 1 cuillère à café de fleur de sel (ou de sel) et une grosse pincée de poivre.`,
            `Former des petites boulettes, les aplatir légèrement et réserver.`,
            `Dans une poêle à bords hauts, ou une cocotte, rissoler dans l'huile d'olive ,les oignons finement hachés et ajouter les morceaux de tomates.`,
            `Cuire tout d'abord à feu vif, en remuant souvent.`,
            `Puis laisser mijoter, jusqu'à réduction de moitié, du volume initial.`,
            `Dans la sauce tomate épaisse, ainsi obtenue, déposer les boulettes et les cuire 5 minutes, sur chaque face.`,
            `Si nécessaire, diviser en deux fournées`,
            `Servir accompagné de riz blanc, pâtes natures, ou légumes verts.`,
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`
    },
    {

        titre:'brochette de boeuf',
        img:'../Image/img_recette/brochette_boeuf.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'burger',
        img:'../Image/img_recette/burger.png',
        ingredients: [
            { nom: "sel", quantité: 1, unité: "pincée" },
            { nom: "tomate", quantité: 3, unité: "tranches" },
            { nom: "cornichon", quantité: 1, unité: null },
            { nom: "oignon", quantité: 1, unité: null },
            { nom: "moutarde", quantité: 1, unité: "cuillère à soupe" },
            { nom: "chedar", quantité: 1, unité: "tranches" },
            { nom: "steaks", quantité: 2, unité: null },
            { nom: "salade", quantité: 4, unité: "feuilles" },
            { nom: "bacon", quantité: 1, unité: "tranche" },
            { nom: "bun", quantité: 1, unité: null }

        ],
        nbPersonne:1,
        duree:'25 min',
        corps:[
            `Marquer le steak en cuisson et assaisonner de sel et de poivre.`,
            `Réchauffer les buns à la poêle ou au four à 180°C (thermostat 6) pendant 2 minutes.Si nécessaire, couper les buns en deux avant de les réchauffer.`,
            `Cuire la tranche de bacon dans une poêle chaude pendant 2-3 minutes de chaque côté, jusqu'à ce qu'elle soit bien croustillante. Retirer et réserver.`,
            `Déposer vos tranches de chedar sur chaque steak après les avoir retournés. Couvrir pendant 2 minutes pour faire fondre le fromage.`,
            `Etaler une cuillère à soupe de moutarde sur chaque face des pains`,
            `Sur la partie inférieure des buns déposez 2 tranches de tomates ,des oignon coupé en fine rondelles, le cornichon et la salade bien lavée et égouttée..`,
            ` Déposez la viande avec le fromage dans votre bun.`,
            `Ajoutez la tranche de bacon croustillante sur le dessus de la viande et refermez le burger.`,
            `Fermer le bun et servir... avec des frites ! Et bonne appétis biensur !`,
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'chakchouka',
        img:'../Image/img_recette/chakchouka.png',
        ingredients: [
            { nom: "œufs", quantité: 2, unité: null },
            { nom: "oignons", quantité: 2, unité: null },
            { nom: "poivrons", quantité: 2, unité: null },
            { nom: "tomates", quantité: 2, unité: null },
            { nom: "petit bouquet de coriandre", quantité: 1, unité: null },
            { nom: "huile d'olive", quantité: null, unité: null },  
            { nom: "épinards", quantité: 100, unité: "g" },
            { nom: "piment doux ou fort", quantité: 1, unité: null },  
            { nom: "sel", quantité: null, unité: null }, 
            { nom: "poivre", quantité: null, unité: null }  
        ],
        nbPersonne:2,
        duree:'35 min',
        corps:[
            `Chauffer un peu d'huile d'olive dans une poêle à feu moyen.`,
            `Ajouter les oignons finement hachés et les poivrons coupés en dés. Faire revenir pendant 5-7 minutes, jusqu'à ce qu'ils soient tendres.`,
            `Couper les tomates en dés et les ajouter dans la poêle. Laisser cuire pendant 3-4 minutes jusqu'à ce que les tomates soient légèrement fondantes.`,
            `Ajouter les épinards dans la poêle et remuer jusqu'à ce qu'ils soient fanés.`,
            `Casser les œufs dans la poêle, en veillant à bien les répartir sur les légumes.`,
            `Saupoudrer de sel, de poivre et ajouter le piment doux ou fort selon vos préférences.`,
            `Laisser cuire les œufs selon la cuisson désirée .`,
            `Hacher finement le petit bouquet de coriandre et en saupoudrer les œufs et légumes une fois cuits.`,
            `Servir chaud, accompagné d'un peu de pain ou d'une salade bien fraîche.`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'chantilly au mascarpone',
        img:'../Image/img_recette/chantilly.png',
        ingredients: [
            { nom: "vanille", quantité: null, unité: null },
            { nom: "sucre glace", quantité: 35, unité: "g" },
            { nom: "mascarpone", quantité: 150, unité: "g" },
            { nom: "crème liquide", quantité: 230, unité: "g" }
        ],
        nbPersonne:5,
        duree:'10 min',
        corps:[
            `Mettre le saladier et le fouet au congélateur.`,
            `Mélanger dans le saladier la crème 30%, la mascarpone, le sucre et la vanille.`,
            `Fouetter jusqu'à l'obtention d'une chantilly.`,
            `Débarrasser rapidement cette chantilly dans un bac froid et la ranger au froid.`,
            `Vous pouvez utiliser cette chantilly comme la vraie.`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'tarte aux fruits rouge',
        img:'../Image/img_recette/charlotte_fruits_rouge.png',
        ingredients: [
            { nom: "myrtille", quantité: 250, unité: "g" },
            { nom: "fraises", quantité: 250, unité: "g" },
            { nom: "sucre", quantité: 2, unité: "cuillères à soupe" },
            { nom: "crème fraîche entière", quantité: 40, unité: "cl" },
            { nom: "pâte sablée pure beurre", quantité: 1, unité: null },
            { nom: "sucre vanillé", quantité: 22.5, unité: "g" },
            { nom: "framboises", quantité: 250, unité: "g" },
            { nom: "mûres", quantité: 250, unité: "g" }
        ],
        nbPersonne:8,
        duree:'1h00',
        corps:[
            `Préchauffer le four à 180°C (thermostat 6).`,
            `Étaler la pâte sablée pure beurre dans un moule à tarte et la piquer légèrement avec une fourchette.`,
            `Enfourner la pâte sablée pendant 10-12 minutes ou jusqu'à ce qu'elle soit dorée et cuite à cœur. Laisser refroidir.`,
            `Laver soigneusement tous les fruits rouges : myrtilles, fraises, framboises et mûres. Couper les fraises en tranches si nécessaire.`,
            `Dans un bol, mélanger les fruits rouges avec le sucre ainsi que le sucre vanillé.`,
            `Dans une petite casserole, chauffer la crème fraîche entière à feu doux sans la faire bouillir.`,
            `Verser la crème chaude sur les fruits rouges sucrés et mélanger doucement pour obtenir une garniture bien homogène.`,
            `Verser délicatement le mélange sur la pâte sablée refroidie et étaler uniformément.`,
            `Réfrigérer la tarte pendant au minimume 1 heure avant de la servir.`,
            `Servir frais et déguster !`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'chili sin carne',
        img:'../Image/img_recette/chili_sin_carne.png',
        ingredients:[
            { nom: "poivre", quantité: null, unité: null },
            { nom: "sel", quantité: null, unité: null },
            { nom: "coriandre", quantité: null, unité: null },
            { nom: "origan", quantité: 1, unité: "cuillère à café" },
            { nom: "cumin", quantité: 1, unité: "cuillère à café" },
            { nom: "oignon", quantité: 1, unité: null },
            { nom: "poivron rouge", quantité: 1, unité: "unité" },
            { nom: "haricots rouges", quantité: 300, unité: "g" },
            { nom: "tomates pelées", quantité: 500, unité: "g" },
            { nom: "ail", quantité: 1, unité: "gousse" },
            { nom: "huile d'olive", quantité: null, unité: null },  // à ajuster selon la quantité souhaitée
            { nom: "paprika", quantité: 1, unité: "cuillère à café" }
        ],
        nbPersonne:4,
        duree:"45 min",
        corps:[
            `Faire chauffer un peu d'huile d'olive dans une grande poêle à feu moyen.`,
            `Ajouter l'oignon émincé et le poivron rouge coupé en dés. Faire revenir pendant 5-7 minutes jusqu'à ce que les légumes soient tendres.`,
            `Ajouter l'ail haché et laisser cuire pendant 1 minute pour libérer les arômes.`,
            `Ajouter les tomates pelées, les haricots rouges égouttés et rincés, ainsi que les épices : paprika, cumin, origan, sel et poivre.`,
            `Bien mélanger le tout et laisser mijoter à feu doux pendant environ 20-30 minutes, en remuant de temps en temps.`,
            `Lorsque le mélange est bien chaud et épaissi, ajuster l'assaisonnement à votre goût avec du sel, du poivre et un peu de coriandre hachée.`,
            `Servir chaud, accompagné de riz, de tortillas ou de pain, et parsemer de coriandre fraîche si désiré.`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'cookies',
        img:'../Image/img_recette/coockies.png',
        ingredients:[
            { nom: "sel", quantité: 1, unité: "pincée" },
            { nom: "levure", quantité: 0.5, unité: "sachet" },
            { nom: "farine", quantité: 230, unité: "g" },
            { nom: "sucre blanc", quantité: 100, unité: "g" },
            { nom: "sucre roux", quantité: 100, unité: "g" },
            { nom: "beurre", quantité: 100, unité: "g" },
            { nom: "œuf", quantité: 1, unité: null },
            { nom: "chocolat blanc", quantité: 100, unité: "g" },
            { nom: "chocolat au lait aux noix de pécan", quantité: 100, unité: "g" },
            { nom: "chocolat noir", quantité: 100, unité: "g" }
        ],
        nbPersonne:4,//20 pices
        duree:'20 min',
        corps:[
            `Faire fondre le beurre, y ajouter les sucres.`,
            `Remuer avant d'ajouter l'œuf entier, puis incorporer la farine, la levure et la pincée de sel.`,
            `Bien mélanger le tout à l'aide d'une cuillère jusqu'à l'obtention d’une pâte homogène.`,
            `Concasser les differents chocolats en petits morceaux et les incorporer à la pâte.`,
            `Former des petits tas d'environ 4 cm de diamètre (pas trop plats).`,
            `Disposer sur une plaque recouverte de papier sulfurisé.`,
            `Préchauffer le four à 180 °C (thermostat 6) puis enfourner 8 à 10 min (légèrement doré et toujours moelleux au cœur , trés important).`,
            `Laisser refroidir.`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'creme brulée',
        img:'../Image/img_recette/creme_brulee.png',
        ingredients: [
            { nom: "vanille", quantité: 1, unité: "sachet de sucre vanillé ou dosette de vanille liquide" },
            { nom: "sucre en poudre", quantité: 50, unité: "g" },
            { nom: "sucre roux", quantité: 1, unité: "cuillère à café" },  // pour la garniture
            { nom: "jaunes d'œuf", quantité: 3, unité: null },
            { nom: "lait entier", quantité: 10, unité: "cl" },
            { nom: "crème liquide", quantité: 0.25, unité: "l" },
            { nom: "citron", quantité: 1, unité: null }, 
            { nom: "fleur d'oranger", quantité: 1, unité: null },  // à ajuster selon la préférence
    
        ],
        nbPersonne:3,
        duree:'50 min',
        corps:[
            `Mélanger lait, crème et jaunes d'œufs, puis le sucre et la vanille (ou autre ingrédient pour le parfum).`,
            `Mettre dans des petits ramequins.`,
            `Cuire au four 35 à 40 min à thermostat 4.`,
            `Vers la fin, saupoudrer avec la cuillère à café de sucre en poudre restante.`,
            `Passer au grill (ou au fer, pour ceux qui sont équipés).`,
            `C'est prêt. Déguster!`,
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'fondant au chocolat',
        img:'../Image/img_recette/fondant_au_chocolat.png',
        ingredients: [
            { nom: "farine", quantité: 1, unité: "cuillère à soupe" },
            { nom: "beurre doux", quantité: 35, unité: "g" },
            { nom: "sucre semoule", quantité: 80, unité: "g" },
            { nom: "chocolat noir", quantité: 120, unité: "g" },
            { nom: "chocolat noir", quantité: 8, unité: "carrés (5 g)" },  // 8 carrés de chocolat (5 g chacun)
            { nom: "œufs", quantité: 3, unité: null }
        ],
        nbPersonne:4,
        duree:'25 minutes',
        corps:[
            `Faites fondre dans une casserole le chocolat et le beurre, en remuant régulièrement pour former une pâte homogène et onctueuse.`,
            `Préchauffez le four à 210°C (thermostat 7). Dans un saladier, mélangez les œufs, le sucre et la farine.`,
            `Incorporez la préparation chocolatée et mélangez.`,
            `Versez 1/3 de la préparation dans des ramequins individuels.`,
            `Déposez deux carrés de chocolat dans chacun des 4 ramequins, puis recouvrez-les avec le reste de la préparation chocolatée.`,
            `Placez les ramequins au four pendant environ 12 minutes, pas plus!`,
            `Dégustez de préférence chauds ou tièdes.`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'Guacamole',
        img:'../Image/img_recette/Guacamole.png',
        ingredients: [
            { nom: "sauce piquante", quantité: null, unité: null },  
            { nom: "coriandre", quantité: null, unité: null },        
            { nom: "sel", quantité: null, unité: null },              
            { nom: "oignon", quantité: 0.5, unité: null },
            { nom: "tomates", quantité: 2, unité: null },
            { nom: "avocats", quantité: 2, unité: null },
            { nom: "citron", quantité: 1, unité: null }
        ],
        nbPersonne:3,
        duree:'10 min',
        corps:[
            `Enlevez la peau des avocats.`,
            `En vous aidant d'une fourchette, écrasez les avocats.`,
            `Dans un plat, mélangez l'avocat avec l'oignon et en dernier les tomates.`,
            `Ajoutez le sel ainsi qu'un zeste de citron (et la sauce piquante).`,
            `Dégustez! Le guacamole accompagne parfaitement chips, nachos ou biscuits salés.`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'gyoza',
        img:'../Image/img_recette/gyoza.png',
        ingredients:[
            { nom: "farine", quantité: 200, unité: "g" },
            { nom: "eau chaude", quantité: 15, unité: "cl" },
            { nom: "fécule de pomme de terre", quantité: null, unité: null },
            { nom: "huile végétale type colza", quantité: 1, unité: "cuillère à soupe" },
            { nom: "sel", quantité: 1, unité: "pincée" },
            { nom: "porc haché", quantité: 100, unité: "g" },
            { nom: "crevettes crues", quantité: 200, unité: "g" },
            { nom: "ciboule", quantité: 4, unité: null }
        ],
        nbPersonne:4,
        duree:"1h00" ,
        corps:[
            `Préparation de la pâte :`,
            `Mettre la farine dans un bol, ajouter l'eau bouillante et bien mélanger avec des baguettes ou une fourchette.`,
            `Lorsque le mélange est un peu moins chaud, pétrir 5 min pour obtenir une pâte parfaitement homogène, mettre en boule et laisser reposer 1 h à température ambiante.`,
            `Préparation de la farce :`,
            `Dans un autre bol, mettre la viande de porc, les crevettes, un peu de sel et l'huile. Mélanger intimement jusqu'à ce que le mélange soit bien collant.`,
            `Fariner le plan de travail avec la fécule de pommes de terre.`,
            `Partager la boule de pâte en 8 parts égales. Façonner 8 rouleaux réguliers de 1,5 cm de diamètre environ. Découper chaque rouleau en tranches de 1,5 cm de large. Vous obtenez donc des morceaux de 1,5 cm X 1,5 cm environ, dont vous faites de petites boules.`,
            `Bien étendre chaque boule au rouleau à pâtisserie pour obtenir des cercles (presque) parfaits et (presque) transparents (environ 10 cm de diamètre). Il est important de bien fariner chaque cercle pour qu'ils ne collent pas entre eux.`,
            `Disposer 1 cuillère à café de farce sur chaque cercle, humidifier les bords avec un peu d'eau et former vos gyoza. Si la forme traditionnelle est trop difficile à réaliser, se contenter de les refermer en deux proprement, ce sera plus joli qu'une tentative maladroite.`,
            `Ces gyoza peuvent se cuire de deux façons :`,
            `- Comme des raviolis, quelques minutes dans de l'eau bouillante ou un bouillon. Quand ils sont transparents, ils sont prêts. Égoutter et servir rapidement (arroser d'un soupçon de bouillon permet d'éviter qu'ils ne collent).`,
            `- A la poêle : chauffer un trait d'huile de colza dans la poêle. Disposer les gyoza les uns contre les autres en rangs. Laisser griller 2 min, puis ajouter un verre d'eau et couvrir la poêle. L'eau va s'évaporer et finir de cuire les gyoza à la vapeur. Il est de coutume de les retourner dans le plat de service, côté grillé sur le dessus.`,
            `Déguster accompagné de sauce soja.`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'madeleine',
        img:'../Image/img_recette/madeleine.png',
        ingredients:[
            { nom: "sel", quantité: 1, unité: "pincée" },
            { nom: "beurre fondu", quantité: 100, unité: "g" },
            { nom: "levure chimique", quantité: 8, unité: "g" },
            { nom: "eau de fleur d'oranger", quantité: 2, unité: "cuillères à soupe" },
            { nom: "farine", quantité: 200, unité: "g" },
            { nom: "sucre", quantité: 150, unité: "g" },
            { nom: "œufs", quantité: 3, unité: null },
            { nom: "lait", quantité: 50, unité: "g" }
        ],
        nbPersonne:5,
        duree:'45 min',
        corps:[ 
            `Préchauffer le four à 240°C (thermostat 8). Faire fondre le beurre dans une casserole à feu doux, réserver.`,
            `Mélanger les œufs avec le sucre, jusqu'à ce que le mélange blanchisse.`,
            `Ajouter ensuite la fleur d'oranger et 40 g de lait.`,
            `Ajouter la farine et la levure chimique.`,
            `C'est ensuite le tour du beurre et du restant du lait; laisser reposer 15 min.`,
            `Beurrer les moules à madeleines et verser la préparation dedans (mais pas jusqu'en haut, les madeleines vont gonfler !).`,
            `Enfourner à 240°C (thermostat 8), et baisser au bout de 5 min à 200°C (thermostat 6-7); laisser encore 10 min. Surveiller bien la cuisson !`,
            `Démouler dès la sortie du four.`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'margherita',
        img:'../Image/img_recette/margherita.png',
        ingredients:[
            { nom: "fleur de sel de Guérande", quantité: 8, unité: "g" },
            { nom: "levure boulangère", quantité: 5, unité: "g" },
            { nom: "farine de bonne qualité (type 65)", quantité: 100, unité: "g" },
            { nom: "huile d'olive", quantité: 1, unité: "cuillère à soupe" },
            { nom: "eau minérale tiède", quantité: 9, unité: "cl" },
            // Pour la grniture  
            { nom: "mozzarella di buffala", quantité: 125, unité: "g" },
            { nom: "Parmesan reggianno", quantité: null, unité: null },
            { nom: "poivre", quantité: null, unité: null },
            { nom: "sel", quantité: null, unité: null },
            { nom: "oignon", quantité: 1, unité: null },
            { nom: "tomates pelées", quantité: 235, unité: "g" },
            { nom: "ail", quantité: 2, unité: "gousses" },
            { nom: "huile d'olive", quantité: null, unité: null }, 
            { nom: "basilic frais", quantité: 10, unité: "g" }
        ],
        nbPersonne:1,
        duree:'1h00',
        corps:[
            `Préparation de la pâte:`,
            `Émiettez la levure puis, diluer dans la moitié de l'eau tiède. Laissez le tout reposer 10 minutes.`,
            `Dans un grand saladier, déposez la farine et le sel puis mélangez.`,
            `Ajoutez dans le saladier: l'huile, la levure diluée et le reste d'eau tiède.`,
            `Mélangez bien les ingrédients à l'aide d'une grosse cuillère.`,
            `Farinez un large plan de travail et déposez la pâte.`,
            `Pétrissez la pâte durant 10 minutes de manière énergique puis, frappez-là fort sur le plan de travail plusieurs fois. La pâte doit être lisse, non collante et de petites bulles d'air doivent apparaître dans la pâte.`,
            `Laissez reposer une heure (4 heures serait le mieux) dans un saladier recouvert d'un linge humide et chaud afin que la pâte ne croûte pas et qu'elle gonfle.`,
            `Préparation de la sauce napolitaine façon Gusteau:`,
            `Dans une casserole, faites revenir les oignons émincés finement dans de l'huile d'olive.`,
            `Une fois que les oignons ont bien sué, ajoutez les tomates préalablement écrasées à la main dans un saladier.`,
            `Ajoutez les gousses d'ail écrasées, le thym, le laurier, le double concentré de tomates. Salez et poivrez.`,
            `Laissez mijoter à feux doux jusqu'à ce que le mélange épaississe puis, à feux très doux, ajoutez le basilic frais bien nettoyé et ciselé.`,
            `Laissez encore mijoter doucement quelques minutes pour que le basilic se diffuse sans la sauce`,
            `Passez la préparation au mixeur à soupe, légèrement afin de ne pas rendre la préparation trop liquide. Réservez.`,
            `Préparation des garnitures:`,
            `Coupez la mozzarella en fines tranches puis égouttez-là entre plusieurs feuilles d'essuie-tout (Ceci afin qu'elle ne rejette pas trop d'eau lors de la cuisson).`,
            `Nettoyez les feuilles de basilic frais.`,
            `Rappez le parmigiano reggiano.`,
            `Préchauffez votre four au thermostat 9 (270°C), 30 minutes avant de commencer à dresser vos pizzas. La chaleur doit être statique et non tournante, une chaleur en bas et gril en haut.`,
            `Préparation finale:`,
            `Farinez un large plan de travail, y déposer la pâte qui a doublé de volume durant l'heure de repos.`,
            `Écrasez la pâte pour enlever l'excédent d'air.`,
            `Déposez votre pâte sur une plaque à pizza.`,
            `Déposez une louche de sauce tomate puis, étalez-là à l'aide de la louche. Répartir la mozzarella et le parmesan.`,
            `À l'aide d'un pinceau, badigeonnez rapidement d'huile d'olive les bords de la pizza afin qu'ils dorent.`,
            `Enfournez pour environ 8 à 10 minutes sans ouvrir.`,
            `À la sortie du four, disposez quelques feuilles de basilic.`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'omelette aux epinards',
        img:'../Image/img_recette/omelette-_aux_epinards.png',
        ingredients:[
            { nom: "sel", quantité: null, unité: null },      // ajuster selon goût
            { nom: "poivre", quantité: null, unité: null },   // ajuster selon goût
            { nom: "oignon", quantité: 1, unité: "unité" },
            { nom: "œufs", quantité: 4, unité: null },
            { nom: "épinards en branche", quantité: 250, unité: "g" },
        ],
        nbPersonne:2,
        duree:'15 min',
        corps:[
            `Émincer l'oignon et sa verdure.`,
            `Battre les œufs avec les épinards (cuits à l'avance), saler et poivrer.`,
            `Faire fondre une noisette de beurre dans une poêle et faire revenir l'oignon 2 minutes, puis ajouter le mélange œufs/épinards.`,
            `Laisser cuire à feu doux, jusqu'à ce que les œufs soient cuits.`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'salade_composée',
        img:'../Image/img_recette/salade_compose.png',
        ingredients:[
            { nom: "sel", quantité: 1, unité: "pincée" },
            { nom: "avocat", quantité: 1, unité: null },
            { nom: "tomates cerises", quantité: 200, unité: "g" },
            { nom: "feuilles de laitue", quantité: 1, unité: "petite laitue" },
            { nom: "chou rouge", quantité: 100, unité: "g" },
            { nom: "pois chiches", quantité: 100, unité: "g" },
            { nom: "patates douces cuite", quantité: 1, unité: null },
            { nom: "germes de radis", quantité: 50, unité: "g" },
            { nom: "poivron jaune", quantité: 1, unité: "poivron moyen" },
            { nom: "sauce blanche", quantité: 4, unité: "cuillères à soupe" }
        ],
        nbPersonne:2,
        duree:'30 min',
        corps: [
            `Laver et sécher la laitue, les tomates cerises, le radis pastèque et les pousses.`,
            `Éplucher et couper l'avocat en tranches.`,
            `Couper les tomates cerises en deux.`,
            `Couper finement le poivron jaune et le radis pastèque.`,
            `Égoutter et rincer les pois chiches.`,
            `Peler et couper les patates douces en dés, puis les faire rôtir au four jusqu'à ce qu'elles soient tendres.`,
            `Râper le chou rouge.`,
            `Disposer les feuilles de laitue dans un grand bol ou sur des assiettes individuelles.`,
            `Répartir les tranches d'avocat, les tomates cerises, le poivron jaune, le radis pastèque, les pois chiches, les dés de patates douces, et le chou rouge râpé sur la laitue.`,
            `Ajouter les micro-pousses sur le dessus de la salade.`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'soupe de citrouille',
        img:'../Image/img_recette/soupe_de_citrouille.png',
        ingredients:[
            { nom: "sel", quantité: 1, unité: "pincée" },
            { nom: "noix de beurre", quantité: 1, unité: "unité" },
            { nom: "citrouille", quantité: 1, unité: "kg" },
            { nom: "pommes de terre", quantité: 3, unité: null },
            { nom: "eau", quantité: 20, unité: "cl" },
            { nom: "lait", quantité: 1, unité: "filet" },
            { nom: "crème", quantité: 1, unité: "cuillère à soupe" } 
        ],
        nbPersonne:6,
        duree:'50 min',
        corps:[
            `Couper la citrouille en dés.`,
            `Faire revenir les dés de citrouille et de pommes de terre dans le beurre`,
            `Ajouter le verre d'eau et laisser mijoter à feu moyen pendant une bonne demi-heure.`,
            `Ajouter le lait, la cuillère à soupe de crème.`,
            `Mixer le tout.`,
            `Servir avec un bon pain.`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {

        titre:'tiramisu',
        img:'../Image/img_recette/tiramisu.png',
        ingredients:[  
            { nom: "cacao amer", quantité: 30, unité: "g" },
            { nom: "sucre roux", quantité: 100, unité: "g" },
            { nom: "œufs", quantité: 3, unité: "unités" },
            { nom: "sucre vanillé", quantité: 1, unité: null },
            { nom: "mascarpone", quantité: 250, unité: "g" },
            { nom: "biscuits à la cuillère", quantité: 24, unité: "unités" },
            { nom: "café", quantité: 50, unité: "cl" }
        ],
        nbPersonne:4,
        duree:'20 min',
        corps: [
            `Séparer les blancs des jaunes d'œufs.`,
            `Mélanger les jaunes avec le sucre roux et le sucre vanillé.`,
            `Ajouter le mascarpone au fouet.`,
            `Monter les blancs en neige et les incorporer délicatement à la spatule au mélange précédent. Réserver.`,
            `Mouiller les biscuits dans le café rapidement avant d'en tapisser le fond du plat.`,
            `Recouvrir d'une couche de crème au mascarpone puis répéter l'opération en alternant couche de biscuits et couche de crème en terminant par cette dernière.`,
            `Saupoudrer de cacao.`,
            `Mettre au réfrigérateur 4 heures minimum puis déguster frais.`
        ],
        statut:'public',
        note:'',
        auteur:'Alain Ducasse'
        //com:`${bddcom}`

    },
    {
        titre: 'Bol de gruau aux fruits',
        img: '../Image/img_recette/Bol_de_gruau.png',
        ingredients: [  
            { nom: "flocons d'avoine", quantité: 80, unité: "g" },
            { nom: "lait (ou boisson végétale)", quantité: 250, unité: "ml" },
            { nom: "banane", quantité: 1, unité: "unité" },
            { nom: "miel", quantité: 1, unité: "cuillère à soupe" },
            { nom: "fruits rouges (frais ou surgelés)", quantité: 50, unité: "g" },
            { nom: "amandes effilées", quantité: 10, unité: "g" },
            { nom: "graines de chia", quantité: 1, unité: "cuillère à café" }
        ],
        nbPersonne: 1,
        duree:'15 min',
        corps: [
            `Dans une casserole, porter à ébullition le lait avec les flocons d'avoine.`,
            `Réduire le feu et cuire pendant 5 minutes en remuant régulièrement jusqu'à ce que le mélange épaississe.`,
            `Écraser la banane et incorporer la au gruau chaud.`,
            `Ajouter le miel et mélanger.`,
            `Verser le gruau dans un bol.`,
            `Ajouter les fruits rouges, les amandes effilées et saupoudrer de graines de chia.`,
            `Servir immédiatement et déguster chaud.`
        ],
        statut: 'public',
        note: '',
        auteur:'Alain Ducasse'
        //com: `${bddcom}`
    },
    {
        titre: 'Tacos de poisson',
        img: '../Image/img_recette/Tacos-de-poisson.png',
        ingredients: [
            { nom: "filets de poisson blanc", quantité: 4, unité: null },
            { nom: "tortillas", quantité: 4, unité: null },
            { nom: "chou rouge", quantité: 100, unité: "g" },
            { nom: "avocat", quantité: 1, unité: null },
            { nom: "sauce tomate", quantité: 50, unité: "ml" },
            { nom: "coriandre", quantité: 1, unité: "brin" },
            { nom: "sel", quantité: 1, unité: "pincée" }
        ],
        nbPersonne: 4,
        duree: '30 min',
        corps: [
            'Commencez par préparer les légumes. Émincez finement le chou rouge et coupez l\'avocat en tranches.',
            'Dans une poêle, faites chauffer un peu d\'huile et faites cuire les filets de poisson à feu moyen. Faites cuire environ 4 à 5 minutes par côté jusqu\'à ce qu\'ils soient bien dorés et cuits à cœur.',
            'Réchauffez les tortillas dans une poêle ou au micro-ondes pendant 30 secondes.',
            'Une fois le poisson cuit, émiettez-le à l\'aide d\'une fourchette.',
            'Dans chaque tortilla, ajoutez une portion de poisson émietté, puis garnissez avec le chou rouge émincé, les tranches d\'avocat, et un peu de sauce tomate.',
            'Hachez la coriandre et saupoudrez sur les tacos avant de servir.'
        ],
        statut: 'public',
        note: '',
        auteur:'Alain Ducasse'
    },
    {
        titre: "Soupe à l'oignon",
        img: '../Image/img_recette/Soupe-oignon.png',
        ingredients: [
            { nom: "sel", quantité: 1, unité: "pincée" },
            { nom: "oignons", quantité: 4, unité: null },
            { nom: "beurre", quantité: 30, unité: "g" },
            { nom: "bouillon de volaille", quantité: 1, unité: "l" },
            { nom: "pain", quantité: 4, unité: "tranches" },
            { nom: "fromage râpé", quantité: 100, unité: "g" }
        ],
        nbPersonne: 4,
        duree: '1h',
        corps: [
            'Commencez par émincer les oignons en fines lamelles.',
            'Faites fondre le beurre dans une grande casserole à feu moyen. Ajoutez les oignons émincés et faites cuire doucement pendant 25-30 minutes, en remuant régulièrement, jusqu\'à ce qu\'ils soient bien dorés et caramélisés.',
            'Ajoutez le bouillon de volaille dans la casserole avec les oignons caramélisés. Mélangez bien et laissez mijoter pendant 15 minutes.',
            'Pendant ce temps, grillez les tranches de pain dans un grille-pain ou une poêle jusqu\'à ce qu\'elles soient croustillantes.',
            'Une fois la soupe prête, versez-la dans des bols individuels, ajoutez une tranche de pain grillé dans chaque bol, puis parsemez généreusement de fromage râpé.',
            'Placez les bols sous le gril du four pendant 5 à 10 minutes, ou jusqu\'à ce que le fromage soit fondu et légèrement doré.'
        ],
        statut: 'public',
        note: '',
        auteur:'Alain Ducasse'
    },
    {
        titre: 'Poulet rôti',
        img: '../Image/img_recette/Poulet-rôti.png',
        ingredients: [
            { nom: "poulet entier", quantité: 1, unité: null },
            { nom: "beurre", quantité: 50, unité: "g" },
            { nom: "ail", quantité: 1, unité: "gousse" },
            { nom: "romarin", quantité: 2, unité: "brins" },
            { nom: "sel", quantité: null, unité: null },
            { nom: "poivre", quantité: null, unité: null },
            { nom: "pommes de terre", quantité: 4, unité: null },
            { nom: "tomates", quantité: 4, unité: null },
            { nom: "oignons", quantité: 2, unité: null }
        ],
        nbPersonne: 4,
        duree: '1h30',
        corps: [
            'Préchauffez le four à 200°C.',
            'Badigeonnez le poulet avec le beurre fondu. Assaisonnez-le généreusement avec du sel, du poivre, et insérez l\'ail et le romarin à l\'intérieur du poulet.',
            'Pelez et coupez les pommes de terre en quartiers, puis disposez-les autour du poulet dans un grand plat allant au four.',
            'Coupez les tomates en morceaux et ajoutez-les également autour du poulet.',
            'Ciselez finement les oignons et répartissez-les dans le plat avec les autres légumes.',
            'Enfournez le tout dans le four préchauffé pendant environ 1h30, en arrosant régulièrement le poulet avec son propre jus pour qu\'il soit bien doré et juteux.',
            'Une fois le poulet cuit, servez-le avec les légumes rôtis.'
        ],
        statut: 'public',
        note: '',
        auteur:'Alain Ducasse'
    },
    {
        titre: 'Quiche Lorraine',
        img: '../Image/img_recette/Quiche_Lorraine.png',
        ingredients: [
            { nom: "pâte brisée", quantité: 1, unité: "roulée" },
            { nom: "lardons", quantité: 150, unité: "g" },
            { nom: "œufs", quantité: 4, unité: null },
            { nom: "crème fraîche", quantité: 200, unité: "ml" },
            { nom: "lait", quantité: 100, unité: "ml" },
            { nom: "fromage râpé", quantité: 100, unité: "g" },
            { nom: "sel", quantité: null, unité: null },
            { nom: "poivre", quantité: null, unité: null }
        ],
        nbPersonne: 6,
        duree: '1h',
        corps: [
            'Préchauffez votre four à 180°C.',
            'Étalez la pâte brisée dans un moule à tarte. Piquez-la à l\'aide d\'une fourchette pour éviter qu\'elle ne gonfle pendant la cuisson.',
            'Faites revenir les lardons dans une poêle à feu moyen jusqu\'à ce qu\'ils soient dorés et croustillants. Égouttez-les pour retirer l\'excédent de graisse.',
            'Dans un bol, battez les œufs, la crème fraîche et le lait. Assaisonnez avec du sel et du poivre.',
            'Ajoutez les lardons cuits dans la préparation d\'œufs et mélangez bien.',
            'Versez le tout sur la pâte dans le moule, puis parsemez de fromage râpé sur le dessus.',
            'Enfournez la quiche pendant 30 à 40 minutes, ou jusqu\'à ce qu\'elle soit bien dorée et ferme au centre. Laissez refroidir légèrement avant de servir.'
        ],
        statut: 'public',
        note: '',
        auteur:'Alain Ducasse'
    },
    {
        titre: 'Ratatouille',
        img: '../Image/img_recette/Ratatouille.png',
        ingredients: [
            { nom: "aubergine", quantité: 1, unité: null },
            { nom: "courgettes", quantité: 2, unité: null },
            { nom: "poivron rouge", quantité: 1, unité: null },
            { nom: "tomates", quantité: 4, unité: null },
            { nom: "ail", quantité: 2, unité: "gousses" },
            { nom: "huile d\'olive", quantité: 1, unité: "filet" },
            { nom: "herbes de Provence", quantité: 1, unité: "cuillère à café" },
            { nom: "sel", quantité: null, unité: null },
            { nom: "poivre", quantité: null, unité: null }
        ],
        nbPersonne: 4,
        duree: '1h',
        corps: [
            'Coupez tous les légumes en dés égaux. Cela aidera à une cuisson uniforme.',
            'Dans une grande poêle, faites chauffer un filet d\'huile d\'olive et ajoutez l\'ail haché finement. Faites-le revenir jusqu\'à ce qu\'il soit légèrement doré.',
            'Ajoutez les aubergines dans la poêle et faites-les cuire pendant environ 10 minutes en remuant régulièrement.',
            'Ajoutez ensuite les courgettes, poivrons et tomates. Saupoudrez d\'herbes de Provence et assaisonnez avec du sel et du poivre.',
            'Laissez mijoter à feu moyen pendant 30 à 40 minutes, jusqu\'à ce que tous les légumes soient tendres et bien cuits.',
            'Servez chaud ou à température ambiante.'
        ],
        statut: 'public',
        note: '',
        auteur:'Alain Ducasse'
    },
    {
        titre: 'Lasagnes',
        img: '../Image/img_recette/Lasagne.png',
        ingredients: [
            { nom: "pâtes à lasagnes", quantité: 12, unité: "feuilles" },
            { nom: "viande hachée", quantité: 500, unité: "g" },
            { nom: "tomates pelées", quantité: 400, unité: "g" },
            { nom: "oignons", quantité: 2, unité: null },
            { nom: "béchamel", quantité: 500, unité: "ml" },
            { nom: "fromage râpé", quantité: 150, unité: "g" },
            { nom: "sel", quantité: null, unité: null },
            { nom: "poivre", quantité: null, unité: null }
        ],
        nbPersonne: 6,
        duree: '1h30',
        corps: [
            'Préchauffez votre four à 180°C.',
            'Dans une poêle, faites revenir les oignons hachés dans un peu d\'huile jusqu\'à ce qu\'ils soient tendres.',
            'Ajoutez la viande hachée et faites cuire jusqu\'à ce qu\'elle soit bien dorée.',
            'Ajoutez les tomates pelées et assaisonnez avec du sel et du poivre. Laissez mijoter la sauce pendant 20 minutes.',
            'Pendant ce temps, préparez la béchamel en chauffant le lait avec un peu de beurre et de farine pour épaissir.',
            'Dans un plat à gratin, commencez par étaler une couche de sauce tomate, puis une couche de pâtes à lasagnes.',
            'Ajoutez une couche de béchamel et de viande, puis répétez les étapes. Terminez par une couche de fromage râpé.',
            'Enfournez pendant 45 minutes, jusqu\'à ce que les lasagnes soient bien dorées et bouillonnantes.'
        ],
        statut: 'public',
        note: '',
        auteur:'Helene Darroze'
    },
    {
        titre: 'Boeuf Stroganoff',
        img: '../Image/img_recette/Boeuf_Stroganoff.png',
        ingredients: [
            { nom: "bœuf (filet ou rumsteck)", quantité: 500, unité: "g" },
            { nom: "oignons", quantité: 1, unité: null },
            { nom: "champignons", quantité: 200, unité: "g" },
            { nom: "crème fraîche", quantité: 200, unité: "ml" },
            { nom: "bouillon de bœuf", quantité: 250, unité: "ml" },
            { nom: "moutarde", quantité: 1, unité: "cuillère à soupe" },
            { nom: "huile d'olive", quantité: 2, unité: "cuillères à soupe" },
            { nom: "beurre", quantité: 20, unité: "g" },
            { nom: "sel", quantité: null, unité: null },
            { nom: "poivre", quantité: null, unité: null },
            { nom: "paprika", quantité: 1, unité: "cuillère à café" }
        ],
        nbPersonne: 4,
        duree: '40 min',
        corps: [
            'Coupez le bœuf en lanières ou en morceaux d\'environ 2 cm.',
            'Dans une poêle, faites chauffer l\'huile d\'olive et faites revenir le bœuf jusqu\'à ce qu\'il soit doré sur toutes ses faces. Retirez-le de la poêle et réservez.',
            'Dans la même poêle, faites fondre le beurre et faites revenir les oignons émincés et les champignons tranchés jusqu\'à ce qu\'ils soient tendres.',
            'Ajoutez la moutarde, le paprika, et versez le bouillon de bœuf. Mélangez bien et laissez mijoter pendant 5 minutes.',
            'Ajoutez ensuite la crème fraîche et mélangez pour obtenir une sauce onctueuse. Assaisonnez avec du sel et du poivre.',
            'Réintroduisez le bœuf dans la poêle et laissez mijoter encore 5 minutes pour réchauffer la viande et bien mélanger les saveurs.',
            'Servez chaud, accompagné de pâtes, de riz ou de purée de pommes de terre.'
        ],
        statut: 'public',
        note: '',
        auteur:'Helene Darroze'
    },
    {
        titre: 'Tarte aux pommes',
        img: '../Image/img_recette/tarte-aux-pommes.png',
        ingredients: [
            { nom: "pâte brisée", quantité: 1, unité: "roulée" },
            { nom: "pommes", quantité: 6, unité: null },
            { nom: "sucre", quantité: 100, unité: "g" },
            { nom: "beurre", quantité: 30, unité: "g" },
            { nom: "cannelle", quantité: 1, unité: "cuillère à café" },
            { nom: "confiture d'abricot", quantité: 2, unité: "cuillères à soupe" }
        ],
        nbPersonne: 6,
        duree: '1h',
        corps: [
            'Préchauffez le four à 180°C.',
            'Étalez la pâte brisée dans un moule à tarte et piquez-la avec une fourchette.',
            'Épluchez et coupez les pommes en tranches fines.',
            'Disposez les tranches de pommes sur la pâte en formant une rosace, en commençant par l\'extérieur du moule et en travaillant vers le centre.',
            'Saupoudrez les pommes avec le sucre et la cannelle.',
            'Coupez le beurre en petits morceaux et répartissez-les sur les pommes.',
            'Enfournez la tarte pendant 30 à 35 minutes, ou jusqu\'à ce que les pommes soient tendres et la pâte bien dorée.',
            'Une fois la tarte cuite, faites chauffer la confiture d\'abricot dans une petite casserole, puis badigeonnez-en les pommes pour un effet brillant.',
            'Laissez refroidir avant de servir.'
        ],
        statut: 'public',
        note: '',
        auteur:'Helene Darroze'
    }

];


export default recueil