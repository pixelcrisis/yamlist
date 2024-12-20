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
      v-for="list in library.listAll" :label="list.name" as="router-link" to="/" 
      @click="library.getList(list.id)" />
  </section>
</template>