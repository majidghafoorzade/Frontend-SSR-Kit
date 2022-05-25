import Todos from 'views/Todos';
import Home from 'views/Home';

const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: Todos,
    path: '/todos',
    exact: true,
  }
];

export default routes;

