---
title: "How I built this site: minimal, fast and readable by AI"
description: "The choices behind my personal site, built with Astro: static HTML, a single source of truth for content, and SEO for both search engines and AI assistants."
tags: [astro, seo, web]
date: 2026-10-20
draft: true
---

This site is deliberately small: one page that tells you who I am, a few projects, and this blog. Here are the choices behind it.

## Static HTML with Astro

The site is built with [Astro](https://astro.build) and shipped as plain static HTML, hosted on Vercel. There's no JavaScript framework running in the browser: pages load instantly and every crawler can read them.

Styling is done with Tailwind CSS, and the font is loaded with Astro's Fonts API, which self-hosts the files, preloads only what's needed and generates a fallback font with matching metrics, so the text doesn't jump when the font loads.

## One source of truth

All the information about me (role, school, company, achievements, stack, links) lives in a single TypeScript file. The home page, the structured data and the `llms.txt` file are all generated from it, so they never disagree. Projects and blog posts are Markdown files in Astro content collections.

## SEO basics, done properly

- A unique title, description and canonical URL on every page.
- A sitemap, an RSS feed and a `robots.txt` that lets every crawler in.
- Open Graph tags so links look good when shared.
- Images optimized at build time: resized, converted to WebP and lazy-loaded.

## Being readable by AI

More and more people ask an AI assistant instead of searching. Two small additions help them understand the site:

- **Structured data**: a JSON-LD `Person` block describing who I am, where I study and work, my award and my profiles.
- **`/llms.txt`**: a Markdown summary of the site, generated at build time, that AI tools can read without parsing HTML.

**TODO:** add anything you'd like to highlight (design inspiration, what you'd do differently, a link to the source code).
