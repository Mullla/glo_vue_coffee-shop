<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <app-navbar />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <h1 class="title-big">Everything You Love About Coffee</h1>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo.svg"
              alt="Beans logo"
            />
            <div class="preview__subtitle">
              We makes every day full of energy and taste
            </div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <a
              href="./coffeepage.html"
              class="preview__btn"
              @click.prevent="smoothScroll"
              >More</a
            >
          </div>
        </div>
      </div>
    </div>

    <section class="about" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.<br /><br />

              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best" ref="ourBest">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <product-card
                v-for="coffee in goods"
                :key="coffee.id"
                :title="coffee.title"
                :price="coffee.price"
                :imgUrl="coffee.imgUrl"
                className="best__item"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import AppNavbar from "@/components/AppNavbar";
import ProductCard from "@/components/ProductCard";
import { mapState } from "vuex";
import { scrollIntoView } from "seamless-scroll-polyfill";

export default {
  components: {
    AppNavbar,
    ProductCard,
  },

  computed: {
    ...mapState({
      goods: (state) => state.bestsellers,
    }),
  },

  methods: {
    smoothScroll() {
      scrollIntoView(this.$refs.ourBest, {
        behavior: "smooth",
        block: "start",
      });
    },
  },
};
</script>
