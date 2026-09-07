import { Building2, Warehouse } from "lucide-react";
import { companyLocations } from "@/lib/company";
import { Reveal } from "@/components/motion";

export function CompanyNetwork() {
  return <section className="network section" id="network"><div className="wrap">
    <div className="section-head dark-head"><div><span className="kicker light"><i />CHINA NETWORK</span><h2>Connected to where your cargo begins.</h2></div><p>Warehouses in Qingdao, Yiwu and Shenzhen. Offices in Foshan and Shenzhen.</p></div>
    <div className="location-grid">{companyLocations.map((location, index) => <Reveal key={location.id} delay={(index % 3) * 60}><article id={location.id} className={`location-card location-${location.type}`}><div className="location-card-top"><span>0{index + 1} / {location.type === "warehouse" ? "WAREHOUSE" : "OFFICE"}</span>{location.type === "warehouse" ? <Warehouse aria-hidden="true" /> : <Building2 aria-hidden="true" />}</div><h3>{location.name}</h3><address>{location.address}</address></article></Reveal>)}</div>
    <p className="receiving-note">Before sending cargo, contact Vinson to confirm receiving arrangements, shipping marks and order references.</p>
  </div></section>;
}
