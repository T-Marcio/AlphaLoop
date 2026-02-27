import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/AlphaLoop/', //compatible con github y netlify
  plugins: [
    tailwindcss(),
    viteStaticCopy({
      targets: [
        { src: 'src/components/header.html', dest: ''}, //copia a dist
        { src: 'src/components/footer.html', dest: ''}
      ]
    })
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})