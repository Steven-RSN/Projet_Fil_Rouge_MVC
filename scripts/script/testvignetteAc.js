//import recueil from "./glossaire.js";


// Initialise les variables et récupère les élements HTML
const titreR = document.getElementsByClassName('titreRecette');
const titreRecetteTb = Array.from(titreR);
const vignetteRecette = document.getElementsByClassName('img_recette');
const auteur = document.getElementsByClassName('nomUtilisateur ')
const vignetteRecetteTb = Array.from(vignetteRecette);  //convertit en tableau
 console.log(auteur)




// Boucle pour afficher les titres et les images des recettes situées dans glossaire.js
for(let i =0 ; i<vignetteRecetteTb.length; i++){

    titreRecetteTb[i].innerText=`${recueil[i].titre}`;
    auteur[i].innerText=`${recueil[i].auteur}`;                  
    vignetteRecetteTb[i].style.background=`url(${recueil[i].img})`;
    vignetteRecetteTb[i].style.backgroundSize=`cover`;
    
}

// Applique un écouteur d'événements à chaque vignette 
vignetteRecetteTb.forEach(function(recette,index) {
    
    recette.addEventListener('click',function(){
        window.location.href = `recette.html?recette=${index}`; // Renvoie vers la page recette correspondante
    })
    
});



const params = new URLSearchParams(window.location.search); // Récupère les paramètres de l'URL = va chercher tout ce qu'il y a deriere le "?" dans l'url.
const recetteIndex = params.get('recette'); // Récupère l'index de la recette

// Si l'index existe et si c'est bien un nombre valide, affiche la page recette correspondante
if (recetteIndex !== null && !isNaN(recetteIndex)) {

    const recette = recueil[recetteIndex]; // Récupère la recette correspondante dans le tableau recueil


    // Initialise les variables pour récuperer des éléments HTML pour les modifier : titres et images (boucle pour les images)
    const titre=document.querySelector('h1') ;
    titre.innerText=recette.titre.charAt(0).toUpperCase() + recette.titre.slice(1);
 
    const imgGrandeRecette = document.querySelector('.grandeImage');
    imgGrandeRecette.src = recette.img;

    const auteur=document.getElementById('auteur')
    auteur.innerText =recette.auteur;
 

    const imgPetiteRecette = document.querySelectorAll('.petiteImage');
    const imgPetiteTb = Array.from(imgPetiteRecette);

    for(let img of imgPetiteTb){
        img.src= recette.img;
      
    }

    const h4=document.querySelector('.nombre')
    h4.innerText=`${recette.nbPersonne} `

    // Initialise les variables pour récuperer des éléments HTML pour les modifier : ul et li.
    // Chaque li (ingrédient de la liste) va être remplacé par les ingredients de la nouvelle recette , 
    // On compare si la liste initiale et plus grande que la nouvelle (nouveaux ingredient), si elle est plus petite on rajoute des li
    // sinon on les supprime 
    const ulIngre = document.querySelector('#ingrédientsUl')
    const listeIngredient = document.querySelectorAll('#ingrédientsUl li')
    const listeIngredientTb = Array.from(listeIngredient)

    for(let i=0; i<recueil[recetteIndex].ingredients.length;i++){
        let result = recueil[recetteIndex].ingredients.length - listeIngredientTb.length

        if(result>0){
            for(let j=0; j<result;j++){

                const newLi= document.createElement('li')
                ulIngre.appendChild(newLi)
                listeIngredientTb.push(newLi)
            }
            
        }else if(result<0){
            while(result<0){

                const supLi= listeIngredientTb.pop()
                supLi.remove()
                result++
            }     
        }

        listeIngredientTb[i].innerText= `${recette.ingredients[i].quantité || ''} ${recette.ingredients[i].unité || ''} ${recette.ingredients[i].nom}`;

    }




    // Même chose que pour la liste d'ingrédients mais pour les étapes de la recette
    const ulEtape = document.querySelector('#etapeUl');
   
    const listeEtape = document.querySelectorAll('#etapeUl li')
    const listeEtapeTb= Array.from(listeEtape)

    for(let i=0; i<recueil[recetteIndex].corps.length;i++){
         let result = recueil[recetteIndex].corps.length - listeEtapeTb.length
        
        if(result>0){

            for(let j=0; j<result;j++){
                const newLi= document.createElement('li')
                ulEtape.appendChild(newLi)
                listeEtapeTb.push(newLi)
            }

        }else if(result<0){

            while(result<0){
                const supLi= listeEtapeTb.pop()
                supLi.remove()
                result++
            }         
 
        }
 
        listeEtapeTb[i].innerText= `${recette.corps[i]}`;
 
    }




   // Produit en croix afin de permettre d'incrémenter ou de décrémenter 
   // les quantités des ingrédients en fonction du nombre de personnes sélectionné.
   // Initialise les variables pour récuperer des éléments HTML : boutons et le nombre de personne
   // Initialise la variable memory et newNbPersonne 
   // Initialise les écoutes des boutons 
   //
    const btnIncrDecr= document.querySelectorAll('.decr, .incr');
    const tableauBtn = Array.from(btnIncrDecr);

  //  let memory=[];
    let nbPersonne=recette.nbPersonne;
    let newNbPersonne=recette.nbPersonne;

    tableauBtn.forEach(function(btn){
        btn.addEventListener('click',function(){
           
            // Condition pour identifier le bouton sur lequel on clique
            if (btn.classList=='incr'){             // Incrémentation 
                console.log('click: incr')
          
                newNbPersonne=newNbPersonne+1;
                h4.innerText=`${newNbPersonne} `;

                for(let i=0; i<recueil[recetteIndex].ingredients.length;i++){

                    let quantité=recueil[recetteIndex].ingredients[i].quantité;
                    let result=quantité*(newNbPersonne/nbPersonne);
             
                 //   memory.push(result);

                    listeIngredientTb[i].innerHTML=`${result||''} ${recette.ingredients[i].unité || ''} ${recette.ingredients[i].nom}`;

                }
 
             
            }else{                            // Décrémentation

                newNbPersonne=newNbPersonne-1;

                if(newNbPersonne===0){       // Permet de ne pas avoir moins d'une personne pour la recette
                    newNbPersonne=1;
                }
                h4.innerText=`${newNbPersonne} `;

                for(let i=0; i<recueil[recetteIndex].ingredients.length;i++){          
       
                    let quantité=recueil[recetteIndex].ingredients[i].quantité;
                    let result=quantité*(newNbPersonne/nbPersonne);
                    
                 //   memory.push(result);

                    listeIngredientTb[i].innerHTML=`${result||''} ${recette.ingredients[i].unité || ''} ${recette.ingredients[i].nom}`;
                    
                }
            }
          //  memory=[]; //on vide le tableau memory
        })
    })



} else {
    console.error('Recette non trouvée.');   //-TODO : Inplementer Try/Catch
}



const header = document.getElementById('header');
const image = document.getElementById('imageFond');

let lastScroll = 0;


window.addEventListener("scroll", function() {
    let Scroll = window.scrollY; 
    let scrollDifference = Scroll - lastScroll;
    const imageHeight = image.height;
    
    if (scrollDifference > 0) {
        if (window.scrollY > imageHeight) {
            header.classList.add('slide');
        }

    } else if (scrollDifference < 0) {
        header.classList.remove('slide');
        console.log("Scroll Up");
    }

    lastScroll= Scroll;
});



// test affichage de toutes les recettes


// Sélection du bouton "Voir plus" et du conteneur des recettes
const voirPlusBtn = document.getElementById('voirPlus'); // Bouton pour voir plus de recettes
const recettesContainer = document.querySelector('.itemPopulaire'); // Conteneur principal où les recettes seront ajoutées
const nombreRecettesMax = 12;

voirPlusBtn.addEventListener('click', function () {
    let nombreRecettesInitiales = document.getElementsByClassName('vigniette_recette').length;

    if (voirPlusBtn.innerText === 'Voir moins') {
 
        while (document.getElementsByClassName('vigniette_recette').length > nombreRecettesMax) {
            recettesContainer.removeChild(recettesContainer.lastChild);
        }
        voirPlusBtn.innerText = 'Voir plus';
    } else {
        // Boucle pour ajouter les nouvelles recettes
        for (let i = nombreRecettesInitiales; i < recueil.length; i++) {
            
            
            // Création de la div principale
            let divRecette = document.createElement('div');
            divRecette.classList.add('vigniette_recette');

            // Création de l'image et du titre
            let imgRecette = document.createElement('div');
            imgRecette.classList.add('img_recette');
            imgRecette.style.backgroundImage = `url(${recueil[i].img})`;
            imgRecette.style.backgroundSize='cover'

            let titreRecette = document.createElement('h6');
            titreRecette.classList.add('titreRecette');
            titreRecette.innerText = recueil[i].titre;

            
            let tempDiv = document.createElement('div');
            tempDiv.classList.add('temp');

            let imgUtilisateur = document.createElement('div');
            imgUtilisateur.classList.add('img-utilisateur');
            tempDiv.appendChild(imgUtilisateur);

            let nomUtilisateur = document.createElement('p');
            nomUtilisateur.classList.add('nomUtilisateur');
            nomUtilisateur.innerText = recueil[i].auteur ;
            tempDiv.appendChild(nomUtilisateur);

            
            divRecette.appendChild(imgRecette);
            imgRecette.appendChild(titreRecette);
            imgRecette.appendChild(tempDiv);

            
            let etoilsDiv = document.createElement('div');
            etoilsDiv.classList.add('etoils');
            divRecette.appendChild(etoilsDiv);

            // Clic pour rediriger vers la page de recette
            divRecette.addEventListener('click', function () {
                window.location.href = `recette.html?recette=${i}`;
            });

            
            recettesContainer.appendChild(divRecette);
            voirPlusBtn.innerText='Voir moins'
        }
    }
    
});
