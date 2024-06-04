<template>
  <section :class="$style.root">
    <div class="container">
      <div class="row">
        <div class="col">
          <AppHeader />
        </div>
      </div>

      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <h1 :class="$style.title">Everything You Love About Coffee</h1>

          <img :src="beans" class="beanslogo" alt="Beans logo" />

          <p :class="$style.subtitle">We makes every day full of energy and taste</p>
          <p :class="$style.text">Want to try our beans?</p>

          <a href="#ourBest" :class="$style.link">More</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import beans from '@/assets/logo/beans.svg?url';
</script>

<style module lang="scss">
.root {
  min-height: 640px;
  background: url('@/assets/img/main-bg.jpg') center center no-repeat;
  background-size: cover;
  padding-bottom: 20px;
  color: #fff;
}

.text {
  font-size: 24px;
  margin-top: 20px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.title {
  margin-top: 110px;
}

.subtitle {
  font-weight: bold;
  font-size: 40px;
  margin-top: 110px;
  margin-bottom: 0;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.link {
  display: block;
  width: 120px;
  height: 30px;
  margin: 0 auto;
  margin-top: 18px;
  border: 1px solid #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-weight: bold;
  line-height: 28px;
  font-size: 14px;

  &:visited {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    text-decoration: none;
    color: #fff;
  }
}
</style>
