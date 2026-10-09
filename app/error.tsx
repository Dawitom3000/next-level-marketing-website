"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return <main id="main-content" tabIndex={-1} className="status-page section-dark"><div className="shell status-page-inner">
    <p className="eyebrow light">Something interrupted the page</p>
    <h1>Let&apos;s try that again.</h1>
    <p>This page could not load. Please try again or return to the homepage.</p>
    <div className="button-row"><button className="button button-primary" type="button" onClick={reset}>Try again <span aria-hidden="true">↗</span></button><Link className="button button-ghost" href="/">Return home</Link></div>
  </div></main>;
}
