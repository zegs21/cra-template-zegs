import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { routes } from './routes';

function RoutesRenderer() {
  return (
    <Switch>
      {routes.map((routeData, i) => {
        const { component: Component, conditions } = routeData;
        const canAccess = conditions
          ? conditions.every((conditionsToCheck) => conditionsToCheck())
          : true;
        return (
          <Route
            key={i}
            exact={routeData.exact}
            path={routeData.path}
            component={() =>
              canAccess ? (
                <Component />
              ) : (
                <Redirect to={routeData.redirectPath || '/'} />
              )
            }
          />
        );
      })}
    </Switch>
  );
}

export { RoutesRenderer };
