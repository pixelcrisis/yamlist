<script setup>
  import CardWrap from '../partials/CardWrap.vue'

  import { useSpinner } from '@/stores/spinner'
  import { ArrowRightCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline'

  const spinner = useSpinner()
</script>

<template>
  <CardWrap title="Getting Ready..." @close="spinner.quit()">
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
      <button class="btn" @click="spinner.quit()">
        <XCircleIcon class="size-8 text-error" />
      </button>
      <button class="btn" @click="spinner.spin()">
        <ArrowRightCircleIcon class="size-8 text-success" />
      </button>
    </template>
  </CardWrap>
</template>