import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentItemStore = defineStore('currentItem', () => {
  const currentItem = ref(null)

  function setCurrentItem(data) {
    currentItem.value = data
  }

  return {
    currentItem,
    setCurrentItem,
  }
})
