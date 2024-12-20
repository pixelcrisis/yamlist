<script setup>
  import SpinPane from '@/components/SpinPane.vue'
  import PickPane from '@/components/PickPane.vue'
  import { useOptionsStore } from '@/stores/options'
  import { useLibraryStore } from '@/stores/library'

  const options = useOptionsStore()
  const library = useLibraryStore()
</script>

<template>
  <header>
    <Button fluid outlined :label="library.current.name" severity="secondary"
      as="router-link" to="/list" />
  </header>
  
  <Divider />

  <section>
    <Button fluid outlined size="large" severity="contrast" class="list"
      v-for="list in library.current.list" :label="list.title" />

  </section>

  <SpinPane v-if="options.spin" />
  <PickPane v-if="options.spun" />
</template>