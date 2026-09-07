import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogView } from "@/components/blog-view";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import { blogSeo, pageMetadata, siteOrigin } from "@/lib/seo";
import { sitePath } from "@/lib/site-path";

export function generateStaticParams() { return blogPosts.map(post => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found | TengYoda Logistics", robots: { index: false } };
  const seo = blogSeo[post.slug];
  const base = pageMetadata(seo?.title ?? `${post.content.title} | TengYoda Logistics`, seo?.description ?? post.content.summary, `/blog/${post.slug}`);
  const image = `${siteOrigin}${sitePath(post.image.src)}`;
  return {
    ...base,
    openGraph: { type: "article", title: seo?.title ?? post.content.title, description: seo?.description ?? post.content.summary, url: `${siteOrigin}/blog/${post.slug}`, publishedTime: `${post.publishedAt}T00:00:00Z`, modifiedTime: `${post.updatedAt ?? post.publishedAt}T00:00:00Z`, authors: [post.author], images: [{ url: image, alt: post.image.alt }] },
    twitter: { card: "summary_large_image", title: seo?.title ?? post.content.title, description: seo?.description ?? post.content.summary, images: [image] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.content.title,
    description: post.content.summary,
    image: `${siteOrigin}${sitePath(post.image.src)}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "TengYoda Logistics", url: siteOrigin },
    mainEntityOfPage: `${siteOrigin}/blog/${post.slug}`,
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} /><BlogView post={post} /></>;
}
