import React, { ReactNode } from 'react';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:4000/graphql',
});

function GraphQLProvider({ children }: { children: ReactNode }) {
  return <Provider value={client}>{children}</Provider>;
}

export { GraphQLProvider };
