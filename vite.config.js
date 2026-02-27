import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/AlphaLoop/', //compatible con github y netlify
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist', //dist estandar
    emptyOutDir: true
  }
})