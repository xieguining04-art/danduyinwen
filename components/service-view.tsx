"use client";

import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryActions } from "@/components/enquiry-actions";
import { Reveal } from "@/components/motion";
import { orderedServices as services, relatedServices, serviceLabel, type Service } from "@/lib/services";
import { enquiryLinks } from "@/lib/company";
import { serviceSeo } from "@/lib/seo";
import { ServiceSearchDetails } from "@/components/service-search-details";
import { sitePath } from "@/lib/site-path";

export function ServiceView({ service }: { service?: Service }) {
  const content = service?.content;
  const searchCopy = service ? serviceSeo[service.slug]?.content : undefined;
  const topic = service ? serviceLabel(service) : undefined;
  const quoteUrl = enquiryLinks(topic).whatsapp;
  const related = service ? relatedServices(service.slug) : [];
  return <div className="site blog-site" id="top"><SiteHeader active="services" /><main id="main-content" tabIndex={-1}>
    <section className="blog-hero service-hero editorial-hero page-enter"><img className="editorial-photo" src={sitePath(service?.image ?? "/images/sea-freight.webp")} alt={service?.alt ?? "Container vessel at an international seaport"} width={1672} height={941} fetchPriority="high" /><div className="editorial-shade" /><div className="wrap"><nav className="blog-breadcrumb" aria-label="Breadcrumb"><a href={sitePath("/")}>Home</a><span>/</span>{service ? <><a href={sitePath("/services")}>Our services</a><span>/</span><span>{content?.title}</span></> : <span>Our services</span>}</nav><span className="kicker light"><i />CHINA ORIGIN. GLOBAL REACH.</span><h1>{searchCopy?.h1 ?? "Global sea freight booking, with China-side support."}</h1><p>{content?.summary ?? "Our service network extends to the Middle East, Red Sea, India, and Pakistan; Europe, the Mediterranean; Africa; the east and west coasts of South America; North America; Australia; and Southeast Asia."}</p><a className="button accent service-hero-button" href={service ? "#service-details" : "#service-directory"}>Explore the service<ArrowRight /></a></div></section>
    {!service && <section className="service-directory section" id="service-directory"><div className="wrap service-directory-grid">{services.map((item, index) => <Reveal key={item.slug} delay={(index % 3) * 70}><article className="directory-card media-hover-card"><a className="insight-visual" href={sitePath(`/services/${item.slug}`)} aria-label={serviceLabel(item)}><img src={sitePath(item.image)} alt={item.alt} width={1672} height={941} loading="lazy" /><span>0{index + 1}</span></a><div><h2><a href={sitePath(`/services/${item.slug}`)}>{serviceLabel(item)}</a></h2><p>{item.content.summary}</p><a className="text-link" href={sitePath(`/services/${item.slug}`)}>Learn more<ArrowRight /></a></div></article></Reveal>)}</div></section>}
    {service && content && <>
      <section className="section service-detail-section" id="service-details"><div className="wrap service-detail-grid"><aside className="service-sidebar"><nav aria-label="Service navigation"><h2>Our services</h2>{services.map(item => <a href={sitePath(`/services/${item.slug}`)} key={item.slug} aria-current={item.slug === service.slug ? "page" : undefined}>{serviceLabel(item)}<ArrowRight /></a>)}</nav><a className="text-link" href={sitePath("/services")}>All services<ArrowRight /></a></aside><div className="service-body"><Reveal><span className="kicker"><i />SERVICE OVERVIEW</span><h2>Bring every step together.</h2><p className="service-lead">{searchCopy?.intro ?? content.detail}</p></Reveal><Reveal><div className="scope-grid">{content.scope.map((item, index) => <div key={item}><span>0{index + 1}</span><Check aria-hidden="true" /><h3>{item}</h3></div>)}</div></Reveal><Reveal><figure className="service-detail-image"><img src={sitePath(service.image)} alt={service.alt} width={1672} height={941} loading="lazy" /><figcaption>Illustrative logistics scene; not a photograph of company facilities.</figcaption></figure></Reveal><Reveal><section className="shipment-checklist"><span className="kicker"><i />BEFORE YOU ENQUIRE</span><h2>Start with the right cargo details.</h2><ul>{content.preparation.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul><p>Cargo acceptance, timing and charges are subject to the shipment, route and confirmed scope.</p></section></Reveal><Reveal><ServiceSearchDetails slug={service.slug} /></Reveal></div></div></section>
      {related.length > 0 && <section className="blog-related"><div className="wrap"><div className="blog-index-heading"><h2>Connected services</h2><a className="text-link" href={sitePath("/services")}>View all<ArrowRight /></a></div><div className="related-service-links">{related.map(item => <a href={sitePath(`/services/${item.slug}`)} key={item.slug}>{serviceLabel(item)}<ArrowRight /></a>)}</div></div></section>}
    </>}
    <section className="blog-cta"><div className="wrap"><div><span className="kicker light"><i />A DIRECT CONVERSATION WITH VINSON</span><h2>Let's plan your next shipment.</h2><p>Share your cargo details and destination to start planning the China-side steps.</p></div><EnquiryActions topic={topic} /></div></section>
  </main><SiteFooter /><a className="float-wa" href={quoteUrl} target="_blank" rel="noreferrer" aria-label="Contact Vinson on WhatsApp"><MessageCircle /></a></div>;
}
