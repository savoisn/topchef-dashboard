<template>
        <div class="grid content-center gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <Brigade v-for="brigade in brigades" :name="brigade.name" :leader="brigade.leader" :borderColorClass="brigade.border" :backgroundColorClass="brigade.background" :chefs="brigade.chefs" />
        </div>

</template>

<script setup>

const brigades = [
  { name: 'Bleu', 
    leader: 'Etchebest', 
    border: 'border-blue-700', 
    background: 'bg-cyan-200', 
    chefs: [
        {name: 'Carla Ferrari', img: 'carla-ferrari-portrait.webp'}, 
        {name: 'Danny Khezzar', img: 'danny-khezzar-portrait.webp'},
        {name: 'Hugo Riboulet', img: 'hugo-riboulet-portrait.webp'}, 
        {name: 'Sarika Sor', img: 'sarika-sor-portrait.webp'},
  ] },
  { name: 'Orange', 
    leader: 'Viel', 
    border: 'border-orange-700', 
    background: 'bg-orange-200', 
    chefs: [
        {name: 'Jérémie Falissard', img: 'jeremie-falissard-portrait.webp'}, 
        {name: 'Mathieu Lagarde', img: 'mathieu-lagarde-portrait.webp'},
        {name: 'César Lewandowski', img: 'cesar-lewandowski-portrait.webp'}, 
        {name: 'Alexandre Marchon', img: 'alexandre-marchon-portrait.webp'},
  ] },
  { name: 'Violet', 
    leader: 'Peret', 
    border: 'border-purple-700', 
    background: 'bg-violet-200', 
    chefs: [
        {name: 'Victor Blanchet', img: 'victor-blanchet-portrait.webp'}, 
        {name: 'Jean Covillault', img: 'jean-covillault-portrait.webp'},
        {name: 'Jacques Lagarde', img: 'jacques-lagarde-portrait.webp'}, 
        {name: 'Léo Renusson', img: 'leo-renusson-portrait.webp'},
  ] },
  { name: 'Rouge', 
    leader: 'Daroze', 

    border: 'border-red-700', 
    background: 'bg-red-200', 
    chefs: [
        {name: 'Not yet', img: 'profil_placeholder.svg'}, 
        {name: 'Not yet', img: 'profil_placeholder.svg'}, 
        {name: 'Not yet', img: 'profil_placeholder.svg'}, 
        {name: 'Not yet', img: 'profil_placeholder.svg'}, 
  ] },
  { name: 'Solitaire', 
    leader: '',
    border: 'white', 
    background: 'bg-transparent', 
    chefs: [
        {name: 'Albane Aubray', img: 'albane-aubray-portrait.webp'}, 
        {name: 'Gaston Savina', img: 'gaston-savina-portrait.webp'},
  ] },
  { name: 'Eliminés', 
    leader: '', 
    background: 'bg-gray-200', 
    border: 'border-black', 
    chefs: [
        {name: 'Bérangère Fagart', img: 'berangere-fagart-portrait.webp'}, 
        {name: 'Miguel Garcia-Herrera', img: 'miguel-garcia-herrera-portrait.webp'},
  ] },
]
const userNavigation = [
//  { name: 'Your Profile', href: '#' },
//  { name: 'Settings', href: '#' },
//  { name: 'Sign out', href: '#' },
]

</script>
