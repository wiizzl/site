// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

import info from "./src/config/info.json";

// https://astro.build/config
export default defineConfig({
  site: "https://houlliere.com",
  redirects: {
    "/resume": info.resume,
    "/linkedin": info.socials[0].href,
    "/github": info.socials[1].href,
    "/instagram": info.socials[2].href,
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
