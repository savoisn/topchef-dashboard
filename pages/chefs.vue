<template>
    <div class="bg-white my-8">
    <div class="grid content-center gap-x-8 gap-y-4 grid-cols-3 border-2">
        <Chef v-for="chef in ref_topchef().getChefs(2024)" border="border-gray-700" :chef="chef"/>
    </div>
    </div>
</template>

<script>
</script>
