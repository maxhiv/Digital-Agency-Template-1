#!/usr/bin/env bash
# Post-build script for Leadstack Marketing
# - Lints JSON-LD schemas
# - Generates sitemap
# - Validates critical files

set -e

echo "[postbuild] Starting post-build tasks..."

# Lint JSON-LD
echo "[postbuild] Validating JSON-LD schemas..."
node scripts/jsonld-lint.js

# Check for required files
echo "[postbuild] Checking required files..."
required_files=(
  "robots.txt"
  "sitemap.html"
  "assets/brand/leadstack-logo.svg"
  "assets/brand/favicon.png"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "[postbuild] Warning: Missing required file: $file"
  fi
done

echo "[postbuild] Post-build tasks complete!"
