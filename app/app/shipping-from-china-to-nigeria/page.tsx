import type { Metadata } from "next";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryActions } from "@/components/enquiry-actions";
import { enquiryLinks } from "@/lib/company";
import { siteOrigin } from "@/lib/seo";
import { sitePath } from "@/lib/site-path";

const pagePath = "/shipping-from-china-to-nigeria";
const pageUrl = `${siteOrigin}${pagePath}`;
const title = "Shipping from China to Nigeria | Sea Freight & Project Cargo";
const description = "Plan shipping from China to Nigeria via Lagos, Apapa or other suitable ports: FCL, LCL, breakbulk, RoRo, heavy machinery and project cargo support.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "website",
    images: [{ url: `${siteOrigin}/images/project-cargo.webp`, alt: "Project cargo prepared for international shipping" }],
  },
};

const faqs = [
  {
    question: "How can I ship goods from China to Nigeria?",
    answer: "The suitable method depends on the cargo. FCL can suit container-sized orders, LCL can suit smaller general cargo, while breakbulk, RoRo, flat rack or other project solutions may be assessed for vehicles, heavy machinery and oversized units. Share the actual cargo details before choosing a method.",
  },
  {
    question: "Can TengYoda arrange shipping from China to Lagos or Apapa?",
    answer: "TengYoda can coordinate China-origin collection, consolidation, export handling and international freight planning for Nigeria-bound cargo. Lagos and Apapa can be assessed, but the discharge port, carrier acceptance and routing must be confirmed for the specific cargo and sailing.",
  },
  {
    question: "What is needed for a China-to-Nigeria freight quote?",
    answer: "Provide the cargo description, package count, packed dimensions and gross weight, pickup location, cargo-ready date and preferred destination port or delivery address. For machinery, add photographs, lifting points, centre-of-gravity information and whether the unit can move under its own power.",
  },
  {
    question: "How long does shipping from China to Nigeria take?",
    answer: "Transit and total lead time vary by loading port, discharge port, carrier route, transshipment, cargo acceptance, sailing availability and port conditions. A current routing and schedule should be checked for each shipment rather than relying on a fixed website estimate.",
  },
  {
    question: "Can you arrange customs clearance in Nigeria?",
    answer: "TengYoda can help coordinate the handoff with a destination clearance party when this is agreed in the quotation. The Nigerian importer or appointed broker remains responsible for confirming current import eligibility, permits, duties, taxes and local regulatory requirements before shipment.",
  },
  {
    question: "Do you publish fixed freight rates from China to Nigeria?",
    answer: "No. Freight levels and local charges change with the cargo, equipment, route, carrier space, fuel, season and handling requirements. TengYoda prepares a shipment-specific quotation with the included scope and known exclusions stated clearly.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteOrigin}/` },
    { "@type": "ListItem", position: 2, name: "Shipping from China to Nigeria", item: pageUrl },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Shipping from China to Nigeria",
  serviceType: "International freight forwarding from China to Nigeria",
  url: pageUrl,
  provider: { "@id": `${siteOrigin}/#organization`, name: "TengYoda Supply Chain Co., Ltd." },
  areaServed: { "@type": "Country", name: "Nigeria" },
  availableChannel: { "@type": "ServiceChannel", serviceUrl: pageUrl },
  description,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "China-to-Nigeria freight options",
    itemListElement: ["FCL sea freight", "LCL sea freight", "Breakbulk shipping", "Heavy machinery shipping", "RoRo assessment", "Project cargo coordination"].map(name => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(item => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export default function NigeriaShippingPage() {
  const quoteUrl = enquiryLinks("shipping from China to Nigeria").whatsapp;
  const services = [
    ["FCL container shipping", "For container-sized general cargo, with China pickup, origin handling and port-to-port or agreed onward coordination."],
    ["LCL consolidation", "For smaller shipments, including receiving and combining supplier cargo in China before export."],
    ["Breakbulk & heavy lift", "For machinery or units that cannot be loaded into a standard container, subject to lifting and vessel acceptance."],
    ["RoRo assessment", "For suitable wheeled or mobile equipment, based on operability, dimensions, route availability and terminal rules."],
    ["Flat rack & special equipment", "For out-of-gauge cargo when container-based special equipment is technically and commercially suitable."],
    ["Project cargo coordination", "For multi-piece equipment and complex handoffs requiring a defined pickup, handling, documentation and discharge plan."],
  ];

  return <div className="site blog-site nigeria-page" id="top">
    <JsonLd data={breadcrumbSchema} /><JsonLd data={serviceSchema} /><JsonLd data={faqSchema} />
    <SiteHeader active="services" />
    <main id="main-content" tabIndex={-1}>
      <section className="blog-hero service-hero editorial-hero nigeria-hero page-enter">
        <img className="editorial-photo" src={sitePath("/images/project-cargo.webp")} alt="Project cargo prepared for international ocean transport" width={1672} height={941} fetchPriority="high" />
        <div className="editorial-shade" />
        <div className="wrap">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb"><a href={sitePath("/")}>Home</a><span>/</span><span>Shipping from China to Nigeria</span></nav>
          <span className="kicker light"><i />CHINA → NIGERIA FREIGHT</span>
          <h1>Shipping from China to Nigeria</h1>
          <p>Plan FCL, LCL, breakbulk, heavy machinery, RoRo and project cargo shipments to Lagos, Apapa or another suitable Nigerian port—with the China-side handoffs coordinated around your actual cargo.</p>
          <div className="nigeria-hero-actions"><a className="button accent" href="#quote-checklist">Prepare a quote request<ArrowRight /></a><a className="button outline-light" href={quoteUrl} target="_blank" rel="noreferrer">WhatsApp Vinson<MessageCircle /></a></div>
        </div>
      </section>

      <section className="nigeria-facts" aria-label="Service summary"><div className="wrap">
        <div><small>ORIGIN</small><strong>Major ports & factories in China</strong></div>
        <div><small>DESTINATION</small><strong>Lagos / Apapa / suitable Nigeria port</strong></div>
        <div><small>CARGO</small><strong>Containers, machinery & project cargo</strong></div>
        <div><small>QUOTE BASIS</small><strong>Shipment-specific, no invented fixed rate</strong></div>
      </div></section>

      <section className="section nigeria-overview"><div className="wrap nigeria-content-grid">
        <aside className="nigeria-toc"><h2>On this page</h2><nav>
          <a href="#options">Shipping options</a><a href="#ports">Ports and routing</a><a href="#project-cargo">Heavy & project cargo</a><a href="#process">How the process works</a><a href="#quote-checklist">Quote checklist</a><a href="#faq">Frequently asked questions</a>
        </nav></aside>
        <div className="nigeria-copy">
          <span className="kicker"><i />ROUTE OVERVIEW</span><h2>A China-to-Nigeria plan built around the cargo.</h2>
          <p className="service-lead">A useful freight plan starts with the packed shipment—not a generic online rate. TengYoda coordinates China-origin pickup, warehouse or port handoffs, export preparation and international freight booking. Where requested and available, we can also coordinate with a destination-side clearance or delivery party under an agreed scope.</p>
          <div className="nigeria-note"><strong>Important for Nigerian importers</strong><p>Before cargo leaves China, confirm import eligibility, permits, documentation, duties, taxes and destination charges with your Nigerian customs broker or other qualified local adviser. Requirements can depend on the commodity and may change.</p></div>
        </div>
      </div></section>

      <section className="section nigeria-options" id="options"><div className="wrap"><div className="nigeria-heading"><span className="kicker"><i />FREIGHT OPTIONS</span><h2>From FCL and LCL to breakbulk and RoRo.</h2><p>The final method is assessed against dimensions, weight, cargo characteristics, route availability, handling limits and the required delivery scope.</p></div><div className="scope-grid nigeria-service-grid">{services.map(([name, copy], index) => <article key={name}><span>0{index + 1}</span><Check aria-hidden="true" /><h3>{name}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="section nigeria-ports" id="ports"><div className="wrap nigeria-split"><div><span className="kicker"><i />PORTS & ROUTING</span><h2>China to Lagos, Apapa and other suitable gateways.</h2><p>Common China loading-port options may include Shanghai, Ningbo, Shenzhen, Guangzhou/Nansha, Qingdao, Tianjin or another port suited to the supplier location and cargo. For Nigeria, Lagos and the Apapa port area are important commercial references, while another port may be more appropriate for a specific project or vessel service.</p><p>Routing may be direct or transshipped. We confirm the proposed loading port, discharge port, sailing and cargo acceptance when quoting; they should not be treated as fixed until booking confirmation.</p></div><figure><img src={sitePath("/images/sea-freight.webp")} alt="Container ship used to illustrate sea freight from China" width={1672} height={941} loading="lazy" /><figcaption>Illustrative logistics image; routing and vessel acceptance are confirmed per shipment.</figcaption></figure></div></section>

      <section className="section nigeria-project" id="project-cargo"><div className="wrap nigeria-split nigeria-split-reverse"><div><span className="kicker light"><i />TYPICAL ASSESSMENT SCENARIO</span><h2>18.0 × 3.6 × 3.4 m / 58 MT heavy equipment.</h2><p>A current Nigeria enquiry involving a single 58-ton unit is a useful example of the information needed for project planning. It is an assessment scenario—not a completed TengYoda shipment or a promise that a particular vessel will accept the cargo.</p><ul><li><Check />Confirm transport dimensions and verified gross weight</li><li><Check />Review lifting points, centre of gravity and lifting drawings</li><li><Check />Check factory access, loading equipment and inland transport limits</li><li><Check />Compare breakbulk, heavy-lift or other technically suitable options</li><li><Check />Confirm discharge terms, destination equipment and local handling party</li></ul></div><div className="nigeria-project-card"><small>PROJECT REVIEW</small><strong>58 MT</strong><span>Single main unit</span><dl><div><dt>Length</dt><dd>18.0 m</dd></div><div><dt>Width</dt><dd>3.6 m</dd></div><div><dt>Height</dt><dd>3.4 m</dd></div><div><dt>Status</dt><dd>Enquiry / assessment</dd></div></dl></div></div></section>

      <section className="section nigeria-process" id="process"><div className="wrap"><div className="nigeria-heading"><span className="kicker"><i />HOW IT WORKS</span><h2>One practical route from enquiry to handoff.</h2></div><ol>{[
        ["Share the cargo", "Send the product, packages, packed sizes, weights, photos, pickup address, ready date and Nigerian destination."],
        ["Review the method", "We assess container, consolidation, RoRo, special equipment or breakbulk possibilities and identify missing technical details."],
        ["Define the scope", "The quotation states the planned origin, international and requested destination tasks, plus known exclusions and assumptions."],
        ["Coordinate in China", "After confirmation, collection, receiving, export preparation and carrier or vessel handoffs are coordinated to the booking plan."],
        ["Prepare destination handoff", "Documents and arrival information are shared for the importer or appointed Nigerian agent to arrange clearance and release."],
      ].map(([heading, copy], index) => <li key={heading}><span>0{index + 1}</span><div><h3>{heading}</h3><p>{copy}</p></div></li>)}</ol></div></section>

      <section className="section nigeria-quote" id="quote-checklist"><div className="wrap nigeria-content-grid"><div><span className="kicker"><i />BEFORE YOU ENQUIRE</span><h2>Send these details for a useful quote.</h2><p>Accurate information reduces assumptions and helps compare options on the same scope.</p><EnquiryActions topic="shipping from China to Nigeria" /></div><ul>{["Cargo / product description and HS code if known", "Package count, packed dimensions and gross weight for every piece", "Supplier or pickup city and cargo-ready date", "Preferred Nigeria port or final delivery address", "Photos and packing method", "For machinery: model, operability, lifting points and centre of gravity", "Requested Incoterm and delivery scope", "Any batteries, liquids, chemicals or controlled characteristics"].map(item => <li key={item}><Check />{item}</li>)}</ul></div></section>

      <section className="section nigeria-faq" id="faq"><div className="wrap nigeria-content-grid"><div><span className="kicker"><i />FAQ</span><h2>China-to-Nigeria shipping questions.</h2><p>Answers are intentionally practical and conditional because rates, routes, customs requirements and carrier acceptance can change.</p></div><div>{faqs.map(item => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></div></section>

      <section className="blog-cta"><div className="wrap"><div><span className="kicker light"><i />A DIRECT CONVERSATION WITH VINSON</span><h2>Planning a shipment from China to Nigeria?</h2><p>Send the actual cargo details for a route and handling assessment. You will receive a shipment-specific response—not a fictional fixed rate.</p></div><EnquiryActions topic="shipping from China to Nigeria" /></div></section>
    </main>
    <SiteFooter /><a className="float-wa" href={quoteUrl} target="_blank" rel="noreferrer" aria-label="Contact Vinson on WhatsApp"><MessageCircle /></a>
  </div>;
}
