<script setup>
  import PageWrap from '@/partials/PageWrap.vue'
  import DataWrap from '@/partials/DataWrap.vue'
  import InfoWrap from '@/partials/InfoWrap.vue'
  
  import { ref, onMounted } from 'vue'
  import { formatOMDB, search, detail } from '@/assets/media'
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

  const query = ref()
  const going = ref(false)
  const error = ref(false)
  const first = ref(false)
  const found = ref(false)
  const think = ref(false)

  onMounted(() => query.value.focus())

  function find() {
    if (going.value) return
    going.value = true
    error.value = false
    first.value = false
    found.value = false
    search(query.value.value, res => {
      if (res.error) error.value = true
      if (res.first) first.value = res.first
      if (res.found) found.value = res.found
      going.value = false
    })
  }

  function check(res) {
    think.value = formatOMDB(res.data)
  }
</script>

<template>
  <PageWrap>
    <InfoWrap :data="think" v-if="think" @close="think = false" />

    <template #header>
      <label class="input input-bordered input-primary flex items-center gap-2">
        <input type="text" class="grow" 
          placeholder="Find Something..." 
          ref="query" @keyup.enter="find()">
        </input>
        <MagnifyingGlassIcon class="size-5" />
      </label>

      <button class="btn btn-block btn-primary" @click="find()">
        Search
      </button>
    </template>

    <div v-if="first">
      <h4 class="text-center">BEST GUESS</h4>
      <DataWrap 
        :data="formatOMDB(first)"
        @click="detail(first.imdbID, check)">
      </DataWrap>
    </div>

    <div v-if="found">
      <h4 class="text-center">ALL RESULTS</h4>
      <DataWrap
        v-for="res in found.Search" 
        :data="formatOMDB(res)"
        @click="detail(res.imdbID, check)">
      </DataWrap>
    </div>

    <div class="text-center">
      <div v-if="error" class="err">Somewithing Went Wrong! Try Again?</div>
      <span v-if="going" class="loading loading-lg loading-infinity text-primary"></span>
    </div>

  </PageWrap>
</template>

<style scoped>
  .err, 
  section,
  .btn-primary {
    margin-top: 20px;
  }
  .card {
    cursor: pointer;
  }
</style>