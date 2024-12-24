<script setup>
  import PopOver from './PopOver.vue'
  import { useOptionsStore } from '@/stores/options'

  let options = useOptionsStore()
</script>

<template>
  <PopOver title="Settings" v-if="options.open" @close="options.open = false">
    Options will go here.
  </PopOver>
</template>
