import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Use VITE_BASE when set by CI (GitHub Actions). Defaults to './' for local dev.
const envBase = process.env.VITE_BASE
const base = envBase || './'

export default defineConfig({
  base: '/AlphaLoop/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'docs'
  }
})