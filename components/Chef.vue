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


</script>

<template>
    <div class="my-2 mx-2 text-center grid place-content-center ">
        <div>
            <NuxtLink :to="`/chef/2024?chef=${chef.id}`">
                <img class="border-2" :class="[border]" :src="`/topchef-dashboard/images/${chef.img}`" />
            </NuxtLink>
            <span>{{chef.name}}</span>
        </div>
    </div>
</template>

