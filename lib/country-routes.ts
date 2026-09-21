export type CountryRoute = {
  route: string;
  country: string;
  shortName: string;
  ports: string[];
  inland: string;
  focus: string[];
  intro: string;
  importNote: string;
};

export const countryRoutes: CountryRoute[] = [
  { route: "shipping-from-china-to-usa", country: "the United States", shortName: "USA", ports: ["Los Angeles / Long Beach", "New York / New Jersey", "Savannah", "Houston"], inland: "US inland delivery points", focus: ["FCL", "LCL", "Air freight", "Amazon and commercial cargo"], intro: "Match the US gateway to the final delivery region, cargo profile and complete destination-cost scope.", importNote: "The US importer should confirm classification, admissibility, customs bond and any agency-specific requirements with a licensed customs broker before shipment." },
  { route: "shipping-from-china-to-mexico", country: "Mexico", shortName: "Mexico", ports: ["Manzanillo", "Lázaro Cárdenas", "Veracruz", "Ensenada"], inland: "Mexico City, Monterrey and other destinations", focus: ["FCL", "LCL", "Machinery", "Project cargo"], intro: "Compare Pacific and Gulf gateways using the consignee location, carrier service and inland-delivery plan.", importNote: "The Mexican importer should confirm importer registration, classification, permits, duties, taxes and customs-broker responsibilities before cargo leaves China." },
  { route: "shipping-from-china-to-malaysia", country: "Malaysia", shortName: "Malaysia", ports: ["Port Klang", "Tanjung Pelepas", "Penang", "Kuantan"], inland: "Peninsular Malaysia and agreed East Malaysia destinations", focus: ["FCL", "LCL", "Air freight", "Supplier consolidation"], intro: "Plan short-haul Asia freight around the Malaysian destination, supplier locations and required delivery speed.", importNote: "The Malaysian importer should verify permits, taxes and any product-specific requirements before booking. Sabah and Sarawak destinations may require a different routing and handoff plan." },
  { route: "shipping-from-china-to-ghana", country: "Ghana", shortName: "Ghana", ports: ["Tema", "Takoradi"], inland: "Accra, Kumasi and other destinations", focus: ["FCL", "LCL", "Vehicles", "Heavy machinery"], intro: "Use Tema or another suitable gateway based on cargo type, final destination and current vessel acceptance.", importNote: "The Ghanaian importer should confirm current customs, conformity, valuation, duty and destination-document requirements with a qualified local broker." },
  { route: "shipping-from-china-to-mozambique", country: "Mozambique", shortName: "Mozambique", ports: ["Maputo", "Beira", "Nacala"], inland: "Mozambique and agreed regional destinations", focus: ["FCL", "Breakbulk", "Heavy machinery", "Project cargo"], intro: "Choose Maputo, Beira or Nacala by final delivery region, cargo handling requirements and available vessel service.", importNote: "The importer should confirm customs, permits, inspection requirements and the local transport plan. Oversized cargo requires port and inland-route checks before booking." },
  { route: "shipping-from-china-to-uae", country: "the United Arab Emirates", shortName: "UAE", ports: ["Jebel Ali", "Khalifa Port"], inland: "Dubai, Abu Dhabi and other Emirates", focus: ["FCL", "LCL", "Air freight", "RoRo and project cargo"], intro: "Connect China-origin freight with a UAE gateway and a clearly defined free-zone, local-delivery or re-export scope.", importNote: "The UAE importer should confirm mainland or free-zone procedures, classification, permits, duties, VAT and consignee documentation before shipment." },
  { route: "shipping-from-china-to-saudi-arabia", country: "Saudi Arabia", shortName: "Saudi Arabia", ports: ["Jeddah Islamic Port", "King Abdulaziz Port, Dammam"], inland: "Riyadh and other Saudi destinations", focus: ["FCL", "LCL", "Vehicles", "Project cargo"], intro: "Select the Red Sea or Arabian Gulf gateway around the final Saudi destination, cargo and available service.", importNote: "The Saudi importer should confirm product conformity, importer documentation, permits, duties, VAT and clearance requirements with qualified local parties before shipment." },
];

export function getCountryRoute(route: string) { return countryRoutes.find(item => item.route === route); }

export const existingCountryRoutes = [
  { route: "shipping-from-china-to-australia", name: "Australia", ports: "Sydney · Melbourne · Brisbane · Fremantle" },
  { route: "shipping-from-china-to-nigeria", name: "Nigeria", ports: "Lagos · Apapa · suitable Nigeria ports" },
  { route: "shipping-from-china-to-kenya", name: "Kenya", ports: "Mombasa · Nairobi delivery coordination" },
];
