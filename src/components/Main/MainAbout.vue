<template>
  <section :class="$style.root" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <h2 class="title">About Us</h2>

          <img class="beanslogo" :src="logo" alt="Beans logo" />

          <p :class="$style.text">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As
            greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered
            followed. At it went is song that held help face.
          </p>

          <p :class="$style.text">
            Now residence dashwoods she excellent you. Shade being under his
            bed her, Much read on as draw. Blessing for ignorant exercise any
            yourself unpacked. Pleasant horrible but confined day end
            marriage. Eagerness furniture set preserved far recommend. Did
            even but nor are most gave hope. Secure active living depend son
            repair day ladies now.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import logo from '@/assets/logo/beans-dark.svg?url';
</script>

<style module lang="scss">
.root {
  padding: 80px 0 110px 0;
  background-color: #fff;
}

.text {
  margin-top: 40px;
  text-align: center;
  font-size: 14px;
}
</style>
