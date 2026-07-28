#!/usr/bin/env bash
#
# Rebuild the CV PDFs from LaTeX sources and copy them into the site.
#
# Usage:
#   ./cv-overleaf/build-cv.sh            # build all three (en, pt, es)
#   ./cv-overleaf/build-cv.sh en         # build only one (or several: en pt)
#
# Edit the sources first:
#   cv-overleaf/site/en/main.tex
#   cv-overleaf/site/pt/main.tex
#   cv-overleaf/site/es/main.tex
#
# Output PDFs land in:
#   public/cv/cv-en.pdf  cv-pt.pdf  cv-es.pdf
#
# To force browsers to reload the previewer after a change, bump the "?v="
# number in src/pages/cv/Cv.tsx.

set -u

# Resolve paths relative to this script, so it works from any directory.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE_DIR="$SCRIPT_DIR/site"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
PUBLIC_CV="$REPO_DIR/public/cv"

# Which languages to build (default: all).
LANGS=("$@")
if [ "${#LANGS[@]}" -eq 0 ]; then
  LANGS=(en pt es)
fi

if ! command -v pdflatex >/dev/null 2>&1; then
  echo "ERROR: pdflatex not found. Install a TeX distribution (e.g. texlive)." >&2
  exit 1
fi

mkdir -p "$PUBLIC_CV"

fail=0
for lang in "${LANGS[@]}"; do
  dir="$SITE_DIR/$lang"
  if [ ! -f "$dir/main.tex" ]; then
    echo "SKIP $lang: $dir/main.tex not found" >&2
    fail=1
    continue
  fi

  echo "=== Building $lang ==="
  # Two passes: needed for marginpar sidebars + hyperref references to settle.
  (
    cd "$dir" || exit 1
    pdflatex -interaction=nonstopmode -halt-on-error main.tex >build-1.log 2>&1 &&
    pdflatex -interaction=nonstopmode -halt-on-error main.tex >build-2.log 2>&1
  )
  code=$?

  if [ $code -ne 0 ]; then
    echo "  BUILD FAILED. Last errors:"
    grep -m5 -E "^!|error|Error|Undefined|Emergency" "$dir/build-2.log" | sed 's/^/    /'
    echo "  Full log: $dir/build-2.log"
    fail=1
    continue
  fi

  pages=$(pdfinfo "$dir/main.pdf" 2>/dev/null | awk '/^Pages/{print $2}')
  # LaTeX emits "Marginpar on page N moved" when a sidebar didn't fit; that
  # means a sidebar got pushed/split — worth noticing.
  warns=$(grep -c "Marginpar on page" "$dir/build-2.log")

  cp "$dir/main.pdf" "$PUBLIC_CV/cv-$lang.pdf"
  echo "  OK: $pages pages, $warns marginpar-moved warning(s) -> public/cv/cv-$lang.pdf"
done

# Tidy up LaTeX aux files.
rm -f "$SITE_DIR"/*/main.aux "$SITE_DIR"/*/main.out "$SITE_DIR"/*/main.log \
      "$SITE_DIR"/*/build-1.log "$SITE_DIR"/*/build-2.log 2>/dev/null

echo
if [ $fail -eq 0 ]; then
  echo "Done. Open the PDFs in public/cv/ or refresh the site's Currículo page."
else
  echo "Finished with errors (see above)."
fi
exit $fail
