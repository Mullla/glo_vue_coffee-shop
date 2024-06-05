<template>
  <component :is="tag">
    <RouterLink :to="{ name: to }">
      <slot />
    </RouterLink>
  </component>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  tag: {
    type: String,
    default: 'li'
  },

  to: {
    type: String,
    default: ''
  }
});
</script>
