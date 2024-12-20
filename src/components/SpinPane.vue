<script setup>
  import { computed } from 'vue'
  import { useLibraryStore } from '@/stores/library'

  const library = useLibraryStore()

  const height = computed(() => {
    let h = library.current.list.length * 50
    return `height: ${ h > 1000 ? 1000 : h }px`
  })
</script>

<template>
  <div class="overlay">
    <h1>Spinning The Wheel...</h1>
    <div class="spinner" :style="height">
      <div class="spinning">
        <Button fluid raised size="large" severity="contrast" class="list"
        v-for="list in library.current.list" :label="list.title" />
      </div>
      <div class="spinning" aria-hidden>
        <Button fluid raised size="large" severity="contrast" class="list"
        v-for="list in library.current.list" :label="list.title" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .spinner {
    max-height: 60%;
    margin-top: 30px;
    overflow: hidden;
  }
  .spinning {
    min-height: 100%;
    animation: scrolling 0.75s linear infinite;
  }
  
  @keyframes scrolling {
    0% { transform: translateY(0) }
    100% { transform: translateY(-100%) }
  }
</style>