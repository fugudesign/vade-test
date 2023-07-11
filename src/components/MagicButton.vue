<script lang="ts" setup>
import InlineSvg from 'vue-inline-svg'

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button @click="emit('click')" class="magic-button group">
    <span class="animated-reflect"></span>
    <inline-svg
      src="/noun-magic-lamp-2105386.svg"
      width="1em"
      height="1em"
      aria-label="Magic lamp"
      fill="currentColor"
      class="text-5xl ml-1 -mt-1"
    />
  </button>
</template>

<style scoped>
.magic-button {
  @apply relative overflow-hidden flex justify-center items-center h-20 w-20 rounded-full transition-all ease-in-out duration-200 text-white bg-gradient-to-t from-lime-950 to-lime-500 shadow-xl hover:shadow-2xl shadow-lime-300/20 hover:shadow-lime-300/50 hover:scale-[1.01] border-lime-500 border-2;
}
.animated-reflect {
  @apply absolute right-0 w-8 h-32 -mt-12 transition-all duration-700 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease-in-out;
}
</style>
