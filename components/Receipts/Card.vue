<template>
  <UCard>
    <template #header>
      <p class="text-red-600 aref-ruqaa-bold md:font-display border-s border-red-900 ps-1 hover:font-bold">
        {{ $t("welcome") }}
      </p>
    </template>
    <template #default>
      <h4 class="flex justify-center text-blue-500 my-2 text-2xl font-bold font-mono border-b border-green-300">
        Can you smeel, what the rock is cooking ?
         
       </h4>
    </template>

    <template #footer>
      <div class="relative">
        <p
          class="text-tahiti-dark rounded p-6 bg-bubble-gum font-sans hover:font-serif hover:bg-silver hover:text-blue-700">
          this is card
        </p>
        <p class="bg-silver w-16 hover:bg-bubble-gum rounded-full overflow-hidden px-1 text-center absolute top-1 right-2"> chip</p>
      </div>

    </template>
  </UCard>
</template>

<script setup></script>

<style lang="scss" scoped></style>
