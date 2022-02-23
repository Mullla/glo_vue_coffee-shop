<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-link :link="navLinks.header.link" className="footer__item"
              ><img
                :src="require(`@/assets/logo/${navLinks.header.icon}`)"
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

export default {
  components: { NavLink },

  data() {
    return {
      navLinks: {
        header: {
          id: 0,
          link: "MainPage",
          icon: "Logo_black.svg",
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