
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
                    name: 'Carla Ferrari', img: 'carla-ferrari-portrait.webp',
                    dishes: [
                        { name: 'La Pasta Bare', img: 'images/dishes/2023/3/carla-sarika.png' },
                        { name: 'Mexi-Kebab', img: 'images/dishes/2023/3/carla.png' },
                    ]
                },
                {
                    name: 'Hugo Riboulet', img: 'hugo-riboulet-portrait.webp', dishes: []
                },
                {
                    name: 'Sarika Sor', img: 'sarika-sor-portrait.webp', dishes: [
                        { name: 'La Pasta Bare', img: 'images/dishes/2023/3/carla-sarika.png' },
                        { name: 'Kebao Souffle', img: 'images/dishes/2023/3/sarika.png' },
                    ]
                },
                {
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
                    name: 'Jérémie Falissard', img: 'jeremie-falissard-portrait.webp', dishes: [
                        { name: 'Le Bourgui\'Street', img: 'images/dishes/2023/3/alexandre-jeremie.png' },
                        { name: 'Maquereau Chrome', img: 'images/dishes/2023/3/jeremie.png' },
                    ]
                },
                {
                    name: 'Mathieu Lagarde', img: 'mathieu-lagarde-portrait.webp', dishes: []
                },
                {
                    name: 'César Lewandowski', img: 'cesar-lewandowski-portrait.webp', dishes: []
                },
                {
                    name: 'Alexandre Marchon', img: 'alexandre-marchon-portrait.webp', dishes: [
                        { name: 'Le Bourgui\'Street', img: 'images/dishes/2023/3/alexandre-jeremie.png' },
                        { name: 'Kebab sur Nappe', img: 'images/dishes/2023/3/alexandre.png' },
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
                    name: 'Victor Blanchet', img: 'victor-blanchet-portrait.webp', dishes: [
                        { name: 'César en Voyage', img: 'images/dishes/2023/3/leo-victor.png' },

                    ]
                },
                {
                    name: 'Jean Covillault', img: 'jean-covillault-portrait.webp', dishes: []
                },
                {
                    name: 'Jacques Lagarde', img: 'jacques-lagarde-portrait.webp', dishes: []
                },
                {
                    name: 'Léo Renusson', img: 'leo-renusson-portrait.webp', dishes: [
                        { name: 'César en Voyage', img: 'images/dishes/2023/3/leo-victor.png' },
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
                    name: 'Danny Khezzar', img: 'danny-khezzar-portrait.webp', dishes: [
                        { name: 'Quenelle de Butternut avec sa Surprise', img: 'images/dishes/2023/3/danny.png' },
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
                { name: 'Bérangère Fagart', img: 'berangere-fagart-portrait.webp', dishes: [] },
                {
                    name: 'Miguel Garcia-Herrera', img: 'miguel-garcia-herrera-portrait.webp', dishes: []
                },
                {
                    name: 'Gaston Savina', img: 'gaston-savina-portrait.webp', dishes: [
                        { name: 'Le Neo-Kebab', img: 'images/dishes/2023/3/gaston-1.png' },
                        { name: 'Pithiviers à la Pistache', img: 'images/dishes/2023/3/gaston-2.png' },
                    ]
                },
            ]
        },
    ]
};
