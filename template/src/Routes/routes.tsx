import { basicCondition } from './conditions';
import { Home } from 'Pages/Home';
import { NotFound } from 'Pages/NotFound';
import { SomePage } from 'Pages/SomePage';

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
    component: SomePage,
    path: '/condition',
    conditions: [basicCondition],
    redirectPath: '/',
  },
  {
    component: NotFound,
    path: '*',
  },
];

export { routes };
