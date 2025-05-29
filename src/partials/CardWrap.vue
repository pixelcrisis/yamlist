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
    <div class="close">
      <slot name="footer">
        <button class="btn btn-lg btn-block" @click="$emit('close')">
          <span v-if="props.close">props.close</span>
          <XMarkIcon class="size-9 text-error inline-block" v-else />
        </button>
      </slot>
    </div>
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

  .close {
    width: 100%;
    padding: 0 30px;
    text-align: center;
    position: absolute;
    bottom: 30px; left: 0;
  }

  .close .btn {
    border-radius: 1rem;
  }
</style>
