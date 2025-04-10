<script setup>
  import PagePanel from '@/partials/PagePanel.vue'

  import { useLibrary } from '@/stores/library'
  import { QueueListIcon } from '@heroicons/vue/24/outline'

  const library = useLibrary()
</script>

<template>
  <PagePanel :title="library.current.name" :icon="QueueListIcon" link="/list">

  </PagePanel>
</template>