# Add an English blog article

Create a new `.md` file in this folder. GitHub Actions will convert it into a blog page and deploy the site automatically.

```markdown
---
title: Shipping Furniture from Foshan to Australia
date: 2026-09-03
summary: A practical guide to packing, consolidation and sea freight planning.
category: Import Guide
slug: foshan-furniture-shipping-australia
author: TengYoda Logistics
image: /images/warehouse-operations.webp
alt: Furniture cargo prepared for export from China
---

Start with one short introductory paragraph for overseas importers.

## 1. Confirm the final packing list

Write one or more useful paragraphs under each section.

- Optional checklist item
- Another checklist item

## 2. Compare the complete shipping scope

Explain the next practical step here.
```

## Add images

Upload article images to `public/article-images/`. Use one as the card and hero image:

```yaml
image: /article-images/your-cover.webp
alt: Descriptive text explaining what the image shows
```

Add an image inside the article with standard Markdown. The optional quoted text becomes a visible caption:

```markdown
![Warehouse team checking export cartons](/article-images/carton-check.webp "Cargo inspection before consolidation")
```

Use WebP or AVIF where practical, describe each image accurately, and avoid putting important text inside the image.

## Add video

Upload MP4 videos to `public/article-videos/`, then place this on its own line inside a section:

```markdown
@[video](/article-videos/container-loading.mp4 "Container loading plan in a China warehouse")
```

The video player uses metadata-only loading, so it does not download the full video until the visitor chooses to play it. Keep files compressed and include a written explanation near the video so the article remains useful to readers and search engines.

## SEO checklist

- Use one clear search topic per article and a unique title and summary.
- Keep exactly one H1 (the title); use `##` for main sections and `###` for subsections.
- Add useful alt text to every image.
- Link to relevant service pages and other guides where it helps the reader.
- Update the `date` only when publishing a new article; add `updated: YYYY-MM-DD` after a meaningful revision.
