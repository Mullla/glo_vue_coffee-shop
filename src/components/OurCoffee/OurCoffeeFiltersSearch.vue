<template>
  <div class="col-lg-4 offset-2">
    <form action="#">
      <label :class="$style.label" for="filter">Looking for</label>
      <input :class="$style.input" id="filter" type="text" placeholder="start typing here..." @input="onSearch" />
    </form>
  </div>
</template>

<script setup>
import { useSort } from '@/hooks/useSort';

const { onSort } = useSort();
// onSearch: debounce(function (event) {
//   this.onSort(event.target.value);
// }, 500),
const onSearch = (e) => {
  onSort(e.target.value);
};
</script>

<style module lang="scss">
.input {
  width: 180px;
  height: 30px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;
  font-size: 12px;
  padding: 0 15px;

  &::placeholder {
    text-align: center;
  }
}

.label {
  margin-right: 20px;
}
</style>
