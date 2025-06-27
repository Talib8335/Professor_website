// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Professor_website/', // <-- use your repo name here, with slashes!
  plugins: [react()],
});
