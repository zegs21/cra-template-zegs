import NotFound from 'Pages/NotFound';
import { basicCondition } from './conditions';
import { Home } from 'Pages/Home';

interface Route {
  exact?: boolean;
  component: () => JSX.Element;
  conditions?: (() => boolean)[];
  path: string;
  redirectPath?: string;
}

const routes: Route[] = [
  {
    component: Home,
    exact: true,
    path: '/',
  },
  {
    component: PageWithCondition,
    path: '/condition',
    conditions: [basicCondition],
    redirectPath: '/'
  },
  {
    component: NotFound,
    path: '*',
  },
];

export { routes };
