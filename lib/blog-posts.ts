import { markdownPosts } from "./markdown-posts";

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; poster?: string; caption?: string }
  | { type: "table"; headers: string[]; rows: string[][] };
export type BlogSection = { id: string; heading: string; paragraphs: string[]; bullets?: string[]; blocks?: BlogBlock[] };
export type BlogContent = { category: string; title: string; summary: string; introduction: string; sections: BlogSection[] };
export type BlogPost = { slug: string; publishedAt: string; updatedAt?: string; author: string; image: { src: string; alt: string }; content: BlogContent };

// Add a post here to update the blog directory, homepage and article routes together.
const builtInBlogPosts: BlogPost[] = [
  {
    slug: "buying-from-china-checklist", publishedAt: "2026-08-30", author: "TengYoda Logistics",
    image: { src: "/images/procurement-warehouse.webp", alt: "Checking supplier orders and packing in a China export warehouse" },
    content: {
        category: "IMPORT GUIDE",
        title: "Buying from China: a checklist for first-time importers",
        summary: "Supplier terms, product compliance, packing, payment milestones and shipment planning.",
        introduction: "If you are buying from China for the first time, the purchase price is only one part of the import plan. A usable logistics plan starts before the supplier finishes production. Confirming the product, responsibilities and delivery details early gives your supplier, warehouse and freight forwarder the same instructions to work from.",
        sections: [
          { id: "supplier", heading: "1. Confirm the supplier and order scope", paragraphs: ["Check the legal business name, the person handling your order and the beneficiary details shown on the commercial documents. Independently verify unexpected changes to payment instructions through a previously confirmed contact channel.", "Record the agreed model, materials, quantity, finish and included accessories in writing. Samples and inspection requirements should be agreed before production, rather than becoming a discussion when the goods are already packed."] },
          { id: "requirements", heading: "2. Review destination requirements before production", paragraphs: ["Describe what the product is, what it is made from and how it will be used. Share that information with your destination customs broker or relevant specialist before committing to specifications or packaging.", "Do not assume that a product accepted for sale in China is automatically ready for your destination market. The applicable product standards, documents and import conditions need to be checked for your particular goods and destination."] },
          { id: "packing", heading: "3. Ask for packed dimensions, not just product dimensions", paragraphs: ["Freight planning uses the shipment as it will actually travel. Ask for the number of cartons, pallets or crates, external dimensions of each package and gross weight. Include photos and note whether packages can be stacked.", "Tell the supplier if cargo will pass through a consolidation warehouse. Agree on labels and an order reference so incoming goods can be matched to the correct buyer."], bullets: ["Cargo description and order reference", "Package count, dimensions and gross weight", "Stackability and handling restrictions", "Photos of goods and proposed packaging"] },
          { id: "handoffs", heading: "4. Agree on timing and handoffs", paragraphs: ["Distinguish the production completion date from the date goods are ready for collection. Packing, inspection and paperwork may still need to be completed. Identify who books domestic transport and who pays for loading and warehouse delivery.", "When several suppliers are involved, ask each for a realistic ready date. Decide whether to wait for all orders or split the shipment; either choice can affect storage, handling and transport costs."] },
          { id: "quote", heading: "5. Review the complete quotation scope", paragraphs: ["Request a written breakdown identifying included services and exclusions. Origin pickup, warehouse handling, international freight, destination charges and final delivery are different stages; a low freight-only rate does not describe the total journey.", "Before confirming a booking, reconcile the quotation against the final packing list, pickup address and delivery conditions. Send TengYoda your supplier city, product details and destination to start an origin-side review."] },
        ],
      },
  },
  {
    slug: "express-air-lcl-fcl-guide", publishedAt: "2026-08-30", author: "TengYoda Logistics",
    image: { src: "/images/air-freight.webp", alt: "Palletised cargo being loaded into a freight aircraft" },
    content: {
        category: "FREIGHT PLANNING", title: "Shipping from China: express, air freight, LCL or FCL?",
        summary: "Compare urgency, volume, cargo value and destination cost before making a booking.",
        introduction: "Choosing a shipping method from China means comparing express, air freight, LCL and FCL against the actual order. There is no universal shipment-size threshold for every importer. Compare complete quotations for the same cargo and delivery scope, then assess timing, handling, acceptance and the cost of waiting for the goods.",
        sections: [
          { id: "express", heading: "1. Express for smaller, urgent consignments", paragraphs: ["International express can suit samples, documents and smaller orders. Before selecting a service, confirm the cargo type, packed dimensions, destination postcode and whether the shipment has batteries, liquids or other special characteristics.", "A parcel rate needs to be checked against the applicable chargeable weight and any handling or delivery surcharges. Ask what the quote includes at destination rather than assuming the courier price covers every import cost."] },
          { id: "air", heading: "2. Air freight for time-sensitive cargo", paragraphs: ["Air freight can be considered when the shipment is urgent or the commercial cost of a delay is high. Compare an airport-only quotation with the cost of the remaining clearance, handling and delivery stages.", "Flight routing is only part of the schedule. Cargo readiness, export preparation, available capacity and destination release also affect when the goods can actually reach the buyer."] },
          { id: "lcl", heading: "3. LCL when you do not need a whole container", paragraphs: ["Less-than-container-load shipping combines multiple consignments in one container. It can suit orders that do not justify booking a dedicated container, but consolidation and unpacking add handling stages.", "Check origin warehouse charges and destination deconsolidation fees, alongside the ocean rate. Packaging needs to suit those additional handoffs. Compare the full delivered scope with alternatives rather than using a universal cubic-metre threshold."] },
          { id: "fcl", heading: "4. FCL for a dedicated container plan", paragraphs: ["Full-container-load booking provides a dedicated container for the booked shipment; it does not require filling every available space. Cargo dimensions, weight distribution and loading access all matter when choosing equipment.", "Ask about loading arrangements at origin and unloading arrangements at destination. Confirm whether the receiver can handle the container and what appointments, equipment or onward transport may be needed."] },
          { id: "compare", heading: "5. Compare one cargo profile across all options", paragraphs: ["Give your forwarder the same final packing list, origin, destination and required arrival date for each comparison. State which date is a business deadline and which is only a preference.", "Sometimes a split plan works best: send a small urgent batch separately while the balance travels by sea. Assess the extra shipment and handling costs before choosing that approach."], bullets: ["Use identical cargo and delivery information", "Compare included charges and exclusions", "Review cargo acceptance and packing requirements", "Allow for the whole journey, not just the main transport leg"] },
        ],
      },
  },
  {
    slug: "avoid-destination-shipping-charges", publishedAt: "2026-08-30", author: "TengYoda Logistics",
    image: { src: "/images/sea-freight.webp", alt: "Container vessel and terminal handling at a destination port" },
    content: {
        category: "RISK CONTROL", title: "Destination shipping charges: five checks before arrival",
        summary: "Accurate documents, suitable packing and early booking protect the shipment plan.",
        introduction: "Destination shipping charges need to be reviewed alongside the international freight quote. Not every destination charge is avoidable, and a good plan cannot rule out inspections or disruption. But incomplete instructions and missed handoffs can add cost unnecessarily. These five checks help an importer prepare before the cargo arrives.",
        sections: [
          { id: "scope", heading: "1. Separate included charges from exclusions", paragraphs: ["Ask for a destination cost breakdown in writing. Identify which party arranges clearance, handles terminal or warehouse charges and books final delivery. Make sure every quote is based on the same delivery scope.", "Ask how exceptional work is approved and billed. Inspections, additional handling or other unplanned services should not be confused with charges already included in the quotation."] },
          { id: "documents", heading: "2. Check documents while there is time to correct them", paragraphs: ["Share the commercial invoice, packing list and shipment details with the appointed destination representative early. Names, addresses, descriptions, quantities and weights should describe the same order consistently.", "Ask which additional documents are required for the specific goods. Correcting discrepancies before arrival can be easier than resolving them while cargo is waiting for release."] },
          { id: "release", heading: "3. Assign responsibility for release and payment", paragraphs: ["Confirm who will receive carrier notices, invoices and release instructions. Agree how those messages will be forwarded and who is authorised to handle each action.", "Cargo availability, carrier release and customs release are separate items to confirm. Ask the local representative which outstanding steps remain before pickup can actually be booked."] },
          { id: "collection", heading: "4. Confirm collection windows and return arrangements", paragraphs: ["Obtain the applicable storage and equipment terms from the carrier, terminal and delivery provider. Confirm when each charging period starts, what time is included and how dates are counted for that shipment.", "Book transport with enough information to coordinate terminal access and the receiver's unloading capacity. For container deliveries, confirm the empty-return plan as well as the loaded delivery plan."] },
          { id: "delivery", heading: "5. Describe the final delivery location accurately", paragraphs: ["Provide the complete address, contact person, opening hours and any access restrictions. Tell the delivery provider whether unloading equipment is available and whether an appointment is needed.", "A residential address, restricted vehicle access or the need for special unloading may change the delivery arrangement. Raise these details before accepting the quote, and keep the forwarder updated if the receiving conditions change."], bullets: ["Receiver contact and delivery appointment", "Vehicle access and site opening hours", "Unloading equipment and staff availability", "Container return or packaging-handling arrangements"] },
        ],
      },
  },
];

export const blogPosts: BlogPost[] = [...markdownPosts, ...builtInBlogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getBlogPost(slug: string) { return blogPosts.find(post => post.slug === slug); }
export function readingMinutes(content: BlogContent) {
  const blockText = (section: BlogSection) => (section.blocks ?? []).flatMap(block => {
    if (block.type === "paragraph" || block.type === "subheading" || block.type === "quote") return [block.text];
    if (block.type === "list") return block.items;
    if (block.type === "table") return [...block.headers, ...block.rows.flat()];
    return [block.caption ?? (block.type === "image" ? block.alt : "")];
  });
  const text = [content.introduction, ...content.sections.flatMap(section => [section.heading, ...section.paragraphs, ...(section.bullets ?? []), ...blockText(section)])].join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}
export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}
