<script setup>
  import { computed } from 'vue'
  import { Toolbar } from 'primevue'
  import { useOptionsStore } from '@/stores/options'

  defineProps({ path: { type: String, required: true } })

  const options = useOptionsStore()
  const spinning = computed(() => options.spin || options.spun)
</script>

<template>
  <Toolbar>
    <template #start>
      <Button v-if="path == '/list'" icon="pi pi-bars" severity="info" 
        rounded text @click="options.showopts = true" />
      <Button v-else icon="pi pi-pencil" severity="info"
        size="small" rounded text as="router-link" to="/list" />
    </template>

    <template #center>
      <Button v-if="path == '/' && !spinning"
        size="large" icon="pi pi-sync pi-spin" severity="help"
        raised rounded text @click="options.spinList()" />

      <Button v-else-if="options.spin"
        size="large" icon="pi pi-angle-double-right" severity="help"
        raised rounded text @click="options.skipSpin()" />

      <Button v-else-if="options.spun"
        size="large" icon="pi pi-times" severity="help"
        raised rounded text @click="options.stopSpin()" />

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
