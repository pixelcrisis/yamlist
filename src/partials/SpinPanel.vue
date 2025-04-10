<script setup>
  import SpinSetup from '@/components/SpinSetup.vue'
  import SpinStart from '@/components/SpinStart.vue'
  import SpinFinal from '@/components/SpinFinal.vue'

  import { useSpinner } from '@/stores/spinner'

  const spinner = useSpinner()
</script>

<template>
  <SpinSetup v-if="spinner.stage1" />
  <SpinStart v-if="spinner.stage2" />
  <SpinFinal v-if="spinner.stage3" />
</template>