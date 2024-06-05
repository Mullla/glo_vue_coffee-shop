<template>
  <main>
    <HeaderBanner type="contacts">Thank you!</HeaderBanner>

    <section>
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              :src="logo"
              class="beanslogo mt-5"
              alt="Beans logo"
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="title mt-5">
              <p>Thank you so much</p>
              <p>We contact you as soon as posible</p>
              <img src="@/assets/img/thanks.png" alt="thanks-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import HeaderBanner from "@/components/HeaderBanner.vue";
import logo from '@/assets/logo/beans-dark.svg';
</script>
