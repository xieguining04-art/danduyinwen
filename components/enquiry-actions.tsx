import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { enquiryLinks } from "@/lib/company";

export function EnquiryActions({ topic }: { topic?: string }) {
  const links = enquiryLinks(topic);
  return <div className="enquiry-actions"><a className="button accent" href={links.whatsapp} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp Vinson<ArrowRight /></a><a className="button outline-light" href={links.email}><Mail />Enquire by email</a><small>Complete and send in your own app. Nothing is sent automatically.</small></div>;
}
