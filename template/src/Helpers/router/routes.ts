import { Home } from 'Pages/Home';
import { SomePage } from 'Pages/SomePage';
import { NotFound } from 'Pages/NotFound';
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
    name: 'SomePage',
    page: SomePage,
    path: '/some-page-with-condition',
    conditions: [basicCondition],
    redirectFallback: '/',
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
