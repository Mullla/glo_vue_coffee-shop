<template>
  <main>
    <HeaderBanner :type="routeSlug" v-if="store.currentItem">{{ store.currentItem.name }}</HeaderBanner>
    <ItemDescription v-if="store.currentItem" :product="store.currentItem" />
  </main>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import HeaderBanner from '@/components/HeaderBanner.vue';
import ItemDescription from '@/components/Item/ItemDescription.vue';
import { useCurrentItemStore } from '@/stores/currentItem';
import { ROUTES } from '@/utils/constants';
import { getItemById } from '@/api/api';

const route = useRoute();
const store = useCurrentItemStore();

const routeSlug = computed(() => route.name === ROUTES.COFFEE ? 'coffee' : 'goods');

onMounted(async () => {
  const data = await getItemById(routeSlug.value, route.params.id);
  store.setCurrentItem(data);
});

onUnmounted(() => {
  store.setCurrentItem(null);
});
</script>
