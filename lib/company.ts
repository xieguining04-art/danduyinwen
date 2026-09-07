export const company = {
  name: "TengYoda Logistics",
  contact: "Vinson",
  email: "vinson_xie@tydscc.cn",
  alternateEmail: "xieguining04@gmail.com",
  phone: "+86 186 2024 4613",
  telephone: "tel:+8618620244613",
  whatsapp: "https://wa.me/8618620244613",
  tiktok: "https://www.tiktok.com/@vinson300",
  instagram: "https://www.instagram.com/vinson08251/",
};

export const companyLocations = [
  { id: "qingdao-warehouse", type: "warehouse", name: "Qingdao Warehouse", address: "76 Huanghe East Road, Huangdao District, Qingdao, Shandong, China" },
  { id: "yiwu-warehouse", type: "warehouse", name: "Yiwu Warehouse", address: "458 Jingfa Avenue, Beiyuan Subdistrict, Yiwu, Zhejiang, China" },
  { id: "shenzhen-warehouse", type: "warehouse", name: "Shenzhen Warehouse", address: "85-8 Nanyuan, Huaide South Road, Fuyong, Bao’an District, Shenzhen, Guangdong, China" },
  { id: "foshan-office", type: "office", name: "Foshan Office", address: "Room 1011, Building 6, Runhe Jujin Science & Innovation Park, 51 Jianghai Road, Zhangcha Subdistrict, Chancheng District, Foshan, Guangdong, China" },
  { id: "shenzhen-office", type: "office", name: "Shenzhen Office", address: "JialianDa International, No. 54 Rentian Industrial Zone, Fuhai Subdistrict, Bao’an District, Shenzhen, Guangdong, China" },
] as const;

// Opens a prepared message in the visitor's own app; nothing is sent automatically.
export function enquiryLinks(topic = "China sourcing and freight") {
  const message = `Hello Vinson, I would like to enquire about ${topic}.\n\nCargo / product:\nQuantity and packages:\nPacked dimensions and gross weight:\nPickup city:\nDestination and postcode:\nCargo-ready date:\nRequired service / delivery scope:`;
  return {
    whatsapp: `${company.whatsapp}?text=${encodeURIComponent(message)}`,
    email: `mailto:${company.email}?subject=${encodeURIComponent(`TengYoda enquiry — ${topic}`)}&body=${encodeURIComponent(message)}`,
  };
}
