#!/usr/bin/env python3
"""Build maintainable importer landing pages from Markdown."""

from __future__ import annotations

import argparse
import datetime as dt
import html
from pathlib import Path

from publish import PublishError, markdown_to_html, parse_frontmatter, validate_meta


SITE_URL = "https://tengyodalogistics.com"


def dual(en: str, zh: str, *, block: bool = False) -> str:
    attr = "data-lang-panel" if block else "data-lang-copy"
    return f'<span {attr}="en">{en}</span><span {attr}="zh-CN">{zh}</span>'


def page_template(post: dict[str, object], body: str, zh_post: dict[str, object], zh_body: str) -> str:
    slug = str(post["slug"])
    title = html.escape(str(post["title"]))
    description = html.escape(str(post["description"]), quote=True)
    summary = html.escape(str(post["summary"]))
    category = html.escape(str(post["category"]))
    keywords = html.escape(str(post["keywords"]), quote=True)
    cover = html.escape(str(post["cover"]), quote=True)
    zh_title = html.escape(str(zh_post["title"]))
    zh_summary = html.escape(str(zh_post["summary"]))
    zh_category = html.escape(str(zh_post["category"]))
    canonical = f"{SITE_URL}/{slug}/"
    return f'''<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>{title} | TengYoda Logistics</title>
  <meta name="description" content="{description}">
  <meta name="keywords" content="{keywords}">
  <link rel="canonical" href="{canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:url" content="{canonical}">
  <meta property="og:image" content="{SITE_URL}{cover}">
  <link rel="icon" href="/favicon.svg">
  <link rel="stylesheet" href="/assets/discovery.css">
  <link rel="stylesheet" href="/assets/logo-unified.css">
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <div class="topbar"><div class="shell"><span>{dual('China origin logistics for global importers','服务全球进口商的中国始发物流')}</span><div class="topbar-actions"><div class="lang-switch" role="group" aria-label="Language"><button type="button" data-set-language="en">English</button><button type="button" data-set-language="zh-CN">中文</button></div><a href="tel:+8618620244613">+86 186 2024 4613</a></div></div></div>
  <header class="header"><div class="shell nav-wrap">
    <a class="ty-brand" href="/" aria-label="TengYoda Logistics home"><span><strong>TengYoda<span class="ty-brand-chevron" aria-hidden="true">›</span></strong><small>GLOBAL LOGISTICS</small></span></a>
    <nav aria-label="Main navigation"><a href="/about/">{dual('About','关于我们')}</a><a href="/services/">{dual('Services','服务项目')}</a><a href="/blog/">{dual('Importer Guides','进口商指南')}</a><a href="/contact/">{dual('Contact','联系我们')}</a></nav>
    <a class="nav-cta" href="https://wa.me/8618620244613">{dual('Request a shipping plan','咨询运输方案')}</a>
  </div></header>
  <main id="main-content">
    <section class="hero"><img class="hero-image" src="{cover}" alt="" fetchpriority="high"><div class="hero-overlay"></div><div class="shell hero-content">
      <span class="eyebrow">{dual(category,zh_category)}</span><h1>{dual(title,zh_title)}</h1><p>{dual(summary,zh_summary)}</p>
      <div class="hero-actions"><a class="button primary" href="https://wa.me/8618620244613">{dual('Discuss your shipment','沟通您的货物')}</a><a class="button ghost" href="/services/">{dual('View services','查看服务')}</a></div>
    </div></section>
    <div class="shell content-grid">
      <article class="prose"><section data-lang-panel="en">{body}</section><section data-lang-panel="zh-CN">{zh_body}</section></article>
      <aside class="proof" aria-label="TengYoda company facts">
        <span class="eyebrow">{dual('VERIFIABLE COMPANY FACTS','可核实的企业信息')}</span>
        <h2>{dual('One China-side team','一个中国端服务团队')}</h2>
        <dl>
          <div><dt>{dual('Experience','行业经验')}</dt><dd>{dual('More than 10 years','超过10年')}</dd></div>
          <div><dt>{dual('Team','服务团队')}</dt><dd>{dual('Over 100 service professionals','超过100名专业人员')}</dd></div>
          <div><dt>{dual('Qualification','经营资质')}</dt><dd>{dual('NVOCC-qualified operator','具备NVOCC经营资格')}</dd></div>
          <div><dt>{dual('Foshan warehouses','佛山自营仓库')}</dt><dd>{dual('Lishui and Lecong, each over 3,000 m²','里水、乐从两座仓库，每座超过3,000平方米')}</dd></div>
          <div><dt>{dual('Focus lanes','优势航线')}</dt><dd>{dual('Oceania, Africa and South America','澳新、非洲和南美')}</dd></div>
        </dl>
        <a class="proof-link" href="/about/">{dual('Review our company profile →','查看公司介绍 →')}</a>
      </aside>
    </div>
    <section class="closing"><div class="shell closing-inner"><div><span class="eyebrow">{dual('FROM CARGO DETAILS TO A SHIPPING PLAN','从货物资料到运输方案')}</span><h2>{dual('Tell us what you are importing.','告诉我们您准备进口什么货物。')}</h2><p>{dual('Send the product, package count, packed dimensions, gross weight, pickup city, destination and cargo-ready date.','请提供品名、包装件数、包装尺寸、毛重、提货城市、目的地和备货日期。')}</p></div><div class="closing-actions"><a class="button primary" href="https://wa.me/8618620244613">{dual('WhatsApp Vinson','WhatsApp 联系 Vinson')}</a><a class="button ghost" href="mailto:vinson_xie@tydscc.cn">{dual('Email TengYoda','发送邮件')}</a></div></div></section>
  </main>
  <footer><div class="shell footer-grid"><div><strong>TengYoda Logistics</strong><p>{dual('China freight forwarding, consolidation and international shipping coordination.','提供中国货运代理、仓储集运与国际运输协调服务。')}</p></div><div><a href="/about/">{dual('About','关于我们')}</a><a href="/services/">{dual('Services','服务项目')}</a><a href="/blog/">{dual('Blog','博客')}</a></div><div><a href="mailto:vinson_xie@tydscc.cn">vinson_xie@tydscc.cn</a><a href="tel:+8618620244613">+86 186 2024 4613</a></div></div></footer>
  <script src="/assets/bilingual.js" defer></script>
</body>
</html>'''


def update_sitemap(site_dir: Path, posts: list[dict[str, object]]) -> None:
    path = site_dir / "sitemap.xml"
    source = path.read_text(encoding="utf-8")
    additions: list[str] = []
    for post in posts:
        route = f"/{post['slug']}/"
        if route in source:
            continue
        date = post["date_obj"]
        assert isinstance(date, dt.date)
        additions.append(f"  <url><loc>{SITE_URL}{route}</loc><lastmod>{date.isoformat()}</lastmod></url>")
    if additions:
        source = source.replace("</urlset>", "\n".join(additions) + "\n</urlset>")
        path.write_text(source, encoding="utf-8")


def publish(site_dir: Path, pages_dir: Path, translations_dir: Path) -> int:
    if not pages_dir.is_dir():
        print("No pages directory found.")
        return 0
    posts: list[dict[str, object]] = []
    for path in sorted(pages_dir.glob("*.md")):
        meta, source = parse_frontmatter(path)
        post = validate_meta(path, meta, site_dir)
        if str(post["language"]) != "en":
            raise PublishError(f"{path}: importer landing pages must use language: en")
        body, _ = markdown_to_html(source)
        if not body:
            raise PublishError(f"{path}: page body is empty")
        translation_path = translations_dir / path.name
        if not translation_path.is_file():
            raise PublishError(f"{path}: missing Chinese translation {translation_path}")
        zh_meta, zh_source = parse_frontmatter(translation_path)
        zh_post = validate_meta(translation_path, zh_meta, site_dir)
        if str(zh_post["language"]) != "zh-CN":
            raise PublishError(f"{translation_path}: translation must use language: zh-CN")
        if zh_post["date_obj"] != post["date_obj"]:
            raise PublishError(f"{translation_path}: translation date must match English page")
        zh_body, _ = markdown_to_html(zh_source)
        destination = site_dir / str(post["slug"])
        destination.mkdir(parents=True, exist_ok=True)
        (destination / "index.html").write_text(page_template(post, body, zh_post, zh_body), encoding="utf-8")
        posts.append(post)
        print(f"Published /{post['slug']}/")
    update_sitemap(site_dir, posts)
    return len(posts)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--site", required=True, type=Path)
    parser.add_argument("--pages", required=True, type=Path)
    parser.add_argument("--translations", required=True, type=Path)
    args = parser.parse_args()
    try:
        count = publish(args.site.resolve(), args.pages.resolve(), args.translations.resolve())
    except (PublishError, OSError) as exc:
        print(f"ERROR: {exc}")
        return 2
    print(f"Landing-page publisher completed: {count} page(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
