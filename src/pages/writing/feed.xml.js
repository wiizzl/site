import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import info from "@/config/info.json";

export async function GET(context) {
  const posts = await getCollection("writing");

  return rss({
    title: info.name,
    description: info.description,
    site: context.site,
    items: posts.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/writing/${item.id}`,
    })),
  });
}
