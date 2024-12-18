<script setup>
  import { useLibraryStore } from '@/stores/library'

  const library = useLibraryStore()
</script>

<template>
  <header>
    <Button fluid outlined label="Create New List" severity="secondary" />
  </header>

  <Divider />

  <section>
    <Button fluid raised size="large" severity="contrast" class="list"
      v-for="list in library.fullList" :label="list.name" as="router-link" to="/" 
      @click="library.loadList(list.id)" />
  </section>
</template>

<style scoped>
  .list {
    margin-bottom: 10px;
  }
  .p-button {
    text-decoration: none;
  }
</style>