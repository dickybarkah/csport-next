#!/usr/bin/env python3
"""
Extract class & facilities content from the WordPress dump (running in Docker)
into MDX files at content/classes/ and content/facilities/.

Prereq: docker compose up (DB at csport_db, dump imported).
Run:    python3 scripts/extract-content.py
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "content"
CLASSES_DIR = CONTENT_DIR / "classes"
FACILITIES_DIR = CONTENT_DIR / "facilities"

# Reformer Pilates (post 356) needs 2 instructors per the latest UX requirement.
# This is hard-coded since the SQL dump only contains the original single URL.
EXTRA_BOOKING = {
    "reformer-pilates": [
        {"name": "Friska", "slug": "reformer-pilates-by-friska"},
        {"name": "Zahra", "slug": "reformer-pilates-by-zahra"},
    ],
}

# Slugs that need normalising (DB has post_name='reformer-pilates-2' for ID 356,
# but every public-facing reference uses 'reformer-pilates')
SLUG_OVERRIDES = {
    356: "reformer-pilates",
}


def mysql(query: str) -> list[dict[str, str]]:
    """Run a query inside csport_db and return rows as a list of dicts (TSV)."""
    proc = subprocess.run(
        [
            "docker", "exec", "csport_db",
            "mysql", "-ucsport", "-pcsport", "csport",
            "--batch", "--raw", "-e", query,
        ],
        check=True,
        capture_output=True,
        text=True,
    )
    lines = proc.stdout.splitlines()
    if not lines:
        return []
    headers = lines[0].split("\t")
    return [dict(zip(headers, line.split("\t"))) for line in lines[1:]]


def url_to_local(url: str) -> str:
    """Map https://csportcenter.com/wp-content/uploads/foo.webp -> /uploads/foo.webp"""
    if not url:
        return ""
    path = urlparse(url).path
    # strip leading "/wp-content"
    return path.replace("/wp-content/uploads/", "/uploads/")


def yaml_escape(value: str) -> str:
    if value is None:
        return ""
    s = value.replace("\\", "\\\\").replace('"', '\\"')
    return f'"{s}"'


def build_class_mdx(row: dict) -> tuple[str, str]:
    pid = int(row["ID"])
    slug = SLUG_OVERRIDES.get(pid, row["post_name"])
    title = row["post_title"]
    excerpt = row["post_excerpt"]
    thumbnail = url_to_local(row.get("img_url") or "")
    booking_link = row.get("booking_link") or ""

    # Build booking list
    booking = EXTRA_BOOKING.get(slug)
    if booking is None:
        # Single-entry default — derive instructor name from title or use 'CSport'
        slug_from_link = ""
        if booking_link:
            slug_from_link = booking_link.rsplit("/", 1)[-1]
        booking = [{"name": "CSport Center", "slug": slug_from_link}] if slug_from_link else []

    fm = ["---"]
    fm.append(f"title: {yaml_escape(title)}")
    fm.append(f"slug: {yaml_escape(slug)}")
    fm.append(f"excerpt: {yaml_escape(excerpt)}")
    if thumbnail:
        fm.append(f"thumbnail: {yaml_escape(thumbnail)}")
    if booking:
        fm.append("booking:")
        for b in booking:
            fm.append(f"  - name: {yaml_escape(b['name'])}")
            fm.append(f"    slug: {yaml_escape(b['slug'])}")
    fm.append("---")
    fm.append("")
    fm.append(excerpt)
    fm.append("")

    return slug, "\n".join(fm)


def build_facility_mdx(row: dict) -> tuple[str, str]:
    slug = row["post_name"]
    title = row["post_title"]
    excerpt = row.get("post_excerpt", "")
    thumbnail = url_to_local(row.get("img_url") or "")

    fm = ["---"]
    fm.append(f"title: {yaml_escape(title)}")
    fm.append(f"slug: {yaml_escape(slug)}")
    if thumbnail:
        fm.append(f"thumbnail: {yaml_escape(thumbnail)}")
    fm.append("---")
    fm.append("")
    if excerpt:
        fm.append(excerpt)
        fm.append("")

    return slug, "\n".join(fm)


def fetch_classes() -> list[dict]:
    return mysql("""
        SELECT
            p.ID,
            p.post_title,
            p.post_name,
            p.post_excerpt,
            a.guid AS img_url,
            (SELECT meta_value FROM wpzm_postmeta
             WHERE post_id = p.ID AND meta_key = 'class-meta-box_link' LIMIT 1) AS booking_link
        FROM wpzm_posts p
        LEFT JOIN wpzm_postmeta tm ON tm.post_id = p.ID AND tm.meta_key = '_thumbnail_id'
        LEFT JOIN wpzm_posts a ON a.ID = tm.meta_value
        WHERE p.post_type = 'class' AND p.post_status = 'publish'
        ORDER BY p.ID;
    """)


def fetch_facilities() -> list[dict]:
    return mysql("""
        SELECT
            p.ID,
            p.post_title,
            p.post_name,
            p.post_excerpt,
            a.guid AS img_url
        FROM wpzm_posts p
        LEFT JOIN wpzm_postmeta tm ON tm.post_id = p.ID AND tm.meta_key = '_thumbnail_id'
        LEFT JOIN wpzm_posts a ON a.ID = tm.meta_value
        WHERE p.post_type = 'facilities' AND p.post_status = 'publish'
        ORDER BY p.ID;
    """)


def fetch_site_config() -> dict:
    rows = mysql("""
        SELECT option_name, option_value
        FROM wpzm_options
        WHERE option_name IN ('blogname','blogdescription','admin_email');
    """)
    cfg = {r["option_name"]: r["option_value"] for r in rows}
    return {
        "name": cfg.get("blogname", "CSport Center"),
        "tagline": cfg.get("blogdescription", ""),
        "contact": {"email": cfg.get("admin_email", "")},
        "booking": {"base": "https://megatix.co.id/white-label/"},
        "social": {},
    }


def main() -> int:
    CLASSES_DIR.mkdir(parents=True, exist_ok=True)
    FACILITIES_DIR.mkdir(parents=True, exist_ok=True)

    print("Fetching classes...")
    classes = fetch_classes()
    for row in classes:
        slug, mdx = build_class_mdx(row)
        path = CLASSES_DIR / f"{slug}.mdx"
        path.write_text(mdx, encoding="utf-8")
        print(f"  wrote {path.relative_to(ROOT)}")

    print(f"Fetching facilities...")
    facilities = fetch_facilities()
    for row in facilities:
        slug, mdx = build_facility_mdx(row)
        path = FACILITIES_DIR / f"{slug}.mdx"
        path.write_text(mdx, encoding="utf-8")
        print(f"  wrote {path.relative_to(ROOT)}")

    print("Fetching site config...")
    cfg = fetch_site_config()
    site_path = CONTENT_DIR / "site.json"
    site_path.write_text(json.dumps(cfg, indent=2) + "\n", encoding="utf-8")
    print(f"  wrote {site_path.relative_to(ROOT)}")

    print(f"\nDone. {len(classes)} classes, {len(facilities)} facilities.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
