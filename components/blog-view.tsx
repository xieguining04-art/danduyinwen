"use client";

import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, Clock3, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryActions } from "@/components/enquiry-actions";
import { Reveal } from "@/components/motion";
import { blogPosts, formatBlogDate, readingMinutes, type BlogPost } from "@/lib/blog-posts";

import { enquiryLinks } from "@/lib/company";
import { blogSeo } from "@/lib/seo";
import { getService, serviceLabel, type Service } from "@/lib/services";
import { sitePath } from "@/lib/site-path";

function InlineText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let cursor = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > cursor) parts.push(text.slice(cursor, index));
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={`${index}-${token}`}>{token.slice(2, -2)}</strong>);
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const external = /^https?:\/\//.test(link[2]);
        parts.push(<a key={`${index}-${token}`} href={external ? link[2] : sitePath(link[2])} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{link[1]}</a>);
      }
    }
    cursor = index + token.length;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
}

function SectionBlocks({ post, sectionIndex }: { post: BlogPost; sectionIndex: number }) {
  const section = post.content.sections[sectionIndex];
  if (!section.blocks?.length) return <>{section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}</>;
  return <>{section.blocks.map((block, index) => {
    if (block.type === "paragraph") return <p key={index}><InlineText text={block.text} /></p>;
    if (block.type === "subheading") return <h3 key={index}><InlineText text={block.text} /></h3>;
    if (block.type === "quote") return <blockquote key={index}><InlineText text={block.text} /></blockquote>;
    if (block.type === "list") {
      const items = block.items.map((item, itemIndex) => <li key={itemIndex}><InlineText text={item} /></li>);
      return block.ordered ? <ol key={index}>{items}</ol> : <ul key={index}>{items}</ul>;
    }
    if (block.type === "image") return <figure className="article-media" key={index}><img src={sitePath(block.src)} alt={block.alt} width={1400} height={900} loading="lazy" />{block.caption && <figcaption>{block.caption}</figcaption>}</figure>;
    if (block.type === "video") return <figure className="article-media" key={index}><video controls preload="metadata" playsInline poster={block.poster ? sitePath(block.poster) : undefined}><source src={sitePath(block.src)} />Your browser does not support embedded video.</video>{block.caption && <figcaption>{block.caption}</figcaption>}</figure>;
    return <div className="article-table-wrap" key={index}><table><thead><tr>{block.headers.map((header, cellIndex) => <th key={cellIndex}><InlineText text={header} /></th>)}</tr></thead><tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}><InlineText text={cell} /></td>)}</tr>)}</tbody></table></div>;
  })}</>;
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const content = post.content;
  return <Reveal delay={(index % 3) * 80}><article className="blog-card media-hover-card">
    <a className="insight-visual" href={sitePath(`/blog/${post.slug}`)} aria-label={content.title}><img src={sitePath(post.image.src)} alt={post.image.alt} width={1672} height={941} loading="lazy" /><span>{content.category}</span></a>
    <div className="blog-card-body"><div className="blog-meta"><time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time><span><Clock3 aria-hidden="true" />{readingMinutes(content)} min read</span></div>
      <h2><a href={sitePath(`/blog/${post.slug}`)}>{content.title}</a></h2><p>{content.summary}</p>
      <a className="text-link" href={sitePath(`/blog/${post.slug}`)}>Read article<ArrowRight /></a>
    </div>
  </article></Reveal>;
}

export function BlogView({ post }: { post?: BlogPost }) {
  const content = post?.content;
  const heroImage = post?.image ?? {
    src: "/images/warehouse-operations.webp",
    alt: "Cargo consolidation and export preparation in a China logistics warehouse",
  };
  const linkedServices = (post ? blogSeo[post.slug]?.serviceSlugs ?? [] : []).map(getService).filter((service): service is Service => Boolean(service));
  const topic = post ? `your article: ${post.content.title}` : "China sourcing and freight";
  const quoteUrl = enquiryLinks(topic).whatsapp;

  return <div className="site blog-site" id="top">
    <SiteHeader active="blog" />

    <main id="main-content" tabIndex={-1}>
      <section className={`blog-hero editorial-hero page-enter ${post ? "blog-article-hero" : "blog-index-hero"}`}>
        <img className="editorial-photo" src={sitePath(heroImage.src)} alt={heroImage.alt} width={1672} height={941} fetchPriority="high" />
        <div className="editorial-shade" />
        <div className="wrap">
        <nav className="blog-breadcrumb" aria-label="Breadcrumb"><a href={sitePath("/")}>Home</a><span>/</span>{post ? <><a href={sitePath("/blog")}>Blog</a><span>/</span><span>{content?.category}</span></> : <span>Blog</span>}</nav>
        <span className="kicker light"><i />{content?.category ?? "THE TENGYODA JOURNAL"}</span>
        <h1>{content?.title ?? "A clearer view of sourcing and shipping from China."}</h1>
        <p>{content?.summary ?? "Practical articles for overseas importers, covering purchase preparation, transport options and shipment risks."}</p>
        {post && content && <div className="blog-meta"><span>{post.author}</span><time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time><span><Clock3 aria-hidden="true" />{readingMinutes(content)} min read</span></div>}
      </div></section>

      {!post && <section className="blog-index"><div className="wrap"><div className="blog-index-heading"><h2>Latest articles</h2><span>{blogPosts.length} guides</span></div><div className="blog-card-grid">{blogPosts.map((item, index) => <PostCard key={item.slug} post={item} index={index} />)}</div></div></section>}

      {post && content && <>
        <div className="wrap blog-reading-grid">
          <aside className="blog-toc"><nav aria-label="Article contents"><h2>In this article</h2>{content.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.heading}</a>)}</nav><a className="text-link" href={sitePath("/blog")}><ArrowLeft />Back to all articles</a></aside>
          <article className="blog-prose"><p className="blog-lead"><InlineText text={content.introduction} /></p>{content.sections.map((section, sectionIndex) => <Reveal key={section.id}><section id={section.id}><h2>{section.heading}</h2><SectionBlocks post={post} sectionIndex={sectionIndex} /></section></Reveal>)}<div className="blog-note">General planning guidance. Requirements, charges and carrier acceptance depend on the cargo, route and destination; confirm shipment-specific details before booking. Images are illustrative, not photographs of company facilities.</div></article>
        </div>
        {linkedServices.length > 0 && <section className="blog-service-links"><div className="wrap"><div className="blog-index-heading"><h2>Services for your shipping plan</h2></div><div className="related-service-links">{linkedServices.map(service => <a href={sitePath(`/services/${service.slug}`)} key={service.slug}>{serviceLabel(service)}<ArrowRight aria-hidden="true" /></a>)}</div></div></section>}
        <section className="blog-related"><div className="wrap"><div className="blog-index-heading"><h2>Keep reading</h2><a className="text-link" href={sitePath("/blog")}>All articles<ArrowRight /></a></div><div className="blog-card-grid blog-related-grid">{blogPosts.filter(item => item.slug !== post.slug).slice(0, 2).map((item, index) => <PostCard key={item.slug} post={item} index={index + 1} />)}</div></div></section>
      </>}

      <section className="blog-cta"><div className="wrap"><div><span className="kicker light"><i />FROM READING TO A SHIPPING PLAN</span><h2>Let's talk about your next shipment.</h2><p>Share the product, quantity, packed dimensions, gross weight, pickup city and destination.</p></div><EnquiryActions topic={topic} /></div></section>
    </main>

    <SiteFooter />
    <a className="float-wa" href={quoteUrl} target="_blank" rel="noreferrer" aria-label="Contact TengYoda on WhatsApp"><MessageCircle /></a>
  </div>;
}
