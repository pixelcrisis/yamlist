<script setup>
  const { data } = defineProps(['data'])
</script>

<template>
  <div class="card shadow-md" :style="{ 'background-image': `url(${ data.photo })` }">
    <div class="card-body not-prose">
      <h2 class="card-title">{{ data.title }}</h2>
      <p>{{ data.blurb }}</p>
    </div>
  </div>
</template>

<style scoped>
  .card {
    text-shadow: 0 0 5px #000;
    background-position: center;
  }
  .card-body {
    border-radius: 1rem;
    background-color: rgba(0,0,0,0.75);
  }
  p {
    font-size: 0.85em;
  }
  .badge {
    margin-left: 5px;
    background: #000;
  }
  .meta {
    position: absolute;
    top: 6px; right: 6px;
  }
</style>