<template>
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            TopChef {{year}} Status au {{ref_top.getLatestShowDate(year)}}
        </h1>
      </div>
    </header>
    <div class="grid content-center gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <Brigade v-for="brigade in ref_top.getBrigadesLatestStatus(year) " :name="brigade.name" :leader="brigade.leader" :borderColorClass="brigade.border" :backgroundColorClass="brigade.background" :chefs="brigade.chefs" />
    </div>

</template>

<script setup>
const show_counter = useState('show_counter')
const year = useState('year')
const ref_top = ref_topchef()
</script>
