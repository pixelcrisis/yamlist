import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLibraryStore = defineStore('library', () => {
  const currList = ref(0)
  const currName = ref('Interests')
  const fullList = ref([
    { id: 0, name: 'Interests' },
    { id: 1, name: 'Suggestions' }
  ])
  
  function loadList (id) {
    let lib = fullList.value.find(e => e.id == id)
    if (!lib) return console.log(`list does not exist`)
    currList.value = lib.id
    currName.value = lib.name
  }

  return { currList, currName, fullList, loadList }
})