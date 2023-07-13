<script lang="ts" setup>
defineProps<{
  position?: 'top' | 'bottom'
}>()
</script>

<template>
  <div
    class="nav-bar glass-fx"
    :class="{
      'bottom-0': position === 'bottom',
      'top-0': position !== 'bottom'
    }"
  >
    <div class="container mx-auto">
      <div class="nav-bar-content flex justify-center items-center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  @apply z-10 flex fixed left-0 right-0 h-20 sm:h-36 justify-between items-center;
}
.glass-fx {
  @apply bg-slate-950/90 sm:bg-transparent backdrop-blur sm:backdrop-blur-none;
}
</style>
