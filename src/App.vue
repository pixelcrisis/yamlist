<script setup>
  import { useRouter, RouterView } from 'vue-router'
  import { useOptionsStore } from './stores/options'
  import MainBar from './components/MainBar.vue'
  import OptPane from './components/OptPane.vue'

  const router = useRouter()
  const viewed = () => router.currentRoute.value.path

  const options = useOptionsStore()
</script>

<template>
  <RouterView />
  
  <MainBar :path="viewed()" />

  <Drawer header="Options" v-model:visible="options.showopts">
    <OptPane />
  </Drawer>
</template>