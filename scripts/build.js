const fs = require("node:fs");
const path = require("node:path");
const { siteUrl, siteName, socialImage, pages, navigation, person } = require("../src/site-data");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "dist");
const sourcePages = path.join(root, "src", "pages");
const sourceAssets = path.join(root, "src", "assets");
const publicDir = path.join(root, "public");
const sourceRouteManifest = JSON.parse(fs.readFileSync(path.join(publicDir, "manus-routes.json"), "utf8"));
const expectedRouteTitles = new Map(pages.map((page) => [page.route, page.title]));
const seenRoutes = new Set();
if (!Array.isArray(sourceRouteManifest.routes)) throw new Error("Route manifest must contain a routes array.");
for (const route of sourceRouteManifest.routes) {
  const expectedTitle = expectedRouteTitles.get(route.path);
  if (expectedTitle === undefined || (route.title !== undefined && route.title !== expectedTitle) || seenRoutes.has(route.path)) {
    throw new Error(`Route manifest mismatch for ${route.path}.`);
  }
  seenRoutes.add(route.path);
}
if (seenRoutes.size !== pages.length) throw new Error(`Route manifest has ${seenRoutes.size} unique routes; expected ${pages.length}.`);

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function copyDirectory(source, destination) {
  if (!fs.existsSync(source)) return;
  fs.cpSync(source, destination, { recursive: true });
}

function outputPathFor(route) {
  if (route === "/") return path.join(output, "index.html");
  const relative = route.replace(/^\/+|\/+$/g, "");
  return path.join(output, relative, "index.html");
}

function isActive(route, itemRoute) {
  if (itemRoute === "/") return route === "/";
  return route === itemRoute || route.startsWith(itemRoute);
}

function renderNavigation(currentRoute) {
  return navigation.map((item) => {
    const current = isActive(currentRoute, item.route) ? ' aria-current="page"' : "";
    return `<a href="${item.route}"${current}>${escapeHtml(item.label)}</a>`;
  }).join("\n          ");
}

function renderLayout(page, bodyHtml, { noindex = false, includePerson = false } = {}) {
  const canonical = `${siteUrl}${page.route}`;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const keywords = escapeHtml(page.keywords.join(", "));
  const image = socialImage ? escapeHtml(socialImage) : null;
  const imageMeta = image ? `  <meta property="og:image" content="${image}">
  <meta property="og:image:alt" content="Portrait of Zahra Taheri">
  <meta name="twitter:image" content="${image}">` : "";
  const personJson = includePerson
    ? `<script type="application/ld+json">${JSON.stringify(person)}</script>`
    : "";
  const canonicalTag = noindex ? "" : `<link rel="canonical" href="${canonical}">`;
  const robotsTag = noindex ? '<meta name="robots" content="noindex,follow">' : '<meta name="robots" content="index,follow">';

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="theme-color" content="#f2f0ea">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="${keywords}">
  ${robotsTag}
  ${canonicalTag}
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="${escapeHtml(siteName)}">
${imageMeta}
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/css/site.css">
  ${personJson}
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="/" aria-label="Zahra Taheri, home">
        <img class="brand-mark" src="/assets/favicon.svg" width="38" height="38" alt="">
        <span class="brand-text"><strong>Zahra Taheri</strong><span>Applied AI Engineering</span></span>
      </a>
      <nav class="primary-nav" aria-label="Primary navigation">
          ${renderNavigation(page.route)}
      </nav>
    </div>
  </header>
  <main id="main" class="page-main">
    ${bodyHtml}
  </main>
  <footer class="site-footer">
    <div class="footer-inner">
      <p class="footer-signoff">Analytical thinking. Practical engineering. Useful AI.</p>
      <div class="footer-links" aria-label="Professional links">
        <a href="mailto:zahra.taheri.ds@gmail.com">Email</a>
        <a href="/assets/zahra-taheri-cv.pdf" download>Download CV</a>
        <a href="https://github.com/zahta" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a href="https://www.linkedin.com/in/zahta" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
      </div>
      <p class="footer-note">© ${new Date().getFullYear()} Zahra Taheri · Applied AI Engineering</p>
    </div>
  </footer>
</body>
</html>
`;
}

function writePage(page, fileName, options = {}) {
  const bodyPath = path.join(sourcePages, fileName);
  if (!fs.existsSync(bodyPath)) throw new Error(`Missing page source: ${bodyPath}`);
  const body = fs.readFileSync(bodyPath, "utf8").trim();
  const destination = options.destination || outputPathFor(page.route);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, renderLayout(page, body, options), "utf8");
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
copyDirectory(sourceAssets, path.join(output, "assets"));
// Source originals are retained for future editing but are not public assets.
for (const privateOrUnusedAsset of [
  "zahra-taheri-cv.md",
  "images/zahra-profile.png",
  "images/zahra-profile.webp",
]) {
  fs.rmSync(path.join(output, "assets", privateOrUnusedAsset), { force: true });
}
copyDirectory(publicDir, output);

for (const page of pages) {
  if (!page.route.startsWith("/") || !page.route.endsWith("/")) {
    throw new Error(`Routes must be root-relative and end with a slash: ${page.route}`);
  }
  if (!expectedRouteTitles.has(page.route)) throw new Error(`Route is missing from the route manifest: ${page.route}`);
  if (expectedRouteTitles.get(page.route) !== page.title) throw new Error(`Route title mismatch for ${page.route}.`);
  writePage(page, page.file, { includePerson: page.route === "/" });
}

// Preserve old bookmarks without publishing a CV page or downloadable file.
const legacyCv = path.join(output, "cv", "index.html");
fs.mkdirSync(path.dirname(legacyCv), { recursive: true });
fs.writeFileSync(legacyCv, `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0; url=/about/"><link rel="canonical" href="${siteUrl}/about/"><title>CV moved | Zahra Taheri</title></head><body><main><h1>This page has moved</h1><p>The public CV page has been retired. <a href="/about/">Continue to the About page</a>.</p></main></body></html>
`, "utf8");
const notFoundPage = {
  route: "/404/",
  title: "Page not found | Zahra Taheri",
  description: "The requested page could not be found.",
  keywords: ["404", "not found", "Zahra Taheri"],
};
writePage(notFoundPage, "404.html", {
  destination: path.join(output, "404.html"),
  noindex: true,
});

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map((page) => `  <url><loc>${siteUrl}${page.route}</loc></url>`),
  "</urlset>",
  "",
].join("\n");
fs.writeFileSync(path.join(output, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(
  path.join(output, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`,
  "utf8",
);

const builtRoutes = JSON.parse(fs.readFileSync(path.join(output, "manus-routes.json"), "utf8"));
if (builtRoutes.routes.length !== pages.length) {
  throw new Error(`Route manifest has ${builtRoutes.routes.length} routes; expected ${pages.length}.`);
}
console.log(`Built ${pages.length} static pages in ${path.relative(root, output)}/`);
