import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOptionsStore = defineStore('options', () => {
  const spin = ref(false)
  const spun = ref(false)
  const anim = ref(false)

  function spinList() {
    spin.value = true
    anim.value = setTimeout(() => skipSpin(), 5000)
  }

  function skipSpin() {
    spin.value = false
    spun.value = true
    clearTimeout(anim.value)
  }

  function stopSpin() {
    spin.value = false
    spun.value = false
    clearTimeout(anim.value)
  }

  const showopts = ref(false)

  function toggleOpts() {
    showopts.value = !showopts.value
  }

  return { 
    spin, spun, spinList, skipSpin, stopSpin, 
    showopts, toggleOpts
  }
})