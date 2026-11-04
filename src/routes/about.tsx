import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Timer,
} from "lucide-react";
import teamImg from "@/assets/about-team.jpg";
import flatbedImg from "@/assets/service-flatbed.jpg";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Advanced Towing & Recovery, Boise ID" },
      {
        name: "description",
        content:
          "Meet Advanced Towing & Recovery — a local, licensed and insured towing company serving Boise and Southwest Ada County 24 hours a day. Call (208) 703-0869.",
      },
      {
        property: "og:title",
        content: "About Us — Advanced Towing & Recovery, Boise ID",
      },
      {
        property: "og:description",
        content:
          "A local Boise towing company you can count on — licensed, insured and answering 24/7. Call (208) 703-0869.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const VALUES = [
  {
    icon: Clock,
    title: "Always on",
    text: "Every call gets a person, not a voicemail — at noon or at 3 a.m.",
  },
  {
    icon: Timer,
    title: "Fast by habit",
    text: "We stage for quick response times across the whole valley.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    text: "Trained operators, current certifications, full coverage on every job.",
  },
  {
    icon: HeartHandshake,
    title: "Straight talk",
    text: "Clear pricing before we roll. No surprise charges on the invoice.",
  },
] as const;

function AboutPage() {
  return (
    <div>
      {/* Intro */}
      <section className="border-b border-border pb-20 pt-40">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src={teamImg}
                alt="Advanced Towing operator standing in front of a heavy-duty tow truck at dusk"
                width={1280}
                height={864}
                className="h-[420px] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
              About us
            </p>
            <h1 className="heading-display mt-3 text-6xl sm:text-7xl">
              Local. Reliable. Always open.
            </h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Advanced Towing &amp; Recovery is a Boise-based towing company
              built around one promise: when you call, a real dispatcher
              answers and a capable truck is on its way. We handle everything
              from routine tows and roadside fixes to ditch recoveries and
              junk car removal.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Based out of East 45th Street, we run calls across Boise, Garden
              City, Eagle, Meridian and the wider Southwest Ada County area —
              through summer heat, black ice and everything in between.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Call {SITE.phone}
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3.5 font-semibold text-foreground transition-colors hover:bg-accent"
              >
                See our services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-24">
        <Reveal direction="right">
          <h2 className="heading-display text-5xl sm:text-6xl">
            How we work
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} direction="right" delay={i * 110}>
              <div className="h-full rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <value.icon className="h-6 w-6" />
                </span>
                <h3 className="heading-display mt-5 text-2xl">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-border bg-card/50">
        <div className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
          <Reveal direction="right">
            <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
              Coverage area
            </p>
            <h2 className="heading-display mt-3 text-5xl sm:text-6xl">
              Where the trucks run
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Headquartered in Boise with fast access to the entire Treasure
              Valley. If you're inside or near these communities, we can get to
              you quickly.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {SITE.serviceArea.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {area}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left" delay={150}>
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src={flatbedImg}
                alt="Flatbed tow truck operating against an Idaho mountain backdrop"
                width={1280}
                height={864}
                loading="lazy"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 text-center">
        <Reveal direction="right">
          <h2 className="heading-display mx-auto max-w-2xl text-5xl sm:text-6xl">
            Need a hand right now?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            {SITE.hours}. One call gets a truck dispatched to you.
          </p>
          <a
            href={SITE.phoneHref}
            className="beacon-pulse mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-9 py-5 text-xl font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Call {SITE.phone}
          </a>
        </Reveal>
      </section>
    </div>
  );
}
