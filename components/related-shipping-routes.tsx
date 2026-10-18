import { ArrowRight } from "lucide-react";
import { sitePath } from "@/lib/site-path";

import { countryRoutes, existingCountryRoutes } from "@/lib/country-routes";

const routes = [...existingCountryRoutes.map(r => [r.route, r.name]), ...countryRoutes.map(r => [r.route, r.shortName])];

export function RelatedShippingRoutes({ currentRoute }: { currentRoute: string }) {
  const currentIndex = Math.max(0, routes.findIndex(([route]) => route === currentRoute));
  const related = Array.from({ length: 4 }, (_, offset) => routes[(currentIndex + offset + 1) % routes.length]);

  return <section className="section nigeria-options" aria-labelledby="related-routes-heading">
    <div className="wrap">
      <div className="nigeria-heading">
        <span className="kicker"><i />RELATED SHIPPING ROUTES</span>
        <h2 id="related-routes-heading">Explore more routes from China.</h2>
        <p>Compare destination gateways, freight methods and shipment-planning requirements for other markets.</p>
      </div>
      <div className="related-service-links">
        {related.map(([route, country]) => <a href={sitePath(`/${route}`)} key={route}>
          <span>Shipping from China to <strong>{country}</strong></span><ArrowRight aria-hidden="true" />
        </a>)}
      </div>
    </div>
  </section>;
}
