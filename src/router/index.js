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
    {
      path: '/client',
      name: 'client',
      component: () => import('../views/client/Home.vue'),
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('../views/learn/Learn.vue'),
      children: [
        {
          path: 'unit1',
          name: 'unit1',
          component: () => import('../views/learn/day1/Unit1.vue'),
        },
        {
          path: 'unit2',
          name: 'unit2',
          component: () => import('../views/learn/day1/Unit2.vue'),
        },
        {
          path: 'unit3',
          name: 'unit3',
          component: () => import('../views/learn/day1/Unit3.vue'),
        },
        {
          path: 'unit4',
          name: 'unit4',
          component: () => import('../views/learn/day1/Unit4.vue'),
        },
        {
          path: 'unit5',
          name: 'unit5',
          component: () => import('../views/learn/day1/Unit5.vue'),
        },
        {
          path: 'unit6',
          name: 'unit6',
          component: () => import('../views/learn/day1/Unit6.vue'),
        }, {
          path: 'unit7',
          name: 'unit7',
          component: () => import('../views/learn/day1/Unit7.vue'),
        },
      ]
    }
  ],
})

export default router
