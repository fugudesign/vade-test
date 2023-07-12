<script setup lang="ts">
import CocktailList from './components/CocktailList.vue'
import NavBar from './components/NavBar.vue'
import MagicButton from './components/MagicButton.vue'
import BrandLogo from './components/BrandLogo.vue'
import { useTheCocktailDB } from '@/composables/thecocktaildb'
import LoadingSpinner from './components/LoadingSpinner.vue'

const { data: cocktails, loading, refetch } = useTheCocktailDB()
</script>

<template>
  <div class="bg-gradient-to-b from-slate-500 to-slate-950 h-screen overflow-y-auto">
    <img src="/wet-background.jpg" class="fullscreen-bg" />
    <NavBar position="top">
      <BrandLogo />
    </NavBar>
    <div class="main-container">
      <Transition>
        <div v-if="loading" class="w-full h-full absolute top-0 flex justify-center items-center">
          <LoadingSpinner />
        </div>
        <CocktailList v-else :cocktails="cocktails" />
      </Transition>
    </div>
    <NavBar position="bottom">
      <MagicButton :disabled="loading" @click="refetch" />
    </NavBar>
  </div>
</template>

<style scoped>
.fullscreen-bg {
  @apply h-screen w-screen fixed top-0 object-cover object-center mix-blend-overlay;
}
.main-container {
  @apply container sm:h-full mx-auto flex justify-center items-center py-24 sm:py-0 sm:my-[9rem];
  @screen sm {
    max-height: calc(100vh - 18rem);
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
