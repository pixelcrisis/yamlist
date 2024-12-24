<script setup>
  import { FolderPlusIcon, Bars4Icon } from '@heroicons/vue/24/outline'
  import { useLibraryStore } from '@/stores/library'
  import { colorize } from '@/assets/utils'

  const library = useLibraryStore()
</script>

<template>
  <div class="wrap">
    <header>
      <h2>
        <FolderPlusIcon class="float-start size-5" />
        My Lists
      </h2>
    </header>

    <div class="divider"></div>
    
    <section>
      <RouterLink to="/">
        <button :class="colorize()"
          v-for="list in library.listAll"
          @click="library.getList(list.id)">
          <Bars4Icon class="float-start size-5" />
          {{ list.name }}
          <div class="badge badge-lg float-end">{{ list.list.length }}</div>
        </button>
      </RouterLink>
    </section>
  </div>
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
