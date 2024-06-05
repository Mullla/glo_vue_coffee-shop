<template>
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <ul :class="$style.wrapper">
        <ProductCard
          v-for="coffee in store.goods"
          :key="coffee.id"
          :coffee="coffee"
          @onNavigate="router.push({ name: ROUTES.PRODUCT, params: { id } })" />
      </ul>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { useGoodsStore } from '@/stores/goods'

const store = useGoodsStore();
</script>

<style module lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
