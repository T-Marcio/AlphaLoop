import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const base = process.env.VITE_BASE || './'

export default defineConfig({
  base: './', //compatible con github y netlify
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist', //dist estandar
    emptyOutDir: true
  }
})