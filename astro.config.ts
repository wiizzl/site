import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://houlliere.com",
  devToolbar: { enabled: false },
  prefetch: { prefetchAll: true },
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "vesper" },
      defaultColor: false,
    },
  },
  integrations: [mdx(), sitemap()],
});
