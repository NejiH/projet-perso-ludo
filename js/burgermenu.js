const burgerMenuButton = document.querySelector('.burger-icon')
const burgerMenuButtoniCon = document.querySelector('.burger-icon i')
const burgerMenu = document.querySelector('.burger-menu')

// Fonction pour ouvrir le burger menu
burgerMenuButton.onclick = function () {
    burgerMenu.classList.toggle('open')
    const isOpen = burgerMenu.classList.contains('open')
    burgerMenuButtoniCon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

let header = document.querySelector("#header");
let lastScrollValue = 0;
