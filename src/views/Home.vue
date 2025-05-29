<script setup>
  import PageWrap from '@/partials/PageWrap.vue'
  import DataWrap from '@/partials/DataWrap.vue'

  import { useLibrary } from '@/stores/library'
  import { QueueListIcon } from '@heroicons/vue/24/outline'

  const library = useLibrary()
</script>

<template>
  <PageWrap :title="library.current.name" :icon="QueueListIcon" link="/list">

    <DataWrap v-for="w in library.current.list" :data="w" />
    
  </PageWrap>
</template>