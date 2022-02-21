<template>
  <div class="wrapper">
    <main-page />
    <app-footer />
  </div>
</template>

<script>
import MainPage from "@/views/MainPage";
import AppFooter from "@/components/AppFooter";
export default {
  name: "App",
  components: { MainPage, AppFooter },
};
</script>