import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://houlliere.com",
  redirects: {
    "/resume": "/cv",
    "/cv":
      "https://github.com/wiizzl/resume/releases/latest/download/Pierre_Houlliere_CV.pdf",
  },
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
