<template>
  <main>
    <HeaderBanner type="goods">For your pleasure</HeaderBanner>

    <section :class="$style.wrapper">
      <div class="container">
        <AboutSection photo="goods" />
        <GoodsList />
      </div>
    </section>
  </main>
</template>

<script setup>
import HeaderBanner from '@/components/HeaderBanner.vue';
import AboutSection from '@/components/AboutSection.vue';
import GoodsList from '@/components/Goods/GoodsList.vue';

// mounted() {
//   fetch("http://localhost:3000/goods")
//     .then((resp) => resp.json())
//     .then((data) => {
//       this.$store.dispatch("setGoodsData", data);
//     });
// },
</script>

<style module lang="scss">
.wrapper {
  padding-top: 70px;
}
</style>
