// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sanity from "@sanity/astro";

import icon from "astro-icon";

//@ts-expect-error
const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: "2025-01-16",
      studioBasePath: "/studio",
    }),
    react(),
    icon(),
  ],

  vite: {
    define: {
      "process.env.PUBLIC_SANITY_PROJECT_ID": `"${env.PUBLIC_SANITY_PROJECT_ID}"`,
      "process.env.PUBLIC_SANITY_DATASET": `"${env.PUBLIC_SANITY_DATASET}"`,
    },
  },

  i18n: {
    locales: ["nl", "en"],
    defaultLocale: "nl",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
