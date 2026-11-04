import { useEffect, useState } from "react";
import { Link, useMatches } from "@tanstack/react-router";
import { Clock, Menu, PhoneCall, Truck, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const matches = useMatches();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [matches.length]);

  const isActive = (to: string) =>
    matches.some((m) => (to === "/" ? m.pathname === "/" : m.pathname.startsWith(to)));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      {/* Top utility bar */}
      <div
        className={`hidden border-b border-border/60 transition-all duration-300 md:block ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "opacity-100"
        }`}
      >
        <div className="container-x flex h-10 items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-primary" />
            {SITE.hours}
          </span>
          <span>Serving Boise &amp; Southwest Ada County, Idaho</span>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Truck className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="heading-display block text-xl text-foreground">
              Advanced Towing
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.28em] text-primary">
              &amp; RECOVERY · BOISE, ID
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-4 py-2 text-sm font-semibold tracking-wide transition-colors hover:bg-accent hover:text-foreground ${
                isActive(link.to) ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="beacon-pulse hidden items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            <PhoneCall className="h-4 w-4" />
            {SITE.phone}
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-md px-4 py-3 text-base font-semibold transition-colors hover:bg-accent ${
                  isActive(link.to) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-base font-bold text-primary-foreground"
            >
              <PhoneCall className="h-4 w-4" />
              Call {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
