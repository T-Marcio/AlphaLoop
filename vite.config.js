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
    emptyOutDir: true
    /*rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'src/pages/portfolio.html'),
        pricing: resolve(__dirname, 'src/pages/pricing.html'),
        blog: resolve(__dirname, 'src/pages/blog.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
      }
    }*/
  }
})