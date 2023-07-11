<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { getRandomCocktails } from '@/helpers/thecocktaildb.api'
import type { ICocktails } from '@/helpers/thecocktaildb.api'
import CocktailList from './components/CocktailList.vue'
import NavBar from './components/NavBar.vue'
import MagicButton from './components/MagicButton.vue'
import BrandLogo from './components/BrandLogo.vue'

const cocktails = ref<ICocktails>([])

const fetchCocktails = () =>
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
    .then((response) => response.json())
    .then((data) => (cocktails.value = getRandomCocktails(data)))

const handleRefresh = () => fetchCocktails()

onBeforeMount(() => {
  fetchCocktails()
})
</script>

<template>
  <div class="bg-gradient-to-b from-slate-500 to-slate-950 h-screen overflow-hidden">
    <img src="/wet-background.jpeg" class="fullscreen-bg" />
    <NavBar position="top">
      <BrandLogo />
    </NavBar>
    <div class="main-container">
      <CocktailList :cocktails="cocktails" />
    </div>
    <NavBar position="bottom">
      <MagicButton @click="handleRefresh" />
    </NavBar>
  </div>
</template>

<style scoped>
.fullscreen-bg {
  @apply h-screen w-screen absolute top-0 object-cover object-center mix-blend-overlay;
}
.main-container {
  @apply container mx-auto flex justify-center items-center my-[9rem];
  max-height: calc(100vh - 18rem);
}
</style>
