<template>
  <header>
    <ul
      :class="$style.nav"
      class="
        d-flex
        justify-content-center
        justify-content-md-start
        flex-wrap
      ">
      <NavLink :to="LINKS.header.link" :class="$style.link">
        <img :src="logo" alt="go to main" />
      </NavLink>

      <NavLink v-for="{ id, link, text } in LINKS.other" :key="id" :to="link" :class="$style.link">
        {{ text }}
      </NavLink>
    </ul>
  </header>
</template>

<script setup>
import NavLink from '@/components/NavLink.vue';
import { LINKS } from '@/utils/constants';
import logo from '@/assets/logo/coffee-house.svg?url';
</script>

<style module lang="scss">
.nav {
  display: flex;
  align-items: flex-end;
  margin-top: 30px;
  list-style-type: none;
}

.link {
    font-size: 12px;
    padding: 10px 20px;
    font-weight: normal;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:first-child {
      transform: translateY(3px);
    }

    a {
      color: #fff;

      &:visited {
          text-decoration: none;
          color: #fff;
      }

      &:hover {
          text-decoration: none;
          color: #fff;
      }
    }
  }
</style>
