import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    manifest: true,
    rollupOptions: {
      input: 'src/app.ts',
    },
  },
  optimizeDeps: {
    include: ["lodash.isequal"],
    exclude: ["@inertiajs/inertia", "@inertiajs/inertia-svelte"]
  }
})
