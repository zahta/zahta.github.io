# Zahra Taheri — Applied AI & Research Portfolio

A static, source-first portfolio prepared for **https://zahta.github.io**. It presents evidence-backed applied AI experience, project case studies, research, teaching, and CV information without a backend or database. The existing GitHub repository was inspected: it contains an older compiled single-page site. GitHub Pages is not currently enabled, and the live address returns a GitHub Pages not-found page. This project has **not** been pushed or deployed.

## Project structure

```text
.
├── .github/workflows/pages.yml   # GitHub Actions build and Pages deployment
├── .nojekyll                     # Prevents implicit Jekyll processing
├── docs/diagrams/*.mmd           # Editable source for evidence-backed diagrams
├── public/manus-routes.json      # Route manifest used by the build
├── scripts/build.js              # Zero-dependency static-site generator
├── src/assets/                   # CSS, favicon, project figures, portrait, CV downloads
├── src/content/cv.md             # Source for the portfolio-formatted CV download
├── src/pages/                    # Accessible HTML content, one fragment per route
├── src/site-data.js              # Canonical URL, page metadata, navigation, schema data
└── package.json                  # Build and local preview commands; no packages required
```

The build writes static pages to `dist/`, with one `index.html` per route. It adds route-specific canonical, description, Open Graph and Twitter metadata, a favicon, sitemap, robots instructions, and a custom 404 page. Internal links and asset URLs target the root of the GitHub user site, so no repository-name path prefix is needed.

## Local development and build

Requirements: Node.js 20 or newer and Python 3.8 or newer. No runtime packages need installing.

```bash
npm run build
npm run dev
```

The local preview is served at `http://localhost:3000`; stop it with `Ctrl+C`. The deployed website is plain static HTML, CSS, images, and metadata. Python is used only for the local preview server.

## Deploy to the existing `zahta.github.io` repository

The public repository already exists. It currently contains an older built site (`index.html`, `assets/`, and `favicon.ico`), but its Pages settings are not configured. The new workflow deploys the generated `dist/` artifact with GitHub Actions. It does not need to delete the old files from the source branch, but do preserve them in Git history before changing deployment.

1. Download and extract this project. In a terminal, clone the existing repository and create a backup branch:

   ```bash
   git clone https://github.com/zahta/zahta.github.io.git
   cd zahta.github.io
   git switch -c backup-before-portfolio-refresh
   git push -u origin backup-before-portfolio-refresh
   git switch main
   git pull --ff-only
   ```

   The backup branch preserves the current compiled site and README. If you prefer not to create a branch, download a ZIP of the existing repository first.

2. Copy the **contents** of the extracted portfolio project into the repository root, including the hidden `.github/` directory and `.nojekyll`. Do not copy the project’s `dist/` directory if one exists; the Actions workflow builds it. Review any overwrite prompts. This replaces the old README with this project’s deployment and update guide, but the old compiled `index.html` and assets remain in source control unless you deliberately remove them.

3. Review the staged changes and commit them on `main`:

   ```bash
   git add .
   git status --short
   git commit -m "Prepare evidence-led portfolio for GitHub Pages"
   git push origin main
   ```

4. On GitHub, open the repository’s **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**, and save if needed. The workflow deploys on pushes to `main` or when manually started from the **Actions** tab.

5. In **Actions**, wait for **Deploy GitHub Pages** to complete successfully. Then visit **https://zahta.github.io** and check the home page, project routes, CV downloads, external links, and a narrow mobile layout.

The workflow uses the `pages: write` and `id-token: write` permissions required for deployment. Repository settings and public GitHub changes must be made from your GitHub account; they have not been changed by this preparation.

## Updating content

- Edit the relevant HTML fragment in `src/pages/`.
- For new or renamed routes, update `src/site-data.js` and `public/manus-routes.json` together; the build checks that the route lists match.
- Update `src/pages/research.html` for research roles and publication summaries, and use the project case-study pages for evidence-backed detail.
- Update `src/pages/teaching.html` for courses and supervision. Add dates, outcomes, or testimonials only when you can verify them.
- Update `src/pages/cv.html` for the web CV and `src/content/cv.md` for the Markdown source. Replace `src/assets/zahra-taheri-cv.pdf` with a preferred final PDF when available; the included PDF is formatted from the supplied CV text, not an original uploaded file.
- Update canonical URL, page metadata, social image, or navigation in `src/site-data.js`.
- Replace or add imagery in `src/assets/images/`. Keep repository figure captions and alt text descriptive.

After edits, run `npm run build`, inspect the generated `dist/` output, commit, and push to `main`. The Actions workflow will build and deploy the update.

## Accuracy and scope

The medical-startup work is anonymized and avoids proprietary details. FunQG is collaborative research; Zahra is a shared first author. LLM Systems Lab is an independent project, and its current implementation is distinguished from documented future directions. The RAG evaluator’s deterministic lexical matching limitations are stated explicitly. FastAPI, Docker, orchestration, n8n, Agentic AI, and MCP are described proportionately to the supplied CV. No unsupported clinical outcomes or performance metrics are claimed.
