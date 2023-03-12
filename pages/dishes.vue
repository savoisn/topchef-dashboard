<template>
    <div class="bg-white my-8">
    <div class="grid content-center gap-x-8 gap-y-4 md-grid-cols-2 grid-cols-1 lg:grid-cols-2 border-2">
        <Dish v-for="dish in ref_topchef().getDishesByCandidats(2023)" :dish="dish"/>
    </div>
    </div>
</template>

<script>
//console.log(ref_topchef().getDishesByCandidats(2023))
//console.log(ref_topchef().getDishesByCandidats(2023))
//console.log(ref_topchef().getDishesByCandidats(2023))
//console.log(ref_topchef().getDishesByCandidats(2023))
</script>
