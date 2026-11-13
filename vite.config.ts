import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Hosted on Vercel, which serves the site from the root.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
