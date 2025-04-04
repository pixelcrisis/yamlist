<script setup>
  import axios from 'axios'
  import { ref, onMounted } from 'vue'
  import { format } from '@/assets/utils'
  import WatchCard from '@/components/WatchCard.vue'
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
  
  const query = ref()
  const error = ref(false)
  const first = ref(false)
  const found = ref(false)
  const __key = import.meta.env.VITE_OMDB_KEY
  const __api = `https://www.omdbapi.com?apikey=${ __key }`

  onMounted(() => query.value.focus())

  function search () {
    let text = query.value.value
    found.value = false; error.value = !text
    if (error.value) return false
    
    axios.post(`${ __api }&t=${ text }`)
      .then(res => { first.value = format(res.data) })
      .catch(err => { console.log(err); error.value = true })

    axios.post(`${ __api }&s=${ text }`)
      .then(res => { found.value = res.data })
      .catch(err => { console.log(err); error.value = true })
  }
</script>

<template>
  <div class="wrap">
    <header>
      <label class="input input-bordered input-primary flex items-center gap-2">
        <input type="text" class="grow" 
          placeholder="Find Something..." 
          ref="query" @keyup.enter="search">
        </input>
        <MagnifyingGlassIcon class="size-5" />
      </label>
      <button class="btn btn-block btn-primary" @click="search">
        Search
      </button>
    </header>
    <section>
      <div v-if="error" class="err text-center">Something went wrong! Try again?</div>
      <div v-if="first">
        <h4 class="text-center">BEST GUESS</h4>
        <WatchCard :data="first" />
      </div>
      <div v-if="found">
        <h4 class="text-center">MORE RESULTS</h4>
        <WatchCard v-for="res in found.Search" :data="format(res)" />
        {{  found  }}
      </div>
    </section>
  </div>
</template>

<style scoped>
  .err, 
  section,
  .btn-primary {
    margin-top: 20px;
  }
  .card + .card {
    margin-top: 10px;
  }
</style>