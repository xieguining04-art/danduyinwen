# TengYoda Logistics — English Website

This is the independent English-only website repository for TengYoda Logistics. Its design and content are based on the approved **TengYoda Logistics Preview**.

## What is included

- Premium responsive homepage with About, services, China network, articles and contact sections
- Dedicated service pages
- Importer-focused blog pages
- English-only navigation and content
- WhatsApp, email and telephone enquiry actions
- SEO metadata and sitemap
- Automatic GitHub Pages deployment
- Markdown-to-blog publishing

## First deployment to a new GitHub repository

1. Create a new empty GitHub repository.
2. Unzip this package on your computer.
3. Upload **all files and folders inside the unzipped folder** to the repository root.
4. Commit the upload to the `main` branch.
5. Open **Settings → Pages** and select **GitHub Actions** under Build and deployment.
6. Open **Actions** and wait for “Deploy TengYoda English website” to show a green check.
7. Open the site URL shown in **Settings → Pages**.

The workflow automatically detects the repository name, so CSS, images, service pages and blog pages also work on a GitHub project URL such as:

`https://USERNAME.github.io/REPOSITORY/`

## Publish a new Markdown article

Create an English `.md` file in `articles/`, following the template in `articles/README.md`. Commit the file to `main`; the article, blog index and homepage article list will rebuild automatically.

## Main files to maintain

- `app/page.tsx` — homepage sections and copy
- `lib/company.ts` — contact details and locations
- `lib/services.ts` — service content
- `articles/` — new Markdown articles
- `public/images/` — website and article images
- `.github/workflows/deploy-pages.yml` — automated deployment

## Local preview for a developer

Requires Node.js 22 or later.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Custom domain

After confirming the GitHub Pages preview, add the custom domain in **Settings → Pages → Custom domain**. Keep the old live site unchanged until the new site has been reviewed and the domain is ready to switch.
