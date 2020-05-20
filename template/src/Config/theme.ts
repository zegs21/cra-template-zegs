import {} from 'styled-components';

const theme = {};

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

export { theme };
