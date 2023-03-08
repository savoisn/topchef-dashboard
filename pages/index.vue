<template>
        <div class="grid content-center gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <Brigade v-for="brigade in ref_top.getBrigadesStatusByYearAndByShow(year, show_counter) " :name="brigade.name" :leader="brigade.leader" :borderColorClass="brigade.border" :backgroundColorClass="brigade.background" :chefs="brigade.chefs" />
        </div>

</template>

<script setup>
const show_counter = useState('show_counter')
const year = useState('year')
const ref_top = ref_topchef()
</script>
