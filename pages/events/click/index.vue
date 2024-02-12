<template>
    <ChildComponentSecondChild />
    DO NOT CLICK HERE
</template>

<script setup>
const { logBye } = useTesting();

logBye()
</script>