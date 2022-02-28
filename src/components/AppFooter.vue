<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-link :link="navLinks.header.link" className="footer__item"
              ><img
                :src="require(`@/assets/logo/${navLinks.footer.icon}`)"
                alt="logo"
            /></nav-link>
            <nav-link
              v-for="link in navLinks.other"
              :key="link.id"
              :link="link.link"
              :text="link.text"
              className="footer__item"
            />
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
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