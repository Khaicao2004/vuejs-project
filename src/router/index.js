import { createRouter, createWebHistory } from 'vue-router'
  
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/HomePage.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/admin/Dashboard.vue'),
        },
        {
          path: 'categories',
          name: 'categories',
          component: () => import('../views/admin/categories/Category.vue'),
        },
        {
          path: 'accounts',
          name: 'accounts',
          component: () => import('../views/admin/users/Account.vue'),
        },
        {
          path: 'accounts/:id',
          name: 'accounts-detail',
          component: () => import('../views/admin/users/AccountDetail.vue'),
        }, 
        {
          path: 'test',
          name: 'test',
          component: () => import('../views/admin/Test.vue'),
        },
        {
          path: 'accounts/create',
          name: 'accounts-create',
          component: () => import('../views/admin/users/Create.vue'),
        },
        {
          path: 'categories/create',
          name: 'categories-create',
          component: () => import('../views/admin/categories/Create.vue'),
        },
      ]
    },
  ],
})

export default router
