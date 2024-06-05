<template>
   <div class="form-group row">
      <div class="col col-12 d-flex justify-content-center">
        <label :for="id" class="mb-3 mt-3 text-center">
          <input type="checkbox" :name="name" :id="id" v-model="validation.$model" />
          <slot />
        </label>
      </div>
      <div class="col col-12 d-flex justify-content-center">
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
  name: {
    type: String,
    required: true,
  },
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
