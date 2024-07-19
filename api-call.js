// fetch("./games.json")
//     .then(response => response.json())
//     .then(data => showInfo(data));

// function showInfo(data) {
//     console.log(data.games[1])
// }

const url = 'https://github.com/NejiH/my-ludo/blob/main/my-ludo-nejih.json'

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => showInfo(data))
    .catch(error => console.error('Error fetching JSON:', error));

function showInfo(data) {
    console.log(data.games[1]);
}