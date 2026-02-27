import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/AlphaLoop/', //compatible con github y netlify
  plugins: [
    tailwindcss(),
    viteStaticCopy({
      targets: [
        { src: 'src/components/header.html', dest: ''}, //copia a dist
        { src: 'src/components/footer.html', dest: ''},
        { src: 'src/pages/portfolio.html', dest: ''},
        { src: 'src/pages/pricing.html', dest: ''},
        { src: 'src/pages/blog.html', dest: ''},
        { src: 'src/pages/contact.html', dest: ''}
      ]
    })
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        DemoBlog: resolve(__dirname, 'Demo-Blog/index.html'),
        DemoEcommerce: resolve(__dirname, 'Demo-Ecommerce/index.html'),
        DemoInmobiliaria: resolve(__dirname, 'Demo-Inmobiliaria/index.html'),
        DemoLanding: resolve(__dirname, 'Demo-Landing/index.html'),
        DemoRestaurante: resolve(__dirname, 'Demo-Restaurante/index.html'),
      }
    }
  }
})