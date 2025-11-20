import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WebinarView from '@/views/WebinarView.vue'
import WebinarsView from '@/views/WebinarsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/webinar/:id',
      name: 'project-details',
      component: WebinarView,
      props: true
    },
    {
      path: '/webinars',
      name: 'web',
      component: WebinarsView,
    },
  ],
})

export default router
