<script setup lang="ts">
import { ref } from 'vue';
import { getRandomCocktails } from "@/helpers/thecocktaildb.api"
import type { ICocktails } from "@/helpers/thecocktaildb.api"
import CocktailList from './components/CocktailList.vue';


const cocktails = ref<ICocktails>([]);

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
  .then(response => response.json())
  .then(data => cocktails.value = getRandomCocktails(data))

</script>

<template>
  <img src="/wet-bg.avif" alt="" class="h-screen w-screen object-cover object-center absolute top-0 mix-blend-multiply" />
  <div class="container mx-auto mt-20">
    <CocktailList :cocktails="cocktails" />
  </div>
</template>

<style scoped></style>
