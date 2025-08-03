// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
  ],
  site: `https://tekhion.com`,
  output: "static",          // Esto para que genere archivos estáticos
  outDir: "./docs",          // Carpeta donde se generarán los archivos para GitHub Pages
  build: {
    assets: "astro",         // Elimina el guion bajo si lo tenías antes
  },
});