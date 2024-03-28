import { Show } from "../ref_topchef";

export const data: Show = {
    id: 2,
    date: '20/03/2024',
    data: [
        {
            name: 'Gris',
            leader: 'Philippe Etchebest, Glenn Viel, Paul Pairet',
            border: 'border-gray-700',
            background: 'bg-gray-200',
            chefs: [

                {
                    id: 'pierre_reure',
                    name: 'Pierre Reure', img: 'candidats/2024/pierre-reure.jpg',
                    dishes: [
                        { name: '"Boudin Blanc de Volaile, Cochon et Jus de Poitrine"', img: 'pierre-1.png', show: 2, year: 2024, heart: false },
                    ]
                },

                {
                    id: 'lise_deveix',
                    name: 'Lise Deveix', img: 'candidats/2024/lise-deveix.jpg',
                    dishes: [
                    ]
                },
                {
                    id: 'clotaire_poirier',
                    name: 'Clotaire Poirier', img: 'candidats/2024/clotaire-poirier.jpg',
                    dishes: [
                    ]
                },
                {
                    id: 'marie_pacotte',
                    name: 'Marie Pacotte', img: 'candidats/2024/marie-pacotte.jpg',
                    dishes: [
                    ]
                },
                {
                    id: 'bryan_debouche',
                    name: 'Bryan Debouche', img: 'candidats/2024/bryan-debouche.jpg',
                    dishes: [
                        { name: '"Lièvre à la Royale"', img: 'bryan-1.png', show: 2, year: 2024, heart: false },
                    ]
                },
                {
                    id: 'anicee_lacrouts',
                    name: 'Anicee Lacrouts', img: 'candidats/2024/anicee-lacrouts.jpg',
                    dishes: [
                        { name: '"Tournedos Rossini"', img: 'anicee-1.png', show: 2, year: 2024, heart: false },
                    ]
                },

            ]
        },
        {
            name: 'Orange',
            leader: 'Hélène Darroze, Dominique Crenn, Stéphanie Le Quellec',
            border: 'border-orange-700',
            background: 'bg-orange-200',
            chefs: [


                {
                    id: 'jorick_dorignac',
                    name: 'Jorick Dorignac', img: 'candidats/2024/jorick-dorignac.jpg',
                    dishes: [
                        { name: '"Steak au Poivre"', img: 'jorick-1.png', show: 2, year: 2024, heart: false },
                        { name: 'Comté 3 affinages, entre Fromage et Dessert', img: 'jorick-2.png', show: 2, year: 2024, heart: false },
                    ]
                },
                {
                    id: 'shirley_duthilleux',
                    name: 'Shirley Duthilleux', img: 'candidats/2024/shirley-duthilleux.jpg',
                    dishes: [
                        { name: '"Bourguignon en Mille-Feuille"', img: 'shirley-1.png', show: 2, year: 2024, heart: false },
                    ]
                },
                {
                    id: 'valentin_raffali',
                    name: 'Valentin Raffali', img: 'candidats/2024/valentin-raffali.jpg',
                    dishes: [
                        { name: '"Veg Me Up"', img: 'valentin-1.png', show: 2, year: 2024, heart: false },
                        { name: 'Avec les Doigts', img: 'valentin-2.png', show: 2, year: 2024, heart: false },
                    ]
                },
                {
                    id: 'pavel_hug',
                    name: 'Pavel Hug', img: 'candidats/2024/pavel-hug.jpg',
                    dishes: [
                    ]
                },

                {
                    id: 'quentin_maufrais',
                    name: 'Quentin Maufrais', img: 'candidats/2024/quentin-maufrais.jpg',
                    dishes: [
                    ]
                },
                {
                    id: 'arnaud_munster',
                    name: 'Arnaud Munster', img: 'candidats/2024/arnaud-munster.jpg',
                    dishes: [
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
                    id: 'pol_henri_dieu',
                    name: 'Pol Henri Dieu', img: 'candidats/2024/pol-henri-dieu.jpg',
                    dishes: [
                    ]
                },
            ]
        },
        {
            name: 'Caché',
            leader: 'Pierre Gagnaire',
            background: 'bg-violet-200',
            border: 'border-black',
            chefs: [
                {
                    id: 'pierre_pascal_clement',
                    name: 'Pierre Pascal Clement', img: 'candidats/2024/pierre-pascal-clement.jpg',
                    dishes: [
                        { name: 'Entremets aux Saveurs de Plateau de Fromage', img: 'pierre-pascal-1.png', show: 2, year: 2024, heart: false },
                        { name: 'Raviole Végétale de Bolets au Parfum de Thé Fumé et Jasmin', img: 'pierre-pascal-2.png', show: 2, year: 2024, heart: false },
                    ]
                },
                {
                    id: 'thibault_marchand',
                    name: 'Thibault Marchand', img: 'candidats/2024/thibault-marchand.jpg',
                    dishes: [
                        { name: 'La Raviole Terre-Mer et Son Jeu de de* Couleurs', img: 'thibault-1.png', show: 2, year: 2024, heart: false },
                    ]
                },
            ]
        },
        {
            name: 'Eliminés',
            leader: '',
            background: 'bg-red-200',
            border: 'border-black',
            chefs: [
                {
                    id: 'ines_trontin',
                    name: 'Ines Trontin', img: 'candidats/2024/ines-trontin.jpg',
                    dishes: [
                        { name: 'Chair de Tourteau, Jasmin et Bergamote', img: 'ines-1.png', show: 2, year: 2024, heart: false },
                    ]
                },
            ]
        },
    ]
};

