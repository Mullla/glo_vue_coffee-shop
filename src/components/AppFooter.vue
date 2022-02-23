<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-link
              v-for="link in navLinks"
              :key="link.id"
              :link="link.link"
              :iconUrl="link.icon"
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
      navLinks: [
        {
          id: 1,
          link: "MainPage",
          icon: "Logo_black.svg",
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