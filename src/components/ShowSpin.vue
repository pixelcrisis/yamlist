<script setup>
  import PopOver from './PopOver.vue'
  import { useLibraryStore } from '@/stores/library'
  import { useSpinnerStore } from '@/stores/spinner'
  import { colorize } from '@/assets/utils'
  
  import { 
    PlayIcon, ForwardIcon, TrashIcon,
    ArrowPathRoundedSquareIcon 
  } from '@heroicons/vue/24/outline'

  const library = useLibraryStore()
  const spinner = useSpinnerStore()
</script>

<template>
  <PopOver title="Getting Ready..." v-if="spinner.stage1" @close="spinner.quit()">
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Under 30 Minutes</span>
        <input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
      </label>
      <label class="label cursor-pointer">
        <span class="label-text">From 30 - 60 Minutes</span>
        <input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
      </label>
      <label class="label cursor-pointer">
        <span class="label-text">Over 60 Minutes</span>
        <input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
      </label>
    </div>
    <div class="divider"></div>
    
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Movies</span>
        <input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
      </label>
      <label class="label cursor-pointer">
        <span class="label-text">TV Shows</span>
        <input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
      </label>
      <label class="label cursor-pointer">
        <span class="label-text">Anime</span>
        <input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
      </label>
      <label class="label cursor-pointer">
        <span class="label-text">Documentary</span>
        <input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
      </label>
    </div>
    <template #footer>
      <button class="btn btn-block btn-secondary" @click="spinner.spin()">Spin The Wheel</button>
    </template>
  </PopOver>

  <PopOver title="Spinning The Wheel..." v-if="spinner.stage2" @close="spinner.quit()">
    <div class="spinner">
      <div class="spinning">
        <button :class="`${ colorize() } btn-block`" v-for="list in library.current.list">
          {{ list.title }}
        </button>
      </div>
      <div class="spinning" aria-hidden>
        <button :class="`${ colorize() } btn-block`" v-for="list in library.current.list">
          {{ list.title }}
        </button>
      </div>
    </div>
    <template #footer>
      <button class="btn btn-block" @click="spinner.skip()">
        <ForwardIcon class="size-6 text-neutral" />
      </button>
    </template>
  </PopOver>

  <PopOver title="The Fates Decided:" v-if="spinner.stage3" @close="spinner.quit()">
    <button :class="`${ colorize() } btn-block`">{{ library.results.title }}</button>
    <template #footer>
      <button class="btn mr-auto"><TrashIcon class="size-6 text-error" /></button>
      <button class="btn"><ArrowPathRoundedSquareIcon class="size-6 text-accent" /></button>
      <button class="btn"><PlayIcon class="size-6 text-success" /></button>
    </template>
  </PopOver>
</template>

<style scoped>
  .spinner {
    height: 100px;
    overflow: hidden;
  }
  .spinning {
    min-height: 100%;
    animation: scrolling 0.5s linear infinite;
  }
  .spinning .btn {
    margin-bottom: 10px;
  }
</style>
