import { sitePath } from "@/lib/site-path";

export default function ArticleNotFound() {
  return <main className="blog-missing wrap"><span className="kicker">404 · TENGYODA BLOG</span><h1>Article not found</h1><p>The article may have moved or is no longer available.</p><a className="button accent" href={sitePath("/blog")}>Back to the blog</a></main>;
}
