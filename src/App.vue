<script setup>
  import { useRouter, RouterView } from 'vue-router'
  import MainBar from './components/MainBar.vue'

  const router = useRouter()
  const viewed = () => router.currentRoute.value.path
</script>

<template>
  <MainBar :path="viewed()" />

  <RouterView />
</template>