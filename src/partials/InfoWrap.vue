<script setup>
  const { data } = defineProps(['data'])
  import { BookmarkIcon, XMarkIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="overlay">
    <div class="card bg-base-300 text-base-content">
      <figure class="not-prose" :style="{ 'background-image': `url(${ data.photo })`}">
        <div class="meta absolute">
          <div class="badge">{{ data.score }}/10</div>
          <div class="badge">{{ data.rated }}</div>
          <div class="badge">{{ data.years }}</div>
        </div>
      </figure>
      
      <div class="action fixed">
        <button class="btn btn-circle">
          <BookmarkIcon class="size-6 text-success" />
        </button>
        <br />
        <button class="btn btn-circle mt-5" @click="$emit('close')">
          <XMarkIcon class="size-6 text-error" />
        </button>
      </div>

      <div class="card-body">
        <h2 class="card-title">{{ data.title }}</h2>
        <p>{{ data.blurb }}</p>
        <p>
          <span class="badge badge-neutral" 
            v-for="g in data.genre">
            {{ g }}
          </span>
          <br>
          <span class="badge badge-neutral" v-if="data.timer">
            {{ data.timer }}min
          </span>
          <span class="badge badge-neutral" v-if="data.parts">
            {{ data.parts }} Seasons
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .overlay {
    z-index: 9999;
    padding: 30px;
    background: rgba(0,0,0,0.65)
  }
  .card-title {
    margin: 0;
  }
  figure {
    height: 300px;
    position: relative;
    background-size: cover;
    background-position: center;
  }
  .action {
    top: 305px;
    right: 5px;
  }
  .meta {
    left: 25px;
    bottom: 10px;
  }
  .meta .badge {
    font-weight: bold;
  }
  .badge + .badge {
    margin-left: 5px;
  }
  p + p {
    margin: 0;
  }
</style>