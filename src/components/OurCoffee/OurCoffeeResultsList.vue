<template>
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <ul :class="$style.wrapper">
        <ProductCard
          v-for="coffee in store.coffee"
          :key="coffee.id"
          :coffee="coffee"
          @onNavigate="navigate(ROUTES.COFFEE, coffee.id)" />
      </ul>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { useCoffeeStore } from '@/stores/coffee';
import { ROUTES } from '@/utils/constants';
import { useNavigate } from '@/hooks/useNavigate';

const store = useCoffeeStore();
const { navigate } = useNavigate();
</script>

<style module lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
