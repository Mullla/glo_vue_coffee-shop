<template>
  <div :class="className" @click="onEmit(coffee.id)">
    <img :src="require(`@/assets/img/${coffee.imgUrl}`)" alt="coffee" />
    <div class="best__item-title">{{ coffee.title }}</div>
    <div class="best__item-price">{{ coffee.price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: "shop__item",
    },
    coffee: {
      type: Object,
      required: true,
    },
  },

  methods: {
    onEmit(id) {
      this.$emit('onNavigate', id)
    }
  }
};
</script>