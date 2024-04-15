<template>
    <UHeader />

    <UMain>
        <h1 class="font-reqaa text-4xl text-bermuda"> {{ $t('welcome') }} </h1>
        <div class="h-screen">
            <slot />
        </div>
    </UMain>

    <UFooter />
</template>

<script setup>
console.log("hello from default layout")
</script>