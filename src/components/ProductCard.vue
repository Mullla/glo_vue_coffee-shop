<template>
  <div :class="className">
    <img :src="require(`@/assets/img/${imgUrl}`)" alt="coffee" />
    <div class="best__item-title">{{ title }}</div>
    <div class="best__item-price">{{ price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "shop__item",
    },
  },
};
</script>