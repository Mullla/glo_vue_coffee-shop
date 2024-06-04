import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBestsellersStore = defineStore('bestsellers', () => {
  const bestsellers = ref([])

  function setBestsellersData(data) {
    bestsellers.value = data
  }

  return {
    bestsellers,
    setBestsellersData
  }
})
