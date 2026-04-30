#!/usr/bin/env bash
# Mirror production HTML for visual reference during the WP→Next.js port.
# Output goes to scripts/_prod-snapshot/ — gitignored, only for dev reference.
#
# Run:  bash scripts/scrape-prod.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/scripts/_prod-snapshot"
HOST="https://csportcenter.com"

mkdir -p "$OUT"

URLS=(
  "/"
  "/class/yoga-for-men/"
  "/class/vinyasa-to-yin/"
  "/class/balance-body-flow/"
  "/class/reformer-pilates/"
  "/facilities/parking-space/"
  "/facilities/club-store/"
  "/facilities/cafetaria/"
  "/facilities/locker-rooms/"
  "/facilities/mini-gym/"
  "/facilities/sport-recovery-center/"
  "/facilities/basketball-academy/"
  "/facilities/mini-soccer-academy/"
  "/facilities/tennis-court/"
  "/facilities/basketball-court/"
  "/facilities/padel-court/"
  "/facilities/studio-class/"
  "/contact/"
)

echo "Mirroring ${#URLS[@]} pages from $HOST → $OUT"

for path in "${URLS[@]}"; do
  # Convert path to filename: / → home, /class/foo/ → class-foo
  name=$(echo "$path" | sed -E 's|^/$|home|; s|^/||; s|/$||; s|/|-|g')
  out_file="$OUT/${name}.html"
  url="${HOST}${path}"

  printf "  %-50s → %s\n" "$path" "${out_file##*/}"
  curl -sSL -A "Mozilla/5.0 (Macintosh; CSport-Migration-Scrape)" \
       -o "$out_file" \
       --max-time 30 \
       "$url" || echo "    [warn] failed: $url"
done

echo
echo "Done. Reference HTML saved to scripts/_prod-snapshot/"
echo "Tip: open in browser or grep for CSS classes / structure to mirror in components."
