<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  backgroundColorClass: {
    type: String,
    required: false
  },
  borderColorClass: {
    type: String,
    required: false
  },
  leader: {
    type: String || null,
    required: true,
  },
  chefs: {
    type: [Object],
    required: true,
  },

})

</script>

<template>
    <div class="bg-white my-8">
    <div class="grid content-center gap-x-8 gap-y-4 grid-cols-2 border-2" :class="borderColorClass + ' ' + backgroundColorClass">
        <div class="col-span-2 content-center text-center"><span>{{name}} - {{leader}}</span></div>
        <Chef v-for="chef in chefs" :chef="chef" :border="borderColorClass" />
    </div>
    </div>
</template>

