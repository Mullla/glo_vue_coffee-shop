import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/our-coffee',
      name: 'OurCoffeePage',
      component: () => import('@/views/OurCoffeePage.vue')
    },
    {
      path: '/our-coffee/:id',
      name: 'CoffeePage',
      component: () => import('@/views/ItemPage.vue'),
    },
    {
      path: '/goods',
      name: 'GoodsPage',
      component: () => import('@/views/GoodsPage.vue'),
    },
    {
      path: '/goods/:id',
      name: 'ProductPage',
      component: () => import('@/views/ItemPage.vue'),
    },
    {
      path: '/contacts',
      name: 'ContactsPage',
      component: () => import('@/views/ContactsPage.vue'),
    },
    {
      path: '/thank-you',
      name: 'ThankYouPage',
      component: () => import('@/views/ThankYouPage.vue'),
    },
  ],
})

export default router
