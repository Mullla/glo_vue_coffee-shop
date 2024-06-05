<template>
  <footer :class="$style.root">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul :class="$style.nav" class="d-flex flex-wrap">
            <NavLink :to="LINKS.header.link" :class="$style.link">
              <img :src="navLogo" alt="go to main" />
            </NavLink>

            <NavLink v-for="{ id, link, text } in LINKS.other" :key="id" :to="link" :class="$style.link">
              {{ text }}
            </NavLink>
          </ul>
        </div>
      </div>

      <img :src="bottomLogo" class="beanslogo"  alt="Beans logo" />
    </div>
  </footer>
</template>

<script setup>
import NavLink from '@/components/ui/NavLink.vue';
import { LINKS } from '@/utils/constants';
import navLogo from '@/assets/logo/coffee-house-dark.svg';
import bottomLogo from '@/assets/logo/beans-dark.svg';
</script>

<style module lang="scss">
.root {
  padding: 20px 0
}

.nav {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 30px;
  list-style-type: none;
}

.link {
  font-size: 12px;
  padding: 10px 20px;
  font-weight: normal;

  a {
    color: #000;

    &:visited {
      text-decoration: none;
      color: #000;
    }

    &:hover {
      text-decoration: none;
      color: #000;
    }
  }
}
</style>
