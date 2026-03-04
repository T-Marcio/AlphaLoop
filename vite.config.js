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
        portfolio: resolve(__dirname, 'src/pages/portfolio.html'),
        pricing: resolve(__dirname, 'src/pages/pricing.html'),
        blog: resolve(__dirname, 'src/pages/blog.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})