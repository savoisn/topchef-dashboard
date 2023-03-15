import { Show } from "../ref_topchef";

export const data: Show =
{
    id: 2,
    date: '08/03/2023',
    data: [
        {
            name: 'Bleu',
            leader: 'Etchebest',
            border: 'border-blue-700',
            background: 'bg-cyan-200',
            chefs: [
                {
                    name: 'Carla Ferrari', img: 'carla-ferrari-portrait.webp',
                    dishes: []
                },
                {
                    name: 'Hugo Riboulet', img: 'hugo-riboulet-portrait.webp', dishes: [
                        { name: 'Tu Tires ou Tu Pointes?', img: 'images/dishes/2023/2/hugo.png' },
                    ]
                },
                { name: 'Sarika Sor', img: 'sarika-sor-portrait.webp', dishes: [] },
                {
                    name: 'Albane Aubray', img: 'albane-aubray-portrait.webp', dishes: [
                        { name: 'Une Lumière de Moules-Frites', img: 'images/dishes/2023/2/albane.png' },
                    ]
                },
            ]
        },
        {
            name: 'Orange',
            leader: 'Viel',
            border: 'border-orange-700',
            background: 'bg-orange-200',
            chefs: [
                { name: 'Jérémie Falissard', img: 'jeremie-falissard-portrait.webp', dishes: [] },
                {
                    name: 'Mathieu Lagarde', img: 'mathieu-lagarde-portrait.webp', dishes: [
                        { name: 'Puzzle à la seconde', img: 'images/dishes/2023/2/matthieu-1.png' },
                        { name: 'Transparence Naturelle', img: 'images/dishes/2023/2/matthieu-2.png' },
                    ]
                },
                {
                    name: 'César Lewandowski', img: 'cesar-lewandowski-portrait.webp', dishes: [
                        { name: 'Molenbrique', img: 'images/dishes/2023/2/cesar-1.png' },
                        { name: 'Le Plat Transparent de César', img: 'images/dishes/2023/2/cesar-2.png' },
                    ]
                },
                { name: 'Alexandre Marchon', img: 'alexandre-marchon-portrait.webp', dishes: [] },
            ]
        },
        {
            name: 'Violet',
            leader: 'Pairet',
            border: 'border-purple-700',
            background: 'bg-violet-200',
            chefs: [
                { name: 'Victor Blanchet', img: 'victor-blanchet-portrait.webp', dishes: [] },
                {
                    name: 'Jean Covillault', img: 'jean-covillault-portrait.webp', dishes: [
                        { name: 'Fin de Repas Dans Une Tasse en Grès', img: 'images/dishes/2023/2/jean.png' },
                    ]
                },
                {
                    name: 'Jacques Lagarde', img: 'jacques-lagarde-portrait.webp', dishes: [
                        { name: 'Noel à l\'Etranger', img: 'images/dishes/2023/2/jacques-1.png' },
                        { name: 'La Pureté de la mer', img: 'images/dishes/2023/2/jacques-2.png' },

                    ]
                },
                { name: 'Léo Renusson', img: 'leo-renusson-portrait.webp', dishes: [] },
            ]
        },
        {
            name: 'Rouge',
            leader: 'Daroze',

            border: 'border-red-700',
            background: 'bg-red-200',
            chefs: [
                {
                    name: 'Danny Khezzar', img: 'danny-khezzar-portrait.webp', dishes: [
                        { name: 'La Clé à Molette de mon Père', img: 'images/dishes/2023/2/danny-1.png' },
                        { name: 'Tzatziki 2.0', img: 'images/dishes/2023/2/danny-2.png' },
                        { name: 'Raviole Champignon-Betterave et Son Sabayon', img: 'images/dishes/2023/2/danny-3.png' },
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
                { name: 'Gaston Savina', img: 'gaston-savina-portrait.webp', dishes: [] },
            ]
        },
        {
            name: 'Eliminés',
            leader: '',
            background: 'bg-gray-200',
            border: 'border-black',
            chefs: [
                { name: 'Bérangère Fagart', img: 'berangere-fagart-portrait.webp', dishes: [] },
                {
                    name: 'Miguel Garcia-Herrera', img: 'miguel-garcia-herrera-portrait.webp', dishes: [
                        { name: 'Caille, Purée de Céleri, Sauce XO', img: 'images/dishes/2023/2/miguel.png' },
                    ]
                },
            ]
        },
    ]
};
