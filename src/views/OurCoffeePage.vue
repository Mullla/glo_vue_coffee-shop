<template>
  <main>
    <HeaderBanner type="coffee">Our Coffee</HeaderBanner>

    <section :class="$style.wrapper">
      <div class="container">
        <AboutSection photo="coffee" />
        <OurCoffeeFilters />
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import HeaderBanner from '@/components/HeaderBanner.vue';
import AboutSection from '@/components/AboutSection.vue';
import OurCoffeeFilters from '@/components/OurCoffee/OurCoffeeFilters.vue';
import { getItems } from '@/api/api';
import { useCoffeeStore } from '@/stores/coffee';

const store = useCoffeeStore()

onMounted(async () => {
  try {
    const data = await getItems('coffee');
    store.setCoffeeData(data);
  } catch (error) {
    console.log(error);
  }

});
</script>

<style module lang="scss">
.wrapper {
  padding: 70px 0 40px 0;
}
</style>
