# Zahra Taheri — Applied AI Engineering Portfolio

A source-first, custom-built static portfolio for `https://zahta.github.io`. It presents evidence-backed applied AI engineering, project case studies, research, and teaching. No framework or runtime package dependencies are required.

## Project structure

```text
.
├── .github/workflows/pages.yml   # GitHub Actions Pages deployment
├── .nojekyll                     # Prevents implicit Jekyll processing
├── diagrams/                     # Editable Mermaid architecture sources
├── public/manus-routes.json      # Route manifest checked by the build
├── scripts/build.js              # Static HTML generator and asset copier
├── src/assets/                   # CSS, favicon, project figures, portrait assets
├── src/content/cv.md             # Retained source material; excluded from public output
├── src/pages/                    # Accessible HTML fragments (including Experience and ongoing AI Systems project)
├── src/site-data.js              # Canonical URL, metadata, navigation, schema data
└── package.json                  # Build and local preview commands
```

The build writes 11 primary pages to `dist/` and generates route metadata, a sitemap, robots instructions, a 404 page, and a compatibility redirect from `/cv/` to `/about/`. Public paths are rooted at the GitHub user-site domain. The site retains its custom static architecture and GitHub Pages Actions workflow.

## Build and preview locally

Requirements: Node.js 20+ and Python 3.8+. No install step is needed.

```bash
npm run build
npm run dev
```

Open `http://localhost:3000`; stop the preview server with `Ctrl+C`. `npm run build` is also the verification build used by the GitHub Actions workflow.

## Deploy to your GitHub Pages repository

No repository changes or publication were made as part of this handoff. Review the following steps and adapt them to your repository and its access controls:

1. Back up your repository or create a backup branch using your normal Git workflow. Clone your private repository locally if needed.
2. Copy the project source into the repository root, including hidden files such as `.github/` and `.nojekyll`. Keep the repository's relevant Git history and inspect any existing site files before replacing them. Do not deploy an older `dist/`; the Actions workflow builds the current source.
3. Run `npm run build`, review the generated `dist/`, then stage and inspect the changes. Commit and push only when you are ready.
4. In repository **Settings → Pages**, choose **GitHub Actions** as the deployment source if it is not already configured. Confirm that your repository permissions and GitHub plan allow Pages deployment from a private repository.
5. Run the **Deploy GitHub Pages** workflow from Actions or push to the configured `main` branch. When it succeeds, inspect the home, project, About and contact routes, the `/cv/` redirect, and a narrow viewport.

The workflow deploys the generated `dist/` artifact and is configured for pushes to `main` or manual dispatch. Do not push or publish this handoff without your authorization.

## Updating the site

- Edit public content in the corresponding HTML fragment under `src/pages/`.
- When adding or renaming routes, update `src/site-data.js` and `public/manus-routes.json` together; the build validates consistency.
- Update `src/pages/research.html` for research/publication context and use project pages for evidence-based case studies.
- Update `src/pages/teaching.html` for verified courses and supervision.
- The current uploaded CV is published for download at `/assets/zahra-taheri-cv.pdf`. Replace `src/assets/zahra-taheri-cv.pdf` whenever the résumé changes, then rebuild. The legacy `/cv/` URL redirects to `/about/`. Only publish the CV if you consent to the personal contact information inside it being public.
- Update canonical URL, page metadata, social preview image, or navigation in `src/site-data.js` when appropriate. Update the homepage portrait by replacing `src/assets/images/zahra-portrait.webp` and its alt text when needed.
- Add or replace project figures in `src/assets/images/`, with accurate captions and meaningful alt text.

After edits, run `npm run build` and review `dist/` before committing or publishing.

## Accuracy and scope

The computer-vision engagement is anonymized and avoids proprietary implementation detail. FunQG is collaborative research with shared first authorship. LLM Systems Lab is an independent project; implemented capabilities are distinguished from proposed directions, and the deterministic lexical evaluator's limitations are stated. No unsubstantiated clinical outcomes, performance metrics, users, or business impact are claimed.

## Portfolio refresh notes

The homepage now frames the progression from mathematical training through graph research into applied computer vision and LLM systems. Selected work previews pose each project around its technical question and evidence, with the case-study pages retained. Engineering quality-control practices are connected to the vision workflow and retrieval evaluation project.

The earlier GitHub profile image was not used. The user supplied a new photograph, which is optimized as WebP and displayed in the homepage hero. The build excludes the old profile images and CV files from generated output. No phone number or CV download is exposed by the generated website.

## Changes in this edition (October 2026)

- Repositioned the site around Applied AI Engineering, with mathematics, research, critical thinking, and mentoring as differentiators.
- Rewrote Home, About, Projects, Contact, and Teaching, and refined the CV, LLM, FunQG, and Research case studies to remove CV-audit phrasing.
- Added `/experience/` with professional history, education, teaching, and language details.
- Added `/projects/ai-systems-engineering/` for the private ongoing project. Planned items are *not* represented as implemented or released.
- Published the supplied October 2026 PDF as a downloadable CV and added links in the header/footer and relevant pages.
- Kept company code and data private; no invented measurements, deployment claims, or performance metrics.
- Updated navigation, page metadata, semantic links, styling, and build route manifest.

This ZIP includes both editable source and generated `dist/`. It intentionally excludes `.git/` history. To update an existing repository, copy the project files onto your working tree, preserving the original `.git/` directory.
