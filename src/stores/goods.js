import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGoodsStore = defineStore('goods', () => {
  const goods = ref([])

  const getProductById = computed((id) => goods.value.find(item => item.id === +id ))

  function setGoodsData(data) {
    goods.value = data
  }

  return {
    goods,
    getProductById,
    setGoodsData
  }
})
