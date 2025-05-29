import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Listing from '../views/Listing.vue'
import Search from '../views/Search.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'home',
      component: Home, meta: { index: 1 }
    },
    {
      path: '/listing', name: 'listing',
      component: Listing, meta: { index: 0 }
    },
    {
      path: '/search', name: 'search',
      component: Search, meta: { index: 2 }
    },
  ],
})

export default router
