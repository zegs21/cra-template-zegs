import { BrowserRouter } from 'react-router-dom';
import { RoutesRenderer } from 'Helpers/router/RoutesRenderer';

function App() {
  return (
    <BrowserRouter>
      <RoutesRenderer />
    </BrowserRouter>
  );
}

export { App };
