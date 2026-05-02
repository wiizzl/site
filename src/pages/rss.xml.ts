import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

import { CONSTS } from "@/consts";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response(null, { status: 404 });
  }

  return rss({
    title: CONSTS.title,
    description: CONSTS.description,
    site,
    items: [],
  });
};
