<script setup>
  import { RouterLink } from 'vue-router'
  import { useSpinnerStore } from '@/stores/spinner'
  import { useOptionsStore } from '@/stores/options'
  import { useLibraryStore } from '@/stores/library'

  import { 
    ArrowPathRoundedSquareIcon, QueueListIcon, 
    SquaresPlusIcon, WrenchScrewdriverIcon, HomeIcon
  } from '@heroicons/vue/24/outline'

  defineProps({ path: { type: String, required: true } })

  const spinner = useSpinnerStore()
  const options = useOptionsStore()
  const library = useLibraryStore()

  function spin() {
    library.random()
    spinner.stage1 = true
  }
</script>

<template>
  <div class="btm-nav" data-theme="cmyk">

    <button v-if="path != '/list'">
      <RouterLink to="/list">
        <QueueListIcon class="size-6 text-primary" />
      </RouterLink>
    </button>
    <button v-else>
      <WrenchScrewdriverIcon class="size-6 text-primary" 
        @click="options.open = true"/>
    </button>


    <button v-if="path == '/'" class="rocker">
      <ArrowPathRoundedSquareIcon class="size-9 text-success" @click="spin()" />
    </button>
    <button v-else>
      <RouterLink to="/">
        <HomeIcon class="size-8 text-success" />
      </RouterLink>
    </button>


    <button>
      <RouterLink to="/find">
        <SquaresPlusIcon class="size-6 text-info" />
      </RouterLink>
    </button>
  </div>
</template>

<style scoped>
  .btm-nav {
    border-radius: 3rem;
    width: calc(100% - 60px);
    left: 30px; right: 30px; bottom: 30px;
  }
  .animate-spin {
    animation-duration: 20s;
  }
</style>
