<template>
  <div :class="$style.root">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <AppHeader />
        </div>
      </div>

      <h1 :class="$style.title">
        <slot/>
      </h1>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import { bannersAssets } from '@/utils/assets';

const props = defineProps({
  type: {
    type: String,
    default: 'coffee',
    validator(value) {
      return ['coffee', 'goods', 'contacts'].includes(value)
    }
  }
});

const bg = computed(() => `url(${bannersAssets[props.type]})`);
</script>

<style module lang="scss">
.root {
    background: #8b7a7a center center no-repeat;
    background-image: v-bind(bg);
    background-size: cover;
    height: 260px;
}

.title {
    margin-top: 60px;
    color: #fff;
    text-align: center;
}
</style>
