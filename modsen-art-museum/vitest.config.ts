import { defineConfig } from 'vitest/config';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setupTests.ts',
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@app': '/src/app',
      '@assets': '/src/assets',
      '@store': '/src/store/store',
      '@index': '/src/index',
      '@src': '/src',
    },
    coverage: {
      provider: 'istanbul',
    },
  },
});
