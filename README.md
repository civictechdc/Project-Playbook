# Civic Tech DC Project Playbook

The playbook shares guidance for learning about civic tech, joining a project, and starting or supporting a project at Civic Tech DC.

**Website:** https://playbook.civictechdc.org/

Built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

## Run locally

Install Node.js 24 and Git. Python 3 is required for the internal-link checker.

Clone the repository once:

```sh
git clone https://github.com/civictechdc/Project-Playbook.git
cd Project-Playbook
npm ci
npm run dev
```

Open the local address printed in the terminal, usually `http://localhost:4321/`. Leave this terminal running. Saved edits update the preview automatically; stop the server with Ctrl+C.

If you already have the repository, open its existing folder instead of cloning it again. For example, in Windows PowerShell:

```powershell
cd C:\Users\Helen\OneDrive\Website\Project-Playbook
npm run dev
```

Use a second terminal in the same folder for Git commands. Run commands one line at a time. If `git pull --ff-only` reports diverging branches, inspect the branch history and preserve local work before attempting a reset or rebase.

## Edit content

Pages live in `src/content/docs/`. For example:

| Page | Source |
| --- | --- |
| Homepage | `src/content/docs/index.mdx` |
| Learn | `src/content/docs/learn/index.mdx` |
| Join | `src/content/docs/join/index.mdx` |
| Build | `src/content/docs/build/index.mdx` |
| Project resource guides | `src/content/docs/resources/` |
| Incubator and Onboarding tracks | `src/content/docs/build/` |

Each page starts with frontmatter:

```yaml
---
title: Page Title
description: A short description of what readers will find.
---
```

Use Markdown headings, paragraphs, lists, and links. Link to other playbook pages with site-relative paths, such as `[Project Setup](/resources/projectsetup/)`, rather than a localhost URL. Keep heading links accurate when renaming sections.

Use `prev` and `next` in frontmatter to control bottom navigation; set either to `false` to hide it. For example:

```yaml
next:
  label: Finding Your People
  link: /build/incubatortrack/people/
```

Keep page titles and descriptions clear: they help readers find the right guide through navigation and search. Archived content outside `src/content/docs/` is not published as a guide.

## Add images and documents

Put images and PDFs in `public/images/`. Reference them as `/images/filename.jpg` or `/images/filename.pdf`, without `public` in the URL. Filenames and capitalization must match exactly. Include useful image alt text, and commit the asset along with the page that uses it.

For text that wraps around an image, use `src/components/ImageText.astro`. Import it using a relative path from the page, then place the text inside it:

```mdx
<ImageText src="/images/example.jpg" alt="A description of the image">

Text appears beside the image and continues at full width below it.

</ImageText>
```

The component reads the image dimensions, preserves its aspect ratio, and stacks the image and text on smaller screens. It also accepts an optional `caption`.

## Navigation and design

- `astro.config.mjs`: main sidebar groups and component configuration.
- `src/projectResources.ts`: the six Project Resources guides and their display titles.
- `src/components/ProjectResourcesSidebar.astro`: expandable guide headings on resource pages.
- `src/routeData.ts`: which pages display a left sidebar.
- `src/styles/theme.css`: shared colors, typography, spacing, and layout.

Project Resources pages show their own six-guide sidebar. Expand a guide title to view its section links; Overview opens the full guide. Other pages retain the main navigation. Resource section links are generated from Markdown headings.

## Check changes

```sh
npm run build
npm run check:links
python3 -m unittest discover -s scripts
```

On Windows, if `python3` is unavailable, run the Python commands with the launcher instead:

```powershell
py -3 scripts/check_links.py
py -3 -m unittest discover -s scripts
```

The link checker inspects the built `dist/` files for missing internal link destinations and heading anchors. Run a fresh build first. External websites and image `src` references are not checked, so review those in the browser too.

Review desktop and mobile layouts, image wrapping, button links, and both color themes. `npm run preview` serves the production build locally.

## Submit and publish

Create a branch for your changes, commit the intended files, and push that branch. Review `git status` before staging; do not add local helper scripts or patch files accidentally. This repository is public, so pushed changes are publicly visible even before publication.

Open a pull request with **base: main** and your edit branch as the comparison branch. Wait for the build and link checks to pass, review the changes, and resolve conflicts before merging.

Merging into `main` starts **Actions → delivery**, which builds the site, checks internal links, and deploys to GitHub Pages. A push to an edit branch updates that branch only; it does not publish the website. After delivery succeeds, check https://playbook.civictechdc.org/ and refresh the browser if needed.
