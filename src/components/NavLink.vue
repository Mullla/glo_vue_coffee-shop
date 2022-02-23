<template>
  <li :class="className">
    <router-link :to="{ name: link }">
      <slot></slot>{{ text }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      required: true,
    },
  },
};
</script>