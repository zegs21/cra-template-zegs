import { Link } from 'react-router-dom';
import { getPathByRouteName } from 'Helpers/router/routes';

function Home() {
  const somePagePath = getPathByRouteName('SomePage');

  return (
    <>
      <div>Welcome to Zegs' CRA</div>
      <Link to={somePagePath}>Go somwhere else</Link>
    </>
  );
}

export { Home };
