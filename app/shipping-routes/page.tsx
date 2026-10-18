import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RouteDirectory } from "@/components/route-directory";
import { countryRoutes, existingCountryRoutes } from "@/lib/country-routes";
import { pageMetadata, siteOrigin } from "@/lib/seo";
import { sitePath } from "@/lib/site-path";

export const metadata: Metadata = pageMetadata("Shipping Routes from China | Country Freight Services", "Find China shipping routes by region. Compare supplier pickup, consolidation, sea freight, machinery transport and destination delivery planning with TengYoda.", "/shipping-routes");

export default function ShippingRoutesPage() {
  const routes = [...existingCountryRoutes.map(r => ({ route: r.route, name: r.name })), ...countryRoutes.map(r => ({ route: r.route, name: r.shortName }))];
  const schema = { "@context": "https://schema.org", "@type": "ItemList", name: "Shipping routes from China", itemListElement: routes.map((r,i) => ({ "@type": "ListItem", position: i+1, name: `Shipping from China to ${r.name}`, url: `${siteOrigin}/${r.route}/` })) };
  return <div className="site blog-site" id="top"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><SiteHeader active="services" /><main id="main-content" tabIndex={-1}>
    <section className="blog-hero editorial-hero page-enter"><img className="editorial-photo" src={sitePath("/images/sea-freight.webp")} alt="Container shipping and international freight planning" width={1672} height={941} fetchPriority="high" /><div className="editorial-shade" /><div className="wrap"><nav className="blog-breadcrumb"><a href={sitePath("/")}>Home</a><span>/</span><span>Country shipping routes</span></nav><span className="kicker light"><i />CHINA ORIGIN · GLOBAL DESTINATIONS</span><h1>Shipping routes from China to your destination.</h1><p>One China-side contact for supplier pickup, warehouse consolidation, international freight and your agreed destination handoff. Explore a country guide or tell us where your cargo needs to go.</p><div className="nigeria-hero-actions"><a href="#destinations" className="button accent">Explore destinations<ArrowRight /></a><a href="#route-enquiry" className="button outline-light">Plan my shipment<ArrowRight /></a></div></div></section>
    <RouteDirectory />
  </main><SiteFooter /></div>;
}
