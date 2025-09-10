// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";


// https://astro.build/config
export default defineConfig({
  site: 'https://badgersolarracing.org',
  integrations: [sanity({
    projectId: "3r1aka6c",
    dataset: "production",
    useCdn: false, // for static builds
  })],
});