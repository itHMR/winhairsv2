// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  //output: 'static', // 👈 MUY IMPORTANTE: le dice a Astro que genere archivos HTML estáticos
  site: 'https://winhairtj.com', // cambia por tu dominio real
  integrations: [
    sitemap({
      entryLimit: 50000 // Desactiva división
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
