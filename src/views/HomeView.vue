<script setup>
  import { RouterLink } from 'vue-router'
  import { useLibraryStore } from '@/stores/library'
  import { QueueListIcon } from '@heroicons/vue/24/outline'

  const library = useLibraryStore()
</script>

<template>
  <div class="wrap">
    <header>
      <RouterLink to="/list">
        <h2>
          <QueueListIcon class="float-start size-5" />
          {{ library.current.name }}
        </h2>
      </RouterLink>
    </header>

    <div class="divider"></div>
    
    <section>

    </section>
  </div>
</template>

<style scoped>
</style>
