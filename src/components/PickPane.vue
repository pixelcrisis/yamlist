<script setup>
  import { useLibraryStore } from '@/stores/library'

  const library = useLibraryStore()
</script>

<template>
  <div class="overlay">  
    Pick Pane Goes Here
  </div>
</template>

<style scoped>
  .overlay {
    position: absolute; z-index: 99;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: var(--p-content-background);
  }
</style>