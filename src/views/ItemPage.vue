<template>
  <main>
    <div
      class="banner"
      :class="
        pageName === 'CoffeePage' ? 'coffepage-banner' : 'goodspage-banner'
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <app-navbar />
          </div>
        </div>
        <h1 class="title-big" v-if="product">{{ product.name }}</h1>
      </div>
    </div>

    <section class="shop" v-if="product">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-1">
            <img class="shop__girl" :src="product.image" alt="coffee_item" />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__point" v-if="product.country">
              <span>Country: </span>
              {{ product.country }}
            </div>
            <div class="shop__point" v-if="product.description">
              <span>Description:</span>
              {{ product.description }}
            </div>
            <div class="shop__point">
              <span>Price: </span>
              <span class="shop__point-price">{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import AppNavbar from "@/components/AppNavbar";

export default {
  components: { AppNavbar },

  computed: {
    pageName() {
      return this.$route.name;
    },
    product() {
      return this.$store.state.item;
    },
    dbPage() {
      return this.$route.name === 'CoffeePage' ? 'coffee' : 'goods'
    }
  },

  mounted() {
    fetch(`http://localhost:3000/${this.dbPage}/${this.$route.params.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        this.$store.dispatch("setItem", data);
      });
  },

  destroyed() {
    this.$store.dispatch("setItem", null);
  },
};
</script>