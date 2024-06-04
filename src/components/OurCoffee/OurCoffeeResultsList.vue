<template>
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <div :class="$style.wrapper">
        <ProductCard
          v-for="coffee in store.coffee"
          :key="coffee.id"
          :coffee="coffee"
          @onNavigate="router.push({ name: ROUTES.OUR_COFFEE, params: { id } })" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import ProductCard from '@/components/ProductCard.vue';
import { useCoffeeStore } from '@/stores/coffee'

const store = useCoffeeStore();

const router = useRouter();
</script>

<style module lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
