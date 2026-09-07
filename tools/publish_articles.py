#!/usr/bin/env python3
"""Convert English Markdown files in articles/ into typed blog data."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARTICLES = ROOT / "articles"
OUTPUT = ROOT / "lib" / "markdown-posts.ts"
REQUIRED = ("title", "date", "summary")


def slugify(value: str) -> str:
    value = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    if not value:
        raise ValueError("The article needs a valid slug or English title.")
    return value


def parse_front_matter(text: str, source: Path) -> tuple[dict[str, str], str]:
    if not text.startswith("---\n"):
        raise ValueError(f"{source.name}: missing opening --- front matter")
    try:
        raw, body = text[4:].split("\n---\n", 1)
    except ValueError as exc:
        raise ValueError(f"{source.name}: missing closing --- front matter") from exc
    metadata: dict[str, str] = {}
    for line in raw.splitlines():
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        key, separator, value = line.partition(":")
        if not separator:
            raise ValueError(f"{source.name}: invalid front matter line: {line}")
        metadata[key.strip().lower()] = value.strip().strip('"').strip("'")
    missing = [key for key in REQUIRED if not metadata.get(key)]
    if missing:
        raise ValueError(f"{source.name}: missing {', '.join(missing)}")
    return metadata, body.strip()


def flush_paragraph(lines: list[str], paragraphs: list[str]) -> None:
    if lines:
        paragraphs.append(" ".join(part.strip() for part in lines).strip())
        lines.clear()


def clean_inline(value: str) -> str:
    """Keep simple Markdown emphasis and links for the React renderer."""
    return re.sub(r"<[^>]+>", "", value).strip()


def media_path(value: str) -> str:
    value = value.strip()
    return value if value.startswith(("/", "https://", "http://")) else f"/{value}"


def parse_table(lines: list[str]) -> dict[str, object]:
    cells = [[cell.strip() for cell in line.strip().strip("|").split("|")] for line in lines]
    headers = cells[0]
    separator = len(cells) > 1 and all(re.fullmatch(r":?-{3,}:?", cell.replace(" ", "")) for cell in cells[1])
    return {"type": "table", "headers": headers, "rows": cells[2:] if separator else cells[1:]}


def parse_body(body: str) -> tuple[str, list[dict[str, object]]]:
    intro_lines: list[str] = []
    sections: list[dict[str, object]] = []
    current: dict[str, object] | None = None
    paragraph_lines: list[str] = []
    list_items: list[str] = []
    ordered_list = False
    table_lines: list[str] = []

    def blocks() -> list[dict[str, object]]:
        assert current is not None
        return current.setdefault("blocks", [])

    def flush_blocks() -> None:
        nonlocal ordered_list
        if current is None:
            flush_paragraph(paragraph_lines, intro_lines)
            return
        if paragraph_lines:
            blocks().append({"type": "paragraph", "text": clean_inline(" ".join(paragraph_lines))})
            paragraph_lines.clear()
        if list_items:
            blocks().append({"type": "list", "items": list_items.copy(), "ordered": ordered_list})
            list_items.clear()
            ordered_list = False
        if table_lines:
            blocks().append(parse_table(table_lines))
            table_lines.clear()

    for raw_line in body.splitlines():
        line = raw_line.strip()
        if line.startswith("## "):
            if current is not None:
                flush_blocks()
            else:
                flush_paragraph(paragraph_lines, intro_lines)
            heading = clean_inline(line[3:])
            current = {"id": slugify(heading), "heading": heading, "paragraphs": [], "blocks": []}
            sections.append(current)
        elif line.startswith("### ") and current is not None:
            flush_blocks()
            blocks().append({"type": "subheading", "text": clean_inline(line[4:])})
        elif re.match(r"^[-*] ", line) and current is not None:
            if paragraph_lines or table_lines:
                flush_blocks()
            list_items.append(clean_inline(line[2:]))
        elif re.match(r"^\d+\. ", line) and current is not None:
            if paragraph_lines or table_lines:
                flush_blocks()
            ordered_list = True
            list_items.append(clean_inline(re.sub(r"^\d+\.\s+", "", line)))
        elif line.startswith("![") and current is not None:
            flush_blocks()
            match = re.fullmatch(r'!\[([^]]*)\]\((\S+?)(?:\s+["\']([^"\']+)["\'])?\)', line)
            if match:
                blocks().append({"type": "image", "alt": match.group(1), "src": media_path(match.group(2)), "caption": match.group(3) or ""})
        elif line.startswith("![") and current is None:
            # The first image normally duplicates the article cover shown in the hero.
            flush_paragraph(paragraph_lines, intro_lines)
            continue
        elif line.startswith("@[video]") and current is not None:
            flush_blocks()
            match = re.fullmatch(r'@\[video\]\((\S+?)(?:\s+["\']([^"\']+)["\'])?\)', line)
            if match:
                blocks().append({"type": "video", "src": media_path(match.group(1)), "caption": match.group(2) or ""})
        elif line.startswith(">") and current is not None:
            flush_blocks()
            blocks().append({"type": "quote", "text": clean_inline(line.lstrip("> "))})
        elif line.startswith("|") and current is not None:
            if paragraph_lines or list_items:
                flush_blocks()
            table_lines.append(line)
        elif line.startswith("<") and line.endswith(">"):
            continue
        elif not line:
            if current is None:
                flush_paragraph(paragraph_lines, intro_lines)
            else:
                flush_blocks()
        else:
            if list_items or table_lines:
                flush_blocks()
            paragraph_lines.append(line)

    if current is None:
        flush_paragraph(paragraph_lines, intro_lines)
    else:
        flush_blocks()

    introduction = " ".join(intro_lines).strip()
    if not introduction:
        raise ValueError("Article body needs an introductory paragraph before the first ## heading.")
    if not sections:
        sections = [{"id": "overview", "heading": "Overview", "paragraphs": []}]
    return introduction, sections


def article_from_file(source: Path) -> dict[str, object]:
    metadata, body = parse_front_matter(source.read_text(encoding="utf-8"), source)
    introduction, sections = parse_body(body)
    title = metadata["title"]
    category = metadata.get("category", "IMPORT GUIDE").upper()
    image = metadata.get("image", metadata.get("cover", "/images/sea-freight.webp"))
    if not image.startswith("/"):
        image = f"/{image}"
    content = {
        "category": category,
        "title": title,
        "summary": metadata["summary"],
        "introduction": introduction,
        "sections": sections,
    }
    return {
        "slug": slugify(metadata.get("slug", source.stem)),
        "publishedAt": metadata["date"],
        "author": metadata.get("author", "TengYoda Logistics"),
        "image": {
            "src": image,
            "alt": metadata.get("alt", "International logistics and cargo shipping"),
        },
        "updatedAt": metadata.get("updated", metadata["date"]),
        "content": content,
    }


def main() -> None:
    sources = sorted(path for path in ARTICLES.glob("*.md") if path.name.lower() != "readme.md")
    posts = [article_from_file(path) for path in sources]
    slugs = [post["slug"] for post in posts]
    if len(slugs) != len(set(slugs)):
        raise ValueError("Two Markdown articles use the same slug.")
    rendered = json.dumps(posts, ensure_ascii=False, indent=2)
    OUTPUT.write_text(
        'import type { BlogPost } from "./blog-posts";\n\n'
        "// Generated by tools/publish_articles.py before every build.\n"
        f"export const markdownPosts: BlogPost[] = {rendered};\n",
        encoding="utf-8",
    )
    print(f"Prepared {len(posts)} Markdown article(s).")


if __name__ == "__main__":
    main()
