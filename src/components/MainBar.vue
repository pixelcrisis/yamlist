<script setup>
  import { computed } from 'vue'
  import { Toolbar } from 'primevue'
  import { useSpinnerStore } from '@/stores/spinner'
  import { useOptionsStore } from '@/stores/options'
  import { useLibraryStore } from '@/stores/library'

  defineProps({ path: { type: String, required: true } })

  const spinner = useSpinnerStore()
  const options = useOptionsStore()
  const library = useLibraryStore()
  const hasSpin = computed(() => spinner.spin || spinner.spun)

  function spin() {
    library.random()
    spinner.spinList()
  }
</script>

<template>
  <Toolbar>
    <template #start>
      <Button v-if="path == '/list'" icon="pi pi-bars" severity="info" 
        rounded text @click="options.open = true" />
      <Button v-else icon="pi pi-pencil" severity="info"
        size="small" rounded text as="router-link" to="/list" />
    </template>

    <template #center>
      <Button v-if="path == '/' && !hasSpin"
        size="large" icon="pi pi-sync pi-spin" severity="help"
        raised rounded text @click="spin" />

      <Button v-else-if="spinner.spin"
        size="large" icon="pi pi-angle-double-right" severity="help"
        raised rounded text @click="spinner.skipSpin()" />

      <Button v-else-if="spinner.spun"
        size="large" icon="pi pi-times" severity="help"
        raised rounded text @click="spinner.stopSpin()" />

      <Button v-else
        size="large" icon="pi pi-home" severity="help"
        raised rounded text as="router-link" to="/" />
    </template>

    <template #end>
      <Button size="large" icon="pi pi-plus-circle" severity="primary"  
        rounded text as="router-link" to="/find" />
    </template>
  </Toolbar>
</template>

<style scoped>
  .p-toolbar {
    position: fixed; z-index: 100;
    bottom: 30px; left: 30px; right: 30px;
    border-radius: 3rem;
    background: #fff;
  }
  .p-button > * {
    animation-duration: 15s !important;
  }
  .p-button {
    line-height: 21px;
    text-decoration: none;
  }
</style>
