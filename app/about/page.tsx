import type { Metadata } from "next";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

import { CompanyNetwork } from "@/components/company-network";
import { EnquiryActions } from "@/components/enquiry-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, enquiryLinks } from "@/lib/company";
import { pageMetadata, siteOrigin } from "@/lib/seo";
import { sitePath } from "@/lib/site-path";

export const metadata: Metadata = pageMetadata(
  "About TengYoda | China Freight Forwarder & NVOCC",
  "Learn about TengYoda Supply Chain, a China-headquartered freight forwarder with 10+ years of experience, NVOCC qualification and a team of 50+ logistics professionals.",
  "/about",
);

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TengYoda Supply Chain Co., Ltd.",
  alternateName: company.name,
  url: siteOrigin,
  description: "China-headquartered international freight forwarder coordinating ocean, air and road transport, warehousing and tailored logistics solutions.",
  email: company.email,
  telephone: company.phone,
  sameAs: [company.tiktok, company.instagram],
  areaServed: ["Asia", "Middle East", "Europe", "Africa", "North America", "South America", "Australia"],
  knowsAbout: ["Sea freight", "Air freight", "Road transport", "Cargo consolidation", "Warehousing", "Breakbulk cargo", "Project cargo"],
};

export default function AboutPage() {
  const enquiry = enquiryLinks("TengYoda freight forwarding services");

  return <div className="site blog-site" id="top">
    <SiteHeader active="about" />
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <section className="blog-hero service-hero editorial-hero page-enter">
        <img className="editorial-photo" src={sitePath("/images/about-tengyoda-team.webp")} alt="Logistics professionals coordinating international freight operations in China" width={1448} height={1086} fetchPriority="high" />
        <div className="editorial-shade" />
        <div className="wrap">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb"><a href={sitePath("/")}>Home</a><span>/</span><span>About Us</span></nav>
          <span className="kicker light"><i />ABOUT TENGYODA SUPPLY CHAIN</span>
          <h1>China-based freight forwarding, connected to global markets.</h1>
          <p>More than a decade of international freight experience, NVOCC qualification and one China-side team coordinating your shipment.</p>
          <a className="button accent service-hero-button" href="#company-profile">Our company profile<ArrowRight /></a>
        </div>
      </section>

      <section className="intro section" id="company-profile">
        <div className="wrap intro-grid">
          <figure className="intro-visual"><img src={sitePath("/images/about-tengyoda-team.webp")} alt="Freight operations team reviewing a China-origin shipment" width={1448} height={1086} loading="lazy" /><figcaption>OCEAN · AIR · ROAD · WAREHOUSING</figcaption></figure>
          <div className="intro-copy">
            <span className="kicker"><i />COMPANY PROFILE</span>
            <h2>International freight coordination from China.</h2>
            <p>TengYoda Supply Chain Co., Ltd. is a China-headquartered international freight forwarder with more than a decade of industry experience and NVOCC qualification. Through long-term, stable relationships with multiple ocean carriers, we provide timely sailing information and dependable transport options designed to help importers select cost-effective shipping plans.</p>
            <p>Our service network covers the Middle East, Red Sea, India and Pakistan, Europe, the Mediterranean, Africa, the east and west coasts of South America, North America, Australia and Southeast Asia. We coordinate end-to-end container import and export services, including booking, document exchange, customs declaration, customs transit, inspection coordination, container loading and unloading, domestic trucking, warehousing and bonded-logistics support. We also arrange breakbulk and general cargo transport, together with coastal and inland-waterway services.</p>
            <a className="text-link" href={sitePath("/services")}>Explore our logistics services<ArrowRight /></a>
          </div>
        </div>
      </section>

      <section className="standards section">
        <div className="wrap standards-grid">
          <div className="standards-intro"><span className="kicker"><i />ONE CHINA-SIDE TEAM</span><h2>Practical logistics support for overseas importers.</h2><p>Supported by a team of more than 50 logistics professionals, TengYoda coordinates ocean, air and road transport with warehousing and tailored logistics solutions. Our goal is to give overseas importers clear shipping information, coordinated execution and a practical plan for moving cargo from China.</p><a className="text-link" href={sitePath("/services/sea-freight")}>Review our sea freight service<ArrowRight /></a></div>
          <div className="standard-list">
            <article><Check /><span><strong>More than 10 years of experience</strong><small>Industry knowledge applied to cargo preparation, routing and shipment coordination.</small></span></article>
            <article><Check /><span><strong>NVOCC-qualified operator</strong><small>International freight forwarding supported by established ocean-carrier relationships.</small></span></article>
            <article><Check /><span><strong>More than 50 logistics professionals</strong><small>Ocean, air, road, warehouse and tailored logistics solutions coordinated as one plan.</small></span></article>
          </div>
        </div>
      </section>

      <CompanyNetwork />

      <section className="blog-cta"><div className="wrap"><div><span className="kicker light"><i />FROM CARGO DETAILS TO A SHIPPING PLAN</span><h2>Tell us what you are importing.</h2><p>Send the product, package count, packed dimensions, gross weight, pickup city, destination and cargo-ready date.</p></div><EnquiryActions topic="TengYoda freight forwarding services" /></div></section>
    </main>
    <SiteFooter />
    <a className="float-wa" href={enquiry.whatsapp} target="_blank" rel="noreferrer" aria-label="Contact TengYoda on WhatsApp"><MessageCircle /></a>
  </div>;
}
