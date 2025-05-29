<script setup>
  import Config from './views/Config.vue'
  import Spinner from './views/Spinner.vue'

  import NavBar from './components/NavBar.vue'

  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const viewed = () => router.currentRoute.value.path
  router.afterEach((to, from) => {
    let left = to.meta.index > from.meta.index
    if (!from.name) to.meta.transition = 'fade'
    else to.meta.transition = left ? 'slide-left' : 'slide-right'
  })
</script>

<template>
  <NavBar :path="viewed()" />

  <RouterView v-slot="{ Component, route }" class="prose">
    <transition :name="route.meta.transition">
      <component :key="route.path" :is="Component" />
    </transition>
  </RouterView>
  
  <Config />
  <Spinner />
</template>