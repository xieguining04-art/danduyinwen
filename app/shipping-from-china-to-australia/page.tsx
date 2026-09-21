import type { Metadata } from "next";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryActions } from "@/components/enquiry-actions";
import { enquiryLinks } from "@/lib/company";
import { siteOrigin } from "@/lib/seo";
import { sitePath } from "@/lib/site-path";

const pagePath = "/shipping-from-china-to-australia";
const pageUrl = `${siteOrigin}${pagePath}`;
const title = "Shipping from China to Australia | FCL, LCL & Air Freight";
const description = "Plan shipping from China to Australia by FCL, LCL or air freight, with supplier pickup, consolidation and clear coordination for Sydney, Melbourne, Brisbane and Fremantle.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "website",
    images: [{ url: `${siteOrigin}/article-images/china-australia-40hq-route.webp`, alt: "Container shipping route from China to Australia" }],
  },
};

const faqs = [
  { question: "What is the best way to ship from China to Australia?", answer: "The appropriate method depends on cargo volume, urgency, handling needs and delivery scope. FCL can suit larger orders, LCL can suit smaller consolidated shipments, and air freight can suit urgent or higher-value cargo. Compare the complete scope rather than the headline freight rate alone." },
  { question: "Which Australian ports can cargo from China be shipped to?", answer: "Common container gateways include Sydney, Melbourne, Brisbane and Fremantle. The suitable port depends on the final destination, carrier service, cargo type and onward-delivery plan. Other ports may be assessed for a specific shipment." },
  { question: "How long does shipping from China to Australia take?", answer: "Transit and total lead time vary with the Chinese loading port, Australian destination, direct or transshipment routing, carrier schedule, cargo-ready date, customs and biosecurity processing. A current sailing should be checked for every booking." },
  { question: "How much does shipping from China to Australia cost?", answer: "There is no reliable permanent rate. Cost depends on volume, weight, container or LCL method, origin collection, route, season, destination charges and delivery scope. Request a shipment-specific quotation using final packed measurements." },
  { question: "Can TengYoda consolidate goods from multiple suppliers in China?", answer: "Yes. TengYoda can coordinate supplier deliveries to an agreed China warehouse, receiving references and consolidation before the outbound shipment. Final measurements are used to compare LCL, FCL or air options." },
  { question: "What should I check for Australian biosecurity?", answer: "Identify timber packaging, plant or animal material, soil contamination and used machinery before shipment. The Australian importer should confirm current import and biosecurity conditions with the relevant authorities or a qualified local broker. Cargo should be clean and supporting treatment documents prepared where required." },
];

const schemas = [
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteOrigin}/` },
    { "@type": "ListItem", position: 2, name: "Shipping from China to Australia", item: pageUrl },
  ] },
  { "@context": "https://schema.org", "@type": "Service", "@id": `${pageUrl}#service`, name: "Shipping from China to Australia", serviceType: "International freight forwarding from China to Australia", url: pageUrl, provider: { "@id": `${siteOrigin}/#organization`, name: "TengYoda Supply Chain Co., Ltd." }, areaServed: { "@type": "Country", name: "Australia" }, description, hasOfferCatalog: { "@type": "OfferCatalog", name: "China-to-Australia freight options", itemListElement: ["FCL sea freight", "LCL sea freight", "Air freight", "Supplier pickup", "Cargo consolidation", "Door delivery coordination"].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) } },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
];

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export default function AustraliaShippingPage() {
  const quoteUrl = enquiryLinks("shipping from China to Australia").whatsapp;
  const options = [
    ["FCL container shipping", "20-foot, 40-foot or high-cube container planning for larger orders, using the actual cargo and loading requirements."],
    ["LCL sea freight", "Consolidated ocean freight for smaller volumes, with receiving and origin handling coordinated in China."],
    ["Air freight", "Airport or agreed delivery options for urgent and time-sensitive cargo, subject to airline acceptance."],
    ["Multi-supplier consolidation", "Receive purchases from different Chinese suppliers, check references and combine them into one outbound plan."],
    ["Factory pickup in China", "Coordinate collection with supplier readiness, warehouse appointments and the international booking."],
    ["Destination coordination", "Define the requested port, clearance and delivery handoffs clearly, with local services confirmed before booking."],
  ];
  const guides = [
    ["Complete shipping guide", "shipping-from-china-to-australia-guide", "A practical overview of methods, documents and the import process."],
    ["Shipping cost guide", "china-australia-shipping-cost", "Understand the components behind a complete freight quotation."],
    ["Shipping time guide", "china-australia-shipping-time", "Plan around route, sailing, clearance and delivery stages."],
    ["FCL vs LCL", "fcl-vs-lcl-china-australia", "Compare container and consolidation options using your cargo volume."],
    ["40HQ cost breakdown", "40hq-container-shipping-cost-china-australia", "Review the cost scope for a full high-cube container."],
    ["Common importing mistakes", "importing-from-china-to-australia-mistakes", "Avoid preventable packing, documentation and destination-cost problems."],
  ];

  return <div className="site blog-site nigeria-page" id="top">
    {schemas.map((schema, index) => <JsonLd data={schema} key={index} />)}
    <SiteHeader active="services" />
    <main id="main-content" tabIndex={-1}>
      <section className="blog-hero service-hero editorial-hero nigeria-hero page-enter">
        <img className="editorial-photo" src={sitePath("/article-images/china-australia-40hq-route.webp")} alt="Container shipping route from China to Australia" width={1536} height={1024} fetchPriority="high" />
        <div className="editorial-shade" /><div className="wrap">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb"><a href={sitePath("/")}>Home</a><span>/</span><span>Shipping from China to Australia</span></nav>
          <span className="kicker light"><i />CHINA → AUSTRALIA FREIGHT</span><h1>Shipping from China to Australia</h1>
          <p>Plan FCL, LCL and air freight to Sydney, Melbourne, Brisbane, Fremantle or another suitable gateway—with China pickup, supplier consolidation and clear handoffs built around your cargo.</p>
          <div className="nigeria-hero-actions"><a className="button accent" href="#quote-checklist">Prepare a quote request<ArrowRight /></a><a className="button outline-light" href={quoteUrl} target="_blank" rel="noreferrer">WhatsApp Vinson<MessageCircle /></a></div>
        </div>
      </section>

      <section className="nigeria-facts" aria-label="Service summary"><div className="wrap">
        <div><small>ORIGIN</small><strong>Factories and major ports across China</strong></div><div><small>AUSTRALIA</small><strong>Sydney · Melbourne · Brisbane · Fremantle</strong></div><div><small>METHODS</small><strong>FCL · LCL · Air freight</strong></div><div><small>QUOTE BASIS</small><strong>Final cargo and agreed service scope</strong></div>
      </div></section>

      <section className="section nigeria-overview"><div className="wrap nigeria-content-grid">
        <aside className="nigeria-toc"><h2>On this page</h2><nav><a href="#options">Freight options</a><a href="#ports">Ports and routing</a><a href="#biosecurity">Biosecurity planning</a><a href="#process">Shipping process</a><a href="#guides">Australia guides</a><a href="#quote-checklist">Quote checklist</a><a href="#faq">Questions</a></nav></aside>
        <div className="nigeria-copy"><span className="kicker"><i />ROUTE OVERVIEW</span><h2>One China-side plan for your Australian shipment.</h2><p className="service-lead">TengYoda coordinates supplier pickup, warehouse receiving, consolidation, export preparation and international freight from China. The shipment method and Australian gateway are assessed using the packed volume, weight, cargo characteristics, ready date and final destination.</p><div className="nigeria-note"><strong>Compare the complete landed scope</strong><p>An ocean or air rate is only one part of the shipment. Confirm China origin charges, international freight, Australian destination charges, clearance responsibilities, biosecurity risk and delivery requirements before accepting a quotation.</p></div></div>
      </div></section>

      <section className="section nigeria-options" id="options"><div className="wrap"><div className="nigeria-heading"><span className="kicker"><i />FREIGHT OPTIONS</span><h2>FCL, LCL or air freight from China.</h2><p>We compare methods using the same packed shipment and delivery scope. Published rates and generic calculators cannot replace final measurements and a current routing.</p></div><div className="scope-grid nigeria-service-grid">{options.map(([name, copy], index) => <article key={name}><span>0{index + 1}</span><Check /><h3>{name}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="section nigeria-ports" id="ports"><div className="wrap nigeria-split"><div><span className="kicker"><i />PORTS & ROUTING</span><h2>Match the gateway to the final destination.</h2><p>Common Chinese loading ports include Shanghai, Ningbo, Shenzhen, Guangzhou/Nansha, Qingdao, Tianjin and Xiamen. Supplier location, cargo availability and carrier service help determine the origin.</p><p>Sydney, Melbourne, Brisbane and Fremantle are common Australian container gateways. The nearest port is not automatically the lowest total-cost option: destination handling, delivery distance, service frequency and final address all matter.</p></div><figure><img src={sitePath("/images/sea-freight.webp")} alt="Container vessel illustrating sea freight from China to Australia" width={1672} height={941} loading="lazy" /><figcaption>Illustrative logistics image. Actual port pair, carrier and schedule are confirmed for each booking.</figcaption></figure></div></section>

      <section className="section nigeria-project" id="biosecurity"><div className="wrap nigeria-split nigeria-split-reverse"><div><span className="kicker light"><i />AUSTRALIA IMPORT PREPARATION</span><h2>Put biosecurity into the shipping plan early.</h2><p>Australian import and biosecurity treatment depends on the commodity, packing and cargo condition. The importer should verify current requirements before collection—not after the container arrives.</p><ul><li><Check />Declare timber pallets, crates and dunnage accurately</li><li><Check />Check treatment and marking requirements before packing</li><li><Check />Clean used machinery and remove soil or organic contamination</li><li><Check />Identify plant, animal, food or other regulated material</li><li><Check />Align commercial documents with the actual cargo</li></ul></div><div className="nigeria-project-card"><small>PRE-SHIPMENT REVIEW</small><strong>4</strong><span>details to confirm</span><dl><div><dt>Commodity</dt><dd>What is it?</dd></div><div><dt>Packing</dt><dd>Any timber?</dd></div><div><dt>Condition</dt><dd>New or used?</dd></div><div><dt>Importer check</dt><dd>Requirements confirmed?</dd></div></dl></div></div></section>

      <section className="section nigeria-process" id="process"><div className="wrap"><div className="nigeria-heading"><span className="kicker"><i />HOW IT WORKS</span><h2>From supplier readiness to Australian handoff.</h2></div><ol>{[
        ["Share the shipment", "Send the product, suppliers, packages, packed sizes, weight, ready dates and Australian destination."],
        ["Compare methods", "Review FCL, LCL or air freight using the complete cargo and required delivery scope."],
        ["Confirm requirements", "Check packing, export documents and known Australian import or biosecurity considerations before dispatch."],
        ["Coordinate in China", "Arrange agreed pickup, receiving, consolidation, export handling and carrier handoff."],
        ["Prepare arrival", "Share documents and arrival information for clearance, release, delivery and container return planning."],
      ].map(([heading, copy], index) => <li key={heading}><span>0{index + 1}</span><div><h3>{heading}</h3><p>{copy}</p></div></li>)}</ol></div></section>

      <section className="section nigeria-options" id="guides"><div className="wrap"><div className="nigeria-heading"><span className="kicker"><i />AUSTRALIA SHIPPING LIBRARY</span><h2>Detailed guides for planning the shipment.</h2></div><div className="related-service-links">{guides.map(([name, slug, copy]) => <a href={sitePath(`/blog/${slug}`)} key={slug}><span><strong>{name}</strong><small style={{display:"block", marginTop:8, color:"#68747b", lineHeight:1.55}}>{copy}</small></span><ArrowRight /></a>)}</div></div></section>

      <section className="section nigeria-quote" id="quote-checklist"><div className="wrap nigeria-content-grid"><div><span className="kicker"><i />BEFORE YOU ENQUIRE</span><h2>Send the details needed for a useful quote.</h2><p>Final packed information allows FCL, LCL and air options to be compared on a consistent basis.</p><EnquiryActions topic="shipping from China to Australia" /></div><ul>{["Product description and HS code if known", "Supplier addresses and cargo-ready dates", "Package count, final dimensions and gross weight", "Australian port, postcode or delivery address", "Packing method, including timber materials", "Photos and any special handling requirements", "Requested Incoterm and service scope", "Batteries, liquids, chemicals or regulated characteristics"].map(item => <li key={item}><Check />{item}</li>)}</ul></div></section>

      <section className="section nigeria-faq" id="faq"><div className="wrap nigeria-content-grid"><div><span className="kicker"><i />FAQ</span><h2>China-to-Australia shipping questions.</h2><p>Rates, schedules and import requirements change, so the answers focus on decisions that remain useful.</p></div><div>{faqs.map(item => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></div></section>

      <section className="blog-cta"><div className="wrap"><div><span className="kicker light"><i />A DIRECT CONVERSATION WITH VINSON</span><h2>Planning a shipment from China to Australia?</h2><p>Share the suppliers, cargo, packed measurements and Australian destination for a shipment-specific assessment.</p></div><EnquiryActions topic="shipping from China to Australia" /></div></section>
    </main>
    <SiteFooter /><a className="float-wa" href={quoteUrl} target="_blank" rel="noreferrer" aria-label="Contact Vinson on WhatsApp"><MessageCircle /></a>
  </div>;
}
