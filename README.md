## Requirements:

- Node v18.14.0
- TypeScript v4.9.5
- Yarn v1.22.19

## Main Libraries:

- React
- react-router-dom

## Utilities:

- Eslint (airbnb config)
- Prettier (base config)
- Husky (pre-commit hook with lint-staged)
- TailwindCSS (postCSS and autoprefixer included)
- Vitest (test library identical to jest, using jsdom and testing-library for component unit-testing)

## First start:
```
yarn
```

## Local development:
```
yarn dev
```

## Build:
```
yarn build
```

## Preview build:
```
yarn build && yarn preview 
```
#### PS: don't have to run yarn build if dist folder exists

### bundled with Vite v4.1.1 (swc compiler)
