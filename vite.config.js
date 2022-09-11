import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'no-treeshake',
          transform(_, id) {
            if (id.includes('integration/jquery')) {
              return { moduleSideEffects: 'no-treeshake' }
            }
            if (id.includes('ui/data_grid')) {
              return { moduleSideEffects: 'no-treeshake' }
            }
          }
        }
      ]
    }
  }
})
