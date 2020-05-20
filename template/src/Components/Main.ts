import styled from 'styled-components/macro';
import { breakPoints } from 'Config';

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${breakPoints.sm} {
    padding: 3rem 12rem 3rem 12rem;
    flex-direction: column;
  }
`;

export { Main };
