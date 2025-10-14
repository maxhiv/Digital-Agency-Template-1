/* Update-brand script for Leadstack Marketing
 * - Applies brand config to HTML/CSS
 * - Replaces legacy branding and placeholders
 * - Injects page-specific <title> and <meta name="description">
 * - Ensures CTAs, phone, email, and colors are consistent
 * - Injects JSON-LD shell blocks if missing (site-wide only; per-service handled in content step)
 */

const fs = require("fs");
const path = require("path");

const ROOT = process.env.SCAN_ROOT || ".";
const CONFIG_PATH = path.join(process.cwd(), "brand.config.json");
const ignoreDirs = new Set(["node_modules", ".git", "vendor", "dist", "build", "scripts", "scss", "documentation", "attached_assets"]);
const HTML_EXT = /\.(html?|php|njk|ejs|md)$/i;
const CSS_EXT = /\.(css|scss)$/i;

if (!fs.existsSync(CONFIG_PATH)) {
  console.error(`[update-brand] Missing brand.config.json at ${CONFIG_PATH}`);
  process.exit(1);
}
const cfg = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
const brand = {
  name: cfg.brandName || "Leadstack Marketing",
  tagline: cfg.tagline || "",
  phone: cfg.phone || "",
  email: cfg.email || "",
  hqCity: cfg.hqCity || "",
  hours: cfg.hours || "",
  colors: {
    primary: cfg.primaryColor,
    secondary: cfg.secondaryColor,
    accent: cfg.accentColor,
    dark: cfg.darkColor,
    light: cfg.lightColor
  },
  ctas: {
    primary: cfg.primaryCta || "Get Free Growth Plan",
    secondary: cfg.secondaryCta || "Book a Strategy Call"
  },
  pages: cfg.pages || {}
};

const htmlFiles = [];
const cssFiles = [];

function walk(dir) {
  if (ignoreDirs.has(path.basename(dir))) return;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p);
    else if (HTML_EXT.test(f)) htmlFiles.push(p);
    else if (CSS_EXT.test(f)) cssFiles.push(p);
  }
}

// --- Helpers
function injectOrReplaceTitleAndMeta(html, title, desc) {
  if (title) {
    if (/<title>.*?<\/title>/is.test(html)) {
      html = html.replace(/<title>.*?<\/title>/is, `<title>${title}</title>`);
    } else {
      html = html.replace(/<\/head>/i, `  <title>${title}</title>\n</head>`);
    }
  }
  if (desc) {
    if (/<meta[^>]+name=["']description["'][^>]*>/i.test(html)) {
      html = html.replace(
        /<meta[^>]+name=["']description["'][^>]*>/i,
        `<meta name="description" content="${desc}">`
      );
    } else {
      html = html.replace(/<\/head>/i, `  <meta name="description" content="${desc}">\n</head>`);
    }
  }
  return html;
}

function ensureInHead(html, blockId, content) {
  if (html.includes(blockId)) return html; // already present
  return html.replace(/<\/head>/i, `${content}\n</head>`);
}

function replaceBranding(html) {
  const patterns = [
    /Digitics/gi,
    /Temptics/gi,
    /Envato Elements/gi
  ];
  for (const re of patterns) html = html.replace(re, brand.name);

  // Replace common lorem ipsum
  html = html.replace(/Lorem ipsum[^<]*</gi, `${brand.tagline}<`);

  // Phone & email placeholders
  html = html.replace(/\(\d{3}\)\s?\d{3}-\d{4}/g, brand.phone || "$&");
  html = html.replace(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi, brand.email || "$&");

  // CTA normalization
  html = html
    .replace(/>(Get Started|Start Now|Contact Us|Get Quote|Free Quote)<\/a>/gi, `>${brand.ctas.primary}</a>`)
    .replace(/>(Book a Call|Schedule Call|Schedule a Call)<\/a>/gi, `>${brand.ctas.secondary}</a>`);

  return html;
}

function injectSiteWideSchemas(html) {
  const ORG_ID = "https://www.leadstackmarketing.com/#org";
  const AGENCY_ID = "https://www.leadstackmarketing.com/#agency";
  const WEBSITE_ID = "https://www.leadstackmarketing.com/#website";

  const org = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "${ORG_ID}",
  "name": "Leadstack Marketing",
  "url": "https://www.leadstackmarketing.com/",
  "logo": "https://www.leadstackmarketing.com/assets/brand/leadstack-logo.svg",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+1-251-555-0199",
    "contactType": "sales",
    "areaServed": "US"
  }],
  "sameAs": []
}
</script>`.trim();

  const agency = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "${AGENCY_ID}",
  "name": "Leadstack Marketing",
  "image": "https://www.leadstackmarketing.com/assets/brand/leadstack-logo.svg",
  "url": "https://www.leadstackmarketing.com/",
  "telephone": "+1-251-555-0199",
  "priceRange": "$$",
  "address": { "@type": "PostalAddress", "addressLocality": "Fairhope", "addressRegion": "AL", "addressCountry": "US" },
  "areaServed": { "@type": "AdministrativeArea", "name": "Gulf Coast (Baldwin & Mobile Counties, AL)" },
  "openingHours": "Mo-Fr 08:00-17:00",
  "parentOrganization": { "@id": "${ORG_ID}" }
}
</script>`.trim();

  const website = `
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"WebSite",
  "@id":"${WEBSITE_ID}",
  "url":"https://www.leadstackmarketing.com/",
  "name":"Leadstack Marketing",
  "potentialAction":{
    "@type":"SearchAction",
    "target":"https://www.leadstackmarketing.com/search?q={query}",
    "query-input":"required name=query"
  }
}
</script>`.trim();

  const breadcrumb = `
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://www.leadstackmarketing.com/"}
  ]
}
</script>`.trim();

  html = ensureInHead(html, "#org", org);
  html = ensureInHead(html, "#agency", agency);
  html = ensureInHead(html, "#website", website);
  html = ensureInHead(html, '"BreadcrumbList"', breadcrumb);

  return html;
}

function applyPageMapping(file, html) {
  const basename = path.basename(file);
  const page = brand.pages[basename];
  if (!page) return html;
  return injectOrReplaceTitleAndMeta(html, page.title, page.description);
}

function rewriteColors(css) {
  let out = css;
  const colorMap = new Map([
    // common template blues/purples/greens → brand palette (best-effort)
    [/#3b82f6/gi, brand.colors.primary],
    [/#6366f1/gi, brand.colors.secondary],
    [/#22c55e/gi, brand.colors.accent],
    [/#0f172a/gi, brand.colors.dark],
    [/#f8fafc/gi, brand.colors.light]
  ]);
  for (const [from, to] of colorMap) {
    if (to) out = out.replace(from, to);
  }
  // CSS variables if present
  out = out
    .replace(/(--primary(?:-color)?\s*:\s*)(#[0-9a-f]{3,8}|rgb\([^)]+\))/gi, `$1${brand.colors.primary}`)
    .replace(/(--secondary(?:-color)?\s*:\s*)(#[0-9a-f]{3,8}|rgb\([^)]+\))/gi, `$1${brand.colors.secondary}`)
    .replace(/(--accent(?:-color)?\s*:\s*)(#[0-9a-f]{3,8}|rgb\([^)]+\))/gi, `$1${brand.colors.accent}`)
    .replace(/(--dark(?:-color)?\s*:\s*)(#[0-9a-f]{3,8}|rgb\([^)]+\))/gi, `$1${brand.colors.dark}`)
    .replace(/(--light(?:-color)?\s*:\s*)(#[0-9a-f]{3,8}|rgb\([^)]+\))/gi, `$1${brand.colors.light}`);
  return out;
}

function main() {
  walk(ROOT);

  // CSS first
  for (const cssFile of cssFiles) {
    const css = fs.readFileSync(cssFile, "utf8");
    const out = rewriteColors(css);
    if (out !== css) fs.writeFileSync(cssFile, out, "utf8");
  }

  // HTML/others
  for (const file of htmlFiles) {
    let html = fs.readFileSync(file, "utf8");

    // Replace branding, phone/email, CTAs
    let updated = replaceBranding(html);

    // Page titles & meta
    updated = applyPageMapping(file, updated);

    // Insert sitewide schemas if missing
    updated = injectSiteWideSchemas(updated);

    // Add favicon if missing
    if (!/rel=["']icon["']/i.test(updated)) {
      updated = updated.replace(
        /<\/head>/i,
        `  <link rel="icon" href="/assets/brand/favicon.png">\n</head>`
      );
    }

    // Ensure fonts (Poppins/Inter) are referenced (best-effort)
    if (!/Poppins/i.test(updated) || !/Inter/i.test(updated)) {
      updated = updated.replace(
        /<\/head>/i,
        `  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@600;700&display=swap" rel="stylesheet">\n</head>`
      );
    }

    if (updated !== html) fs.writeFileSync(file, updated, "utf8");
  }

  console.log(`[update-brand] Complete. Files updated: HTML=${htmlFiles.length}, CSS=${cssFiles.length}`);
}

if (require.main === module) main();
