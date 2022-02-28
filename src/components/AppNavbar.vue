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
import { mapState } from "vuex";

export default {
  components: { NavLink },

  computed: {
    ...mapState({
      navLinks: (state) => state.links,
    }),
  },
};
</script>