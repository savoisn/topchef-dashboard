<script setup>
defineProps({
  dish: {
    type: Object,
    required: true,
  }
})

import { HeartIcon } from '@heroicons/vue/24/solid'

</script>

<template>
    <div style="position:relative">
        <HeartIcon style="position:absolute; top:7%; left:4%" v-if="dish.heart" class="block h-20 w-20 text-red-500" />
        <div class="my-2 mx-2 text-center grid place-content-center">
            <div>
                <img class="border-2" :src="`${dish.img}`" />
            </div>
            <div class="flex justify-center ">
                <img v-for="chef in dish.chef" class="w-32 border-2" :src="`images/${chef.img}`" />
                <div class="grow flex flex-col justify-center align-items-center">
                    <p><span v-if="dish.heart" class="text-2xl text-red-500">
&hearts;
                    </span>{{dish.name}} by</p>
                    <p v-for="chef in dish.chef">{{chef.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

