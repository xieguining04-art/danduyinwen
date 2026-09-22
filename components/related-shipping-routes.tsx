import { ArrowRight } from "lucide-react";
import { sitePath } from "@/lib/site-path";

const routes = [
  ["shipping-from-china-to-australia", "Australia"],
  ["shipping-from-china-to-nigeria", "Nigeria"],
  ["shipping-from-china-to-kenya", "Kenya"],
  ["shipping-from-china-to-usa", "United States"],
  ["shipping-from-china-to-mexico", "Mexico"],
  ["shipping-from-china-to-malaysia", "Malaysia"],
  ["shipping-from-china-to-ghana", "Ghana"],
  ["shipping-from-china-to-mozambique", "Mozambique"],
  ["shipping-from-china-to-uae", "United Arab Emirates"],
  ["shipping-from-china-to-saudi-arabia", "Saudi Arabia"],
] as const;

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
