<template>
  <div class="row">
    <OurCoffeeFiltersSearch />

    <div class="col-lg-4">
      <div :class="$style.filters">
        <div :class="$style.label" @click="resetFilter">
          Or filter
        </div>

        <ul :class="$style.list">
          <li v-for="{ name, handler } in filters" :key="name">
            <button :class="$style.btn" @click="handler(name)"> {{ name }}</button>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <OurCoffeeResultsList />
</template>

<script setup>
import OurCoffeeFiltersSearch from '@/components/OurCoffee/OurCoffeeFiltersSearch.vue';
import OurCoffeeResultsList from '@/components/OurCoffee/OurCoffeeResultsList.vue';

import { useSort } from '@/hooks/useSort';

const { onSort } = useSort();

const resetFilter = () => {
  onSort('');
};

const filters = [
  {
    name: 'Brazil',
    handler: (name) => onSort(name)
  },
  {
    name: 'Kenya',
    handler: (name) => onSort(name)
  },
  {
    name: 'Columbia',
    handler: (name) => onSort(name)
  }
];
</script>

<style module lang="scss">
.filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.label {
  margin-right: 35px;
}

.list {
  display: flex;
}

.btn {
  width: 75px;
  height: 30px;
  background-color: #fff;
  border: none;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  outline: none;
  cursor: pointer;

  &:first-child {
    border-radius: 4px 0px 0px 4px;
  }

  &:last-child {
    border-radius: 0px 4px 4px 0px;
  }

  &:focus {
    outline: none;
  }
}
</style>
