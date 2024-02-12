<template>
    <ChildComponent />
    event is:
    <pre>
        {{ $route.params.event }}
    </pre>
</template>

<script setup>
const nuxt = useNuxtApp();
const route = useRoute();

console.log("the route is", route);
</script>