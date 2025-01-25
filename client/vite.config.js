import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/video/',
  server: {
    port: 3000,
    proxy: {
      '/videos/api': {
        target: 'http://localhost:5000/video',
        changeOrigin: true,
        rewrite: (path) => path.replace('/videos/api', ''),
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
