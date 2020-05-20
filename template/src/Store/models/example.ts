import { Action, action } from 'easy-peasy';

interface Example {
  john: string;
}

export interface ExampleModel {
  example: Example;
  update: Action<ExampleModel, Example>;
}

const example: ExampleModel = {
  example: {
    john: 'doe',
  },
  update: action((state, payload) => {
    state.example = payload;
  }),
};

export { example };
