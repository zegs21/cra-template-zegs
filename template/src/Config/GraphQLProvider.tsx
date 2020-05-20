import React, { ReactNode } from 'react';
import { createClient } from 'urql';

const client = createClient({
  url: 'http://localhost:4000/graphql'
})

function GraphQLProvider(chidlren: ReactNode) {
  <Provider value={client}>
    {children}
  </Provider>
}

export { GraphQLProvider };
