<template>
    <pre>
        {{ data }}
    </pre>
    <h2>
        that's a h2 from SECOND child component
    </h2>
</template>

<script setup>
const { data } = useFetch('/api/products')
console.log("we're with second child")
</script>