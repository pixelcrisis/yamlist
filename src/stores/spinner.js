import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSpinner = defineStore('spinner', () => {
  const stage1 = ref(false) // show options
  const stage2 = ref(false) // show spinner
  const stage3 = ref(false) // show results
  const _delay = ref(false) // skip storage

  function spin() {
    stage1.value = false
    stage2.value = true
    _delay.value = setTimeout(() => skip(), 2000)
  }

  function skip() {
    stage2.value = false
    stage3.value = true
    clearTimeout(_delay.value)
  }

  function stop() {
    stage2.value = false
    stage3.value = false
    clearTimeout(_delay.value)
  }

  function quit() {
    stage1.value = false
    stop()
  }

  function show() {
    return stage1 || stage2 || stage3
  }

  return { stage1, stage2, stage3, spin, skip, stop, quit, show }
})