import About from 'views/About';
import Home from 'views/Home';

const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: About,
    path: '/about',
    exact: true,
  }
];

export default routes;

