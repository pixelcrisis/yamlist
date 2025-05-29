<script setup>
  import { RouterLink } from 'vue-router'
  import { useOptions } from '@/stores/options'
  import { useLibrary } from '@/stores/library'
  import { useSpinner } from '@/stores/spinner'

  import { HomeIcon, QueueListIcon, SquaresPlusIcon,
    WrenchScrewdriverIcon, ArrowPathRoundedSquareIcon
  } from '@heroicons/vue/24/outline'

  const { path } = defineProps(['path'])
  const options = useOptions()
  const library = useLibrary()
  const spinner = useSpinner()

  function spin() {
    library.random()
    spinner.stage1 = true
  }
</script>

<template>
  <div class="btm-nav" data-theme="cmyk">
    <button v-if="path == '/listing'" @click="options.open = true">
      <WrenchScrewdriverIcon class="size-6 text-primary" />
    </button>
    <RouterLink to="/listing" v-if="path != '/listing'">
      <QueueListIcon class="size-6 text-primary" />
    </RouterLink>

    <button v-if="path == '/'" class="rocker" @click="spin()">
      <ArrowPathRoundedSquareIcon class="size-9 text-success" />
    </button>
    <RouterLink to="/" v-if="path != '/'">
      <HomeIcon class="size-8 text-success" />
    </RouterLink>

    <RouterLink to="/search">
      <SquaresPlusIcon class="size-6 text-info" />
    </RouterLink>
  </div>
</template>

<style scoped>
  .btm-nav {
    z-index: 9998;
    border-radius: 3rem;
    width: calc(100% - 60px);
    left: 30px; right: 30px; bottom: 30px;
  }
</style>