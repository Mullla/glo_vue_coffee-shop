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
import HeaderBanner from '@/components/HeaderBanner.vue';
import AboutSection from '@/components/AboutSection.vue';
import OurCoffeeFilters from '@/components/OurCoffee/OurCoffeeFilters.vue';

// mounted() {
//   fetch("http://localhost:3000/coffee")
//     .then((resp) => resp.json())
//     .then((data) => {
//       this.$store.dispatch("setCoffeeData", data);
//     });
// },
</script>

<style module lang="scss">
.wrapper {
  padding: 70px 0 40px 0;
}
</style>
