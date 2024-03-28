
import { Show } from "../ref_topchef";

export const data: Show =
{
    id: 3,
    date: '15/03/2023',
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
                    dishes: [
                        { name: 'La Pasta Bare', img: 'carla-sarika.png', show: 3, year: 2023, heart: false },
                        { name: 'Mexi-Kebab', img: 'carla.png', show: 3, year: 2023, heart: false },
                    ]
                },
                {
                    id: 'hugo_riboulet',
                    name: 'Hugo Riboulet', img: 'hugo-riboulet-portrait.webp', dishes: []
                },
                {
                    id: 'sarika_sor',
                    name: 'Sarika Sor', img: 'sarika-sor-portrait.webp', dishes: [
                        { name: 'La Pasta Bare', img: 'carla-sarika.png', show: 3, year: 2023, heart: false },
                        { name: 'Kebao Souffle', img: 'sarika.png', show: 3, year: 2023, heart: false },
                    ]
                },
                {
                    id: 'albane_aubray',
                    name: 'Albane Aubray', img: 'albane-aubray-portrait.webp', dishes: []
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
                    name: 'Jérémie Falissard', img: 'jeremie-falissard-portrait.webp', dishes: [
                        { name: 'Le Bourgui\'Street', img: 'alexandre-jeremie.png', show: 3, year: 2023, heart: false },
                        { name: 'Maquereau Chrome', img: 'jeremie.png', show: 3, year: 2023, heart: true },
                    ]
                },
                {
                    id: 'mathieu_lagarde',
                    name: 'Mathieu Lagarde', img: 'mathieu-lagarde-portrait.webp', dishes: []
                },
                {
                    id: 'cesar_lewandowski',
                    name: 'César Lewandowski', img: 'cesar-lewandowski-portrait.webp', dishes: []
                },
                {
                    id: 'alexandre_marchon',
                    name: 'Alexandre Marchon', img: 'alexandre-marchon-portrait.webp', dishes: [
                        { name: 'Le Bourgui\'Street', img: 'alexandre-jeremie.png', show: 3, year: 2023, heart: false },
                        { name: 'Kebab sur Nappe', img: 'alexandre.png', show: 3, year: 2023, heart: false },
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
                    id: 'victor_blanchet',
                    name: 'Victor Blanchet', img: 'victor-blanchet-portrait.webp', dishes: [
                        { name: 'César en Voyage', img: 'leo-victor.png', show: 3, year: 2023, heart: false },

                    ]
                },
                {
                    id: 'jean_covillault',
                    name: 'Jean Covillault', img: 'jean-covillault-portrait.webp', dishes: []
                },
                {
                    id: 'jacques_lagarde',
                    name: 'Jacques Lagarde', img: 'jacques-lagarde-portrait.webp', dishes: []
                },
                {
                    id: 'leo_renusson',
                    name: 'Léo Renusson', img: 'leo-renusson-portrait.webp', dishes: [
                        { name: 'César en Voyage', img: 'leo-victor.png', show: 3, year: 2023, heart: false },
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
                    id: 'danny_khezzar',
                    name: 'Danny Khezzar', img: 'danny-khezzar-portrait.webp', dishes: [
                        { name: 'Quenelle de Butternut avec sa Surprise', img: 'danny.png', show: 3, year: 2023, heart: false },
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
                    id: 'berangere_fagart',
                    name: 'Bérangère Fagart', img: 'berangere-fagart-portrait.webp', dishes: [] },
                {
                    id: 'miguel_garcia-herrera',
                    name: 'Miguel Garcia-Herrera', img: 'miguel-garcia-herrera-portrait.webp', dishes: []
                },
                {
                    id: 'gaston_savina',
                    name: 'Gaston Savina', img: 'gaston-savina-portrait.webp', dishes: [
                        { name: 'Le Neo-Kebab', img: 'gaston-1.png', show: 3, year: 2023, heart: false },
                        { name: 'Pithiviers à la Pistache', img: 'gaston-2.png', show: 3, year: 2023, heart: false },
                    ]
                },
            ]
        },
    ]
};
