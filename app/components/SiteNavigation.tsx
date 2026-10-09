"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const links = [
  { href: "/events", label: "Projects" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Capabilities" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Start a project" },
];

export function SiteNavigation() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    menu.open = false;

    function closeOutside(event: PointerEvent) {
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && menu?.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [pathname]);

  return <>
    <nav className="desktop-nav" aria-label="Primary navigation">
      {links.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={href === "/contact" ? "nav-cta" : undefined}>
        {label}{href === "/contact" && <span aria-hidden="true">↗</span>}
      </Link>)}
    </nav>
    <details className="mobile-menu" ref={menuRef}>
      <summary>Menu</summary>
      <nav aria-label="Mobile navigation">
        {links.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => { if (menuRef.current) menuRef.current.open = false; }}>{label}</Link>)}
      </nav>
    </details>
  </>;
}
