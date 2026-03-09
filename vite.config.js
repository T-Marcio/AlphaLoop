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
        articulo1: resolve(__dirname, 'articulo1.html'),
        articulo2: resolve(__dirname, 'articulo2.html'),
        articulo3: resolve(__dirname, 'articulo3.html'),
        articulo4: resolve(__dirname, 'articulo4.html'),
        'demo-blog': resolve(__dirname, 'public/demos/demo-blog/index.html'),
        'demo-ecommerce': resolve(__dirname, 'public/demos/demo-ecommerce/index.html'),
        'demo-inmobiliaria': resolve(__dirname, 'public/demos/demo-inmobiliaria/index.html'),
        'demo-landing': resolve(__dirname, 'public/demos/demo-landing/index.html'),
        'demo-restaurante': resolve(__dirname, 'public/demos/demo-restaurante/index.html'),
      },
    },
  },
  publicDir: 'public', //carpeta para assets estáticos
  plugins: [
    tailwindcss(),
  ]
});