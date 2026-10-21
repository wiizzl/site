---
title: Resume
description: My resume, written as code and released automatically.
url: https://houlliere.com/resume
repo: https://github.com/wiizzl/resume
stack: [RenderCV, Typst, GitHub Actions]
order: 4
---

## The problem

A resume in Word or Canva is fine until you have to update it. Every new job, internship or skill means fighting with the layout, exporting a PDF, and sending a new file to everyone. And the link you shared six months ago points to an outdated version.

I wanted three things: write only the content, never touch the layout again, and have **one link that always points to the latest version**.

## Content as YAML

My resume is a single YAML file. Experiences, skills, projects, education and languages are plain data:

[RenderCV](https://rendercv.com) turns it into a PDF through [Typst](https://typst.app), a modern typesetting system. The design (theme, colors, fonts, margins, spacing) is configured in the same file, and a JSON schema gives me autocompletion and validation in my editor. While editing, `rendercv render --watch` rebuilds the PDF on every save.

## The release pipeline

Two GitHub Actions workflows handle the rest:

- **Build.** Every push that touches the resume renders it and uploads the PDF as a workflow artifact. I can review the result before publishing anything.
- **Release.** Merging `main` into the `deploy` branch builds the PDF again and publishes it as a GitHub release named after the date.

The trick is in the release: it always uses the same `latest` tag. The workflow deletes the previous release and its tag, then creates a new one. That way, GitHub's `releases/latest/download/...` URL always points to the current PDF.

On this site, `/resume` and `/cv` are redirects to that URL. They're deliberately temporary redirects (307), so browsers don't cache them forever. The link I put on LinkedIn or in an email never changes, and always serves the latest version.

## Editing with AI

The repository also includes the official RenderCV agent skill, so an AI assistant knows the YAML format, the available themes and options. When I want to rephrase an experience or adjust the layout, it edits the file correctly instead of guessing.
