// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
  ],
  site: `https://tekhion.com`,
  output: "static",
  build: {
  assets: "astro",
  },
});