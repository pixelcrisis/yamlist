import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOptions = defineStore('options', () => {
  const open = ref(false)

  return { open }
})