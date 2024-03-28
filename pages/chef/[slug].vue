
<template>
  <div>
    <div class="my-2 mx-2 text-center grid place-content-center ">
        <div>
            <img class="w-64 border-2" :class="[border]" :src="`/topchef-dashboard/images/${chef.img}`" />
            <span>{{chef.name}}</span>
        </div>
    </div>
    <div class="bg-white my-8">
        <div class="grid content-center gap-x-8 gap-y-4 md-grid-cols-2 grid-cols-1 lg:grid-cols-2 border-2">
            <div v-for="dish in chef.dishes" :dish="dish" style="position:relative">
                <div class="my-2 mx-2 text-center grid place-content-center">
                    <div>
                        <img class="border-2" :src="`/topchef-dashboard/images/dishes/${dish.year}/${dish.show}/md-${dish.img}`" />
                    </div>
                    <div class="flex justify-center ">
                        <div class="grow flex flex-col justify-center align-items-center">
                            <p>{{dish.name}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const saison = route.params.slug;
const chef_name = route.query.chef;
const chef=ref_topchef().getChef(saison, chef_name)
</script>

