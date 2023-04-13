import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Articles List',
      component: () => import('../views/ArticlesList.vue')
    },
    {
      path: '/artilce/:id',
      name: 'Article Details',
      component: () => import('../views/ArticleDetails.vue')
    }
  ]
})

export default router
