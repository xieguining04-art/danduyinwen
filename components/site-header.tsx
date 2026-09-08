"use client";

import { useState } from "react";
import { ArrowRight, Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WorldClockBar } from "@/components/world-clock-bar";
import { orderedServices as services, serviceLabel } from "@/lib/services";
import { enquiryLinks } from "@/lib/company";
import { sitePath } from "@/lib/site-path";

export function Brand() {
  return <a className="brand" href={sitePath("/")} aria-label="TengYoda Logistics home"><span><strong>TengYoda<span className="brand-chevron" aria-hidden="true">›</span></strong><small>GLOBAL LOGISTICS</small></span></a>;
}

export function SiteHeader({ active }: { active?: "about" | "blog" | "services" }) {
  const [navigationValue, setNavigationValue] = useState("");
  const servicesOpen = navigationValue === "services";
  const quoteUrl = enquiryLinks().whatsapp;
  const links = [["/about", "About Us"], ["/blog", "Blog"], ["/#contact", "Contact Us"]];
  const serviceLinks = services.map(service => <NavigationMenuLink asChild key={service.slug}><a href={sitePath(`/services/${service.slug}`)} className="mega-service-link"><strong>{serviceLabel(service)}</strong><ArrowRight aria-hidden="true" /></a></NavigationMenuLink>);
  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <WorldClockBar />
    <header className="main-header"><div className="wrap header-inner"><Brand />
      <NavigationMenu viewport={false} delayDuration={0} skipDelayDuration={0} value={navigationValue} onValueChange={setNavigationValue} className="site-navigation" aria-label="Main navigation">
        <NavigationMenuList className="site-navigation-list">
          <NavigationMenuItem><NavigationMenuLink asChild active={active === "about"}><a className="nav-top-link" href={sitePath("/about")} aria-current={active === "about" ? "page" : undefined}>About Us</a></NavigationMenuLink></NavigationMenuItem>
          <NavigationMenuItem
            value="services"
            className="mega-item"
            onPointerEnter={event => { if (event.pointerType === "mouse") setNavigationValue("services"); }}
            onPointerLeave={event => { if (event.pointerType === "mouse") setNavigationValue(""); }}
          ><NavigationMenuTrigger className="nav-top-trigger" data-active={active === "services"}>Our Services</NavigationMenuTrigger>
            <NavigationMenuContent forceMount className="services-mega" inert={!servicesOpen} aria-hidden={!servicesOpen}>
              <div className="mega-surface"><div className="wrap mega-layout"><div className="mega-main"><div className="mega-heading"><h2>Our services</h2><NavigationMenuLink asChild><a href={sitePath("/services")}>View all<ArrowRight /></a></NavigationMenuLink></div><div className="mega-links">{serviceLinks}</div><p className="mega-caption">SEA FREIGHT · OCEANIA · AFRICA · SOUTH AMERICA</p></div><aside className="mega-cta"><span className="kicker light">ONE DIRECT CONTACT</span><h3>Need a tailored<br />shipping solution?</h3><p>Tell us about your cargo and destination. Plan every China-side step with Vinson.</p><a className="button accent" href={quoteUrl} target="_blank" rel="noreferrer">Speak to an expert<ArrowRight /></a></aside></div></div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {links.slice(1).map(([href, label]) => <NavigationMenuItem key={href}><NavigationMenuLink asChild active={href === "/blog" && active === "blog"}><a className="nav-top-link" href={sitePath(href)} aria-current={href === "/blog" && active === "blog" ? "location" : undefined}>{label}</a></NavigationMenuLink></NavigationMenuItem>)}
        </NavigationMenuList>
      </NavigationMenu>
      <a className="header-call" href={quoteUrl} target="_blank" rel="noreferrer"><span>NEED A CUSTOM SOLUTION?</span><b>Speak to an expert</b><ArrowRight /></a>
      <Sheet><SheetTrigger asChild><Button className="menu-button" variant="ghost" size="icon" aria-label="Open navigation"><Menu /></Button></SheetTrigger><SheetContent className="mobile-sheet"><SheetHeader><SheetTitle>TengYoda Logistics</SheetTitle><SheetDescription>Global sea freight booking and China-side support</SheetDescription></SheetHeader><nav className="mobile-nav" aria-label="Mobile navigation"><SheetClose asChild><a href={sitePath("/")}>Home</a></SheetClose><SheetClose asChild><a href={sitePath("/about")}>{links[0][1]}</a></SheetClose><Accordion type="single" collapsible className="mobile-service-menu"><AccordionItem value="services"><AccordionTrigger>Our Services</AccordionTrigger><AccordionContent><SheetClose asChild><a href={sitePath("/services")}>View all services</a></SheetClose>{services.map(service => <SheetClose key={service.slug} asChild><a href={sitePath(`/services/${service.slug}`)}>{serviceLabel(service)}</a></SheetClose>)}</AccordionContent></AccordionItem></Accordion>{links.slice(1).map(([href, label]) => <SheetClose asChild key={href}><a href={sitePath(href)}>{label}</a></SheetClose>)}</nav><a className="mobile-contact" href={quoteUrl} target="_blank" rel="noreferrer"><MessageCircle /> +86 186 2024 4613</a></SheetContent></Sheet>
    </div></header>
  </>;
}
