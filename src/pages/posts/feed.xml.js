import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import info from "@/config/info.json";

export async function GET(context) {
  const posts = await getCollection("posts");

  return rss({
    title: info.name,
    description: info.description,
    site: context.site,
    items: posts.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/posts/${item.id}`,
    })),
  });
}
