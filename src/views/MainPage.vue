<template>
  <main>
    <MainPreview />
    <MainAbout />
    <MainBest />
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

import MainPreview from '@/components/Main/MainPreview.vue';
import MainAbout from '@/components/Main/MainAbout.vue';
import MainBest from '@/components/Main/MainBest.vue';
import { getItems } from '@/api/api';
import { useBestsellersStore } from '@/stores/bestsellers';

const store = useBestsellersStore();

onMounted(async () => {
  try {
    const data = await getItems('bestsellers');
    store.setBestsellersData(data);
  } catch (error) {
    console.log(error);
  }
});
</script>
