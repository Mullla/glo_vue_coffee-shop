<template>
  <main>
    <OurCoffeeBanner />

    <section :class="$style.wrapper">
      <div class="container">
        <OurCoffeeAbout />
        <OurCoffeeFilters />
      </div>
    </section>
  </main>
</template>

<script setup>
import OurCoffeeBanner from '@/components/OurCoffee/OurCoffeeBanner.vue';
import OurCoffeeAbout from '@/components/OurCoffee/OurCoffeeAbout.vue';
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
