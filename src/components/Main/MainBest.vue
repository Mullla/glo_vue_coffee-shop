<template>
  <section :class="$style.root" id="ourBest">
    <div class="container">
      <h2 class="title">Our best</h2>

      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <ul :class="$style.list">
            <ProductCard v-for="coffee in store.bestsellers" :key="coffee.id" :coffee="coffee" />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { useBestsellersStore } from '@/stores/bestsellers'

const store = useBestsellersStore();
</script>

<style module lang="scss">
.root {
  padding: 80px 0 110px 0;
  background: #fff url('@/assets/img/paper.jpg') center center no-repeat;
  background-size: cover;
}

.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
