<script setup>
  import CardModal from './CardModal.vue'

  import { useSpinner } from '@/stores/spinner'

  const spinner = useSpinner()
</script>

<template>
  <CardModal title="Getting Ready..." @close="spinner.quit()">
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
  </CardModal>
</template>