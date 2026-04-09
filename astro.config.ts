import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  devToolbar: { enabled: false },
  prefetch: true,
  site: "https://houlliere.com",
  redirects: {
    "/resume":
      "https://github.com/wiizzl/resume/releases/latest/download/Pierre_Houlliere_CV.pdf",
    "/cv": "/resume",
  },
  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true,
  }),
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
