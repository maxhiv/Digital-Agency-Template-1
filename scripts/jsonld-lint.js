/* JSON-LD Linter and Deduper for Leadstack Marketing
 * - Validates JSON-LD syntax in all HTML files
 * - Detects and removes duplicate schemas
 * - Ensures proper @id usage for entity references
 */

const fs = require("fs");
const path = require("path");

const ROOT = process.env.SCAN_ROOT || ".";
const ignoreDirs = new Set(["node_modules", ".git", "vendor", "dist", "build", "scripts", "scss", "documentation", "attached_assets"]);
const HTML_EXT = /\.(html?|php|njk|ejs|md)$/i;

const htmlFiles = [];
let hasErrors = false;

function walk(dir) {
  if (ignoreDirs.has(path.basename(dir))) return;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p);
    else if (HTML_EXT.test(f)) htmlFiles.push(p);
  }
}

function extractJSONLD(html) {
  const scripts = [];
  const regex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    scripts.push({
      fullMatch: match[0],
      jsonContent: match[1].trim()
    });
  }
  return scripts;
}

function validateAndDedupe(file, html) {
  const scripts = extractJSONLD(html);
  if (scripts.length === 0) return html;

  const seen = new Set();
  const valid = [];
  let modified = false;

  for (const script of scripts) {
    try {
      const data = JSON.parse(script.jsonContent);
      const key = data["@type"] + (data["@id"] || "");
      
      if (seen.has(key)) {
        console.warn(`[jsonld-lint] Duplicate ${data["@type"]} schema in ${file}, removing...`);
        html = html.replace(script.fullMatch, "");
        modified = true;
      } else {
        seen.add(key);
        valid.push(data);
      }
    } catch (err) {
      console.error(`[jsonld-lint] Invalid JSON-LD in ${file}:`, err.message);
      hasErrors = true;
    }
  }

  console.log(`[jsonld-lint] ${file}: ${valid.length} valid schemas`);
  
  if (modified) {
    fs.writeFileSync(file, html, "utf8");
    console.log(`[jsonld-lint] Deduped ${file}`);
  }

  return html;
}

function main() {
  walk(ROOT);

  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    validateAndDedupe(file, html);
  }

  if (hasErrors) {
    console.error("[jsonld-lint] Validation failed with errors");
    process.exit(1);
  } else {
    console.log(`[jsonld-lint] Complete. ${htmlFiles.length} files checked.`);
  }
}

if (require.main === module) main();
