import { createGlobalStyle } from './styled-components/macro';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    font-size: 1em;
    font-weight: normal;
    font-style: normal;
    border: 0;
    list-style-type: none;
  }

  body {
    font-family: sans-serif;
    color: #fff;
    background-color: #33363a;
  }

  :root {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
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

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

export { GlobalStyle };
