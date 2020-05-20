import * as serviceWorker from './serviceWorker';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle, GraphQLProvider, theme } from 'Config';
import { Main } from 'Components/Main';
import { render } from 'react-dom';
import { RoutesRenderer } from 'Routes/RoutesRenderer';
import { StoreProvider } from 'Store';
import { ThemeProvider } from 'styled-components/macro';

function App() {
  return (
    <React.StrictMode>
      <GraphQLProvider>
        <StoreProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
              <Main>
                <RoutesRenderer />
              </Main>
            </BrowserRouter>
          </ThemeProvider>
        </StoreProvider>
      </GraphQLProvider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
