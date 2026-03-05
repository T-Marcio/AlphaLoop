import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/AlphaLoop/', //nombre del proyecto en GitHub Pages
  build: {
    outDir: 'docs', //carpeta de salida para GitHub Pages
    
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        blog: resolve(__dirname, 'blog.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
  plugins: [
    tailwindcss(),
  ]
})