// Défini un index random en se basant sur le nom total d'éléments présents dans le tableau coverImg
function getRandomImg() {
  return coverImg[Math.floor(Math.random() * coverImg.length)];
}

// Remplace le contenu de l'attribu SRC dans la balise contenant l'ID "randomcover" en utilisant l'URL tirée au hasard dans le tableau coverImg
function displayRandomCover() {
  randomCover = document.getElementById('randomcover');
  randomCover.src = coverImg.link[getRandomImg()]

  console.log('display :', coverTab)
}

fetch("/json/collection.json")
  .then(response => response.json())
  .then(data => collectionGames(data));

function collectionGames(data) { 
  console.log(data.collection[0].ID);

  data.collection.forEach(game => { 
    console.log(game.Titre);
  }
  )
}

