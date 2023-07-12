<script setup lang="ts">
import CocktailList from './components/CocktailList.vue'
import NavBar from './components/NavBar.vue'
import MagicButton from './components/MagicButton.vue'
import BrandLogo from './components/BrandLogo.vue'
import { useTheCocktailDB } from '@/composables/thecocktaildb'

const { data: cocktails, loading, refetch } = useTheCocktailDB()
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
