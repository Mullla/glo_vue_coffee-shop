<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <li class="footer__item">
              <router-link :to="{ name: 'MainPage' }">
                <img src="@/assets/logo/Logo_black.svg" alt="logo" />
              </router-link>
            </li>
            <li class="footer__item">
              <router-link :to="{ name: 'OurCoffeePage' }"
                >Our coffee</router-link
              >
            </li>
            <li class="footer__item">
              <router-link :to="{ name: 'GoodsPage' }"
                >For your pleasure</router-link
              >
            </li>
            <li class="footer__item">
              <router-link :to="{ name: 'ContactsPage' }"
                >Contact us</router-link
              >
            </li>
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