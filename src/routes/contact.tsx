import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  PhoneCall,
  Send,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Advanced Towing & Recovery, Boise ID" },
      {
        name: "description",
        content:
          "Call (208) 703-0869 or email advancedtowingidaho@gmail.com — 24/7 towing and recovery in Boise, ID. 102 E. 45th St., Boise, ID 83714.",
      },
      {
        property: "og:title",
        content: "Contact — Advanced Towing & Recovery, Boise ID",
      },
      {
        property: "og:description",
        content:
          "24/7 dispatch: call (208) 703-0869 or send us a message. Located at 102 E. 45th St., Boise, ID 83714.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const CONTACT_CARDS = [
  {
    icon: PhoneCall,
    title: "Call or text",
    value: SITE.phone,
    href: SITE.phoneHref,
    note: "Fastest way to reach us — answered 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    value: SITE.email,
    href: SITE.emailHref,
    note: "Quotes, junk car removal & general questions",
  },
  {
    icon: MapPin,
    title: "Address",
    value: SITE.address,
    href: SITE.mapsHref,
    note: "Opens in Google Maps",
  },
] as const;

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Service request — ${data.get("service")} (${data.get("name")})`;
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Vehicle & location: ${data.get("vehicle")}`,
      `Service needed: ${data.get("service")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="border-b border-border pb-16 pt-40">
        <div className="container-x">
          <Reveal direction="right">
            <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
              Contact
            </p>
            <h1 className="heading-display mt-3 text-6xl sm:text-7xl">
              Talk to a real person, 24/7
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Need a truck now? Skip the form and call — we answer around the
              clock.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact cards */}
      <section className="container-x -mt-0 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {CONTACT_CARDS.map((card, i) => (
            <Reveal key={card.title} direction="right" delay={i * 120}>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="block h-full rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <card.icon className="h-6 w-6" />
                </span>
                <h2 className="heading-display mt-5 text-2xl">{card.title}</h2>
                <p className="mt-2 font-semibold text-foreground">
                  {card.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{card.note}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + hours */}
      <section className="border-t border-border bg-card/50">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_360px]">
          <Reveal direction="right">
            <h2 className="heading-display text-4xl sm:text-5xl">
              Request service
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fill this out and your email app will open with everything we
              need to quote the job. For emergencies, always call.
            </p>

            {sent && (
              <div className="mt-6 flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
                <CheckCircle2 className="h-4 w-4" />
                Your email app should now be open — hit send and we'll get
                right back to you.
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold">
                  Your name
                </span>
                <input
                  required
                  name="name"
                  placeholder="Jordan Miller"
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold">
                  Phone number
                </span>
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="(208) 555-0123"
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-semibold">
                  Vehicle &amp; location
                </span>
                <input
                  required
                  name="vehicle"
                  placeholder="2016 Honda Civic — I-84 near Eagle Rd"
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-semibold">
                  Service needed
                </span>
                <select
                  name="service"
                  defaultValue="Towing"
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                >
                  <option>Towing</option>
                  <option>Roadside Assistance</option>
                  <option>Junk Car Removal</option>
                  <option>Recovery / Winch-Out</option>
                  <option>Long-Distance Transport</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-semibold">
                  Details
                </span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Anything that helps us send the right truck — hazards, parking situation, whether the vehicle rolls…"
                  className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-bold text-primary-foreground transition-colors hover:bg-primary/90 sm:col-span-2 sm:w-fit"
              >
                <Send className="h-4 w-4" />
                Send request
              </button>
            </form>
          </Reveal>

          <Reveal direction="right" delay={180}>
            <aside className="rounded-xl border border-border bg-background p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/15 text-primary">
                <Clock className="h-6 w-6" />
              </span>
              <h3 className="heading-display mt-5 text-3xl">Hours</h3>
              <p className="mt-2 text-sm font-semibold text-primary">
                {SITE.hours}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Holidays included. If your vehicle is somewhere unsafe — a
                freeway shoulder, an intersection — tell the dispatcher and
                we'll prioritize it.
              </p>
              <div className="mt-6 rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
                {SITE.offer} — mention this website.
              </div>
              <a
                href={SITE.phoneHref}
                className="mt-6 flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-4 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <PhoneCall className="h-4 w-4" />
                {SITE.phone}
              </a>
            </aside>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
