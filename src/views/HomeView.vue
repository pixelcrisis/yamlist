<script setup>
  import PagePanel from '@/partials/PagePanel.vue'
  import MediaCard from '@/components/MediaCard.vue'

  import { useLibrary } from '@/stores/library'
  import { QueueListIcon } from '@heroicons/vue/24/outline'

  const library = useLibrary()
</script>

<template>
  <PagePanel :title="library.current.name" :icon="QueueListIcon" link="/list">
    <MediaCard v-for="w in library.current.list" :data="w" />
  </PagePanel>
</template>

<style scoped>
  .card + .card {
    margin-top: 10px;
  }
</style>