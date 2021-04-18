import { getPathByRouteName } from './routes';
import { ConditionI } from './types';

const homePath = getPathByRouteName('Home');

const basicCondition: ConditionI = {
  check: () => true,
  redirectPath: homePath,
};

export { basicCondition };
