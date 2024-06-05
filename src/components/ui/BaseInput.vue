<template>
  <div class="form-group row">
    <div class="col col-12 col-sm-3 d-flex align-items-start">
      <label :for="id" :class="required && $style.label" class="mb-0">
        <slot />
      </label>
    </div>

    <div class="col col-12 col-sm-9">
      <input :type="type" :id="id" v-model.trim="validation.$model" class="form-control" />
      <span :class="$style.error" v-for="error in validation.$errors" :key="error.$uid">{{ error.$message }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  required: {
    type: Boolean,
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
