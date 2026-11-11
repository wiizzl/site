import type { APIRoute } from "astro";

import { CONSTS } from "#/consts";
import { getPosts, getProjects } from "#/lib/content";

export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);

  const list = (
    items: { title: string; description: string; path: string }[],
  ) =>
    items
      .map(
        (item) => `- [${item.title}](${url(item.path)}): ${item.description}`,
      )
      .join("\n");

  const body = `# ${CONSTS.title}

> ${CONSTS.description}

- [About](${url("/about/")}): Work, studies, WorldSkills and contact.

## Projects

${list(projects.map((p) => ({ ...p.data, path: `/projects/${p.id}/` })))}

## Blog

${list(posts.map((p) => ({ ...p.data, path: `/blog/${p.id}/` })))}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
