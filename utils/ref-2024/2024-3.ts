import { Show } from "../ref_topchef";

export const data: Show = {
    id: 3,
    date: '27/03/2024',
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
                    ]
                },

                {
                    id: 'lise_deveix',
                    name: 'Lise Deveix', img: 'candidats/2024/lise-deveix.jpg',
                    dishes: [
                        { name: 'Poireau, Sauce Emulsionné, Chaud-Froid', img: 'lise-1.png', show: 3, year: 2024, heart: false },
                    ]
                },
                {
                    id: 'clotaire_poirier',
                    name: 'Clotaire Poirier', img: 'candidats/2024/clotaire-poirier.jpg',
                    dishes: [
                        { name: 'Avocat-Crevettes, Sauce Cocktail-Corail', img: 'clotaire-1.png', show: 3, year: 2024, heart: false },
                    ]
                },
                {
                    id: 'marie_pacotte',
                    name: 'Marie Pacotte', img: 'candidats/2024/marie-pacotte.jpg',
                    dishes: [
                        { name: 'Ainsi Font Les Oignons', img: 'marie-1.png', show: 3, year: 2024, heart: false },
                    ]
                },
                {
                    id: 'bryan_debouche',
                    name: 'Bryan Debouche', img: 'candidats/2024/bryan-debouche.jpg',
                    dishes: [
                    ]
                },
                {
                    id: 'anicee_lacrouts',
                    name: 'Anicee Lacrouts', img: 'candidats/2024/anicee-lacrouts.jpg',
                    dishes: [
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
                    ]
                },
                {
                    id: 'shirley_duthilleux',
                    name: 'Shirley Duthilleux', img: 'candidats/2024/shirley-duthilleux.jpg',
                    dishes: [
                    ]
                },
                {
                    id: 'valentin_raffali',
                    name: 'Valentin Raffali', img: 'candidats/2024/valentin-raffali.jpg',
                    dishes: [
                    ]
                },
                {
                    id: 'pavel_hug',
                    name: 'Pavel Hug', img: 'candidats/2024/pavel-hug.jpg',
                    dishes: [
                        { name: 'Sérum, Oignon d\'Antan et Bouillon', img: 'pavel-1.png', show: 3, year: 2024, heart: false },
                    ]
                },

                {
                    id: 'quentin_maufrais',
                    name: 'Quentin Maufrais', img: 'candidats/2024/quentin-maufrais.jpg',
                    dishes: [
                        { name: 'Poireau Très Vinaigrette', img: 'quentin-1.png', show: 3, year: 2024, heart: false },
                    ]
                },
                {
                    id: 'arnaud_munster',
                    name: 'Arnaud Munster', img: 'candidats/2024/arnaud-munster.jpg',
                    dishes: [
                        { name: 'Avocat-Crevettes à l\'Ostendaise', img: 'arnaud-1.png', show: 3, year: 2024, heart: false },
                        { name: 'Crème Brulée, Spaghettis de Butternut et Agrumes', img: 'arnaud-2.png', show: 3, year: 2024, heart: false },
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
                        { name: 'Strudel de Turbot, Compotée de Chou Vert, Accompagné d\'un dashi de Betterave', img: 'pierre-pascal-1.png', show: 3, year: 2024, heart: false },
                    ]
                },
                {
                    id: 'thibault_marchand',
                    name: 'Thibault Marchand', img: 'candidats/2024/thibault-marchand.jpg',
                    dishes: [
                        { name: 'Coeur Onctueux de Lotte Enrobé d\'Algues Nori dans une Pate Feuilletée Croustillante', img: 'thibault-1.png', show: 3, year: 2024, heart: false },
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
                    ]
                },
                {
                    id: 'pol_henri_dieu',
                    name: 'Pol Henri Dieu', img: 'candidats/2024/pol-henri-dieu.jpg',
                    dishes: [
                        { name: 'Lasagne de Crème Brulée', img: 'pol-henri-1.png', show: 3, year: 2024, heart: false },
                        { name: 'Tartare de Boeuf Facon Wellington', img: 'pol-henri-2.png', show: 3, year: 2024, heart: false },
                    ]
                },
            ]
        },
    ]
};

