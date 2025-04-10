<script setup>
  import CardModal from './CardModal.vue'

  import { useLibrary } from '@/stores/library'
  import { useSpinner } from '@/stores/spinner'
  import { colorize } from '@/assets/utils'
  import { ForwardIcon } from '@heroicons/vue/24/outline'

  const library = useLibrary()
  const spinner = useSpinner()
</script>

<template>
  <CardModal title="Spinning The Wheel..." @close="spinner.quit()">
    <div class="spinner">
      <div class="spinning">
        <button :class="`${ colorize() } btn-block`" v-for="list in library.current.list">
          {{ list.title }}
        </button>
      </div>
      <div class="spinning" aria-hidden>
        <button :class="`${ colorize() } btn-block`" v-for="list in library.current.list">
          {{ list.title }}
        </button>
      </div>
    </div>
    <template #footer>
      <button class="btn btn-block" @click="spinner.skip()">
        <ForwardIcon class="size-6 text-neutral" />
      </button>
    </template>

  </CardModal>
</template>

<style scoped>
  .spinner {
    height: 100px;
    overflow: hidden;
  }
  .spinning {
    min-height: 100%;
    animation: scrolling 0.5s linear infinite;
  }
  .spinning .btn {
    margin-bottom: 10px;
  }
</style>