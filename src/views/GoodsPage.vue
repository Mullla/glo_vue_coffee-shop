<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <app-navbar />
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card />
              <product-card />
              <product-card />
              <product-card />
              <product-card />
              <product-card />
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

export default {
  components: {
    AppNavbar,
    ProductCard,
  },

  data() {
    return {
      goods: [
        {
          id: 1,
          imgUrl: "@/assets/img/coffee-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: "10.73",
          country: "Brazil",
        },
        {
          id: 2,
          imgUrl: "@/assets/img/coffee-2.jpg",
          title: "Presto Coffee Beans 1kg",
          price: "15.99",
          country: "Brazil",
        },
        {
          id: 3,
          imgUrl: "@/assets/img/coffee-3.jpg",
          title: "AROMISTICO Coffee 1kg",
          price: "6.99",
          country: "Brazil",
        },
        {
          id: 4,
          imgUrl: "@/assets/img/coffee-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: "10.73",
          country: "Brazil",
        },
        {
          id: 5,
          imgUrl: "@/assets/img/coffee-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: "10.73",
          country: "Brazil",
        },
        {
          id: 6,
          imgUrl: "@/assets/img/coffee-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: "10.73",
          country: "Brazil",
        },
      ],
    };
  },
};
</script>