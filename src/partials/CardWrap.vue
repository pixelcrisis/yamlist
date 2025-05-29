<script setup>
  const props = defineProps([ 'title', 'close' ])

  import { XMarkIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="card bg-base-300 text-base-content">
      <div class="card-body">
        <h2 class="card-title mb-5">{{ props.title }}</h2>
        
        <slot></slot>
      </div>
    </div>
    <div class="foot bg-base-200" v-if="$slots.footer">
      <slot name="footer" @close="$emit('close')">
      </slot>
    </div>
    <button class="foot btn" @click="$emit('close')" v-if="!$slots.footer">
      <span v-if="props.close">props.close</span>
      <XMarkIcon class="size-9 text-error inline-block" v-else />
    </button>
  </div>
</template>

<style scoped>
  .overlay {
    z-index: 9999;
    padding: 30px;
    background: rgba(0,0,0,0.65);
  }

  .card {
    position: absolute;
    max-height: calc(100vh - 150px);
    left: 30px; right: 30px; bottom: 120px;
  }

  .foot {
    padding: 8px 0;
    min-height: 64px;
    text-align: center;
    position: absolute;
    border-radius: 3rem;
    width: calc(100% - 60px);
    bottom: 30px; left: 30px; right: 30px;
  }

  .foot .btn {
    border-radius: 1rem;
  }
</style>
