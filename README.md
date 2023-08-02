## Requirements:
- typeScript
- pnpm (will add a branch with bun.js instead of this LINUX/MAC ONLY! [use WSL on WINDOWS])

## Main Libraries:
- react
- react-router-dom
- zustand (state management)
- tailwindCSS (postCSS and autoprefixer included)
- axios (should switch to *React Query* for more complex requirements)

## Utilities:
- Eslint (airbnb config)
- Prettier (base config)
- Husky (pre-commit hook with lint-staged)
- Vitest (test library identical to jest, consider using jsdom and testing-library for component unit-testing)

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
