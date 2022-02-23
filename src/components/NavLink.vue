<template>
  <li :class="className">
    <router-link :to="{ name: link }">
      <img
        v-if="iconUrl"
        :src="require(`@/assets/logo/${iconUrl}`)"
        alt="logo"
      />
      <slot></slot>
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
    iconUrl: {
      type: String,
      default: null,
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>