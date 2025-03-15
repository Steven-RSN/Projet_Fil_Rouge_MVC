
import recueil from "./glossaire.js";




// Sélectionne les éléments du DOM nécessaires
const searchForm = document.querySelector('.formRechercheFiltrer');
const barreRecherche = document.getElementById('barreRecherche');
const itemPopulaire = document.querySelector('.itemPopulaire');
const btnVoirPlus =document.getElementById('voirPlus')

// Initialise les variables et récupère les élements HTML
const titreR = document.getElementsByClassName('titreRecette');
const titreRecetteTb = Array.from(titreR);
const vignetteRecette = document.getElementsByClassName('img_recette');
const vignetteRecetteTb = Array.from(vignetteRecette);  //convertit en tableau
console.log(vignetteRecetteTb)

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const recherche = barreRecherche.value.toLowerCase().trim();
    const rechercheSingulier = recherche.endsWith('s') ? recherche.slice(0, -1) : recherche;
    const recherchePluriel = rechercheSingulier + 's';

    // Supprime toutes les vignettes existantes
    
    itemPopulaire.innerHTML = '<h1 class="fondGris">Recettes</h1>'; //CHANGER CA !!!!!!!!!! 

    let recettesTrouvees = recueil.filter(laRecette => {
        const titreLowerCase = laRecette.titre.toLowerCase();

        // Vérifie si le titre correspond à la recherche
        if (titreLowerCase.includes(rechercheSingulier) || titreLowerCase.includes(recherchePluriel)) {
            return true;
        }

        // Vérifie si un des ingrédients correspond à la recherche
        return laRecette.ingredients.some(ingredient => {
            const nomIngredient = ingredient.nom.toLowerCase();
            return nomIngredient === rechercheSingulier || nomIngredient === recherchePluriel;
        });
    });

    // Nouveau tableau qui contient les recettes qui ont passé le filtre

    if (recettesTrouvees.length === 0) {
        console.log('Aucun résultat');
    } else {
        btnVoirPlus.style.display='none'
        recettesTrouvees.forEach((recette, index) => {
            const recetteElement = document.createElement('div');
            recetteElement.className = 'vigniette_recette';

            const imgRecette = document.createElement('div');
            imgRecette.className = 'img_recette';
            imgRecette.style.backgroundImage = `url('${recette.img}')`;
            imgRecette.style.backgroundPosition = 'center';
            imgRecette.style.backgroundSize = 'cover';

            const titreRecette = document.createElement('h6');
            titreRecette.className = 'titreRecette';
            titreRecette.textContent = recette.titre;

            const temp = document.createElement('div');
            temp.className = 'temp';

            const imgUtilisateur = document.createElement('div');
            imgUtilisateur.className = 'img-utilisateur';

            const nomUtilisateur = document.createElement('p');
            nomUtilisateur.className = 'nomUtilisateur';
            nomUtilisateur.textContent = 'Chef';

            temp.appendChild(imgUtilisateur);
            temp.appendChild(nomUtilisateur);

            imgRecette.appendChild(titreRecette);
            imgRecette.appendChild(temp);

            const etoils = document.createElement('div');
            etoils.className = 'etoils';
            // Ajoutez ici le code pour les étoiles si nécessaire

            recetteElement.appendChild(imgRecette);
            recetteElement.appendChild(etoils);

            // Ajout de l'écouteur d'événements pour la redirection
            recetteElement.addEventListener('click', function() {
                const recetteIndex = recueil.findIndex(r => r.titre === recette.titre);
                window.location.href = `recette.html?recette=${recetteIndex}`;
            });

            itemPopulaire.appendChild(recetteElement);
        });
    }

    // `Recettes trouvées : ${recettesTrouvees.map(r => r.titre).join(', ')}` : 
    if (recettesTrouvees.length === 0) {
        console.log('Aucun résultat');
    }
});