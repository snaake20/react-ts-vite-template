/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      services: path.resolve(__dirname, './src/services'),
      styles: path.resolve(__dirname, './src/styles'),
      types: path.resolve(__dirname, './src/types'),
      utils: path.resolve(__dirname, './src/utils'),
      actions: path.resolve(__dirname, './src/state/actions'),
      context: path.resolve(__dirname, './src/state/context'),
      hooks: path.resolve(__dirname, './src/state/hooks'),
      reducers: path.resolve(__dirname, './src/state/reducers'),
      // add the same aliases in tsconfig.json
    },
  },
  // testing section
  test: {
    environment: 'jsdom',
    setupFiles: ['src/setupTests.ts'],
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});
