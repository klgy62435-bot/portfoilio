import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages, set base to the repo name when using a project site
  base: '/portfoilio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
