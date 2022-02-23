<template>
  <header>
    <ul
      class="
        header
        d-flex
        justify-content-center justify-content-md-start
        flex-wrap
      "
    >
      <li class="header__item" v-for="link in navLinks" :key="link.id">
        <router-link :to="{ name: link.link }">
          <img
            v-if="link.icon"
            :src="require(`@/assets/logo/${link.icon}`)"
            alt="logo"
          />
          <span v-else>{{ link.text }}</span>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          id: 1,
          link: "MainPage",
          icon: "Logo.svg",
        },
        {
          id: 2,
          text: "Our coffee",
          link: "OurCoffeePage",
        },
        {
          id: 3,
          text: "For your pleasure",
          link: "GoodsPage",
        },
        {
          id: 4,
          text: "Contact us",
          link: "ContactsPage",
        },
      ],
    };
  },
};
</script>