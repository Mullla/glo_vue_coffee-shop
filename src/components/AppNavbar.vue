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
      <li class="header__item">
        <router-link :to="{ name: 'MainPage' }">
          <img src="@/assets/logo/Logo.svg" alt="logo" />
        </router-link>
      </li>
      <li class="header__item">
        <router-link :to="{ name: 'OurCoffeePage' }">Our coffee</router-link>
      </li>
      <li class="header__item">
        <router-link :to="{ name: 'GoodsPage' }">For your pleasure</router-link>
      </li>
      <li class="header__item">
        <router-link :to="{ name: 'ContactsPage' }">Contact us</router-link>
      </li>
    </ul>
  </header>
</template>