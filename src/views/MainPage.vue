<template>
  <main>
    <MainPreview />
    <MainAbout />
    <MainBest />
  </main>
</template>

<script setup>
// import { onMounted } from 'vue';

import MainPreview from '@/components/Main/MainPreview.vue';
import MainAbout from '@/components/Main/MainAbout.vue';
import MainBest from '@/components/Main/MainBest.vue';

// onMounted(() => {
//   fetch("http://localhost:3000/bestsellers")
//       .then((resp) => resp.json())
//       .then((data) => {
//         this.$store.dispatch("setBestsellersData", data);
//       });
// });
</script>
