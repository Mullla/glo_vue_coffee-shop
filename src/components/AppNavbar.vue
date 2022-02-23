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
      <nav-link
        v-for="link in navLinks"
        :key="link.id"
        :link="link.link"
        :iconUrl="link.icon"
        className="header__item"
        >{{ link.text ? link.text : "" }}</nav-link
      >
    </ul>
  </header>
</template>

<script>
import NavLink from "@/components/NavLink";

export default {
  components: { NavLink },

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