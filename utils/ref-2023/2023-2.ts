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
                    id: 'carla_ferrari',
                    name: 'Carla Ferrari', img: 'carla-ferrari-portrait.webp',
                    dishes: []
                },
                {
                    id: 'hugo_riboulet',
                    name: 'Hugo Riboulet', img: 'hugo-riboulet-portrait.webp', dishes: [
                        { name: 'Tu Tires ou Tu Pointes?', img: 'hugo.png', show: 2, year: 2023, heart: false },
                    ]
                },
                { 
                    id: 'sarika_sor',
                    name: 'Sarika Sor', img: 'sarika-sor-portrait.webp', dishes: [] },
                {
                    id: 'albane_aubray',
                    name: 'Albane Aubray', img: 'albane-aubray-portrait.webp', dishes: [
                        { name: 'Une Lumière de Moules-Frites', img: 'albane.png', show: 2, year: 2023, heart: false },
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
                { 
                    id: 'jeremie_falissard',
                    name: 'Jérémie Falissard', img: 'jeremie-falissard-portrait.webp', dishes: [] },
                {
                    id: 'mathieu_lagarde',
                    name: 'Mathieu Lagarde', img: 'mathieu-lagarde-portrait.webp', dishes: [
                        { name: 'Puzzle à la seconde', img: 'matthieu-1.png', show: 2, year: 2023, heart: false },
                        { name: 'Transparence Naturelle', img: 'matthieu-2.png', show: 2, year: 2023, heart: false },
                    ]
                },
                {
                    id: 'cesar_lewandowski',
                    name: 'César Lewandowski', img: 'cesar-lewandowski-portrait.webp', dishes: [
                        { name: 'Molenbrique', img: 'cesar-1.png', show: 2, year: 2023, heart: false },
                        { name: 'Le Plat Transparent de César', img: 'cesar-2.png', show: 2, year: 2023, heart: true },
                    ]
                },
                { 
                    id: 'alexandre_marchon',
                    name: 'Alexandre Marchon', img: 'alexandre-marchon-portrait.webp', dishes: [] },
            ]
        },
        {
            name: 'Violet',
            leader: 'Pairet',
            border: 'border-purple-700',
            background: 'bg-violet-200',
            chefs: [
                { 
                    id: 'victor_blanchet',
                    name: 'Victor Blanchet', img: 'victor-blanchet-portrait.webp', dishes: [] },
                {
                    id: 'jean_covillault',
                    name: 'Jean Covillault', img: 'jean-covillault-portrait.webp', dishes: [
                        { name: 'Fin de Repas Dans Une Tasse en Grès', img: 'jean.png', show: 2, year: 2023, heart: false },
                    ]
                },
                {
                    id: 'jacques_lagarde',
                    name: 'Jacques Lagarde', img: 'jacques-lagarde-portrait.webp', dishes: [
                        { name: 'Noel à l\'Etranger', img: 'jacques-1.png', show: 2, year: 2023, heart: false },
                        { name: 'La Pureté de la mer', img: 'jacques-2.png', show: 2, year: 2023, heart: false },

                    ]
                },
                { 
                    id: 'leo_renusson',
                    name: 'Léo Renusson', img: 'leo-renusson-portrait.webp', dishes: [] },
            ]
        },
        {
            name: 'Rouge',
            leader: 'Daroze',

            border: 'border-red-700',
            background: 'bg-red-200',
            chefs: [
                {
                    id: 'danny_khezzar',
                    name: 'Danny Khezzar', img: 'danny-khezzar-portrait.webp', dishes: [
                        { name: 'La Clé à Molette de mon Père', img: 'danny-1.png', show: 2, year: 2023, heart: false },
                        { name: 'Tzatziki 2.0', img: 'danny-2.png', show: 2, year: 2023, heart: false },
                        { name: 'Raviole Champignon-Betterave et Son Sabayon', img: 'danny-3.png', show: 2, year: 2023, heart: false },
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
                    id: 'gaston_savina',
                    name: 'Gaston Savina', img: 'gaston-savina-portrait.webp', dishes: [] },
            ]
        },
        {
            name: 'Eliminés',
            leader: '',
            background: 'bg-gray-200',
            border: 'border-black',
            chefs: [
                { 
                    id: 'berangere_fagart',
                    name: 'Bérangère Fagart', img: 'berangere-fagart-portrait.webp', dishes: [] },
                {
                    
                    id: 'miguel_garcia-herrera',
                    name: 'Miguel Garcia-Herrera', img: 'miguel-garcia-herrera-portrait.webp', dishes: [
                        { name: 'Caille, Purée de Céleri, Sauce XO', img: 'miguel.png', show: 2, year: 2023, heart: false },
                    ]
                },
            ]
        },
    ]
};
