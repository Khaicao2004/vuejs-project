import { createRouter, createWebHistory } from 'vue-router'
  
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin/HomePage.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/Admin/Dashboard.vue'),
        },{
          path: 'categories',
          name: 'categories',
          component: () => import('../views/Admin/Category.vue'),
        },{
          path: 'accounts',
          name: 'accounts',
          component: () => import('../views/Admin/Account.vue'),
        },
      ]
    },
  ],
})

export default router
