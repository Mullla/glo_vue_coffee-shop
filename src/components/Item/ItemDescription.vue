<template>
  <section :class="$style.root">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 offset-1">
          <img :src="product.image" :alt="product.description" />
        </div>

        <div class="col-lg-4">
          <h2 class="title">About it</h2>

          <img :src="logo" class="beanslogo" alt="Beans logo" />

          <div :class="$style.text" v-if="product.country">
            <span>Country: </span>
            {{ product.country }}
          </div>

          <div :class="$style.text" v-if="product.description">
            <span>Description: </span>
            {{ product.description }}
          </div>

          <div :class="$style.text">
            <span>Price: </span>
            <span :class="$style.price">{{ product.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import logo from '@/assets/logo/beans-dark.svg';

defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style module lang="scss">
.root {
  padding-top: 50px;
}

.text {
  margin-top: 16px;

  &:first-child {
    margin-top: 26px;
  }
}

.price {
    font-size: 24px;
    font-weight: normal !important;
  }
</style>
