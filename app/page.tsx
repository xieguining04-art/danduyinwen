"use client";

import {
  ArrowRight, Check, MessageCircle, PackageCheck, SearchCheck,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CompanyNetwork } from "@/components/company-network";
import { EnquiryActions } from "@/components/enquiry-actions";
import { HeroCarousel } from "@/components/hero-carousel";
import { Reveal } from "@/components/motion";
import { blogPosts } from "@/lib/blog-posts";
import { homepageServices, serviceLabel } from "@/lib/services";
import { enquiryLinks } from "@/lib/company";
import { sitePath } from "@/lib/site-path";

export default function Home() {
  const enquiry = enquiryLinks();
  return (
    <div className="site" id="top">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
      <HeroCarousel />

      <section className="intro section" id="about">
        <div className="wrap intro-grid">
          <figure className="intro-visual"><img src={sitePath("/images/about-tengyoda-team.webp")} alt="Freight operations team coordinating ocean, air, road and warehouse logistics in China" width={1448} height={1086} loading="lazy" /><figcaption>OCEAN · AIR · ROAD · WAREHOUSING</figcaption></figure>
          <div className="intro-copy"><span className="kicker"><i /> ABOUT TENGYODA SUPPLY CHAIN</span><h2>China-based freight forwarding, connected to global markets.</h2><p>TengYoda Supply Chain Co., Ltd. is a China-headquartered international freight forwarder with more than a decade of industry experience and NVOCC qualification. Through long-term, stable relationships with multiple ocean carriers, we provide timely sailing information and dependable transport options designed to help importers select cost-effective shipping plans.</p><p>Our service network covers the Middle East, Red Sea, India and Pakistan, Europe, the Mediterranean, Africa, the east and west coasts of South America, North America, Australia and Southeast Asia. We coordinate end-to-end container import and export services, including booking, document exchange, customs declaration, customs transit, inspection coordination, container loading and unloading, domestic trucking, warehousing and bonded-logistics support. We also arrange breakbulk and general cargo transport, together with coastal and inland-waterway services.</p><a className="text-link" href={sitePath("/services")}>Explore our logistics services<ArrowRight /></a></div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="wrap">
          <div className="section-head"><div><span className="kicker"><i /> FROM CHINA TO THE WORLD</span><h2>Sea freight, backed by China-side support.</h2></div><div className="section-head-side"><p>Our service network extends to the Middle East, Red Sea, India, and Pakistan; Europe, the Mediterranean; Africa; the east and west coasts of South America; North America; Australia; and Southeast Asia.</p><a className="text-link" href={sitePath("/services")}>View all services<ArrowRight /></a></div></div>
          <div className="service-grid core-service-grid">
            {homepageServices.map((service, index) => <Reveal key={service.slug} delay={(index % 3) * 60}><article className="service-card service-photo-card media-hover-card"><a className="service-cover" href={sitePath(`/services/${service.slug}`)} aria-label={serviceLabel(service)}><img src={sitePath(service.image)} alt={service.alt} width={1672} height={941} loading="lazy" /><span>0{index + 1}</span></a><div className="service-card-copy"><h3><a href={sitePath(`/services/${service.slug}`)}>{serviceLabel(service)}</a></h3><p>{service.content.summary}</p><a href={sitePath(`/services/${service.slug}`)}>Learn more <ArrowRight /></a></div></article></Reveal>)}
          </div>
          <a className="all-services" href={sitePath("/services")}>Explore all logistics services <ArrowRight /></a>
        </div>
      </section>

      <section className="specialists" id="specialists">
        <div className="specialist-image"><img src={sitePath("/images/project-cargo.webp")} alt="Heavy machinery secured for specialist port transport" width={1672} height={941} loading="lazy" /></div>
        <div className="specialist-copy"><span className="kicker light"><i /> SPECIAL CARGO</span><h2>Specialised coordination for special situations.</h2><p>Unusual freight needs more than a standard rate. We review the dimensions, weight, lifting points, packaging, equipment, route restrictions and destination requirements before the cargo moves.</p><ul><li><Check /> Oversize and heavy cargo planning</li><li><Check /> RoRo vehicles and mobile equipment</li><li><Check /> Breakbulk and special project shipments</li><li><Check /> Destination customs coordination through local partners</li></ul><a className="button outline-light" href="#contact">Talk through your cargo <ArrowRight /></a></div>
      </section>

      <section className="standards section">
        <div className="wrap standards-grid">
          <div className="standards-intro"><span className="kicker"><i /> OUR WORKING STANDARD</span><h2>Prepared carefully. Communicated clearly.</h2><p>We focus on the details that prevent avoidable cost: accurate cargo information, suitable packing, realistic lead times, clear quotation scope and coordinated handoffs.</p><a className="text-link" href="#contact">Start with a shipment review <ArrowRight /></a></div>
          <div className="standard-list"><article><SearchCheck /><span><strong>Ask the right questions</strong><small>Product, dimensions, weight, packing, supplier timing and destination.</small></span></article><article><PackageCheck /><span><strong>Identify risk before booking</strong><small>Restrictions, documentation and handling requirements are raised early.</small></span></article><article><MessageCircle /><span><strong>Keep one direct contact</strong><small>Vinson coordinates the China-side plan and keeps communication practical.</small></span></article></div>
        </div>
      </section>

      <CompanyNetwork />

      <section className="promise">
        <div className="wrap promise-inner"><div className="quote-mark">“</div><blockquote>The goal is simple: make every China-side step understandable before the cargo moves.</blockquote><div><strong>OUR SERVICE PRINCIPLE</strong><span>Clear scope · Practical options · Direct communication</span></div></div>
      </section>

      <section className="insights section" id="insights">
        <div className="wrap"><div className="insights-head"><span className="kicker"><i /> LATEST INSIGHTS</span><h2>Useful guidance for importing from China.</h2><a className="text-link blog-view-all" href={sitePath("/blog")}>View all articles <ArrowRight /></a></div><div className="insight-grid">{blogPosts.slice(0, 3).map((post, index) => <Reveal key={post.slug} delay={index * 80}><article className="media-hover-card"><a className="insight-visual" href={sitePath(`/blog/${post.slug}`)} aria-label={post.content.title}><img src={sitePath(post.image.src)} alt={post.image.alt} width={1672} height={941} loading="lazy" /><span>{post.content.category}</span></a><small>{post.content.category}</small><h3><a href={sitePath(`/blog/${post.slug}`)}>{post.content.title}</a></h3><p>{post.content.summary}</p><a href={sitePath(`/blog/${post.slug}`)}>Read more <ArrowRight /></a></article></Reveal>)}</div></div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap contact-grid"><div><span className="kicker light"><i /> MOVE IN THE RIGHT DIRECTION</span><h2>Tell us what you need to source or ship.</h2><p>Send the cargo name, quantity, dimensions, weight, pickup city, destination and preferred shipping date.</p></div><EnquiryActions /></div>
      </section>
      </main>
      <SiteFooter />
      <a className="float-wa" href={enquiry.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp TengYoda Logistics"><MessageCircle /></a>
    </div>
  );
}
