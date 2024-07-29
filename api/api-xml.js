let req = new XMLHttpRequest();
req.open("GET", "http://localhost:8080/https://www.boardgamegeek.com/xmlapi2/thing?id=013", false);
req.send(null);
console.log(`CONTENU XML : ${req.responseText}`);