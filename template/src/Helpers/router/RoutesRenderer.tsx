import { Redirect, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import { ConditionalRouteI } from './types';

function ConditionalRoute(props: ConditionalRouteI) {
  const { page: Component, conditions, redirectFallback } = props;
  const failedCondition = conditions.find(condition => !condition.check());
  return failedCondition ? (
    <Redirect to={failedCondition.redirectPath || redirectFallback || '/'} />
  ) : (
    <Component />
  );
}

function RoutesRenderer() {
  return (
    <Switch>
      {routes.map((route, i) => {
        const { page: Component, conditions, redirectFallback } = route;
        return (
          <Route
            key={i}
            exact={route.exact}
            path={route.path}
            component={() =>
              conditions?.length && redirectFallback ? (
                <ConditionalRoute
                  redirectFallback={redirectFallback}
                  conditions={conditions}
                  page={Component}
                />
              ) : (
                <Component />
              )
            }
          />
        );
      })}
    </Switch>
  );
}

export { RoutesRenderer };
