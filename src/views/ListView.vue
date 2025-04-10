<script setup>
  import PagePanel from '@/partials/PagePanel.vue'
  import { RouterLink } from 'vue-router'

  import { Bars4Icon } from '@heroicons/vue/24/outline'
  import { useLibrary } from '@/stores/library'
  import { colorize } from '@/assets/utils'
  import { FolderPlusIcon } from '@heroicons/vue/24/outline'

  const library = useLibrary()
</script>

<template>
  <PagePanel title="My Lists" :icon="FolderPlusIcon">
    <RouterLink to="/">
      <button :class="colorize()"
        v-for="list in library.listAll"
        @click="library.getList(list.id)">
        <Bars4Icon class="float-start size-5" />
        {{ list.name }}
        <div class="badge badge-lg float-end">{{ list.list.length }}</div>
      </button>
    </RouterLink>
  </PagePanel>
</template>

<style scoped>
  .btn {
    width: 100%;
    display: block;
    text-align: left;
    margin-bottom: 15px;
  }
  a { text-decoration: none; }
  section svg {
    margin-left: -28px;
  }
  .badge {
    border: none;
    margin: -1px -35px 0 0;
  }
</style>
