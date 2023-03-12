import { Show } from "../ref_topchef";

export const data : Show = {
    id: 1,
    date: '01/03/2023',
    data:[
    {
        name: 'Bleu',
        leader: 'Etchebest',
        border: 'border-blue-700',
        background: 'bg-cyan-200',
        chefs: [
            { name: 'Carla Ferrari', img: 'carla-ferrari-portrait.webp',
                    dishes:[
                        { name: 'Pomme de Mer', img: 'images/dishes/2023/1/carla.png'},
                    ]},
            { name: 'Danny Khezzar', img: 'danny-khezzar-portrait.webp',
                    dishes:[
                        { name: 'Croissant de Pomme de Terre, Caramel de Fenouil et son consomme d\'oignon', img: 'images/dishes/2023/1/danny.png'},
                    ]},
            { name: 'Hugo Riboulet', img: 'hugo-riboulet-portrait.webp',
                    dishes:[
                        { name: 'Pates au Pesto', img: 'images/dishes/2023/1/hugo.png'},
                    ]},
            { name: 'Sarika Sor', img: 'sarika-sor-portrait.webp', dishes:[]  },
        ]
    },
    {
        name: 'Orange',
        leader: 'Viel',
        border: 'border-orange-700',
        background: 'bg-orange-200',
        chefs: [
            { name: 'Jérémie Falissard', img: 'jeremie-falissard-portrait.webp' ,
                    dishes:[
                        { name: 'La Pomme à la Coque', img: 'images/dishes/2023/1/jeremie.png'},
                    ]},
            { name: 'Mathieu Lagarde', img: 'mathieu-lagarde-portrait.webp',
                    dishes:[
                        { name: 'Taco de Patatas', img: 'images/dishes/2023/1/mathieu.png'},
                    ] },
            { name: 'César Lewandowski', img: 'cesar-lewandowski-portrait.webp',
                    dishes:[
                        { name: 'Gaufre Bruxelloise et son Tourteau', img: 'images/dishes/2023/1/cesar.png'},
                    ] },
            { name: 'Alexandre Marchon', img: 'alexandre-marchon-portrait.webp',
                    dishes:[
                        { name: 'Fleur de Pommier Givrée', img: 'images/dishes/2023/1/alexandre.png'},
                    ] },
        ]
    },
    {
        name: 'Violet',
        leader: 'Pairet',
        border: 'border-purple-700',
        background: 'bg-violet-200',
        chefs: [
            { name: 'Victor Blanchet', img: 'victor-blanchet-portrait.webp',
                    dishes:[
                        { name: 'Sandwich, Saucisse, Foie-Pomme', img: 'images/dishes/2023/1/victor.png'},
                    ] },
            { name: 'Jean Covillault', img: 'jean-covillault-portrait.webp',
                    dishes:[
                        { name: 'Omelette aux Champignons, Feu de Bois et Sauce au Vin', img: 'images/dishes/2023/1/jean.png'},
                    ] },
            { name: 'Jacques Lagarde', img: 'jacques-lagarde-portrait.webp',
                    dishes:[
                        { name: 'Avec ou Sans Patate', img: 'images/dishes/2023/1/jacques.png'},
                    ] },
            { name: 'Léo Renusson', img: 'leo-renusson-portrait.webp',
                    dishes:[
                        { name: 'Pomme Boudin', img: 'images/dishes/2023/1/leo.png'},
                    ] },
        ]
    },
    {
        name: 'Rouge',
        leader: 'Daroze',

        border: 'border-red-700',
        background: 'bg-red-200',
        chefs: [
            { name: 'Miguel Garcia-Herrera', img: 'miguel-garcia-herrera-portrait.webp',
                    dishes:[
                        { name: 'Pomme de Terre Façon Barbacoa', img: 'images/dishes/2023/1/miguel-1.png'},
                        { name: 'Le Poulet Qui a Maché dans la Mer', img: 'images/dishes/2023/1/miguel-2.png'},
                    ] },
        ]
    },
    {
        name: 'Solitaire',
        leader: '',
        border: 'white',
        background: 'bg-transparent',
        chefs: [
            { name: 'Albane Aubray', img: 'albane-aubray-portrait.webp',
                    dishes:[
                        { name: 'Holi-Pomme', img: 'images/dishes/2023/1/albane-1.png'},
                        { name: 'Souvenir de la Ferme', img: 'images/dishes/2023/1/albane-2.png'},
                    ] },
            { name: 'Gaston Savina', img: 'gaston-savina-portrait.webp',
                    dishes:[
                        { name: 'Le Trou Normand 2.0', img: 'images/dishes/2023/1/gaston-1.png'},
                        { name: 'Texture de Poulet Roti, Fenouil, Raisin', img: 'images/dishes/2023/1/gaston-2.png'},
                    ] },
        ]
    },
    {
        name: 'Eliminés',
        leader: '',
        background: 'bg-gray-200',
        border: 'border-black',
        chefs: [
            { name: 'Bérangère Fagart', img: 'berangere-fagart-portrait.webp',
                    dishes:[
                        { name: 'Patate à Sucre', img: 'images/dishes/2023/1/berangere-1.png'},
                        { name: 'Rouleau Croustillant Poulet et Verdure', img: 'images/dishes/2023/1/berangere-2.png'},
                    ] },
        ]
    },
]};

