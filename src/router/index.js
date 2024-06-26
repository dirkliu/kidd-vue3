import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/docxview',
      name: '/docxview',
      component: () => import('../views/DocxView.vue')
    },
    {
      path: '/wordgen',
      name: 'wordgen',
      component: () => import('../views/WordGen.vue')
    },
    {
      path: '/html2docx',
      name: 'html2docx',
      component: () => import('../views/Html2Docx.vue')
    },
    {
      path: '/docxTemplaterDemo',
      name: 'docxTemplaterDemo',
      component: () => import('../views/DocxTemplaterDemo.vue')
    }
  ]
})

export default router
