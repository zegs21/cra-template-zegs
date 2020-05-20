# cra-template-zegs

My personal prefered way to boostrap a React project

## Usage

```sh
npx create-react-app my-app --template zegs
```

## Includes

- TypeScript
- ESLint
- Prettier
- ReactRouterDom and a custom RoutesRenderer with easy multiple conditions handler and redirects
- StyledComponents
- EasyPeasy as a state management solution
- GraphQL with the URQL client

## Directory structure

```bash
├── src
│   ├── Components
│   ├── Config
│   ├── Pages
│   ├── Routes
│   │   ├── conditions.ts
│   │   ├── routes.ts
│   │   ├── RoutesRenderer.tsx
│   ├── Store
│   │   ├── models
│   └── index.tsx
├── .babelrc (for styled-components)
├── .eslintrc.js
├── .prettierrc.js
├── tsconfig.json
```
