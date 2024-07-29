
const coverImg = ['https://cf.geekdo-images.com/F58jczp5xk9CYFimrytXaw__imagepagezoom/img/w2wr5vUusTlCzeL-9jA3bEX_pBM=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic2801874.jpg', 'https://cf.geekdo-images.com/yT5dXJzCpgvBBmXr_zQDSQ__imagepagezoom/img/zouJ5346Ek-LPTHZSE-O5PZblUg=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4808077.jpg', 'https://cf.geekdo-images.com/REV41XH_xrquh9Unl_M2DA__imagepagezoom/img/90i47VKvslS-GkNuqzYDuXnW2FU=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4745701.png'
]

const coverImgOjt = [
    { name: 'Tyrants of the underdark', link: 'https://cf.geekdo-images.com/F58jczp5xk9CYFimrytXaw__imagepagezoom/img/w2wr5vUusTlCzeL-9jA3bEX_pBM=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic2801874.jpg' },
    { name: 'Super Fantasy Brawl', link: 'https://cf.geekdo-images.com/yT5dXJzCpgvBBmXr_zQDSQ__imagepagezoom/img/zouJ5346Ek-LPTHZSE-O5PZblUg=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4808077.jpg' },
    { name: 'Shasn', link: 'https://cf.geekdo-images.com/REV41XH_xrquh9Unl_M2DA__imagepagezoom/img/90i47VKvslS-GkNuqzYDuXnW2FU=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4745701.png' }
]

// Défini un index random en se basant sur le nom total d'éléments présents dans le tableau coverImg
function getRandomImg() {
    return coverImg[Math.floor(Math.random() * coverImg.length)];
}

// Remplace le contenu de l'attribu SRC dans la balise contenant l'ID "randomcover" en utilisant l'URL tirée au hasard dans le tableau coverImg
function displayRandomCover() {
    document.getElementById('randomcover').src = getRandomImg()
}
displayRandomCover()