import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/AlphaLoop/', //nombre del proyecto en GitHub Pages
  build: {
    outDir: 'docs', //carpeta de salida para GitHub Pages
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'public/portfolio.html'),
        pricing: resolve(__dirname, 'public/pricing.html'),
        blog: resolve(__dirname, 'public/blog.html'),
        contact: resolve(__dirname, 'public/contact.html'),
        articulo1: resolve(__dirname, 'public/articulo1.html'),
        articulo2: resolve(__dirname, 'public/articulo2.html'),
        articulo3: resolve(__dirname, 'public/articulo3.html'),
        articulo4: resolve(__dirname, 'public/articulo4.html'),
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})