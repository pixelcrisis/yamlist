<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Toolbar from 'primevue/toolbar'
</script>

<template>
  <Toolbar>
    <template #start>
      <Button icon="pi pi-pencil" severity="info" 
        rounded text as="router-link" to="/list" />
    </template>

    <template #center>
      <Button class="spin" size="large" icon="pi pi-sync pi-spin" severity="help"
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
    bottom: 20px;
    width: 90%;
    left: 5%;
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
