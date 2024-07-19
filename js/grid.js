const gameDesc = [
    { name: 'Tyrants of the underdark', type: 'Deck Building / Placement ouvriers', niveau: 'Avancé', age: '14+', langue: 'EN', cover: 'https://cf.geekdo-images.com/F58jczp5xk9CYFimrytXaw__imagepagezoom/img/w2wr5vUusTlCzeL-9jA3bEX_pBM=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic2801874.jpg' },
    { name: 'Super Fantasy Brawl', type: 'Affrontements', niveau: 'Avancé', age: '10+', langue: 'FR', cover: 'https://cf.geekdo-images.com/yT5dXJzCpgvBBmXr_zQDSQ__imagepagezoom/img/zouJ5346Ek-LPTHZSE-O5PZblUg=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4808077.jpg' },
    { name: 'Shasn', type: 'Stratégie', niveau: 'Avancé', age: '16+', langue: 'EN', cover: 'https://cf.geekdo-images.com/REV41XH_xrquh9Unl_M2DA__imagepagezoom/img/90i47VKvslS-GkNuqzYDuXnW2FU=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4745701.png' },
    { name: 'A Game of Thrones', type: 'Stratégie', niveau: 'Expert', age: '14+', langue: 'FR', cover: 'https://cf.geekdo-images.com/M_7UvwZvuxBVjxdadsa5AA__imagepagezoom/img/ZPrM6snVy0ywNlmQeP7208In9pU=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic1077906.jpg' },
    { name: 'Vampire la Masquarade : Vendetta', type: 'Stratégie', niveau: 'Avancé', age: '12+', langue: 'FR', cover: 'https://cf.geekdo-images.com/V3Ff1dIMh6QrU2IeZabr_g__imagepagezoom/img/TRC2ujszD9Dsr_xs8evokk6MsdI=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4854194.png' },
    { name: 'Shamans', type: 'Jeu de plis', niveau: 'Intermédiaire', age: '10+', langue: 'FR', cover: 'https://cf.geekdo-images.com/BNmYPPip0PZBPx9qJCEUxA__imagepagezoom/img/-MbZ9P_jhVg_ee0gQmyUEtvVlgw=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic6021323.jpg' },

]

const images = document.querySelectorAll('.wrapper img');

for (let i = 0; i < gameDesc.length; i++) {
    if (gameDesc[i].cover != '') {
        images[i].src = gameDesc[i].cover
    }
}