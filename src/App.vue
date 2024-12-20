<script setup>
  import { useRouter, RouterView } from 'vue-router'
  import { useOptionsStore } from './stores/options'
  import MainBar from './components/MainBar.vue'
  import OptPane from './components/OptPane.vue'

  const router = useRouter()
  const viewed = () => router.currentRoute.value.path
  router.afterEach((to, from) => {
    let left = to.meta.index > from.meta.index
    if (!from.name) to.meta.transition = 'fade'
    else to.meta.transition = left ? 'slide-left' : 'slide-right'
  })

  const options = useOptionsStore()
</script>

<template>
  <MainBar :path="viewed()" />

  <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition">
      <component :is="Component" />
    </Transition>
  </RouterView>

  <Drawer header="Options" v-model:visible="options.open">
    <OptPane />
  </Drawer>
</template>