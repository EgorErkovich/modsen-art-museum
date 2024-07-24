import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'node-fetch': 'isomorphic-fetch',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@app': '/src/app',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], 
  },
  build: {
    target: 'ES2020',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // return 'vendor';
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        }
      }
    },
  },
  envPrefix: 'CTP_',
});
