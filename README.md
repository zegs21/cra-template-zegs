# cra-template-zegs

Zegs' template for Create React App. Bootstrap React applications with a powerful custom router included

## Usage

```sh
npx create-react-app my-app --template zegs
```

## Includes

- TypeScript
- ESLint
- Prettier
- ReactRouterDom and a custom RoutesRenderer with easy multiple conditions handler, redirects and a search routes by name feature

## Directory structure

```bash
├── src
│   ├── Pages
│   ├── Helpers
│   │   ├── router
│   │   │   ├── conditions.ts
│   │   │   ├── routes.ts
│   │   │   ├── RoutesRenderer.tsx
│   │   │   ├── types.ts
│   └── index.tsx
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
```
