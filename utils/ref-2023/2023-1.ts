import { Show } from "../ref_topchef";

export const data: Show = {
    id: 1,
    date: '01/03/2023',
    data: [
        {
            name: 'Bleu',
            leader: 'Etchebest',
            border: 'border-blue-700',
            background: 'bg-cyan-200',
            chefs: [
                {
                    name: 'Carla Ferrari', img: 'carla-ferrari-portrait.webp',
                    dishes: [
                        { name: 'Pomme de Mer', img: 'images/dishes/2023/1/carla.png', heart: false },
                    ]
                },
                {
                    name: 'Danny Khezzar', img: 'danny-khezzar-portrait.webp',
                    dishes: [
                        { name: 'Croissant de Pomme de Terre, Caramel de Fenouil et son consomme d\'oignon', img: 'images/dishes/2023/1/danny.png', heart: false },
                    ]
                },
                {
                    name: 'Hugo Riboulet', img: 'hugo-riboulet-portrait.webp',
                    dishes: [
                        { name: 'Pates au Pesto', img: 'images/dishes/2023/1/hugo.png', heart: false },
                    ]
                },
                { name: 'Sarika Sor', img: 'sarika-sor-portrait.webp', dishes: [] },
            ]
        },
        {
            name: 'Orange',
            leader: 'Viel',
            border: 'border-orange-700',
            background: 'bg-orange-200',
            chefs: [
                {
                    name: 'Jérémie Falissard', img: 'jeremie-falissard-portrait.webp',
                    dishes: [
                        { name: 'La Pomme à la Coque', img: 'images/dishes/2023/1/jeremie.png', heart: false },
                    ]
                },
                {
                    name: 'Mathieu Lagarde', img: 'mathieu-lagarde-portrait.webp',
                    dishes: [
                        { name: 'Taco de Patatas', img: 'images/dishes/2023/1/mathieu.png', heart: false },
                    ]
                },
                {
                    name: 'César Lewandowski', img: 'cesar-lewandowski-portrait.webp',
                    dishes: [
                        { name: 'Gaufre Bruxelloise et son Tourteau', img: 'images/dishes/2023/1/cesar.png', heart: false },
                    ]
                },
                {
                    name: 'Alexandre Marchon', img: 'alexandre-marchon-portrait.webp',
                    dishes: [
                        { name: 'Fleur de Pommier Givrée', img: 'images/dishes/2023/1/alexandre.png', heart: false },
                    ]
                },
            ]
        },
        {
            name: 'Violet',
            leader: 'Pairet',
            border: 'border-purple-700',
            background: 'bg-violet-200',
            chefs: [
                {
                    name: 'Victor Blanchet', img: 'victor-blanchet-portrait.webp',
                    dishes: [
                        { name: 'Sandwich, Saucisse, Foie-Pomme', img: 'images/dishes/2023/1/victor.png', heart: false },
                    ]
                },
                {
                    name: 'Jean Covillault', img: 'jean-covillault-portrait.webp',
                    dishes: [
                        { name: 'Omelette aux Champignons, Feu de Bois et Sauce au Vin', img: 'images/dishes/2023/1/jean.png', heart: false },
                    ]
                },
                {
                    name: 'Jacques Lagarde', img: 'jacques-lagarde-portrait.webp',
                    dishes: [
                        { name: 'Avec ou Sans Patate', img: 'images/dishes/2023/1/jacques.png', heart: false },
                    ]
                },
                {
                    name: 'Léo Renusson', img: 'leo-renusson-portrait.webp',
                    dishes: [
                        { name: 'Pomme Boudin', img: 'images/dishes/2023/1/leo.png', heart: false },
                    ]
                },
            ]
        },
        {
            name: 'Rouge',
            leader: 'Daroze',

            border: 'border-red-700',
            background: 'bg-red-200',
            chefs: [
                {
                    name: 'Miguel Garcia-Herrera', img: 'miguel-garcia-herrera-portrait.webp',
                    dishes: [
                        { name: 'Pomme de Terre Façon Barbacoa', img: 'images/dishes/2023/1/miguel-1.png', heart: false },
                        { name: 'Le Poulet Qui a Maché dans la Mer', img: 'images/dishes/2023/1/miguel-2.png', heart: false },
                    ]
                },
            ]
        },
        {
            name: 'Solitaire',
            leader: '',
            border: 'white',
            background: 'bg-transparent',
            chefs: [
                {
                    name: 'Albane Aubray', img: 'albane-aubray-portrait.webp',
                    dishes: [
                        { name: 'Holi-Pomme', img: 'images/dishes/2023/1/albane-1.png', heart: false },
                        { name: 'Souvenir de la Ferme', img: 'images/dishes/2023/1/albane-2.png', heart: false },
                    ]
                },
                {
                    name: 'Gaston Savina', img: 'gaston-savina-portrait.webp',
                    dishes: [
                        { name: 'Le Trou Normand 2.0', img: 'images/dishes/2023/1/gaston-1.png', heart: false },
                        { name: 'Texture de Poulet Roti, Fenouil, Raisin', img: 'images/dishes/2023/1/gaston-2.png', heart: false },
                    ]
                },
            ]
        },
        {
            name: 'Eliminés',
            leader: '',
            background: 'bg-gray-200',
            border: 'border-black',
            chefs: [
                {
                    name: 'Bérangère Fagart', img: 'berangere-fagart-portrait.webp',
                    dishes: [
                        { name: 'Patate à Sucre', img: 'images/dishes/2023/1/berangere-1.png', heart: false },
                        { name: 'Rouleau Croustillant Poulet et Verdure', img: 'images/dishes/2023/1/berangere-2.png', heart: false },
                    ]
                },
            ]
        },
    ]
};

