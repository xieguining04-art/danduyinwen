"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useReducedMotion } from "@/components/motion";
import { enquiryLinks } from "@/lib/company";
import { sitePath } from "@/lib/site-path";

const slides = [
  { image: "/images/sea-freight.webp", href: "/services/sea-freight", topic: "sea freight from China", copy: { label: "CHINA ORIGIN · GLOBAL SEA FREIGHT", title: "Sea freight from China, planned from pickup to destination.", text: "Send your cargo details and destination. We coordinate the China-side steps, compare suitable options and clarify the quotation scope before booking.", alt: "Container ship at an international port" } },
  { image: "/images/warehouse-operations.webp", href: "/services/cargo-consolidation", topic: "supplier pickup and cargo consolidation in China", copy: { label: "CHINA-SIDE SUPPORT & CONSOLIDATION", title: "Supplier orders, brought together for shipping.", text: "Coordinate factory pickup, warehouse receiving and consolidation through one China-side contact before the international shipment moves.", alt: "Palletised cargo and a forklift in a logistics warehouse" } },
  { image: "/images/air-freight.webp", href: "/services/air-freight", topic: "air freight or express shipping from China", copy: { label: "AIR FREIGHT & EXPRESS", title: "When time matters, keep your cargo moving.", text: "Compare China-origin air freight and international express options around the actual package size, weight, deadline and destination.", alt: "Cargo aircraft with a pallet loader on the apron" } },
];

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const toggleIntent = useRef<boolean | null>(null);
  const reduced = useReducedMotion();
  const running = playing && !hovered && visible && !reduced;
  useEffect(() => {
    if (!api) return;
    const update = () => setSelected(api.selectedScrollSnap());
    const stopOnDrag = () => setPlaying(false);
    update(); api.on("select", update); api.on("reInit", update); api.on("pointerDown", stopOnDrag);
    return () => { api.off("select", update); api.off("reInit", update); api.off("pointerDown", stopOnDrag); };
  }, [api]);
  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    update(); document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  useEffect(() => {
    if (!api || !running) return;
    const timer = window.setInterval(() => api.scrollNext(), 7000);
    return () => window.clearInterval(timer);
  }, [api, running, selected]);

  return <section className="hero dynamic-hero" data-playing={running} aria-label="Featured logistics services">
    <Carousel setApi={setApi} opts={{ loop: true, duration: reduced ? 0 : 35 }} className="hero-carousel" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setPlaying(false)} aria-label="Service banners">
      <CarouselContent className="hero-track" aria-live={running ? "off" : "polite"}>
        {slides.map((slide, index) => { const { copy } = slide; const active = index === selected; const enquiry = enquiryLinks(slide.topic); return <CarouselItem key={slide.image} className={`hero-slide ${active ? "is-active" : ""}`} aria-label={`${index + 1} / ${slides.length}`} aria-hidden={!active} inert={!active}>
          <img className="hero-photo" src={sitePath(slide.image)} alt={copy.alt} width={1672} height={941} fetchPriority={index === 0 ? "high" : "auto"} loading={index === 0 ? "eager" : "lazy"} />
          <div className="hero-shade" /><div className="direction-mark" aria-hidden="true" />
          <div className="wrap hero-content"><span className="kicker light"><i />{copy.label}</span>{index === 0 ? <h1>{copy.title}</h1> : <h2>{copy.title}</h2>}<p>{copy.text}</p><div className="hero-actions"><a className="button accent" href={enquiry.whatsapp} target="_blank" rel="noreferrer">Get a shipping plan<ArrowRight /></a><a className="text-link light-link" href={sitePath(slide.href)}>View service details<ArrowDown /></a></div></div>
        </CarouselItem>; })}
      </CarouselContent>
      <div className="hero-controls wrap"><div className="hero-pagination">{slides.map((slide, index) => <button type="button" key={slide.image} aria-label={`Go to ${slide.copy.label}`} aria-pressed={selected === index} onClick={() => { setPlaying(false); api?.scrollTo(index, reduced); }}><span>0{index + 1}</span><i /></button>)}</div><div className="hero-control-buttons"><button type="button" aria-label="Previous slide" onClick={() => { setPlaying(false); api?.scrollPrev(reduced); }}><ArrowLeft /></button><button type="button" aria-label="Next slide" onClick={() => { setPlaying(false); api?.scrollNext(reduced); }}><ArrowRight /></button>{!reduced && <button type="button" data-slideshow-toggle aria-label={playing ? "Pause slideshow" : "Play slideshow"} onPointerDown={() => { toggleIntent.current = !playing; }} onPointerCancel={() => { toggleIntent.current = null; }} onKeyDown={() => { toggleIntent.current = null; }} onBlur={() => { toggleIntent.current = null; }} onClick={() => { setPlaying(toggleIntent.current ?? !playing); toggleIntent.current = null; }}>{playing ? <Pause /> : <Play />}</button>}</div></div>
    </Carousel>
    <div className="hero-rail" aria-hidden="true"><span>GLOBAL FREIGHT</span><i /><span>CHINA ORIGIN</span></div>
  </section>;
}
