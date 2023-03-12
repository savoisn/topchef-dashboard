import { Show } from "../ref_topchef";

export const data : Show =
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
                { name: 'Carla Ferrari', img: 'carla-ferrari-portrait.webp' ,
                    dishes:[
                        { name: 'Pomme de Mer 2 ', img: 'images/dishes/2023/1/carla.png'},
                    ]},
                { name: 'Hugo Riboulet', img: 'hugo-riboulet-portrait.webp', dishes:[] },
                { name: 'Sarika Sor', img: 'sarika-sor-portrait.webp', dishes:[]  },
                { name: 'Albane Aubray', img: 'albane-aubray-portrait.webp', dishes:[]  },
            ]
        },
        {
            name: 'Orange',
            leader: 'Viel',
            border: 'border-orange-700',
            background: 'bg-orange-200',
            chefs: [
                { name: 'Jérémie Falissard', img: 'jeremie-falissard-portrait.webp', dishes:[]  },
                { name: 'Mathieu Lagarde', img: 'mathieu-lagarde-portrait.webp', dishes:[]  },
                { name: 'César Lewandowski', img: 'cesar-lewandowski-portrait.webp', dishes:[]  },
                { name: 'Alexandre Marchon', img: 'alexandre-marchon-portrait.webp', dishes:[]  },
            ]
        },
        {
            name: 'Violet',
            leader: 'Pairet',
            border: 'border-purple-700',
            background: 'bg-violet-200',
            chefs: [
                { name: 'Victor Blanchet', img: 'victor-blanchet-portrait.webp', dishes:[]  },
                { name: 'Jean Covillault', img: 'jean-covillault-portrait.webp', dishes:[]  },
                { name: 'Jacques Lagarde', img: 'jacques-lagarde-portrait.webp', dishes:[]  },
                { name: 'Léo Renusson', img: 'leo-renusson-portrait.webp', dishes:[]  },
            ]
        },
        {
            name: 'Rouge',
            leader: 'Daroze',

            border: 'border-red-700',
            background: 'bg-red-200',
            chefs: [
                { name: 'Danny Khezzar', img: 'danny-khezzar-portrait.webp', dishes:[]  },
            ]
        },
        {
            name: 'Solitaire',
            leader: '',
            border: 'white',
            background: 'bg-transparent',
            chefs: [
                { name: 'Gaston Savina', img: 'gaston-savina-portrait.webp', dishes:[]  },
            ]
        },
        {
            name: 'Eliminés',
            leader: '',
            background: 'bg-gray-200',
            border: 'border-black',
            chefs: [
                { name: 'Bérangère Fagart', img: 'berangere-fagart-portrait.webp', dishes:[]  },
                { name: 'Miguel Garcia-Herrera', img: 'miguel-garcia-herrera-portrait.webp', dishes:[]  },
            ]
        },
    ]};
