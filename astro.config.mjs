import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        // tambahkan semua subdomain ngrok-free.app (all diizinkan)
        // atau kalau mau spesifik satu aja
        'f4d7ef4bfde2.ngrok-free.app',
      ]
    }
  }
});