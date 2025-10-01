// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import partytown from '@astrojs/partytown';


// https://astro.build/config
export default defineConfig({
  site: 'https://badgersolarracing.org',
  integrations: [sanity({
    projectId: "3r1aka6c",
    dataset: "production",
    useCdn: false, // for static builds
  }), partytown({
    config: {
      // Essential for Google Analytics to function in a worker thread
      forward: ['dataLayer.push'],
    },
  }),],
});