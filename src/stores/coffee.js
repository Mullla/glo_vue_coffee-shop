import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoffeeStore = defineStore('coffee', () => {
  const coffee = ref([])
  const searchValue = ref('')
  const sortValue = ref('')

  const getCoffeeById = computed((id) => coffee.value.find(item => item.id === +id ))

  function setCoffeeData(data) {
    coffee.value = data
  }

  function setSearchValue(data) {
    searchValue.value = data
  }

  function setSortValue(data) {
    sortValue.value = data
  }

  return {
    coffee,
    searchValue,
    sortValue,
    getCoffeeById,
    setCoffeeData,
    setSearchValue,
    setSortValue
  }
})
