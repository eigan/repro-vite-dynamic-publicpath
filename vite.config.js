import { useDynamicPublicPath } from 'vite-plugin-dynamic-publicpath'
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    useDynamicPublicPath(/** option */),
  ],

  // Build settings
  build: {
    rollupOptions: {
      input: 'src/app.js',
    },
  },

})
