<script setup>
  import CardModal from '@/components/CardModal.vue'
  
  import { useOptions } from '@/stores/options'

  let options = useOptions()
</script>

<template>
  <CardModal title="Options" v-if="options.open" @close="options.open = false">
    
    Options will go here.

  </CardModal>
</template>