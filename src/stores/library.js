import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { listA, listB } from './dummy'

export const useLibrary = defineStore('library', () => {
  const listAll = ref([
    { id: 0, name: 'Interests', list: [ ...listA ], active: true },
    { id: 1, name: 'Suggestions', list: [ ...listB ] }
  ])

  const __index = ref(3)
  const results = ref({})
  const current = computed(() => listAll.value.find(e => e.active))

  function getList (id) {
    listAll.value.forEach(m => {
      if (m.active) m.active = false
      if (m.id == id) m.active = true
    })
  }

  function newList (name) {
    if (!name) return false
    listAll.value.push({ id: __index.value, name, list: [] })
    __index.value += 1
  }

  function random() {
    let curr = current.value.list
    let rand = Math.floor(Math.random() * curr.length)
    results.value = curr[ rand ]
  }

  return { 
    listAll, current, results, 
    getList, newList, random 
  }
})