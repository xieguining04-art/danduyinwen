import { sitePath } from "@/lib/site-path";

export default function ServiceNotFound() {
  return <main className="wrap section"><h1>Service not found</h1><p>The requested service page does not exist.</p><a className="button accent" href={sitePath("/services")}>All services</a></main>;
}
