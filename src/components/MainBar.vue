<script setup>
  import { ref } from 'vue'
  import { Drawer, Toolbar } from 'primevue'
  import OptPane from './OptPane.vue'

  defineProps({ path: { type: String, required: true } })

  const open = ref(false)
</script>

<template>
  <Toolbar>
    <template #start>
      <Button v-if="path == '/list'" icon="pi pi-bars" severity="info" 
        rounded text @click="open = true" />
      <Button v-else icon="pi pi-pencil" severity="info"
        size="small" rounded text as="router-link" to="/list" />
    </template>

    <template #center>
      <Button v-if="path == '/'" class="spin"
        size="large" icon="pi pi-sync pi-spin" severity="help"
        raised rounded text />

      <Button v-else class="spin"
        size="large" icon="pi pi-home" severity="help"
        raised rounded text as="router-link" to="/" />
    </template>

    <template #end>
      <Button size="large" icon="pi pi-plus-circle" severity="primary"  
        rounded text as="router-link" to="/find" />
    </template>
  </Toolbar>

  <Drawer header="Options" v-model:visible="open">
    <OptPane />
  </Drawer>
</template>

<style scoped>
  .p-toolbar {
    position: absolute;
    bottom: 30px; left: 30px; right: 30px;
    border-radius: 3rem;
    background: #fff;
  }
  .spin > * {
    animation-duration: 15s !important;
  }
  .p-button {
    line-height: 21px;
    text-decoration: none;
  }
</style>
