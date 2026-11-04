import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, PhoneCall, Truck } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="hazard-stripes opacity-60" />
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Truck className="h-5 w-5" />
            </span>
            <span className="heading-display text-xl">Advanced Towing</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Fast, professional towing and recovery across Boise and the
            Treasure Valley — day or night, rain or snow.
          </p>
        </div>

        <div>
          <h3 className="heading-display text-lg text-primary">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="heading-display text-lg text-primary">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <PhoneCall className="h-4 w-4 text-primary" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={SITE.emailHref}
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 transition-colors hover:text-foreground"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {SITE.address}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="heading-display text-lg text-primary">Hours</h3>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            {SITE.hours}
          </p>
          <p className="mt-4 rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
            {SITE.offer} — mention this site when you call.
          </p>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <p className="container-x text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {SITE.name} · Boise, Idaho · Licensed
          &amp; Insured
        </p>
      </div>
    </footer>
  );
}
