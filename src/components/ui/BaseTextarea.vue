<template>
  <div class="form-group row textarea">
    <div class="col col-12 d-flex justify-content-center">
      <label :for="id" :class="required && $style.label" class="mb-3 mt-3 text-center">
        <slot />
      </label>
    </div>

    <div class="col col-12">
      <textarea class="form-control" :name="name" :id="id" rows="5" :placeholder="placeholder"
        v-model.trim="validation.$model"></textarea>
      <span :class="$style.error" v-for="error in validation.$errors" :key="error.$uid">{{ error.$message
        }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean
  }
});

const validation = defineModel();
</script>

<style module lang="scss">
.label {
  &::after {
    content: '*';
    color: red;
  }
}

.error {
  color: crimson;
}
</style>
