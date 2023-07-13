<script setup lang="ts">
import CocktailCard from './CocktailCard.vue'
import type { Cocktails } from '@/types/cocktails'

defineProps<{
  cocktails: Cocktails
}>()
</script>

<template>
  <div class="cocktail-list">
    <div
      v-for="(cocktail, i) in cocktails"
      :key="`cocktail-item-${i}`"
      class="transform-style-3d perspective-1000"
    >
      <CocktailCard
        :cocktail="cocktail"
        :class="{
          'sm:-rotate-y-12 sm:scale-95': i === 0,
          'sm:rotate-y-12 sm:scale-95': i === 2
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.cocktail-list {
  @apply mx-10 sm:mx-0 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10;
}
</style>
