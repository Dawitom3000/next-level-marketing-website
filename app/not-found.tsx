import Link from "next/link";
import { Footer, Header } from "./components/SiteChrome";

export default function NotFound() {
  return <><Header /><main className="status-page section-dark"><div className="shell status-page-inner">
    <p className="eyebrow light">404 · Page not found</p>
    <h1>This page has moved.</h1>
    <p>The address may be outdated, but the rest of the Next Level story is still here.</p>
    <div className="button-row"><Link className="button button-primary" href="/">Return home <span>↗</span></Link><Link className="button button-ghost" href="/work">Explore our work</Link></div>
  </div></main><Footer /></>;
}
