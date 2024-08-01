// Tableau d'objet de données en attendant de pouvoir faire appel à une API
// const gameDesc = [
//     { name: 'Tyrants of the underdark', type: 'Deck Building / Placement ouvriers', niveau: 'Avancé', age: '14+', langue: 'EN', cover: 'https://cf.geekdo-images.com/F58jczp5xk9CYFimrytXaw__imagepagezoom/img/w2wr5vUusTlCzeL-9jA3bEX_pBM=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic2801874.jpg' },
//     { name: 'Super Fantasy Brawl', type: 'Affrontements', niveau: 'Avancé', age: '10+', langue: 'FR', cover: 'https://cf.geekdo-images.com/yT5dXJzCpgvBBmXr_zQDSQ__imagepagezoom/img/zouJ5346Ek-LPTHZSE-O5PZblUg=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4808077.jpg' },
//     { name: 'Shasn', type: 'Stratégie', niveau: 'Avancé', age: '16+', langue: 'EN', cover: 'https://cf.geekdo-images.com/REV41XH_xrquh9Unl_M2DA__imagepagezoom/img/90i47VKvslS-GkNuqzYDuXnW2FU=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4745701.png' },
//     { name: 'A Game of Thrones', type: 'Stratégie', niveau: 'Expert', age: '14+', langue: 'FR', cover: 'https://cf.geekdo-images.com/M_7UvwZvuxBVjxdadsa5AA__imagepagezoom/img/ZPrM6snVy0ywNlmQeP7208In9pU=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic1077906.jpg' },
//     { name: 'Vampire la Masquarade : Vendetta', type: 'Stratégie', niveau: 'Avancé', age: '12+', langue: 'FR', cover: 'https://cf.geekdo-images.com/V3Ff1dIMh6QrU2IeZabr_g__imagepagezoom/img/TRC2ujszD9Dsr_xs8evokk6MsdI=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4854194.png' },
//     { name: 'Shamans', type: 'Jeu de plis', niveau: 'Intermédiaire', age: '10+', langue: 'FR', cover: 'https://cf.geekdo-images.com/BNmYPPip0PZBPx9qJCEUxA__imagepagezoom/img/-MbZ9P_jhVg_ee0gQmyUEtvVlgw=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic6021323.jpg' },
//     { name: 'Shamans', type: 'Jeu de plis', niveau: 'Intermédiaire', age: '10+', langue: 'FR', cover: 'https://cf.geekdo-images.com/BNmYPPip0PZBPx9qJCEUxA__imagepagezoom/img/-MbZ9P_jhVg_ee0gQmyUEtvVlgw=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic6021323.jpg' },
//     { name: 'Shamans', type: 'Jeu de plis', niveau: 'Intermédiaire', age: '10+', langue: 'FR', cover: 'https://cf.geekdo-images.com/BNmYPPip0PZBPx9qJCEUxA__imagepagezoom/img/-MbZ9P_jhVg_ee0gQmyUEtvVlgw=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic6021323.jpg' },
//     { name: 'Shamans', type: 'Jeu de plis', niveau: 'Intermédiaire', age: '10+', langue: 'FR', cover: 'https://cf.geekdo-images.com/BNmYPPip0PZBPx9qJCEUxA__imagepagezoom/img/-MbZ9P_jhVg_ee0gQmyUEtvVlgw=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic6021323.jpg' },
//     { name: 'Shamans', type: 'Jeu de plis', niveau: 'Intermédiaire', age: '10+', langue: 'FR', cover: 'https://cf.geekdo-images.com/BNmYPPip0PZBPx9qJCEUxA__imagepagezoom/img/-MbZ9P_jhVg_ee0gQmyUEtvVlgw=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic6021323.jpg' },
//     { name: 'Shamans', type: 'Jeu de plis', niveau: 'Intermédiaire', age: '10+', langue: 'FR', cover: 'https://cf.geekdo-images.com/BNmYPPip0PZBPx9qJCEUxA__imagepagezoom/img/-MbZ9P_jhVg_ee0gQmyUEtvVlgw=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic6021323.jpg' },
//     { name: 'Shamans', type: 'Jeu de plis', niveau: 'Intermédiaire', age: '10+', langue: 'FR', cover: 'https://cf.geekdo-images.com/BNmYPPip0PZBPx9qJCEUxA__imagepagezoom/img/-MbZ9P_jhVg_ee0gQmyUEtvVlgw=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic6021323.jpg' },
//     { name: 'Shamans', type: 'Jeu de plis', niveau: 'Intermédiaire', age: '10+', langue: 'FR', cover: 'https://cf.geekdo-images.com/BNmYPPip0PZBPx9qJCEUxA__imagepagezoom/img/-MbZ9P_jhVg_ee0gQmyUEtvVlgw=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic6021323.jpg' },

// ]

const games = [
    {
        "ID": 3809,
        "Titre": "6 qui prend !",
        "Sous-titre": "",
        "Édition": 2012,
        "Type": "basegame",
        "EAN": 3421272101337,
        "Prix": 13,
        "Joueurs": "2 — 10",
        "Duree": "30 — 60",
        "Ages": "10+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "6 qui prend",
        "Categories": "Jeu de Cartes",
        "Themes": "Abstrait,Animaux,Vache",
        "Mecanismes": "Bluff,Choix simultanés,Guessing",
        "Editeurs": "Amigo Spiele,Gigamic",
        "Auteurs": "Wolfgang Kramer",
        "Illustrateurs": "Franz Vohwinkel",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 1005,
        "Titre": "7 Wonders Duel",
        "Sous-titre": "",
        "Édition": 2015,
        "Type": "basegame",
        "EAN": "5425016923801,5425016924235",
        "Prix": 25,
        "Joueurs": "Duo",
        "Duree": 30,
        "Ages": "10+",
        "Langues": "français",
        "Univers": "7 Wonders",
        "Gammes": "7 Wonders Duel",
        "Categories": "Jeu de Cartes,Jeu de plateau",
        "Themes": "Antiquité,Civilisation",
        "Mecanismes": "Affrontement Direct,Blocage,Construction,Course,Draft,Duo,Gestion de ressources,Majorité,Prise de risque",
        "Editeurs": "Repos Production",
        "Auteurs": "Antoine Bauza,Bruno Cathala",
        "Illustrateurs": "Miguel Coimbra",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 40856,
        "Titre": "7 Wonders Duel - Agora",
        "Sous-titre": "",
        "Édition": 2020,
        "Type": "extension",
        "EAN": 5425016924310,
        "Prix": 20,
        "Joueurs": "Duo",
        "Duree": 30,
        "Ages": "10+",
        "Langues": "français",
        "Univers": "7 Wonders",
        "Gammes": "7 Wonders Duel",
        "Categories": "Jeu de Cartes,Jeu de plateau",
        "Themes": "Antiquité,Civilisation,Politique",
        "Mecanismes": "Affrontement Direct,Blocage,Construction,Course,Draft,Duo,Gestion de ressources,Majorité,Prise de risque",
        "Editeurs": "Repos Production",
        "Auteurs": "Antoine Bauza,Bruno Cathala",
        "Illustrateurs": "Miguel Coimbra",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 1616,
        "Titre": "Abyss",
        "Sous-titre": "",
        "Édition": 2014,
        "Type": "basegame",
        "EAN": 3770000010053,
        "Prix": 40,
        "Joueurs": "2 — 4",
        "Duree": 45,
        "Ages": "14+",
        "Langues": "français",
        "Univers": "Abyss",
        "Gammes": "Abyss",
        "Categories": "Jeu de Cartes,Jeu de plateau",
        "Themes": "Fantastique,Maritime,Mythologie,Océan,Science-fiction",
        "Mecanismes": "Collection,Combinaison,Enchères,Gestion de main,Pioche,Pouvoir,Stop ou encore",
        "Editeurs": "Bombyx",
        "Auteurs": "Bruno Cathala,Charles Chevallier",
        "Illustrateurs": "Xavier Collette",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 23357,
        "Titre": "Aeon's End",
        "Sous-titre": "",
        "Édition": 2018,
        "Type": "basegame",
        "EAN": 3760146644274,
        "Prix": 45,
        "Joueurs": "1 — 4",
        "Duree": "60 — 120",
        "Ages": "14+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Aeon's End",
        "Categories": "Jeu de Cartes",
        "Themes": "Médiéval Fantastique,Monstres",
        "Mecanismes": "Coopération,Deck building,Gestion de main,Pouvoir",
        "Editeurs": "Matagot",
        "Auteurs": "Kevin Riley",
        "Illustrateurs": "Gong Studios,Scott Hartman,Stephanie Gustafsson",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 57209,
        "Titre": "Alice is Missing",
        "Sous-titre": "",
        "Édition": 2022,
        "Type": "basegame",
        "EAN": 9791094150504,
        "Prix": 18,
        "Joueurs": "3 — 5",
        "Duree": "120+",
        "Ages": "16+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Alice is Missing",
        "Categories": "Jeu De Rôle",
        "Themes": "Enfant,Enquêtes & Mystères",
        "Mecanismes": "Communication Restreinte,Coopération,Narration,Rôle,Scénario",
        "Editeurs": "Origames",
        "Auteurs": "Spenser Starke",
        "Illustrateurs": "Julianne Griepp",
        "Acquisition": "2024-05-29",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 4947,
        "Titre": "Bang!",
        "Sous-titre": "",
        "Édition": 2011,
        "Type": "basegame",
        "EAN": 3558380005605,
        "Prix": 20,
        "Joueurs": "4 — 7",
        "Duree": "20 — 40",
        "Ages": "8+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Bang!",
        "Categories": "Jeu de Cartes",
        "Themes": "Far West",
        "Mecanismes": "Affrontement Direct,Combinaison,Équipe,Gestion de main,Rôle secret",
        "Editeurs": "Dv Giochi",
        "Auteurs": "Emiliano Sciarra",
        "Illustrateurs": "Alex Pierangelini",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 5169,
        "Titre": "Boggle",
        "Sous-titre": "",
        "Édition": 1974,
        "Type": "basegame",
        "EAN": "",
        "Prix": 0,
        "Joueurs": "1 — 8",
        "Duree": 30,
        "Ages": "8+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Boggle",
        "Categories": "Jeu de lettres",
        "Themes": "Abstrait,Lettres",
        "Mecanismes": "Logique",
        "Editeurs": "Capiépa",
        "Auteurs": "Alan Turoff",
        "Illustrateurs": "",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 16613,
        "Titre": "Bohnanza",
        "Sous-titre": "",
        "Édition": 2009,
        "Type": "basegame",
        "EAN": 3421272104017,
        "Prix": 10,
        "Joueurs": "2 — 5",
        "Duree": 60,
        "Ages": "12+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Bohnanza",
        "Categories": "Jeu de Cartes",
        "Themes": "Commerce,Fruits & légumes",
        "Mecanismes": "Collection,Commerce,Échange & Troc,Gestion de main",
        "Editeurs": "Gigamic",
        "Auteurs": "Uwe Rosenberg",
        "Illustrateurs": "Björn Pertoft",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 35740,
        "Titre": "Carcassonne",
        "Sous-titre": "",
        "Édition": 2016,
        "Type": "basegame",
        "EAN": 8435407619968,
        "Prix": "24,95",
        "Joueurs": "2 — 5",
        "Duree": "30 — 60",
        "Ages": "8+",
        "Langues": "français",
        "Univers": "Carcassonne",
        "Gammes": "Carcassonne",
        "Categories": "Jeu de tuiles",
        "Themes": "Médiéval,Ville",
        "Mecanismes": "Blocage,Connexion,Majorité,Placement,Pose de tuiles",
        "Editeurs": "Hans Im Glück,Z-Man Games",
        "Auteurs": "Klaus-Jürgen Wrede",
        "Illustrateurs": "Anne Pätzke,Chris Quilliams",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 19557,
        "Titre": "Citadelles",
        "Sous-titre": "",
        "Édition": 2016,
        "Type": "basegame",
        "EAN": "3558380038924,8433407639126",
        "Prix": 15,
        "Joueurs": "2 — 7",
        "Duree": "30 — 60",
        "Ages": "10+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Citadelles",
        "Categories": "Jeu de Cartes",
        "Themes": "Médiéval Fantastique",
        "Mecanismes": "Bluff,Choix multiples,Choix simultanés,Construction,Draft,Gestion de main,Pouvoir",
        "Editeurs": "Edge Entertainment",
        "Auteurs": "Bruno Faidutti",
        "Illustrateurs": "Didier Graffet,Florence Magnin,Jean-Louis Mourier,Julien Delval",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 3648,
        "Titre": "City of Horror",
        "Sous-titre": "",
        "Édition": 2012,
        "Type": "basegame",
        "EAN": "",
        "Prix": 50,
        "Joueurs": "3 — 6",
        "Duree": 60,
        "Ages": "10+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "City of Horror",
        "Categories": "Jeu de plateau",
        "Themes": "Horreur,Survie,Zombies",
        "Mecanismes": "Dans Ta Face,Diplomatie,Négociation,Trahison",
        "Editeurs": "Repos Production",
        "Auteurs": "Nicolas Normandon",
        "Illustrateurs": "Miguel Coimbra",
        "Acquisition": "2022-01-22",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 23635,
        "Titre": "Coimbra",
        "Sous-titre": "",
        "Édition": 2018,
        "Type": "basegame",
        "EAN": 4061897521104,
        "Prix": 44,
        "Joueurs": "2 — 4",
        "Duree": "60 — 90",
        "Ages": "14+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Coimbra",
        "Categories": "Jeu de dés",
        "Themes": "Portugal,Renaissance,Ville",
        "Mecanismes": "Collection,Draft,Jet De Dés",
        "Editeurs": "Eggertspiele",
        "Auteurs": "Flaminia Brasini,Virginio Gigli",
        "Illustrateurs": "Chris Quilliams",
        "Acquisition": "2022-01-22",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 73844,
        "Titre": "Courtisans",
        "Sous-titre": "",
        "Édition": 2024,
        "Type": "basegame",
        "EAN": 3760273010423,
        "Prix": "17,9",
        "Joueurs": "2 — 5",
        "Duree": "20 — 30",
        "Ages": "8+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "",
        "Categories": "Jeu de Cartes",
        "Themes": "Médiéval,Royauté",
        "Mecanismes": "Chance & Hasard,Choix multiples,Collection,Dans Ta Face,Majorité,Placement de cartes,Pouvoir",
        "Editeurs": "Catch Up Games",
        "Auteurs": "Anthony Perone,Romaric Galonnier",
        "Illustrateurs": "Noëmie Chevalier",
        "Acquisition": "2024-05-29",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 7225,
        "Titre": "Cyclades",
        "Sous-titre": "",
        "Édition": 2009,
        "Type": "basegame",
        "EAN": 3760146642010,
        "Prix": 49,
        "Joueurs": "2 — 5",
        "Duree": 90,
        "Ages": "10+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Cyclades",
        "Categories": "Jeu de plateau",
        "Themes": "Antiquité,Grèce,Guerre,Les îles,Monstres,Mythologie",
        "Mecanismes": "Conquête,Contrôle de zone,Enchères,Gestion,Jet De Dés,Majorité,Plateau modulaire",
        "Editeurs": "Matagot",
        "Auteurs": "Bruno Cathala,Ludovic Maublanc",
        "Illustrateurs": "Miguel Coimbra",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 28270,
        "Titre": "Dany",
        "Sous-titre": "",
        "Édition": 2019,
        "Type": "basegame",
        "EAN": 3760290560000,
        "Prix": "15,9",
        "Joueurs": "3 — 8",
        "Duree": 30,
        "Ages": "16+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Dany",
        "Categories": "Jeu de Cartes",
        "Themes": "Abstrait,Onirique",
        "Mecanismes": "Bluff,Déduction,Rôle",
        "Editeurs": "Grrre Games",
        "Auteurs": "Phil Vizcarro",
        "Illustrateurs": "Bengal",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 1385,
        "Titre": "Dead of Winter",
        "Sous-titre": "À la croisée des chemins",
        "Édition": 2014,
        "Type": "basegame",
        "EAN": "0688623420001,8435407621831",
        "Prix": 59,
        "Joueurs": "2 — 5",
        "Duree": "60 — 120",
        "Ages": "13+",
        "Langues": "français,anglais",
        "Univers": "",
        "Gammes": "Dead Of Winter",
        "Categories": "Jeu de plateau",
        "Themes": "Horreur,Post-apocalyptique,Survie,Zombies",
        "Mecanismes": "Bluff,Coopération,Diplomatie,Narration,Objectif secret,Points d'action,Rôle secret,Semi-coopération,Trahison",
        "Editeurs": "Filosofia,Plaid Hat Games",
        "Auteurs": "Isaac Vega,Jonathan Gilmour",
        "Illustrateurs": "Fernanda Suarez",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 28994,
        "Titre": "Dig your way out",
        "Sous-titre": "",
        "Édition": 2019,
        "Type": "basegame",
        "EAN": 3770003625612,
        "Prix": 35,
        "Joueurs": "2 — 6",
        "Duree": "40 — 45",
        "Ages": "16+",
        "Langues": "français,anglais",
        "Univers": "",
        "Gammes": "Dig your way out",
        "Categories": "Jeu de plateau",
        "Themes": "Évasion,Gangs,Mafia,Prison",
        "Mecanismes": "Déduction,Jet De Dés,Points d'action",
        "Editeurs": "Borderline",
        "Auteurs": "David Simide",
        "Illustrateurs": "Mihajlo Dimitrievski",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 259,
        "Titre": "Docteur Pilule",
        "Sous-titre": "",
        "Édition": 2016,
        "Type": "basegame",
        "EAN": 3760032260724,
        "Prix": 19,
        "Joueurs": "4 — 10",
        "Duree": "15 — 30",
        "Ages": "10+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Docteur Pilule",
        "Categories": "Jeu d'Ambiance,Jeu de plateau",
        "Themes": "Sciences",
        "Mecanismes": "Affrontement Direct,Déduction,Équipe,Gestion de main",
        "Editeurs": "Fantastic Lombric",
        "Auteurs": "Guillaume Brunier,Jacques Exetier,Jean-Philippe Caro",
        "Illustrateurs": "Guillaume Brunier,Jacques Exertier,Jean-Phillipe Caro",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 37573,
        "Titre": "Dual Powers",
        "Sous-titre": "Revolution 1917",
        "Édition": 2020,
        "Type": "basegame",
        "EAN": 3663411310631,
        "Prix": 30,
        "Joueurs": "1 — 2",
        "Duree": "30 — 60",
        "Ages": "13+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Dual Powers",
        "Categories": "Jeu de plateau",
        "Themes": "Guerre,Historique,Politique,Russie",
        "Mecanismes": "Conquête,Déduction,Gestion de main",
        "Editeurs": "Don't Panic Games",
        "Auteurs": "Brett Myers",
        "Illustrateurs": "Kwanchai Moriya,Luis Francisco",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 21314,
        "Titre": "Exit - La Cabane Abandonnée",
        "Sous-titre": "",
        "Édition": 2017,
        "Type": "basegame",
        "EAN": 3760175514395,
        "Prix": "12,5",
        "Joueurs": "1 — 6",
        "Duree": "60 — 120",
        "Ages": "12+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Exit",
        "Categories": "Escape Game",
        "Themes": "Enquêtes & Mystères,Nature",
        "Mecanismes": "Altération de Matériel,Coopération,Déduction,Défis,Énigme,Logique,Observation,Réflexion",
        "Editeurs": "Iello,Kosmos",
        "Auteurs": "Inka Brand,Markus Brand",
        "Illustrateurs": "Franz Vohwinkel",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 72786,
        "Titre": "Flowers",
        "Sous-titre": "",
        "Édition": 2024,
        "Type": "basegame",
        "EAN": 3760400210009,
        "Prix": 0,
        "Joueurs": "1 — 4",
        "Duree": 20,
        "Ages": "7+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "",
        "Categories": "Jeu de Cartes",
        "Themes": "Chiffres,Couleurs,Végétaux",
        "Mecanismes": "Combinaison,Connexion,Placement de cartes,Stratégie",
        "Editeurs": "Actarus Editions",
        "Auteurs": "Paul-Henri Argiot",
        "Illustrateurs": "Julie Gruet",
        "Acquisition": "2024-06-27",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 10757,
        "Titre": "Guillotine",
        "Sous-titre": "",
        "Édition": 2007,
        "Type": "basegame",
        "EAN": "",
        "Prix": 15,
        "Joueurs": "2 — 5",
        "Duree": 30,
        "Ages": "12+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Guillotine",
        "Categories": "Jeu de Cartes",
        "Themes": "France,Historique,Humour,Révolution Française",
        "Mecanismes": "Collection,Gestion de main,Placement de cartes,Pouvoir",
        "Editeurs": "Play Factory",
        "Auteurs": "Paul Peterson",
        "Illustrateurs": "Mike Raabe,Quinton Hoover",
        "Acquisition": "2022-01-22",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 19595,
        "Titre": "Imaginarium",
        "Sous-titre": "",
        "Édition": 2018,
        "Type": "basegame",
        "EAN": 3760267990137,
        "Prix": 49,
        "Joueurs": "2 — 5",
        "Duree": "60 — 90",
        "Ages": "14+",
        "Langues": "français,anglais,allemand,japonais",
        "Univers": "Imaginarium",
        "Gammes": "Imaginarium",
        "Categories": "Jeu de plateau",
        "Themes": "Fantastique,Industrie,Onirique,Steam Punk",
        "Mecanismes": "Combinaison,Course,Gestion",
        "Editeurs": "Bombyx",
        "Auteurs": "Bruno Cathala,Florian Sirieix",
        "Illustrateurs": "Felideus Bubastis",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 7470,
        "Titre": "Jaipur",
        "Sous-titre": "",
        "Édition": 2009,
        "Type": "basegame",
        "EAN": "7640131630054,7640131630184",
        "Prix": 20,
        "Joueurs": "Duo",
        "Duree": 30,
        "Ages": "12+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Jaipur",
        "Categories": "Jeu de Cartes",
        "Themes": "Animaux,Chameau,Commerce,Inde",
        "Mecanismes": "Combinaison,Défausse,Duo,Gestion de main",
        "Editeurs": "Gameworks",
        "Auteurs": "Sébastien Pauchon",
        "Illustrateurs": "Alexandre Roche",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 47693,
        "Titre": "Jekyll vs Hyde",
        "Sous-titre": "",
        "Édition": 2021,
        "Type": "basegame",
        "EAN": 3770000282603,
        "Prix": 16,
        "Joueurs": "Duo",
        "Duree": 20,
        "Ages": "8+",
        "Langues": "français,anglais,coréen",
        "Univers": "Jekyll & Hyde",
        "Gammes": "Jekyll vs Hyde",
        "Categories": "Jeu de Cartes",
        "Themes": "Époque Victorienne,Littérature",
        "Mecanismes": "Affrontement Direct,Asymétrie,Duo,Plis,Pouvoir",
        "Editeurs": "Mandoo Games",
        "Auteurs": "Geon-Il",
        "Illustrateurs": "Vincent Dutrait",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 575,
        "Titre": "King of Tokyo",
        "Sous-titre": "",
        "Édition": 2016,
        "Type": "basegame",
        "EAN": 3760175513152,
        "Prix": 32,
        "Joueurs": "2 — 6",
        "Duree": 30,
        "Ages": "8+",
        "Langues": "français",
        "Univers": "King of Tokyo",
        "Gammes": "King of Tokyo",
        "Categories": "Jeu de Cartes,Jeu de dés,Jeu de plateau",
        "Themes": "Asie,Japon,Monstres,Science-fiction,Tokyo,Ville",
        "Mecanismes": "Affrontement Direct,Chance & Hasard,Combinaison,Élimination,Gestion de main,Jet De Dés,Pouvoir",
        "Editeurs": "Iello",
        "Auteurs": "Richard Garfield",
        "Illustrateurs": "Anthony Wolff,Igor Polouchine,Jean-Baptiste Reynaud,Régis Torres,Romain Gaschet",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 22916,
        "Titre": "Kitchen Rush",
        "Sous-titre": "",
        "Édition": 2017,
        "Type": "basegame",
        "EAN": 3770005193133,
        "Prix": 55,
        "Joueurs": "1 — 4",
        "Duree": "30 — 45",
        "Ages": "12+",
        "Langues": "français,anglais",
        "Univers": "",
        "Gammes": "Kitchen Rush",
        "Categories": "Jeu de plateau",
        "Themes": "Cuisine,Restaurant",
        "Mecanismes": "Choix simultanés,Coopération,Gestion,Placement d'ouvriers,Rapidité,Solo,Temps réel",
        "Editeurs": "Artipia Games,Geek Attitude Games",
        "Auteurs": "Dávid Turczi,Vangelis Bagiartakis",
        "Illustrateurs": "Gong Studios",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 4212,
        "Titre": "La Guerre des Moutons",
        "Sous-titre": "",
        "Édition": 2002,
        "Type": "basegame",
        "EAN": 3558380000235,
        "Prix": 20,
        "Joueurs": "2 — 4",
        "Duree": 30,
        "Ages": "7+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "La Guerre Des Moutons",
        "Categories": "Jeu de plateau",
        "Themes": "Animaux,Chasse,Loup,Moutons",
        "Mecanismes": "Bluff,Gestion de main,Placement,Pose de tuiles",
        "Editeurs": "Asmodee,Lui-Même",
        "Auteurs": "Philippe Des Pallières",
        "Illustrateurs": "François Bruel",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 15455,
        "Titre": "Le Poker des cafards",
        "Sous-titre": "",
        "Édition": 2011,
        "Type": "basegame",
        "EAN": 3421272106813,
        "Prix": "11,9",
        "Joueurs": "2 — 6",
        "Duree": 15,
        "Ages": "8+",
        "Langues": "français",
        "Univers": "De cafards",
        "Gammes": "Le Poker des Cafards",
        "Categories": "Jeu de Cartes",
        "Themes": "Animaux,Araignées,Crapaud,Insectes,Mouche,Rats",
        "Mecanismes": "Bluff,Chance & Hasard,Collection",
        "Editeurs": "Drei Magier Spiele,Gigamic",
        "Auteurs": "Jacques Zeimet",
        "Illustrateurs": "Rolf Vogt",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 70810,
        "Titre": "Le Roy des Ribauds",
        "Sous-titre": "",
        "Édition": 2024,
        "Type": "basegame",
        "EAN": 9782355746826,
        "Prix": "8,9",
        "Joueurs": "Duo",
        "Duree": "10 — 15",
        "Ages": "10+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Micro-Game Matagot",
        "Categories": "Jeu de Cartes",
        "Themes": "Bande dessinée,Médiéval",
        "Mecanismes": "Placement de cartes,Pouvoir,Stratégie",
        "Editeurs": "Matagot",
        "Auteurs": "Erwann Ricord",
        "Illustrateurs": "Ronan Toulhoat",
        "Acquisition": "2024-06-27",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 4113,
        "Titre": "Le Trône de Fer",
        "Sous-titre": "Le jeu de plateau",
        "Édition": 2011,
        "Type": "basegame",
        "EAN": 8435407600010,
        "Prix": 60,
        "Joueurs": "3 — 6",
        "Duree": 150,
        "Ages": "14+",
        "Langues": "français",
        "Univers": "Game of Thrones",
        "Gammes": "Le Trône de Fer JDP",
        "Categories": "Jeu de plateau",
        "Themes": "Fantastique,Guerre,Médiéval",
        "Mecanismes": "Affrontement Direct,Choix simultanés,Conquête,Déduction,Déplacement,Diplomatie,Enchères à poing fermé,Programmation,Trahison",
        "Editeurs": "Edge Entertainment,Fantasy Flight Games",
        "Auteurs": "Christian T. Petersen",
        "Illustrateurs": "",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 28768,
        "Titre": "Le Trône de Fer  - Mère des Dragons",
        "Sous-titre": "Le jeu de plateau",
        "Édition": 2019,
        "Type": "extension",
        "EAN": 8435407622944,
        "Prix": "35,9",
        "Joueurs": "3 — 8",
        "Duree": 150,
        "Ages": "12+",
        "Langues": "français",
        "Univers": "Game of Thrones",
        "Gammes": "Le Trône de Fer JDP",
        "Categories": "Jeu de plateau",
        "Themes": "Fantastique,Guerre,Médiéval",
        "Mecanismes": "Affrontement Direct,Choix simultanés,Conquête,Déduction,Déplacement,Diplomatie,Enchères à poing fermé,Programmation,Trahison",
        "Editeurs": "Fantasy Flight Games",
        "Auteurs": "Christian T. Petersen",
        "Illustrateurs": "",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    },
    {
        "ID": 4484,
        "Titre": "Les Aventuriers du Rail",
        "Sous-titre": "",
        "Édition": 2008,
        "Type": "basegame",
        "EAN": "0824968717813",
        "Prix": 40,
        "Joueurs": "2 — 5",
        "Duree": 45,
        "Ages": "8+",
        "Langues": "français",
        "Univers": "",
        "Gammes": "Les Aventuriers Du Rail",
        "Categories": "Jeu de plateau",
        "Themes": "Trains,Transport & voyage",
        "Mecanismes": "Collection,Connexion,Objectif secret,Pioche,Placement",
        "Editeurs": "Days Of Wonder",
        "Auteurs": "Alan R. Moon",
        "Illustrateurs": "Julien Delval",
        "Acquisition": "2022-01-17",
        "Propriétaire": "",
        "Cadeaux": "",
        "Emplacement": "",
        "Prix d'achat": "",
        "Etat": "",
        "Prive": "non",
        "Commentaire": "",
        "Reference": "",
        "Referent": "",
        "Derniere-partie": ""
    }
]

// Variable pour accéder à toutes les balides dans le code HTML (page 'Ma Collection')
const gamesImages = document.querySelectorAll('.image');
const gamesTitres = document.querySelectorAll('.name');
const gamesTypes = document.querySelectorAll('.type');
const gamesLevel = document.querySelectorAll('.niveau');
const gamesAge = document.querySelectorAll('.age');
const gamesLang = document.querySelectorAll('.langue');

// Boucle pour récupérer toutes les informations dans le tableau d'objet et les envoyer aux bons endroits
for (let i = 0; i < games.length; i++) {
    if (games[i].Titre != '') {
        gamesTitres[i].innerHTML = `<b>${games[i].Titre}</b>`
    }

    if (games[i].Categories != '') {
        gamesTypes[i].innerText = games[i].Categories
    }

    if (games[i].Editeurs != '') {
        gamesLevel[i].textContent = games[i].Editeurs
    }

    if (games[i].Ages != '') {
        gamesAge[i].innerHTML = `<b>${games[i].Ages}</b>`
    }

    if (games[i].Langues != '') {
        gamesLang[i].innerText = games[i].Langues
    }

    if (games[i].Referent != '') {
        gamesImages[i].src = games[i].Referent
    } else {
        gamesImages[i].src = 'https://img.itch.zone/aW1nLzUxMjk1NDYuanBn/original/nrtGQr.jpg'
    }


}




