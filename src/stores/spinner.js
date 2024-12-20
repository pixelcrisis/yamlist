import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSpinnerStore = defineStore('spinner', () => {
  const spin = ref(false)
  const spun = ref(false)
  const wait = ref(false)

  function spinList() {
    spin.value = true
    wait.value = setTimeout(() => skipSpin(), 3000)
  }

  function skipSpin() {
    spin.value = false
    spun.value = true
    clearTimeout(wait.value)
  }

  function stopSpin() {
    spin.value = false
    spun.value = false
    clearTimeout(wait.value)
  }

  return { spin, spun, spinList, skipSpin, stopSpin }
})