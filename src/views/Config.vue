<script setup>
  import CardWrap from '@/partials/CardWrap.vue'
  
  import { useOptions } from '@/stores/options'
  
  let options = useOptions()
</script>

<template>
  <CardWrap title="Options" v-if="options.open" @close="options.open = false">
    
    Options will go here.

  </CardWrap>
</template>