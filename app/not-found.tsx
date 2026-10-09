import Link from "next/link";
import { Footer, Header } from "./components/SiteChrome";

export default function NotFound() {
  return <><Header /><main id="main-content" tabIndex={-1} className="status-page section-dark"><div className="shell status-page-inner">
    <p className="eyebrow light">404 · Page not found</p>
    <h1>We couldn’t find this page.</h1>
    <p>Check the address, or explore our work from the homepage.</p>
    <div className="button-row"><Link className="button button-primary" href="/">Return home <span aria-hidden="true">↗</span></Link><Link className="button button-ghost" href="/work">Explore our work</Link></div>
  </div></main><Footer /></>;
}
