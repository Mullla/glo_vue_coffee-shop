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
      <nav-link :link="navLinks.header.link" className="header__item"
        ><img
          :src="require(`@/assets/logo/${navLinks.header.icon}`)"
          alt="logo"
      /></nav-link>
      <nav-link
        v-for="link in navLinks.other"
        :key="link.id"
        :link="link.link"
        :text="link.text"
        className="header__item"
      />
    </ul>
  </header>
</template>

<script>
import NavLink from "@/components/NavLink";

export default {
  components: { NavLink },

  data() {
    return {
      navLinks: {
        header: {
          id: 0,
          link: "MainPage",
          icon: "Logo.svg",
        },
        other: [
          {
            id: 1,
            text: "Our coffee",
            link: "OurCoffeePage",
          },
          {
            id: 2,
            text: "For your pleasure",
            link: "GoodsPage",
          },
          {
            id: 3,
            text: "Contact us",
            link: "ContactsPage",
          },
        ],
      },
    };
  },
};
</script>