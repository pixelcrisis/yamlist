<script setup lang="ts">
  import { useRouter, RouterView } from 'vue-router'

  const router = useRouter()
  const viewed = () => router.currentRoute.value.path
</script>

<template>
  <Toolbar>
    <template #start>
      <Button icon="pi pi-pencil" severity="info" 
        size="small" rounded text as="router-link" to="/list" />
    </template>

    <template #center>
      <Button v-if="viewed() == '/'" class="spin"
        size="large" icon="pi pi-sync pi-spin" severity="help"
        raised rounded text />

      <Button v-if="viewed() != '/'" class="spin"
        size="large" icon="pi pi-home" severity="help"
        raised rounded text as="router-link" to="/" />
    </template>

    <template #end>
      <Button size="large" icon="pi pi-plus-circle" severity="primary"  
        rounded text as="router-link" to="/find" />
    </template>
  </Toolbar>

  <RouterView />
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
    text-decoration: none;
  }
</style>
