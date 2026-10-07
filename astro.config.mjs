// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Demo găzduit pe GitHub Pages, într-un subdirector.
// TODO(real): la proiectul final, pe domeniul clientului, se pune domeniul în `site`
// și se șterge `base`. Restul codului merge nemodificat, pentru că linkurile interne
// trec prin helperul u() din src/data/site.ts.
export default defineConfig({
  site: 'https://rtr-tech-solutions.github.io',
  base: '/big-print-solutions',
  vite: {
    plugins: [tailwindcss()]
  }
});
