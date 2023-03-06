<script setup>
defineProps({
  chef: {
    type: Object,
    required: true,
  },
  border: {
    type: String,
    required: true,
  }
})

import imageUrl from '@/assets/images/profil_placeholder.svg' // => or relative path

</script>

<template>
    <div class="my-2 mx-2 text-center grid place-content-center ">
        <div>
        <img class="border-2" :class="border" :src="`/images/${chef.img}`" />
        <span>{{chef.name}}</span>
        </div>
    </div>
</template>

