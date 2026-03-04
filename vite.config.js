import { defineConfig } from 'vite'
//import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/AlphaLoop/', //nombre del proyecto en GitHub Pages
  build: {
    outDir: 'docs', //carpeta de salida para GitHub Pages
    /*rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'public/portfolio.html'),
      },
    },*/
  },
  plugins: [
    tailwindcss(),
  ]
})