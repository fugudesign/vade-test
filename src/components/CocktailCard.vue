<script lang="ts" setup>
import type { ICocktail } from '@/helpers/thecocktaildb.api'
import { computed } from 'vue'

interface Ingredient {
  name: string
  measure: string
  thumbUrl: string
}

const props = defineProps<{
  cocktail: ICocktail
}>()

const typeStrings: Record<string, string> = {
  Alcoholic: 'Alcoholized',
  'Optional alcohol': 'Soft/Alcoholized',
  'Non alcoholic': 'Soft'
}
const ingredients = computed<Record<string, Ingredient>>(() =>
  Array.from(Array(15).keys()).reduce((res, i) => {
    const strIngredient = `strIngredient${i}`
    const name = props.cocktail[strIngredient]
    return {
      ...res,
      ...(name
        ? {
            [i]: {
              name,
              measure: props.cocktail[`strMeasure${i}`],
              thumbUrl: `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`
            }
          }
        : {})
    }
  }, {})
)

const type = computed(() => typeStrings[props.cocktail.strAlcoholic])
</script>

<template>
  <div class="card group">
    <div class="card-layer card-front">
      <div class="card-top relative">
        <span class="bubble-tag absolute top-6 right-5 ml-16">{{ type }}</span>
        <div class="card-thumb my-6">
          <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrinkAlternate" class="card-img" />
        </div>
      </div>
      <div class="card-bottom mt-2 mb-6">
        <h4 class="card-title mb-6">
          {{ cocktail.strDrink }}
        </h4>
        <span class="card-type">{{ cocktail.strCategory }}</span>
      </div>
    </div>
    <div class="card-layer card-back">
      <div class="card-layer-scroller">
        <h2 class="text-indigo-500 font-bold text-4xl mb-4">{{ cocktail.strDrink }}</h2>
        <h3 class="subtitle">Instructions</h3>
        <div class="text-sm" v-html="cocktail.strInstructions.split('. ').join('.<br>')" />
        <div class="text-sm">
          Serve in a <span class="font-black">{{ cocktail.strGlass }}</span
          >.
        </div>
        <br />
        <h3 class="subtitle">Ingredients</h3>
        <ul>
          <li v-for="ingredient in ingredients" :key="ingredient.name" class="flex items-center">
            <img :src="ingredient.thumbUrl" class="h-16 my-2" />
            <div class="ml-2 flex flex-col justify-start w-full">
              <span>{{ ingredient.name }}</span>
              <span class="tag">{{ ingredient.measure }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply transform-style-3d perspective-1000 antialiased relative;
}
.card-layer {
  @apply h-full p-3 rounded-3xl shadow-lg bg-slate-300/10 backdrop-blur backface-hidden;
}
.card-layer-scroller {
  @apply h-full overflow-hidden overflow-y-auto;
}
.card-front {
  @apply text-slate-200 transition-all duration-500 group-hover:rotate-y-180;
}
.card-back {
  @apply text-slate-300 absolute top-0 h-full w-full bg-indigo-950/75 transition-all duration-500 -rotate-y-180 group-hover:rotate-y-0 p-8;
}
.card-top {
  @apply flex justify-center items-baseline;
}
.card-bottom {
  @apply flex items-center flex-col;
}
.card-thumb {
  @apply w-10/12 rounded-full border-lime-500 border-x-2 shadow-inner overflow-hidden;
}
.card-img {
  @apply object-cover object-center;
}
.card-title {
  @apply text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl -rotate-3 font-display leading-tight text-indigo-500;
}
.card-type {
  @apply text-sm z-10;
}
.tag {
  @apply bg-indigo-600 text-white text-xs px-2 rounded-full font-thin w-fit;
}
.bubble-tag {
  @apply bg-lime-600 text-white text-xs px-2 inline-block rounded-full rounded-bl-none font-thin tracking-wide;
}
.subtitle {
  @apply text-lg font-bold text-lime-500 tracking-wide;
}
</style>
