// fetch("./games.json")
//     .then(response => response.json())
//     .then(data => showInfo(data));

// function showInfo(data) {
//     console.log(data.games[1])
// }

const url = 'https://nejih.github.io/projet-perso-ludo/games.json'

fetch(url)
    .then(response => response.json())
    .then(data => showInfo(data))
    .catch(error => console.error('Error fetching JSON:', error));

const tableauID = [];
const tableauTitre = [];

console.log(`vide : ${tableauTitre}`)

function showInfo(data) {
    const gameIDs = data[0].games.map(game => game.ID);
    const gameTitre = data[0].games.map(game => game.Titre);


    for (let i = 0; i < gameIDs.length; i++) {
        tableauID.push(gameIDs[i])
    }

    for (let i = 0; i < gameTitre.length; i++) {
        tableauTitre.push(gameTitre[i])
    }

    console.log(`plein : ${tableauTitre}`)

    //console.log(gameIDs[1])
    //console.log(gameTitre)

}