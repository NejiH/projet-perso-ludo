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
displayRandomCover()