<template>
    <h1>
        {{ test_phrase }}
    </h1>

    <div class=" bg-green-200 text-center rounded">
        this is SPARTAAAAAAAAAAAAAAAAAAAA
    </div>
</template>

<script setup>

const test_phrase = useTestState()
console.log('this is spartaaaaaaaaaaaaaaaaaaaaaa')

</script>

<style></style>
