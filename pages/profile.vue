<template>
  <h1>
    Hi from {{ $t('welcome') }} {{ $t('welcome') }}
  </h1>

</template>

<script setup>
const nuxt = useNuxtApp();
const { logHi } = useTesting()
logHi()
nuxt.$fnProvidedToNuxt();
</script>