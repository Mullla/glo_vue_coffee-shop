<template>
  <div class="row">
    <div class="col-lg-4 offset-2">
      <img :class="$style.img" src="@/assets/img/coffee_girl.jpg" alt="girl" />
    </div>

    <div class="col-lg-4">
      <h2 :class="$style.title">About our beans</h2>
      <img :src="logo" class="beanslogo" alt="Beans logo" />
      <p :class="$style.text">
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
      </p>
    </div>
  </div>

  <div class="line"></div>
</template>

<script setup>
import logo from '@/assets/logo/beans-dark.svg';
</script>

<style module lang="scss">
.title {
  margin-top: 10px;
}

.img {
  display: block;
  margin: 0 auto;
  width: 100%;
}

.text {
  margin-top: 25px;
  font-size: 14px;
  text-align: center;
}
</style>
