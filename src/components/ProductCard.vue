<template>
  <component :is="tag" :class="$style.root" @click="$emit('onNavigate', id)">
    <img :class="$style.img" :src="coffee.image" alt="coffee" />
    <strong :class="$style.text">{{ coffee.name }}</strong>
    <strong :class="$style.text">{{ coffee.price }}</strong>
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'li'
  },
  coffee: {
    type: Object,
    required: true
  }
})

defineEmits(['onNavigate']);
</script>

<style module lang="scss">
.root {
  width: 220px;
  min-height: 240px;
  margin: 60px 40px 0 40px;
  padding: 22px 24px;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 8px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
  transition: 0.3s all;

  &:hover {
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
  }

}

.img {
  display: block;
  margin: 0 auto;
  width: 151px;
  height: 130px;
  object-fit: cover;
}

.text {
  font-size: 14px;
  margin-top: 10px;
  text-align: right;

  &:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
