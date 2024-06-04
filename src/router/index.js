import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue';
import { ROUTES } from '@/utils/constants';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTES.MAIN,
      component: MainPage,
    },
    {
      path: '/our-coffee',
      name: ROUTES.OUR_COFFEE,
      component: () => import('@/views/OurCoffeePage.vue')
    },
    {
      path: '/our-coffee/:id',
      name: ROUTES.COFFEE,
      component: () => import('@/views/ItemPage.vue'),
    },
    {
      path: '/goods',
      name: ROUTES.GOODS,
      component: () => import('@/views/GoodsPage.vue'),
    },
    {
      path: '/goods/:id',
      name: ROUTES.PRODUCT,
      component: () => import('@/views/ItemPage.vue'),
    },
    {
      path: '/contacts',
      name: ROUTES.CONTACTS,
      component: () => import('@/views/ContactsPage.vue'),
    },
    {
      path: '/thank-you',
      name: ROUTES.THANK_YOU,
      component: () => import('@/views/ThankYouPage.vue'),
    },
  ],
})

export default router
