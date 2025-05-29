<script setup>
  import SpinnerA from '@/components/SpinnerA.vue'
  import SpinnerB from '@/components/SpinnerB.vue'
  import SpinnerC from '@/components/SpinnerC.vue'

  import { useSpinner } from '@/stores/spinner'

  const spinner = useSpinner()
</script>

<template>
  <SpinnerA v-if="spinner.stage1" />
  <SpinnerB v-if="spinner.stage2" />
  <SpinnerC v-if="spinner.stage3" />
</template>