<script setup lang="ts">
import type { ICocktails } from '@/helpers/thecocktaildb.api'
import CocktailCard from './CocktailCard.vue'

defineProps<{
  cocktails: ICocktails
}>()
</script>

<template>
  <div class="grid grid-cols-3 gap-1 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
    <div
      v-for="(cocktail, i) in cocktails"
      :key="cocktail.idDrink"
      class="transform-style-3d perspective-1000"
    >
      <CocktailCard
        :cocktail="cocktail"
        :class="{
          '-rotate-y-12 scale-95': i === 0,
          'rotate-y-12 scale-95': i === 2
        }"
      />
    </div>
  </div>
</template>

<style scoped></style>
