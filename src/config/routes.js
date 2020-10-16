import { Home, Experience, Education, Skills, Interest } from '../pages';

const routes = [
  {
    path: '/experience',
    component: Experience,
    isPublic: true,
  },
  {
    path: '/education',
    component: Education,
    isPublic: true,
  },
  {
    path: '/skills',
    component: Skills,
    isPublic: true,
  },
  {
    path: '/interest',
    component: Interest,
    isPublic: true,
  },
    {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
