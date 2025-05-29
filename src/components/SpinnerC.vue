<script setup>
  import CardWrap from '../partials/CardWrap.vue'

  import { useLibrary } from '@/stores/library'
  import { useSpinner } from '@/stores/spinner'
  import { colorize } from '@/assets/utils'

  import { PlayIcon, TrashIcon, 
    ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/outline'

  const library = useLibrary()
  const spinner = useSpinner()
</script>

<template>
  <CardWrap title="The Fates Decided:" @close="spinner.quit()">
    <button :class="`${ colorize() } btn-block`">{{ library.results.title }}</button>
    <template #footer>
      <button class="btn mr-auto"><TrashIcon class="size-6 text-error" /></button>
      <button class="btn"><ArrowPathRoundedSquareIcon class="size-6 text-accent" /></button>
      <button class="btn"><PlayIcon class="size-6 text-success" /></button>
    </template>
  </CardWrap>
</template>

