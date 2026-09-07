import type { Metadata } from "next";
import { ServiceView } from "@/components/service-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Global Sea Freight & China Logistics Services | TengYoda", "Explore FCL and LCL sea freight from China across the Middle East, Europe, Africa, the Americas, Australia and Southeast Asia, with origin logistics support.", "/services");
export default function ServicesPage() { return <ServiceView />; }
