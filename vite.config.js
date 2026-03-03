import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/AlphaLoop/', //nombre del proyecto en GitHub Pages
  plugins: [
    tailwindcss(),
  ],
})