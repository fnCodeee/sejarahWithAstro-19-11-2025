import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        // tambahkan semua subdomain ngrok-free.app (all diizinkan)
        // atau kalau mau spesifik satu aja
        'bc858e49c8bd.ngrok-free.app',
        '54c9e370bfd4.ngrok-free.app'
      ]
    }
  }
});