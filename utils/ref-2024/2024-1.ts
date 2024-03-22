import { Show } from "../ref_topchef";

export const data: Show = {
    id: 1,
    date: '13/03/2024',
    data: [
        {
            name: 'Gris',
            leader: 'Philippe Etchebest, Glenn Viel, Paul Pairet',
            border: 'border-gray-700',
            background: 'bg-gray-200',
            chefs: [

                {
                    name: 'Pierre Reure', img: 'candidats/2024/pierre-reure.jpg',
                    dishes: [
                        { name: 'Omelette Baveuse aux Champignons', img: 'pierre-1.png', show: 1, year: 2024, heart: false },
                    ]
                },

                {
                    name: 'Lise Deveix', img: 'candidats/2024/lise-deveix.jpg',
                    dishes: [
                        { name: 'Nidification à l\'Est', img: 'lise-1.png', show: 1, year: 2024, heart: false },
                    ]
                },
                {
                    name: 'Clotaire Poirier', img: 'candidats/2024/clotaire-poirier.jpg',
                    dishes: [
                        { name: 'La Poire se Balade en Foret', img: 'clotaire-1.png', show: 1, year: 2024, heart: false },
                    ]
                },
                {
                    name: 'Marie Pacotte', img: 'candidats/2024/marie-pacotte.jpg',
                    dishes: [

                        { name: 'La Poire Iodée', img: 'marie-1.png', show: 1, year: 2024, heart: false },
                    ]
                },
                {
                    name: 'Bryan Debouche', img: 'candidats/2024/bryan-debouche.jpg',
                    dishes: [
                        { name: 'Le Carotte Tournesol', img: 'bryan-1.png', show: 1, year: 2024, heart: false },

                    ]
                },
                {
                    name: 'Anicee Lacrouts', img: 'candidats/2024/anicee-lacrouts.jpg',
                    dishes: []
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
                    name: 'Jorick Dorignac', img: 'candidats/2024/jorick-dorignac.jpg',
                    dishes: [
                        { name: 'Guimauve d\'Oeuf Salé en Hommage aux Copains', img: 'jorick-1.png', show: 1, year: 2024, heart: false },

                    ]
                },
                {
                    name: 'Shirley Duthilleux', img: 'candidats/2024/shirley-duthilleux.jpg',
                    dishes: [
                        { name: 'Blanc Ephemere', img: 'shirley-1.png', show: 1, year: 2024, heart: false },

                    ]
                },
                {
                    name: 'Valentin Raffali', img: 'candidats/2024/valentin-raffali.jpg',
                    dishes: [
                        { name: 'La Poire Takashi', img: 'valentin-1.png', show: 1, year: 2024, heart: false },

                    ]
                },
                {
                    name: 'Pavel Hug', img: 'candidats/2024/pavel-hug.jpg',
                    dishes: [
                        { name: 'PP/FF: La poire à la Poire et le Foie au Foie', img: 'pavel-1.png', show: 1, year: 2024, heart: false },
                    ]
                },

                {
                    name: 'Quentin Maufrais', img: 'candidats/2024/quentin-maufrais.jpg',
                    dishes: [
                        { name: 'La Carotte en 3 Dégustations', img: 'quentin-1.png', show: 1, year: 2024, heart: false },

                    ]
                },
                {
                    name: 'Arnaud Munster', img: 'candidats/2024/arnaud-munster.jpg',
                    dishes: [
                        { name: 'La Fleur de Carotte inspirée par le Jardin de mon Enfance', img: 'arnaud-1.png', show: 1, year: 2024, heart: false },

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
                    name: 'Pol Henri Dieu', img: 'candidats/2024/pol-henri-dieu.jpg',
                    dishes: [
                        { name: 'Quand la Poire rencontre le Fenouil', img: 'pol-henri-1.png', show: 1, year: 2024, heart: false },

                        { name: 'Rouget terminé au Charbon', img: 'pol-henri-2.png', show: 1, year: 2024, heart: false },

                    ]
                },
                {
                    name: 'Pierre Pascal Clement', img: 'candidats/2024/pierre-pascal-clement.jpg',
                    dishes: [
                        { name: 'L\'Oeuf Roti', img: 'pierre-pascal-1.png', show: 1, year: 2024, heart: false },
                        { name: 'Rouget en marinade, Bouillon, et Crème des Aretes', img: 'pierre-pascal-2.png', show: 1, year: 2024, heart: false },

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
                    name: 'Ines Trontin', img: 'candidats/2024/ines-trontin.jpg',
                    dishes: [
                        { name: 'Le Cornet de Glace Full-Carottes', img: 'ines-1.png', show: 1, year: 2024, heart: false },
                        { name: 'Rouget du Moyen-Orient en deux Texture', img: 'ines-2.png', show: 1, year: 2024, heart: false },

                    ]
                },
                {
                    name: 'Thibault Marchand', img: 'candidats/2024/thibault-marchand.jpg',
                    dishes: [
                        { name: 'La Carotte dans toute sa Splendeur', img: 'thibault-1.png', show: 1, year: 2024, heart: false },
                        { name: 'Rouget Flashé, Rouille, Agrumes et Iode', img: 'thibault-2.png', show: 1, year: 2024, heart: false },
                    ]
                },
            ]
        },
    ]
};

