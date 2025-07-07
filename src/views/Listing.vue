<script setup>
  import { ref } from 'vue'
  import PageWrap from '@/partials/PageWrap.vue'
  import { RouterLink } from 'vue-router'

  import { Bars4Icon } from '@heroicons/vue/24/outline'
  import { useLibrary } from '@/stores/library'
  import { colorize } from '@/assets/utils'
  import { FolderPlusIcon } from '@heroicons/vue/24/outline'

  const library = useLibrary()

  const create = ref(null)
  const creator = ref(false)
  
  function newList () {
    let name = create.value.value
    if (name) library.newList(name)
    create.value.value = ""
    creator.value = false
    create.value.blur()
  }
</script>

<template>
  <PageWrap title="My Lists" :icon="FolderPlusIcon">

    <RouterLink to="/">

      <button :class="colorize()"
        v-for="list in library.listAll"
        @click="library.getList(list.id)">

        <Bars4Icon class="float-start size-5" /> {{ list.name }}
        <div class="badge badge-lg float-end">{{ list.list.length }}</div>
      </button>

    </RouterLink>

    <div class="divider"></div>
    <input type="text" ref="create"
      placeholder="Create New List..." 
      class="input input-primary text-center" 
      @focus="creator = true"
      @keyup.enter="newList()"
    />
    
    <div v-if="creator">
      <button class="btn btn-block btn-outline btn-primary" @click="newList()">
        Add List
      </button>
    </div>
    
  </PageWrap>
</template>

<style scoped>
  .btn, .input-primary {
    width: 100%;
    display: block;
    margin-bottom: 15px;
  }

  .btn:not(.btn-block) {
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
