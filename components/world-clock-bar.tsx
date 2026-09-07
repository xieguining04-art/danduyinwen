"use client";

import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";
import { worldClocks } from "@/lib/world-clocks";
import { company } from "@/lib/company";

export function WorldClockBar() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const timer = window.setInterval(update, 1000);
    document.addEventListener("visibilitychange", update);
    return () => { window.clearInterval(timer); document.removeEventListener("visibilitychange", update); };
  }, []);
  return <div className="world-clock-bar"><div className="wrap world-clock-inner"><div className="clock-scroll" tabIndex={0} role="region" aria-label="World clocks; scroll horizontally for more">{worldClocks.map(({ zone, english, formatter }) => <span className="clock-item" key={zone} title={zone}><Clock3 aria-hidden="true" /><b>{english}</b><time dateTime={now?.toISOString()}>{now ? formatter.format(now) : "--:--"}</time></span>)}</div><a className="clock-call" href={company.telephone}>Call us <b>+86 186 2024 4613</b></a></div></div>;
}
