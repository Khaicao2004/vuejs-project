export default [
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
      }, 
      {
        path: 'unit7',
        name: 'unit7',
        component: () => import('../views/learn/day1/Unit7.vue'),
      },
      {
        path: 'unit8',
        name: 'unit8',
        component: () => import('../views/learn/day2/Unit8.vue'),
      },
      {
        path: 'unit9',
        name: 'unit9',
        component: () => import('../views/learn/day3/Unit9.vue'),
      },
      {
        path: 'unit10',
        name: 'unit10',
        component: () => import('../views/learn/day3/Unit10.vue'),
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('../views/learn/day3/Test.vue'),
      },
    ]
  }
];