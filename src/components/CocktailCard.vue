<script lang="ts" setup>
import type { ICocktail } from '@/helpers/thecocktaildb.api';
import { computed } from 'vue';

const props = defineProps<{
    cocktail: ICocktail
}>()

const type = computed(() => {
    const str = props.cocktail.strAlcoholic
    return str === 'Alcoholic' ? 'Alcoholized' : str === 'Optional alcohol' ? 'Soft/Alcoholized' : 'Soft'
})
</script>

<template>
    <div class="wrapper antialiased text-gray-900">
        <div class="relative px-4">
            <div class="bg-slate-800 bg-gradient-to-b from-slate-900 to-slate-700 p-6 rounded-3xl shadow-lg">

                <div class="flex justify-center items-baseline -mb-2">
                    <span class="tag absolute mt-6 ml-60">
                        {{ type }}
                    </span>
                    <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrinkAlternate"
                        class="w-10/12 my-6 object-cover object-center rounded-full border-lime-600  border-x-2 shadow-md" />
                </div>

                <div class="flex items-center flex-col mt-6">
                    <h4 class="text-6xl -rotate-3 font-display leading-tight text-lime-400">
                        {{ cocktail.strDrink }}
                    </h4>
                    <span class="mt-6 text-slate-500">{{ cocktail.strCategory }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>