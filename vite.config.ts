import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte()
  ],
  build: {
    minify: false,
    sourcemap: true,
  },
  resolve: {
    alias: {
      $lib: '/src/lib'
    }
  },
  server: {
    host: '127.0.0.1'
  }
})
