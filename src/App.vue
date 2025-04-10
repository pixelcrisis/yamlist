<script setup>
  import { useRouter } from 'vue-router'
  import HomePanel from './partials/HomePanel.vue'
  import OptsPanel from './partials/OptsPanel.vue'
  import SpinPanel from './partials/SpinPanel.vue'

  const router = useRouter()
  const viewed = () => router.currentRoute.value.path
  router.afterEach((to, from) => {
    let left = to.meta.index > from.meta.index
    if (!from.name) to.meta.transition = 'fade'
    else to.meta.transition = left ? 'slide-left' : 'slide-right'
  })
</script>

<template>
  <HomePanel :path="viewed()" />

  <RouterView v-slot="{ Component, route }" class="prose">
    <transition :name="route.meta.transition">
      <component :key="route.path" :is="Component" />
    </transition>
  </RouterView>
  
  <OptsPanel />
  <SpinPanel />
</template>