import { getCollection } from "astro:content";

export const getPosts = async () =>
  (
    await getCollection(
      "blog",
      ({ data }) => import.meta.env.DEV || !data.draft,
    )
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

export const getProjects = async () =>
  (await getCollection("projects")).sort((a, b) => a.data.order - b.data.order);

export const formatMonth = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export const readingTime = (body = "") =>
  `${Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200))} min read`;
