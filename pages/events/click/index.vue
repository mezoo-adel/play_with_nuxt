<template>
    {{ counter }}
    <h2>
        DO NOT CLICK HERE
    </h2>
    <ChildComponentSecondChild />
</template>

<script setup>
const { logBye, counter } = useTesting();

logBye()
</script>