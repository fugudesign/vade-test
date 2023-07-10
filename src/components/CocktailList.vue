<script setup lang="ts">
import type { ICocktails } from '@/helpers/thecocktaildb.api';
import CocktailCard from './CocktailCard.vue';

defineProps<{
    cocktails: ICocktails
}>()

const angle = 6
const scale = 95
const perspectiveStyle = (i: number) => i === 0 ? `-rotate-y-${angle} scale-${scale}` : i === 2 ? `rotate-y-${angle} scale-${scale}` : ''

</script>

<template>
    <div class="grid grid-cols-3 gap-2">
        <div v-for="(cocktail, i) in  cocktails " :key="cocktail.idDrink" class="transform-style-3d perspective-1000">
            <CocktailCard :cocktail="cocktail" :class="perspectiveStyle(i)" />
        </div>
    </div>
</template>

<style scoped></style>