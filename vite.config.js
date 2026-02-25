import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Rutas relativas para que funcione en GitHub Pages (carpeta `docs`)
  base: './',
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'docs'
  }
})