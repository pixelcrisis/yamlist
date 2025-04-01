<script setup>
  import axios from 'axios'
  import { ref, onMounted } from 'vue'
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
  
  const query = ref()
  const error = ref(false)
  const found = ref(false)

  onMounted(() => query.value.focus())

  function search () {
    let search = query.value.value
    found.value = false; error.value = !!search
    if (error) return false

    axios.post(`https://www.omdbapi.com/?apikey=&s=${ search }`)
      .then(res => { found.value = res })
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
      <div v-else-if="found">
        {{ found }}
      </div>
    </section>
  </div>
</template>

<style scoped>
  .err, .btn-primary {
    margin-top: 20px;
  }
</style>