import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/label-generator/',
  plugins: [vue(), tailwindcss()],
  server: {
    port: 1573
  }
});
