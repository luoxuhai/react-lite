import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxFactory: 'ReactLite.createElement',
  },
});
