import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://houlliere.com",
  // Pages are downloaded when a link is hovered, so navigation feels instant
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "vesper" },
      defaultColor: false,
    },
  },
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
