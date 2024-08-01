const el = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9', 'div10', 'div11', 'div12'];
let pageIndex = 0; // 1 + 3 // car 3 elements par page // param d'url "page"
let itemPerPage = 6

console.log('🍓', window.location.search);

let pageActuelle = window.location.search
let urlParams = new URLSearchParams(pageActuelle);

let pageVisible = urlParams.get("page");

console.log('Page Visible : ', pageVisible);

// offset et limit
// let limit = (page * 3)

function loadItems() {
  content.innerHTML = "";

for (let i = pageIndex * itemPerPage; i < (pageIndex * itemPerPage)+itemPerPage; i++) {

  if (!el[i]) {break}

  let divPerso = document.createElement('div');
  divPerso.innerText = `Test ${el[i]}`;

  document.querySelector('#content').appendChild(divPerso);
}
}


loadItems()

function loadPageNav () {
  nav.innerHTML = "";
  for (let i =0; i<(el.length/itemPerPage); i++) {

    const span = document.createElement('span');
    span.innerHTML = i+1;
    span.addEventListener('click', (e) => {
      pageIndex = e.target.innerHTML-1;
      loadItems();
    });
    if (i === pageIndex) {
      span.style.fontSize = "2rem";
    }
    document.querySelector('#nav').appendChild(span);

  }
}

loadPageNav()

console.log(el)