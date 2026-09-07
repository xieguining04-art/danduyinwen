import { ArrowUp, Mail, MessageCircle } from "lucide-react";
import { Brand } from "@/components/site-header";
import { AnalyticsPreferenceButton } from "@/components/site-analytics";
import { company, enquiryLinks } from "@/lib/company";
import { supportingServices, specialistServices, serviceLabel } from "@/lib/services";
import { sitePath } from "@/lib/site-path";

export function SiteFooter() {
  const enquiry = enquiryLinks();
  return <footer className="footer shared-footer"><div className="wrap footer-grid">
    <div className="footer-brand"><Brand /><p>Supported by a team of more than 50 logistics professionals, TengYoda coordinates ocean, air and road transport with warehousing and tailored logistics solutions. Our goal is to give overseas importers clear shipping information, coordinated execution and a practical plan for moving cargo from China.</p><div><a href={company.tiktok} target="_blank" rel="noreferrer">TikTok @vinson300</a><a href={company.instagram} target="_blank" rel="noreferrer">Instagram @vinson08251</a></div></div>
    <div className="footer-services"><h3>Our services</h3>{supportingServices.map(service => <a href={sitePath(`/services/${service.slug}`)} key={service.slug}>{serviceLabel(service)}</a>)}</div>
    <div><h3>More from TengYoda</h3>{specialistServices.map(service => <a href={sitePath(`/services/${service.slug}`)} key={service.slug}>{serviceLabel(service)}</a>)}<a href={sitePath("/services")}>All services</a><a href={sitePath("/blog")}>Logistics blog</a><a href={sitePath("/#network")}>Warehouses & offices</a></div>
    <div className="footer-contact"><h3>Talk to Vinson</h3><a href={enquiry.whatsapp} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />{company.phone}</a><a href={enquiry.email}><Mail aria-hidden="true" />{company.email}</a><a href={`mailto:${company.alternateEmail}`}>{company.alternateEmail}</a><a href={company.telephone}>Call: {company.phone}</a><a href={sitePath("/#network")}>Foshan · Shenzhen · Qingdao · Yiwu</a></div>
  </div><div className="wrap footer-bottom"><span>© 2026 TengYoda Logistics.</span><span>Images illustrate logistics scenes, not company facilities.</span><AnalyticsPreferenceButton /><a href="#top">Back to top<ArrowUp aria-hidden="true" /></a></div></footer>;
}
