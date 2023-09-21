import { createRouter, createWebHistory } from 'vue-router'
import Flight from '../views/Flight.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'flight',
      component: Flight
    }
  ]
})

export default router
