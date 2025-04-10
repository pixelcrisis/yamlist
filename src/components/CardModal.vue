<script setup>
  const props = defineProps([ 'title', 'close' ])
</script>

<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="card bg-base-300 text-base-content">
      <div class="card-body">
        <h2 class="card-title mb-5">{{ props.title }}</h2>
        
        <slot></slot>

        <div class="card-actions justify-end mt-5">
          <slot name="footer">
            <button class="btn btn-ghost btn-sm" @click="$emit('close')">
              {{ props.close || 'Done' }}
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
