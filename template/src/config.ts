import { createGlobalStyle } from 'styled-components/macro';

/* Initial App State */
const initialState = {
  auth: { loggedIn: false },
};

const breakPoints = {
  xs: '(min-width: 480px)',
  sm: '(min-width: 768px)',
  md: '(min-width: 992px)',
  lg: '(min-width: 1200px)'
};

/* Theme */
const theme = {
  white: '#dadce1',
  main: '#484a4d'
};

/* Global Style */
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  body {
    min-height: 100vh;
    color: ${(props) => props.theme.white};
    background-color: #151616;
    scroll-behavior: smooth;
    font-family: roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  ::-webkit-scrollbar {
    background-color: #1c1e1f;
    color: #c5c1b9;
    width: 1vw;
  }

  ::-webkit-scrollbar-corner {
    background-color: #181a1b;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2a2c2e;
  }

  hr {
    height: 1px;
    background-color: #fff;
    margin: 1rem 0 1rem 0;
    border: none;
  }
`;

export { breakPoints, GlobalStyle, initialState, theme };
