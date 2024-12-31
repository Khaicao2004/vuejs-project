import day1Routes from '@/router/modules/learn/day1Routes';
import day2Routes from '@/router/modules/learn/day2Routes';
import day3Routes from '@/router/modules/learn/day3Routes';
import day4Routes from '@/router/modules/learn/day4Routes';

export default [
  {
    path: '/learn',
    name: 'learn',
    component: () => import('../views/learn/Learn.vue'),
    children: [
      ...day1Routes,
      ...day2Routes,
      ...day3Routes,
      ...day4Routes,   
    ]
  }
];