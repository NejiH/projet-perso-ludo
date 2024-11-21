// --- RANDOM GAME ON HOMEPAGE --- 

const btnRandom = document.getElementById('imagebtn');
const randonName = document.getElementById('randomname');

fetch("../json/collection.json")
  .then(response => response.json())
  .then(data => collectionGames(data));

// Retourne un numero random et va chercher le jeu correspondant dans le tableau 'games'

function collectionGames(data) { 

  function getRandomGame() {
  let randomIndex = Math.floor(Math.random() * data.collection.length);

  return data.collection[randomIndex];
  }
  
  const displayRandomHome =  () => {
    const randomGame = getRandomGame();
    const randomCover = document.getElementById('randomcover');
    const randomTitle = document.getElementById('randomname');

    // Remplace le contenu de l'attribut SRC dans la balise contenant l'ID "randomcover" en utilisant l'URL tirée au hasard dans le tableau coverImg
    randomCover.src = randomGame.Cover;
    randomTitle.innerText = randomGame.Titre;
}

  btnRandom.addEventListener("click", () => {
     displayRandomHome()
  });
  
  displayRandomHome()


} 



