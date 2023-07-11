<script lang="ts" setup>
defineProps<{
  position: 'top' | 'bottom'
}>()
</script>

<template>
  <div
    class="nav-bar"
    :class="{
      'bottom-0': position === 'bottom',
      'top-0': position === 'top'
    }"
  >
    <div class="container mx-auto">
      <div class="flex justify-center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  @apply flex fixed left-0 right-0 h-36 justify-between items-center;
}
</style>
