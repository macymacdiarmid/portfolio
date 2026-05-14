"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
      style={{
        borderBottom: "1px solid var(--border)",
        background: "rgba(250,250,248,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <Link
        href="/"
        className="text-sm font-semibold tracking-wide"
        style={{ color: "var(--text-primary)", textDecoration: "none", letterSpacing: "0.04em" }}
      >
        MACY MACDIARMID
      </Link>

      <nav className="flex items-center gap-7">
        {links.slice(1).map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="nav-link text-sm"
            style={{
              color: pathname === href ? "var(--text-primary)" : "var(--text-secondary)",
              fontWeight: pathname === href ? "500" : "400",
            }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
