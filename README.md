## Requirements:

- node
- typeScript
- pnpm

## Main Libraries:

- react
- react-router-dom

## Utilities:

- Eslint (airbnb config)
- Prettier (base config)
- Husky (pre-commit hook with lint-staged)
- TailwindCSS (postCSS and autoprefixer included)
- Vitest (test library identical to jest, using jsdom and testing-library for component unit-testing)

## First start:
```
pnpm i
```

## Local development:
```
pnpm dev
```

## Build:
```
pnpm build
```

## Preview build:
```
pnpm build && pnpm preview 
```
#### PS: don't have to run pnpm build if dist folder exists

### bundled with `vite` (`swc compiler`)
