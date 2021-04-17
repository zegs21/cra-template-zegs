import { Home } from 'Pages/Home';
import { NotFound } from 'Pages/NotFound';
import { SomePage } from 'Pages/SomePage';
import { RouteI, RoutesNames } from './types';
import { basicCondition } from './conditions';

const routes: RouteI[] = [
  {
    name: 'Home',
    page: Home,
    exact: true,
    path: '/',
  },
  {
    component: SomePage,
    path: '/condition',
    conditions: [basicCondition],
    redirectPath: '/',
  },
  {
    name: 'NotFound',
    page: NotFound,
    path: '*',
  },
];

function getPathByRouteName(name: RoutesNames) {
  const path = routes.find(route => route.name === name)?.path;
  return path ? `/${path.split('/', 2)[1]}` : '*';
}

export { routes, getPathByRouteName };
