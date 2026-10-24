import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

import { CONSTS } from "#/consts";
import { getPosts } from "#/lib/content";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response(null, { status: 404 });
  }

  const posts = await getPosts();

  return rss({
    title: CONSTS.title,
    description: CONSTS.description,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}`,
    })),
  });
};
