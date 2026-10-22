/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base is this repository's name so links and assets resolve correctly on
  // GitHub Pages at https://<user>.github.io/iwamad-sis2-blog/.
  base: '/iwamad-sis2-blog/',
  build: {
    // GitHub Pages is configured to serve from main /docs, so build there.
    outDir: 'docs',
  },
  test: {
    // Component tests need a browser-like DOM; jsdom provides it.
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
})
