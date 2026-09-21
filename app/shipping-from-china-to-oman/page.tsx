import type { Metadata } from "next";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryActions } from "@/components/enquiry-actions";
import { enquiryLinks } from "@/lib/company";
import { siteOrigin } from "@/lib/seo";
import { sitePath } from "@/lib/site-path";

const pagePath = "/shipping-from-china-to-oman";
const pageUrl = `${siteOrigin}${pagePath}`;
const title = "Shipping from China to Oman | Sea Freight, RoRo & Project Cargo";
const description = "Plan shipping from China to Oman via Sohar, Duqm or another suitable port: FCL, LCL, RoRo vehicles, machinery and project cargo coordination.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title, description, url: pageUrl, type: "website", images: [{ url: `${siteOrigin}/article-images/china-oman-vehicle-shipping-cover.webp`, alt: "Vehicle shipping from China to Oman" }] },
};

const faqs = [
  { question: "How can I ship cargo from China to Oman?", answer: "FCL and LCL sea freight can suit general cargo, while RoRo, container loading, flat rack, breakbulk or other project options may be assessed for vehicles and machinery. The appropriate method depends on dimensions, weight, operability, packing, quantity and the final destination." },
  { question: "Which Oman port should I use: Sohar or Duqm?", answer: "The suitable port depends on carrier service, cargo type, vehicle or equipment handling, the consignee location and onward-delivery plan. Sohar and Duqm can both be assessed, while another Omani gateway may be appropriate for a specific booking." },
  { question: "Can cars be shipped from China to Oman by RoRo?", answer: "RoRo may be assessed for accepted self-propelled vehicles on an available service. Vehicle dimensions, condition, keys, fuel level, operability, documentation and terminal rules must be confirmed. Route and space are not guaranteed until the carrier confirms the booking." },
  { question: "Is RoRo or container shipping better for vehicles?", answer: "RoRo can reduce container loading work where a suitable service exists. Containers can offer another option for smaller lots or routes without suitable RoRo space, but require a safe loading, securing and unloading plan. Compare the complete operational and cost scope." },
  { question: "How long does shipping from China to Oman take?", answer: "Transit and total lead time change with the loading port, Omani destination, direct or transshipment routing, vessel schedule, cargo acceptance and port operations. TengYoda checks the proposed schedule for each shipment instead of publishing a permanent estimate." },
  { question: "What is needed for a China-to-Oman freight quote?", answer: "Provide the cargo description, quantity, packed dimensions, gross weight, pickup location, ready date and destination. For vehicles, add make, model, VIN status, dimensions, weight, value, fuel type and whether each unit can move under its own power." },
];

const schemas = [
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteOrigin}/` }, { "@type": "ListItem", position: 2, name: "Shipping from China to Oman", item: pageUrl }] },
  { "@context": "https://schema.org", "@type": "Service", "@id": `${pageUrl}#service`, name: "Shipping from China to Oman", serviceType: "International freight forwarding from China to Oman", url: pageUrl, provider: { "@id": `${siteOrigin}/#organization`, name: "TengYoda Supply Chain Co., Ltd." }, areaServed: { "@type": "Country", name: "Oman" }, description, hasOfferCatalog: { "@type": "OfferCatalog", name: "China-to-Oman freight options", itemListElement: ["FCL sea freight", "LCL sea freight", "RoRo vehicle shipping", "Container vehicle shipping", "Breakbulk shipping", "Project cargo coordination"].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) } },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
];

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export default function OmanShippingPage() {
  const quoteUrl = enquiryLinks("shipping from China to Oman").whatsapp;
  const options = [
    ["FCL container shipping", "Container planning for commercial goods, parts and suitably loaded vehicles, with origin pickup and export handoffs."],
    ["LCL sea freight", "Consolidated shipping for smaller general cargo, subject to cargo acceptance and packing requirements."],
    ["RoRo vehicle shipping", "Assessment for operable cars, trucks and mobile equipment on suitable services to Oman."],
    ["Container vehicle loading", "A container-based alternative requiring a safe loading, securing, documentation and unloading plan."],
    ["Breakbulk & machinery", "For heavy or non-containerised units, subject to vessel, lifting, port and route acceptance."],
    ["Project cargo coordination", "For multi-unit vehicles, equipment or complex cargo requiring defined origin and destination handoffs."],
  ];
  return <div className="site blog-site nigeria-page" id="top">
    {schemas.map((schema, index) => <JsonLd data={schema} key={index} />)}
    <SiteHeader active="services" /><main id="main-content" tabIndex={-1}>
      <section className="blog-hero service-hero editorial-hero nigeria-hero page-enter"><img className="editorial-photo" src={sitePath("/article-images/china-oman-vehicle-shipping-cover.webp")} alt="Vehicles prepared for shipping from China to Oman" width={1536} height={1024} fetchPriority="high" /><div className="editorial-shade" /><div className="wrap"><nav className="blog-breadcrumb" aria-label="Breadcrumb"><a href={sitePath("/")}>Home</a><span>/</span><span>Shipping from China to Oman</span></nav><span className="kicker light"><i />CHINA → OMAN FREIGHT</span><h1>Shipping from China to Oman</h1><p>Plan FCL, LCL, RoRo vehicles, machinery and project cargo shipments to Sohar, Duqm or another suitable Omani port—with China-side coordination based on the actual cargo.</p><div className="nigeria-hero-actions"><a className="button accent" href="#quote-checklist">Prepare a quote request<ArrowRight /></a><a className="button outline-light" href={quoteUrl} target="_blank" rel="noreferrer">WhatsApp Vinson<MessageCircle /></a></div></div></section>
      <section className="nigeria-facts"><div className="wrap"><div><small>ORIGIN</small><strong>China factories and suitable loading ports</strong></div><div><small>OMAN</small><strong>Sohar · Duqm · suitable gateway</strong></div><div><small>SPECIALIST CARGO</small><strong>Vehicles · Machinery · Project cargo</strong></div><div><small>QUOTE BASIS</small><strong>Current routing and confirmed cargo</strong></div></div></section>

      <section className="section nigeria-overview"><div className="wrap nigeria-content-grid"><aside className="nigeria-toc"><h2>On this page</h2><nav><a href="#options">Shipping options</a><a href="#ports">Ports and routing</a><a href="#vehicles">Vehicle projects</a><a href="#process">Shipping process</a><a href="#quote-checklist">Quote checklist</a><a href="#faq">Questions</a></nav></aside><div className="nigeria-copy"><span className="kicker"><i />ROUTE OVERVIEW</span><h2>Match the vessel and method to the cargo.</h2><p className="service-lead">TengYoda coordinates supplier pickup, origin handling, export preparation and international freight from China. For Oman, the plan may involve container shipping, RoRo, breakbulk or another project solution depending on cargo characteristics, route availability and destination handling.</p><div className="nigeria-note"><strong>No permanent online rate or schedule</strong><p>Vehicle, container and project-cargo pricing changes with space, route, equipment, dimensions, handling and market conditions. The quotation should state its validity, included scope, assumptions and known exclusions.</p></div></div></div></section>

      <section className="section nigeria-options" id="options"><div className="wrap"><div className="nigeria-heading"><span className="kicker"><i />FREIGHT OPTIONS</span><h2>Containers, RoRo and project cargo.</h2><p>The shipping method is reviewed using the same cargo list, destination and service scope so operational differences remain clear.</p></div><div className="scope-grid nigeria-service-grid">{options.map(([name, copy], index) => <article key={name}><span>0{index + 1}</span><Check /><h3>{name}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="section nigeria-ports" id="ports"><div className="wrap nigeria-split"><div><span className="kicker"><i />PORTS & ROUTING</span><h2>China to Sohar, Duqm or another suitable port.</h2><p>Potential China origins include Shanghai, Ningbo, Qingdao, Tianjin, Shenzhen and Nansha. Nansha can be relevant to South China vehicle projects, but the origin must reflect the cargo location and available vessel service.</p><p>Sohar and Duqm are important references for Oman-bound cargo. The correct discharge port depends on carrier acceptance, service frequency, cargo handling and final delivery. Routing may be direct or transshipped and is confirmed per booking.</p></div><figure><img src={sitePath("/images/project-cargo.webp")} alt="Project cargo used to illustrate shipping from China to Oman" width={1672} height={941} loading="lazy" /><figcaption>Illustrative logistics image. Actual vessel, port pair and schedule are confirmed for each shipment.</figcaption></figure></div></section>

      <section className="section nigeria-project" id="vehicles"><div className="wrap nigeria-split nigeria-split-reverse"><div><span className="kicker light"><i />VEHICLE PROJECT PLANNING</span><h2>From one vehicle to a multi-unit programme.</h2><p>A large vehicle enquiry—such as 500 sedans from China to Oman—requires a capacity and operations assessment. It is a planning scenario, not a claim that TengYoda completed a specific 500-car shipment.</p><ul><li><Check />Confirm model mix, dimensions, weights and operability</li><li><Check />Compare RoRo space with container-loading capacity</li><li><Check />Define China transport, yard and port handoffs</li><li><Check />Review securing, keys, fuel and battery requirements</li><li><Check />Confirm Oman clearance, release and collection plan</li></ul><a className="button accent" href={sitePath("/blog/shipping-500-cars-china-to-oman-roro-vs-container")}>Read the 500-car planning guide<ArrowRight /></a></div><div className="nigeria-project-card"><small>METHOD COMPARISON</small><strong>2</strong><span>primary options</span><dl><div><dt>RoRo</dt><dd>Drive-on / drive-off</dd></div><div><dt>Container</dt><dd>Load and secure</dd></div><div><dt>Decision</dt><dd>Route + operations</dd></div><div><dt>Booking</dt><dd>Subject to acceptance</dd></div></dl></div></div></section>

      <section className="section nigeria-process" id="process"><div className="wrap"><div className="nigeria-heading"><span className="kicker"><i />HOW IT WORKS</span><h2>From cargo review to Oman handoff.</h2></div><ol>{[["Share the cargo", "Send the cargo list, sizes, weights, photos, pickup points, ready date and Oman destination."],["Compare methods", "Review container, RoRo, breakbulk or project options against current route availability."],["Define the scope", "Confirm origin, freight and requested destination tasks, plus assumptions and exclusions."],["Coordinate in China", "Arrange agreed collection, receiving, export preparation and carrier or vessel handoff."],["Prepare arrival", "Share documents and arrival information for the consignee or appointed Oman agent." ]].map(([heading, copy], index) => <li key={heading}><span>0{index + 1}</span><div><h3>{heading}</h3><p>{copy}</p></div></li>)}</ol></div></section>

      <section className="section nigeria-quote" id="quote-checklist"><div className="wrap nigeria-content-grid"><div><span className="kicker"><i />BEFORE YOU ENQUIRE</span><h2>Send the information needed for a real quote.</h2><p>For vehicles and machinery, technical details affect both carrier acceptance and handling.</p><EnquiryActions topic="shipping from China to Oman" /></div><ul>{["Cargo or vehicle description, quantity and value", "Final dimensions and gross weight for every type", "Pickup location and cargo-ready date", "Sohar, Duqm or final Oman delivery location", "Photos, packing and handling requirements", "For vehicles: make, model, fuel type and operability", "Requested Incoterm and delivery scope", "Required documents or consignee instructions"].map(item => <li key={item}><Check />{item}</li>)}</ul></div></section>

      <section className="section nigeria-faq" id="faq"><div className="wrap nigeria-content-grid"><div><span className="kicker"><i />FAQ</span><h2>China-to-Oman shipping questions.</h2><p>Route, rate and acceptance details are confirmed shipment by shipment.</p></div><div>{faqs.map(item => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></div></section>
      <section className="blog-cta"><div className="wrap"><div><span className="kicker light"><i />A DIRECT CONVERSATION WITH VINSON</span><h2>Planning a shipment from China to Oman?</h2><p>Share the vehicle list or cargo details for a container, RoRo or project-shipping assessment.</p></div><EnquiryActions topic="shipping from China to Oman" /></div></section>
    </main><SiteFooter /><a className="float-wa" href={quoteUrl} target="_blank" rel="noreferrer" aria-label="Contact Vinson on WhatsApp"><MessageCircle /></a>
  </div>;
}
