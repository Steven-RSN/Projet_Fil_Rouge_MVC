
// Objet pour stocker les attributs de la recette
const recette = {
    nom: '',
    difficulty: 3,
    type: 2,
    regime: 1,
    region: 0,
    temps: '',
    nbPersonne: 0,
    ingredients: [],
    listeEtape: [],
    images: [],
    statut: 1
};


// Création d'une div pour afficher la liste des ingrédients à ajouter
const contenairIngr = document.createElement("div");
contenairIngr.id = "ingredientListId"; // Définition d'un ID
contenairIngr.classList.add("ingredientList"); //Ajout d'une classe CSS
contenairIngr.style.display = "none"; //Caché par défaut
//Ajout de la div dans le formulaire
const h3AjoutIngredient = document.querySelector("#h3Ingredient");
h3AjoutIngredient.append(contenairIngr);

// Sélection des éléments HTML du formulaire
const ingredientInput = document.getElementById("ingredient"); // Champ de saisie pour le nom de l'ingrédient
const quantityInput = document.getElementById("ingredientQ"); // Champ de saisie pour la quantité
const unitSelect = document.getElementById("uniteSelect"); // Sélecteur pour le nom de l'unité (litre,gramme...) 
const ajoutBtn = document.getElementById("btnAjoutIngredient"); // Bouton d'ajout d'ingrédient

ajoutBtn.addEventListener("click", function () {

    const ingredient = ingredientInput.value;
    const quantity = quantityInput.value;
    const nomUnite = unitSelect.value;
console.log('ici')
    // Vérifie que la quantité est un nombre et que l'ingrédient est une string
    if (isNaN(quantity) || quantity === "") {
        return;
    }
    if (!isNaN(ingredient) || ingredient === "") {
        return;
    }

    recette.ingredients.push({
        name: ingredient,
        quantity: quantity,
        unit: nomUnite
    });

    // Afficher la liste des ingrédients
    contenairIngr.style.display = "block";
    update(); // mettre à jour l'affichage

    // Réinitialiser les champs
    ingredientInput.value = "";
    quantityInput.value = "";
    unitSelect.value = "Unite";
    //console.log('recette :', recette)

});


function update() {
    contenairIngr.innerHTML = ""; // Efface la liste existante avant de la reconstruire
    const ul = document.createElement("ul"); // Création d'une liste

    // console.log(recette)
    recette.ingredients.forEach((item, index) => {
        const li = document.createElement("li");
        // Ajout du texte et du bouton suppresion dans le li 
        li.textContent = `${item.quantity} ${item.unit} de ${item.name}`;

        const btnSup = document.createElement("button");
        btnSup.textContent = "❌";
        btnSup.classList.add("btnSup");
        btnSup.style.transform = "translate(0px, 0px)"
        btnSup.style.width = 'auto'
        btnSup.style.background = "none";
        btnSup.style.fontSize = "10px";
        btnSup.style.cursor = "pointer";

        // Ajouter un événementd'ecoute au bouton
        btnSup.addEventListener("click", function () {
            recette.ingredients.splice(index, 1); // Supprimer l'élément du tableau
            update(); // Mettre à jour l'affichage grace a update() 
        });

        li.appendChild(btnSup);// Ajout du bouton au li

        ul.appendChild(li);// Ajout le li dans le ul
    });
    contenairIngr.appendChild(ul);
}


//Fonction pour les Etapes   
// Création d'une div pour afficher la liste des ingrédients à ajouter
const contenairEtape = document.createElement("div");
contenairEtape.id = "etapetListId"; // Définition d'un ID
contenairEtape.classList.add("etapeList"); //Ajout d'une classe CSS
contenairEtape.style.maxWidth = '35%'
contenairEtape.style.display = "none"; //Caché par défaut

//Ajout de la div dans le formulaire
const legende = document.querySelector(".legende");
legende.appendChild(contenairEtape);
const btnEtape = document.getElementById('btnEtape');

//selection des elements html:
const inputEtape = document.getElementById('etapeDeRealisation');
//listeEtape = [];

btnEtape.addEventListener("click", function (event) {
    event.preventDefault();// Empêcher le rechargement de la page

    const etapeValues = inputEtape.value;

    //console.log(etapeValues);

    if (etapeValues === '') {
        console.log('Entrez une etape');
    }

    //listeEtape.push(etapeValues)

    recette.listeEtape.push(etapeValues);
    // Afficher la liste des ingrédients
    contenairEtape.style.display = "block";

    updateEtape(); // mettre à jour l'affichage

    inputEtape.value = '';
    //console.log(recette)

})

function updateEtape() {
    contenairEtape.innerHTML = ""; // Efface la liste existante avant de la reconstruire
    const ul = document.createElement("ol"); // Création d'une liste

    recette.listeEtape.forEach((etape, index) => {
        const li = document.createElement("li");
        // Ajout du texte et du bouton suppresion dans le li 
        li.textContent = ` ${etape}`;

        const btnSup = document.createElement("button");
        btnSup.textContent = "❌";
        btnSup.classList.add("btnSup");
        btnSup.style.transform = "translate(0px, 0px)"
        btnSup.style.width = 'auto'
        btnSup.style.background = "none";
        btnSup.style.fontSize = "10px";
        btnSup.style.cursor = "pointer";
        btnSup.type = "button";

        // Ajouter un événementd'ecoute au bouton
        btnSup.addEventListener("click", function () {
            recette.listeEtape.splice(index, 1); // Supprimer l'élément du tableau
            updateEtape(); // Mettre à jour l'affichage grace a update() 
        });

        li.appendChild(btnSup);// Ajout du bouton au li

        ul.appendChild(li);// Ajout le li dans le ul
    });
    contenairEtape.appendChild(ul);
}


//function pour gerer les images !

const imageInput = document.getElementById('inputImage')
const previewContainer = document.getElementById("previewImages");

imageInput.addEventListener('change', function () {
    const files = imageInput.files

    if (files.length < 1) {
        alert("Vous devez ajouter au moins 1 image.");
        imageInput.value = ""; // reset input
        return;
    }
    if (files.length > 3) {
        alert("Vous pouvez ajouter jusqu'à 3 images maximum.");
        imageInput.value = ""; // reset input
        return;
    }

    Array.from(files).forEach(file => {
        if (!file.type.startsWith("image/")) return;

        const reader = new FileReader();

        reader.onload = function (e) {
            recette.images.push(e.target.result); // stocke l'image encodée en base64

            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.width = "100px";
            img.style.height = "100px";
            img.style.objectFit = "cover";
            img.style.border = "1px solid #ccc";
            img.style.borderRadius = "5px";

            previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
        console.log(recette.images)
    });

})

const radioStatus = document.querySelectorAll('.radioStatu')
//console.log(radioStatus)


function handleSelectManager() {
    const nomRecette = document.querySelector('.inputAjoutRecette')
    recette.nom = nomRecette.value

    const totalTemps = document.querySelector('#tempsTotal')
    recette.temps = totalTemps.value

    const nbPersonne = document.querySelector('#nbPersonne')
    recette.nbPersonne = nbPersonne.value

    const difficulty = document.getElementById("difficulteSelect")
    recette.difficulty = difficulty.value;
    //----------------
    const type = document.getElementById("typeSelect")
    recette.type = type.value;
    //----------------
    const regime = document.getElementById("regimSelect")
    recette.regime = regime.value;
    //----------------
    const region = document.getElementById("regionSelect")
    recette.region = region.value;
}

function handleStatusRecette() {
    radioStatus.forEach(radio => {

        if (radio.checked) {
            recette.statut = radio.value
        }
    })
}

// Fonction pour envoyer la liste -> PHP
const btnEnv = document.getElementById("AjouterRecette");
//console.log(btnEnv)

btnEnv.addEventListener("click", function () {
    handleSelectManager()
    handleStatusRecette()

    // if (recette.length === 0) {
    //     console.log("Aucun ingrédient à envoyer.");
    //     return;
    // }
    //console.log(recette)
    // console.log(JSON.stringify(recette));

    fetch("/nouvelle_recette", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recette)
    })
        .then(response => {
            if (!response.ok) {

                throw new Error("Erreur réseau ou serveur.");
            }
            console.log("Données envoyées avec succès !");
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi :", error);
        });

    location.reload();

});
