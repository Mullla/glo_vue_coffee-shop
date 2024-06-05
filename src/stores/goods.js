import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGoodsStore = defineStore('goods', () => {
  const goods = ref([])

  function setGoodsData(data) {
    goods.value = data
  }

  return {
    goods,
    setGoodsData
  }
})
