// Base de données
fetch("../json/collection.json")
  .then(response => response.json())
  .then(data => collectionGames(data, 'collection'));

fetch("../json/wishlist.json")
  .then(response => response.json())
  .then(data => collectionGames(data, 'wishlist'));


    // Sélecteurs pour interagir avec le DOM
const cardContainer = document.querySelector("#card-container");
const cardCountElem = document.querySelector("#card-count");
const cardTotalElem = document.querySelector("#card-total");
const bottomPageElem = document.querySelector(".arrow-down");

// Initialisation des variables globales 
let actualLimit; 
let cardlimit;
let gamesData;
let dataLoaded = false;
let currentPage = 1; 
let lastScrollTop = 0;
let throttleTimer;
let pageCount;
const cardIncrease = 10; // Nombre d'éléments chargés à chaque changement de page


const collectionGames = (data, type) => { 

  // Variables generales pour configurer le système de pagination (quand même nécessaire dans un infinite scroll)
  let currentUrl = window.location.pathname; // récupère l'URL de la page actuelle
  let splittedUrl = currentUrl.split('/').pop(); // Formate le résultat obtenu pour matcher avec la condition 'if' 

  console.log('TYPE :', type);
  console.log('URL :', splittedUrl);
  
  if (splittedUrl == 'collection-scroll.html' && type == 'collection') {
    gamesData = data[type];
    actualLimit = data.collection.length; 
    console.log('🔔 :', data.collection.length);

  } else if (splittedUrl == 'wishlist.html' && type == 'wishlist') {
    gamesData = data[type];
    actualLimit = data.wishlist.length;
    console.log('⛳ :', data.wishlist.length);
  } else {
    console.log('Page ou type de données non reconnu');
    return;
  }

  cardLimit = actualLimit; // Nombre de jeux basé sur le nombre d'index dans les tableaux d'objets 'collection' et 'whishlist' 
  pageCount = Math.ceil(cardLimit / cardIncrease); // Calcul du nombre total de pages

  dataLoaded = true; // Indiquer que les données sont chargées
}


// Fonction de throttle pour limiter la fréquence d'exécution d'une fonction et éviter de surcharger la mémoire avec trop de requêtes
const throttle = (callback, time) => {
  if (throttleTimer) return; // Si un timer est déjà en cours, on ne fait rien et on sort de la fonction

  throttleTimer = true;   // On met throttleTimer à true pour indiquer qu'un timer est en cours

  // On programme l'exécution différée
  setTimeout(() => {
    callback();  // On exécute la fonction de callback
    throttleTimer = false; // On remet throttleTimer à false pour permettre de nouvelles exécutions

  }, time);
};



// Fonction pour créer une 'carte' > la div dans laquelle sera affiché le contenu récupéré dans 'games'
const createCard = (i) => {
  const card = document.createElement("div");
  card.className = "card";

  cardContainer.appendChild(card);
  
  const cardContent = gamesDetails(i); // Création d'une variable qui contient tous les éléments créés dynamiquement
  card.appendChild(cardContent); 
 
};



// Fonction qui crée dynamiquemet tous les éléments HTML des cartes (titre du jeu, cover, infos)
function gamesDetails(i) {

  let games = gamesData;

  const cases = document.createElement('div');
  cases.classList.add('cases')
  
  const list = document.createElement('div');
    list.classList.add('list');

    const gameCover = document.createElement('div');
    gameCover.classList.add('gamecover');

    const gameDesc = document.createElement('div');
    gameDesc.classList.add('gamedesc');

    const title = document.createElement('h3');
    title.classList.add('title');
    title.innerText = games[i].Titre;

    const cover = document.createElement('img');
    cover.classList.add('cover');
    cover.src = games[i].Cover;

    const category = document.createElement('p');
    category.classList.add('cat');
    category.innerHTML = `<b>Catégorie</b> : ${games[i].Categories.replace(",", ", ")}`;

    const nbPlayer = document.createElement('p');
    nbPlayer.classList.add('player');
    nbPlayer.innerHTML = `<b>Joueur.euses</b> : ${typeof games[i].Joueurs === 'string' ? games[i].Joueurs.replace(" — ", " à ") : games[i].Joueurs}`; // utilisation du if pour savoir si la valeur dans le contenu est une string ou un number

    const editor = document.createElement('p');
    editor.classList.add('editor');
    editor.innerHTML = `<b>Editeur</b> : ${games[i].Editeurs.split(',')[0]}`; // utilisation du split pour limiter le nombre de valeurs à afficher

    const age = document.createElement('p');
    age.classList.add('age');
    age.innerHTML = `<b>Age</b> : ${games[i].Ages}`;

    const duration = document.createElement('p');
    duration.classList.add('duration')
    duration.innerHTML = `<b>Durée moyenne</b> : ${typeof games[i].Duree === 'string' ? games[i].Duree.replace(" — ", " à ") + ' min' : games[i].Duree + ' min'}`;

    const lang = document.createElement('p');
    lang.classList.add('lang');
  lang.innerHTML = `<b>Langue</b> : ${games[i].Langues.split(',')[0]}`; // utilisation du split pour limiter le nombre de valeurs à afficher

    list.appendChild(title);
    list.appendChild(category);
    list.appendChild(nbPlayer);
    list.appendChild(age);
    list.appendChild(duration);
    list.appendChild(editor);
    list.appendChild(lang);

    gameCover.appendChild(cover);
    gameDesc.appendChild(list);
    cases.appendChild(gameCover);
    cases.appendChild(gameDesc);
    
    return cases;
  }

  // Fonction pour ajouter un lot de cartes (nombre défini dans 'cardIncrease')
const addCards = (pageIndex) => {

  currentPage = pageIndex;

  const startRange = (pageIndex - 1) * cardIncrease; // Calcul de la condition de début de range
  const endRange = Math.min(pageIndex * cardIncrease, cardLimit); // Calcul de la condition de fin de range (actuelle, pas totale)

  for (let i = startRange; i < endRange; i++) {
    createCard(i);
  }
  // Vérification pour savoir si c'est la dernière page qui est chargée ou s'il reste du contenu
   if (endRange >= cardLimit) {
    bottomPageElem.src = "/img/tiret.png";
    removeInfiniteScroll();
  }
};

// Gestion du défilement infini
const handleInfiniteScroll = () => {
  throttle(() => {
  const triggerHeight = window.innerHeight * 0.7; // % de la hauteur de la fenêtre
  const endOfPage = window.innerHeight + window.scrollY >= cardContainer.offsetHeight - triggerHeight; // Calcul pour savoir où définir la "fin de la page" avec un - X pour anticiper le chargement et ne pas avoir à attendre lorsqu'on est tout en bas

    // Chargement de nouvelles cartes si on est en bas de page (endOfPage) et qu'il reste des pages 
  if (endOfPage == true && currentPage < pageCount) {
    addCards(currentPage + 1);
  }}, 1000); // Millisecondes pour le calcul du throttle
};

// Fonction pour supprimer l'écouteur de défilement
const removeInfiniteScroll = () => {
  window.removeEventListener("scroll", handleInfiniteScroll);
};

// Chargement initial des cartes lorsqu'on ouvre la page
window.onload = function () {
  if (dataLoaded) {
    addCards(currentPage);
  } else {
    console.log("En attente du chargement des données...");
  }
};

// Ajout de l'écouteur d'événement pour le défilement lorsqu'on arrive sur la page
window.addEventListener("scroll", handleInfiniteScroll);
