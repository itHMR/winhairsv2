// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  //output: 'static', // 👈 MUY IMPORTANTE: le dice a Astro que genere archivos HTML estáticos
  vite: {
    plugins: [tailwindcss()]
  }
});
