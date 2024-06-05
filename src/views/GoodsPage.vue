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
import { onMounted } from 'vue';
import HeaderBanner from '@/components/HeaderBanner.vue';
import AboutSection from '@/components/AboutSection.vue';
import GoodsList from '@/components/Goods/GoodsList.vue';
import { getItems } from '@/api/api';
import { useGoodsStore } from '@/stores/goods';

const store = useGoodsStore();

onMounted(async () => {
  try {
    const data = await getItems('goods');
    store.setGoodsData(data);
  } catch (error) {
    console.log(error)
  }
});
</script>

<style module lang="scss">
.wrapper {
  padding-top: 70px;
}
</style>
