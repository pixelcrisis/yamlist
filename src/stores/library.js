import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const dummyListA = [
  { title: "Movie 1" }, { title: "Movie 2" }, { title: "Movie 3" }
]

const dummyListB = [
  { title: "Movie A" }, { title: "Movie B" }, { title: "Movie C" }
]

export const useLibraryStore = defineStore('library', () => {
  const listAll = ref([
    { id: 0, name: 'Interests', list: [ ...dummyListA ], active: true },
    { id: 1, name: 'Suggestions', list: [ ...dummyListB ] }
  ])

  const results = ref({})
  const current = computed(() => listAll.value.find(e => e.active))

  function getList (id) {
    listAll.value.forEach(m => {
      if (m.active) m.active = false
      if (m.id == id) m.active = true
    })
  }

  function random() {
    let curr = current.value.list
    let rand = Math.floor(Math.random() * curr.length)
    results.value = curr[ rand ]
  }

  return { listAll, current, results, getList, random }
})