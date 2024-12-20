<script setup>
  import { useLibraryStore } from '@/stores/library'

  const library = useLibraryStore()
</script>

<template>
  <div class="overlay">
    <h1>Here You Go!</h1>
    <Button fluid size="large" :label="library.results.title" severity="contrast" />
  </div>
</template>

<style scoped>
  .p-button {
    margin-top: 30px;
  }
</style>