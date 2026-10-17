import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { CompanyNetwork } from "@/components/company-network";
import { EnquiryActions } from "@/components/enquiry-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, enquiryLinks } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";
import { sitePath } from "@/lib/site-path";

export const metadata: Metadata = pageMetadata(
  "Contact TengYoda Logistics | China Freight Forwarder",
  "Contact TengYoda Logistics for China-origin sea, air, road, warehouse and cargo consolidation enquiries.",
  "/contact",
);

export default function ContactPage() {
  const enquiry = enquiryLinks("a China-origin logistics shipment");

  return <div className="site blog-site" id="top">
    <SiteHeader />
    <main id="main-content" tabIndex={-1}>
      <section className="blog-hero service-hero editorial-hero page-enter">
        <img className="editorial-photo" src={sitePath("/images/warehouse-operations.webp")} alt="China logistics warehouse operations" width={1600} height={1067} fetchPriority="high" />
        <div className="editorial-shade" />
        <div className="wrap">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb"><a href={sitePath("/")}>Home</a><span>/</span><span>Contact Us</span></nav>
          <span className="kicker light"><i />CONTACT TENGYODA LOGISTICS</span>
          <h1>Plan your China-origin shipment with one direct contact.</h1>
          <p>Share your cargo details, pickup location, destination and required service with Vinson.</p>
          <a className="button accent service-hero-button" href={enquiry.whatsapp} target="_blank" rel="noreferrer">WhatsApp Vinson<MessageCircle /></a>
        </div>
      </section>

      <section className="standards section">
        <div className="wrap standards-grid">
          <div className="standards-intro">
            <span className="kicker"><i />COMPANY & CONTACT</span>
            <h2>TengYoda Supply Chain Co., Ltd.</h2>
            <p>China-headquartered international freight forwarding backed by more than 10 years of industry experience, NVOCC qualification and a team of more than 50 logistics professionals.</p>
            <EnquiryActions topic="a China-origin logistics shipment" />
          </div>
          <div className="standard-list">
            <article><MessageCircle /><span><strong>WhatsApp</strong><small><a href={enquiry.whatsapp} target="_blank" rel="noreferrer">{company.phone}</a></small></span></article>
            <article><Mail /><span><strong>Email</strong><small><a href={enquiry.email}>{company.email}</a></small></span></article>
            <article><Phone /><span><strong>Telephone</strong><small><a href={company.telephone}>{company.phone}</a></small></span></article>
            <article><MapPin /><span><strong>China network</strong><small>Warehouses in Qingdao, Yiwu and Shenzhen. Offices in Foshan and Shenzhen.</small></span></article>
          </div>
        </div>
      </section>

      <CompanyNetwork />

      <section className="blog-cta"><div className="wrap"><div><span className="kicker light"><i />BEFORE YOU ENQUIRE</span><h2>Send the details needed for a useful shipping plan.</h2><p>Product name, package count, packed dimensions, gross weight, pickup city, destination and cargo-ready date.</p></div><EnquiryActions topic="a China-origin logistics shipment" /></div></section>
    </main>
    <SiteFooter />
    <a className="float-wa" href={enquiry.whatsapp} target="_blank" rel="noreferrer" aria-label="Contact TengYoda on WhatsApp"><MessageCircle /></a>
  </div>;
}
