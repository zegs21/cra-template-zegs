export type RoutesNames = 'Home' | 'NotFound';

export interface ConditionI {
  check: () => boolean;
  redirectPath: string;
}

export interface RouteI {
  name: RoutesNames;
  exact?: boolean;
  page: () => JSX.Element;
  path: string;
  conditions?: ConditionI[];
  redirectFallback?: string;
}

export interface ConditionalRouteI {
  page: () => JSX.Element;
  conditions: ConditionI[];
  redirectFallback: string;
}
