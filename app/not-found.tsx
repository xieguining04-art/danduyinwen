import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { sitePath } from "@/lib/site-path";

export const metadata: Metadata = {
  title: "Page Not Found | TengYoda Logistics",
  description: "The requested TengYoda Logistics page could not be found.",
  alternates: { canonical: null },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="site" id="top">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="blog-hero service-hero editorial-hero page-enter">
          <img
            className="editorial-photo"
            src={sitePath("/images/warehouse-operations.webp")}
            alt="Cargo prepared in a logistics warehouse"
            width={1672}
            height={941}
          />
          <div className="editorial-shade" />
          <div className="wrap">
            <span className="kicker light"><i />404 · PAGE NOT FOUND</span>
            <h1>This route does not lead to an active page.</h1>
            <p>The address may have changed. Return to the homepage or browse our China freight and sourcing services.</p>
            <a className="button accent service-hero-button" href={sitePath("/")}>Return home<ArrowRight /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
