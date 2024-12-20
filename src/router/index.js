import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import FindView from '../views/FindView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'home',
      component: HomeView, meta: { index: 1 }
    },
    {
      path: '/list', name: 'list',
      component: ListView, meta: { index: 0 }
    },
    {
      path: '/find', name: 'find',
      component: FindView, meta: { index: 2 }
    },
  ],
})

export default router
