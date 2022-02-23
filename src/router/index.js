import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/views/MainPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/our-coffee',
      name: 'OurCoffeePage',
      component: () =>
        import(
          /* webpackChunkName: "our-coffee" */ '@/views/OurCoffeePage.vue'
        ),
    },
    {
      path: '/goods',
      name: 'GoodsPage',
      component: () =>
        import(/* webpackChunkName: "goods" */ '@/views/GoodsPage.vue'),
    },
    {
      path: '/contacts',
      name: 'ContactsPage',
      component: () =>
        import(/* webpackChunkName: "contacts" */ '@/views/ContactsPage.vue'),
    },
    {
      path: '/thank-you',
      name: 'ThankYouPage',
      component: () =>
        import(/* webpackChunkName: "thank-you" */ '@/views/ThankYouPage.vue'),
    },
  ],
});

export default router;
