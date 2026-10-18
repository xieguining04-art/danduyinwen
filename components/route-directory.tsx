"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { countryRoutes, existingCountryRoutes } from "@/lib/country-routes";
import { routeRegion } from "@/lib/route-regions";
import { company } from "@/lib/company";
import { sitePath } from "@/lib/site-path";
import styles from "./route-directory.module.css";

const routes = [
  ...existingCountryRoutes.map(r => ({ ...r, focus: "Supplier pickup · Sea freight · Delivery planning" })),
  ...countryRoutes.map(r => ({ route: r.route, name: r.shortName, ports: r.ports.join(" · "), focus: r.focus.join(" · ") })),
].map(r => ({ ...r, region: routeRegion(r.route) }));
const filters = ["All destinations", "Oceania", "Americas", "Middle East", "Africa", "South Asia", "Southeast Asia", "Europe"];
const fields = [
  ["cargo", "Product / cargo", "e.g. furniture, spare parts or machinery"],
  ["destination", "Destination country and postcode", "Include the final delivery city"],
  ["pickup", "China pickup city / suppliers", "One supplier or several locations"],
  ["packages", "Packages and packed dimensions", "Quantity and L × W × H with units"],
  ["weight", "Total gross weight", "Include packaging, in kg or tonnes"],
  ["date", "Cargo-ready date", "Actual date or estimated readiness"],
] as const;

export function RouteDirectory() {
  const [region, setRegion] = useState("All destinations");
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState<Record<string, string>>({});
  const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const query = normalize(search.trim());
  const shown = routes.filter(r => (region === "All destinations" || r.region === region) && normalize(`${r.name} ${r.ports} ${r.region}`).includes(query));
  const message = `Hello Vinson, I would like a China freight quote.\n\n${fields.map(([id,label]) => `${label}: ${details[id] || "To confirm"}`).join("\n")}\nSpecial cargo / requested scope: ${details.notes || "To confirm"}`;
  return <>
    <section className={`section ${styles.directory}`} id="destinations"><div className="wrap">
      <span className="kicker"><i />FIND YOUR DESTINATION</span><h2>Choose a country. Plan the complete shipment.</h2>
      <p>Explore {routes.length} country guides, then compare freight with the pickup and destination services you actually need.</p>
      <label className={styles.search} htmlFor="route-search">Search country or port<input id="route-search" type="search" placeholder="e.g. Pakistan, New Zealand, Mombasa" value={search} onChange={e => setSearch(e.target.value)} /></label>
      <div className={styles.filters} role="group" aria-label="Filter destinations by region">{filters.map(f => <button type="button" key={f} aria-pressed={region === f} onClick={() => setRegion(f)}>{f}</button>)}</div>
      <p className={styles.count} aria-live="polite">{shown.length} destinations · {region}{search.trim() && ` · Matching “${search.trim()}”`}</p>
      {shown.length === 0 && <div className={styles.note}><p>No matching destination in this selection.</p><button type="button" onClick={() => { setSearch(""); setRegion("All destinations"); }}>Clear search and filters</button><p><a href="#route-enquiry">Ask about another destination</a></p></div>}
      <div className={styles.grid}>{shown.map(r => <article className={styles.card} key={r.route}>
        <span className="kicker"><i />{r.region}</span><h3><a href={sitePath(`/${r.route}`)}>China → {r.name}</a></h3>
        <p>{r.ports}</p><p className={styles.focus}>{r.focus}</p>
        <div className={styles.actions}><a className="text-link" href={sitePath(`/${r.route}`)}>View route<ArrowRight aria-hidden="true" /></a><a href={`${company.whatsapp}?text=${encodeURIComponent(`Hello Vinson, I would like a quote for shipping from China to ${r.name}.`)}`} target="_blank" rel="noreferrer">Ask for a quote</a></div>
      </article>)}</div>
      <p className={styles.note}>For landlocked countries, listed ports are third-country transit gateways. Ports are planning references, not promises of a direct sailing or guaranteed cargo acceptance. Current routing, destination handling and delivery availability are confirmed for each shipment.</p>
    </div></section>
    <section className={`section ${styles.enquiry}`} id="route-enquiry"><div className={`wrap ${styles.enquiryGrid}`}>
      <div><span className="kicker"><i />YOUR NEXT SHIPMENT</span><h2>Destination not listed? Ask us about your shipment.</h2><p>Share the cargo and final address. TengYoda can assess China pickup, supplier consolidation, international freight and the requested destination handoff.</p><p>For batteries, liquids, chemicals, used machinery or oversized pieces, include those details before arranging supplier delivery.</p><p>For machinery, add the transport dimensions of each piece, operating condition and site unloading requirements.</p></div>
      <form className={styles.form} onSubmit={e => e.preventDefault()}>
        {fields.map(([id,label,placeholder]) => <label key={id} htmlFor={`route-${id}`}>{label}<input id={`route-${id}`} name={id} value={details[id] || ""} onChange={e => setDetails({ ...details, [id]: e.target.value })} placeholder={placeholder} /></label>)}
        <label className={styles.full} htmlFor="route-notes">Special cargo and requested service<textarea id="route-notes" name="notes" rows={3} placeholder="Batteries, liquids, chemicals, oversized cargo; port or door delivery; unloading needs" value={details.notes || ""} onChange={e => setDetails({ ...details, notes: e.target.value })} /></label>
        <p className={styles.full}>These details prepare a message in your own app; nothing is sent automatically. Attach your packing list and photos in WhatsApp or email after opening the message.</p>
        <div className={`${styles.full} ${styles.send}`}><a className="button accent" href={`${company.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">Prepare WhatsApp enquiry<ArrowRight aria-hidden="true" /></a><a className="text-link" href={`mailto:${company.email}?subject=${encodeURIComponent("China freight quote enquiry")}&body=${encodeURIComponent(message)}`}>Prepare email<ArrowRight aria-hidden="true" /></a></div>
      </form>
    </div></section>
  </>;
}
