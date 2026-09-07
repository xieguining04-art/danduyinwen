import { ArrowRight } from "lucide-react";
import { serviceSeo } from "@/lib/seo";
import { getBlogPost } from "@/lib/blog-posts";
import { sitePath } from "@/lib/site-path";

export function ServiceSearchDetails({ slug }: { slug: string }) {
  const seo = serviceSeo[slug];
  if (!seo) return null;
  const copy = seo.content;
  const guide = getBlogPost(seo.guideSlug);
  return <section className="service-search-details" aria-labelledby="service-questions"><span className="kicker"><i />PRACTICAL ANSWERS</span><h2 id="service-questions">Clear answers before your cargo moves.</h2><div className="service-questions">{copy.questions.map(item => <section key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></section>)}</div>{guide && <aside className="service-guide-link"><span>RELATED IMPORT GUIDE</span><a href={sitePath(`/blog/${guide.slug}`)}>{guide.content.title}<ArrowRight aria-hidden="true" /></a></aside>}</section>;
}
