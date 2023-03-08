<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
const counter = useState('show_counter')
const year =  useState('year')

const nb_shows = ref_topchef().countShowsForYear(2023)



</script>


<template>
    <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        <button type="button" class="font-mono" :disabled="counter <= 1" @click="counter--">
            <ChevronLeftIcon class="block h-6 w-6" />
        </button>
        TopChef {{year}} DashBoard {{counter}}
        <button class="font-mono" :disabled="counter >= nb_shows" @click="counter++">
            <ChevronRightIcon class="block h-6 w-6"  />
        </button>
    </h1>
</template>
