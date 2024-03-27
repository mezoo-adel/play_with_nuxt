<template>
    <div>

    </div>
</template>

<script setup>
const nuxt = useNuxtApp();
nuxt.hook('app:ready', function () {
    console.log("hello from the %c mounted hook", "color:blue");
})

onMounted(() => {
    console.log("hello from the %c mounted onMounted", "color:blue");
    
});
</script>

<style lang="scss" scoped></style>