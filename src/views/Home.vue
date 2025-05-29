<script setup>
  import PageWrap from '@/partials/PageWrap.vue'
  import DataWrap from '@/partials/DataWrap.vue'

  import { RouterLink } from 'vue-router'
  import { useLibrary } from '@/stores/library'
  import { QueueListIcon, SquaresPlusIcon } from '@heroicons/vue/24/outline'

  const library = useLibrary()
</script>

<template>
  <PageWrap :title="library.current.name" :icon="QueueListIcon" link="/listing">

    <DataWrap v-for="w in library.current.list" :data="w" />

    <div class="text-center" v-if="!library.current.list.length">
      <h3>I'm empty!</h3>
      <router-link to="/search">
        <SquaresPlusIcon class="size-20 inline-block" />
        <br /> Find Something...
      </router-link>
      
    </div>
    
  </PageWrap>
</template>

<style scoped>
  a {
    text-decoration: none;
  }
</style>