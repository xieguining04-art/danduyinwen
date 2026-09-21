import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { countryRoutes, existingCountryRoutes } from "@/lib/country-routes";
import { pageMetadata } from "@/lib/seo";
import { sitePath } from "@/lib/site-path";

export const metadata: Metadata = pageMetadata("Shipping Routes from China | Country Freight Services", "Explore TengYoda country freight pages for sea, air, container, consolidation, heavy machinery and project cargo shipping from China.", "/shipping-routes");

export default function ShippingRoutesPage() {
  const routes = [...existingCountryRoutes, ...countryRoutes.map(x => ({ route: x.route, name: x.shortName, ports: x.ports.join(" · ") }))];
  return <div className="site blog-site" id="top"><SiteHeader active="services" /><main id="main-content" tabIndex={-1}><section className="blog-hero editorial-hero page-enter"><img className="editorial-photo" src={sitePath("/images/sea-freight.webp")} alt="Global shipping routes from China" width={1672} height={941} fetchPriority="high" /><div className="editorial-shade" /><div className="wrap"><nav className="blog-breadcrumb"><a href={sitePath("/")}>Home</a><span>/</span><span>Country shipping routes</span></nav><span className="kicker light"><i />CHINA ORIGIN · GLOBAL DESTINATIONS</span><h1>Country shipping routes from China.</h1><p>Explore destination-specific freight planning for containers, consolidation, air freight, machinery and project cargo.</p></div></section><section className="service-directory section"><div className="wrap service-directory-grid">{routes.map((item,index)=><article className="directory-card" key={item.route}><div><span className="kicker"><i />ROUTE {String(index+1).padStart(2,"0")}</span><h2><a href={sitePath(`/${item.route}`)}>China → {item.name}</a></h2><p>{item.ports}</p><a className="text-link" href={sitePath(`/${item.route}`)}>View route<ArrowRight /></a></div></article>)}</div></section></main><SiteFooter /></div>;
}
