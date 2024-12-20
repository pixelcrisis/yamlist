<script setup>
  import SpinPane from '@/components/SpinPane.vue'
  import PickPane from '@/components/PickPane.vue'
  import { useSpinnerStore } from '@/stores/spinner'
  import { useLibraryStore } from '@/stores/library'

  const spinner = useSpinnerStore()
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

  <SpinPane v-if="spinner.spin" />
  <PickPane v-if="spinner.spun" />
</template>