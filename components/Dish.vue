<script setup>
defineProps({
  dish: {
    type: Object,
    required: true,
  }
})


</script>

<template>
    <div class="my-2 mx-2 text-center grid place-content-center">
        <img class="border-2" :src="`${dish.img}`" />
        <div class="flex justify-center ">
            <img v-for="chef in dish.chef" class="w-32 border-2" :src="`images/${chef.img}`" />
            <div class="grow flex flex-col justify-center align-items-center">
                <p>{{dish.name}} by</p>
                <p v-for="chef in dish.chef">{{chef.name}}</p>
            </div>
        </div>
    </div>
</template>

