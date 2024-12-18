<script setup>
  import { useLibraryStore } from '@/stores/library'

  const library = useLibraryStore()
</script>

<template>
  <header>
    <Button fluid outlined :label="library.currName" severity="secondary"
      as="router-link" to="/list" />
  </header>
  
  <Divider />
</template>

<style scoped>
  .p-button {
    line-height: 21px;
    text-decoration: none;
  }
</style>