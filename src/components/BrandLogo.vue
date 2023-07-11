<script lang="ts" setup></script>

<template>
  <div class="brand">
    <span class="brand-name"> Cocktail Genius </span>
    <span class="brand-baseline"> 3 wishes to drink! </span>
  </div>
</template>

<style scoped>
.brand {
  @apply flex flex-col justify-center items-center;
}
.brand-name {
  @apply font-display font-normal text-4xl text-lime-500 -rotate-2;
}
.brand-baseline {
  @apply text-base font-thin text-slate-300;
}
</style>
