import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import heroImg from "@/assets/hero-tow-truck.jpg";
import flatbedImg from "@/assets/service-flatbed.jpg";
import roadsideImg from "@/assets/service-roadside.jpg";
import junkImg from "@/assets/service-junk-car.jpg";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Advanced Towing & Recovery — 24/7 Towing in Boise, ID" },
      {
        name: "description",
        content:
          "24/7 towing, roadside assistance and junk car removal in Boise, Idaho. Fast response, licensed and insured. Call (208) 703-0869 — $20 off your first service.",
      },
      { property: "og:title", content: "Advanced Towing & Recovery — 24/7 Towing in Boise, ID" },
      {
        property: "og:description",
        content:
          "Fast, professional towing and recovery across Boise and the Treasure Valley. Open 24/7 — call (208) 703-0869.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const STATS = [
  { icon: Clock, value: "24/7", label: "Always open — nights & holidays" },
  { icon: Zap, value: "Fast", label: "Rapid response across the valley" },
  { icon: ShieldCheck, value: "Licensed", label: "Fully insured, professional crew" },
  { icon: Truck, value: "Any Job", label: "Cars, trucks, SUVs & more" },
] as const;

const TESTIMONIALS = [
  {
    quote:
      "Broke down on the connector at midnight and they had me hooked up in under half an hour. Straightforward pricing, no games.",
    name: "Marcus R.",
    detail: "Boise · Emergency tow",
  },
  {
    quote:
      "Locked my keys in the truck on a job site. The tech got there fast and had me back to work in minutes. Genuinely friendly service.",
    name: "Dana W.",
    detail: "Meridian · Lockout",
  },
  {
    quote:
      "They hauled off two junkers from my property and even handled the paperwork. Easy from the first phone call to the last.",
    name: "Trevor L.",
    detail: "Garden City · Junk car removal",
  },
] as const;

function Index() {
  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Heavy-duty tow truck with amber beacon lights on a Boise street at night"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/25" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

        <div className="container-x relative z-10 py-36">
          <div className="max-w-3xl">
            <Reveal direction="right">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-primary uppercase">
                <span className="beacon-flicker inline-block h-2 w-2 rounded-full bg-primary" />
                24/7 Emergency Service · Boise, ID
              </span>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <h1 className="heading-display mt-6 text-6xl text-foreground sm:text-7xl lg:text-8xl">
                Stuck on the road?
                <span className="block text-primary">We come to you.</span>
              </h1>
            </Reveal>

            <Reveal direction="right" delay={240}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Advanced Towing &amp; Recovery answers around the clock with
                fast, professional towing, roadside assistance and junk car
                removal — anywhere in Boise and the Treasure Valley.
              </p>
            </Reveal>

            <Reveal direction="right" delay={360}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={SITE.phoneHref}
                  className="beacon-pulse inline-flex items-center gap-3 rounded-md bg-primary px-7 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <PhoneCall className="h-5 w-5" />
                  Call {SITE.phone}
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-7 py-4 text-lg font-semibold text-foreground backdrop-blur transition-colors hover:bg-accent"
                >
                  Our Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right" delay={480}>
              <p className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <Star className="h-4 w-4 fill-primary" />
                {SITE.offer} — mention this site when you call
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Stats strip ---------- */}
      <section className="border-y border-border bg-card">
        <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} direction="right" delay={i * 100}>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <stat.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="heading-display text-2xl text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs leading-snug text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Featured services ---------- */}
      <section className="container-x py-24">
        <Reveal direction="right">
          <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
            What we do
          </p>
          <h2 className="heading-display mt-3 max-w-2xl text-5xl text-foreground sm:text-6xl">
            Towing &amp; recovery, done right
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {/* Towing */}
          <Reveal direction="right" delay={0}>
            <article className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50">
              <Reveal direction="left" delay={100}>
                <div className="overflow-hidden">
                  <img
                    src={flatbedImg}
                    alt="Flatbed tow truck loading a vehicle at sunset"
                    width={1280}
                    height={864}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
              <div className="p-6">
                <h3 className="heading-display text-2xl">Towing</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Light-duty towing with modern flatbeds and wheel-lift
                  equipment. Your vehicle arrives undamaged, every time.
                </p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>

          {/* Roadside */}
          <Reveal direction="right" delay={120}>
            <article className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50">
              <Reveal direction="left" delay={220}>
                <div className="overflow-hidden">
                  <img
                    src={roadsideImg}
                    alt="Technician jump-starting a car at night on a highway shoulder"
                    width={1280}
                    height={864}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
              <div className="p-6">
                <h3 className="heading-display text-2xl">
                  Roadside Assistance
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Jump starts, lockouts, flat tires, fuel delivery — quick fixes
                  that get you back on the road without a tow.
                </p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>

          {/* Junk car removal */}
          <Reveal direction="right" delay={240}>
            <article className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50">
              <Reveal direction="left" delay={340}>
                <div className="overflow-hidden">
                  <img
                    src={junkImg}
                    alt="Old junk car being winched onto a tow truck at a salvage yard"
                    width={1280}
                    height={864}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
              <div className="p-6">
                <h3 className="heading-display text-2xl">Junk Car Removal</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  That dead car in the driveway? We haul it away free of hassle
                  and handle the paperwork from start to finish.
                </p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section className="border-y border-border bg-card/50">
        <div className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="relative">
              <img
                src={heroImg}
                alt="Advanced Towing heavy-duty tow truck ready for dispatch"
                width={1920}
                height={1080}
                loading="lazy"
                className="rounded-xl border border-border object-cover shadow-2xl shadow-primary/10"
              />
              <div className="absolute -bottom-5 -right-4 rounded-lg bg-primary px-6 py-4 text-primary-foreground shadow-xl sm:-right-6">
                <p className="heading-display text-3xl leading-none">24 / 7</p>
                <p className="text-xs font-semibold tracking-wider uppercase">
                  Dispatch, always on
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
              Why Advanced Towing
            </p>
            <h2 className="heading-display mt-3 text-5xl sm:text-6xl">
              A tow company you can actually count on
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Real 24/7 dispatch — a person answers, day or night",
                "Upfront pricing before the truck ever rolls",
                "Modern, well-maintained trucks and trained operators",
                "Damage-free flatbed and wheel-lift equipment",
                "Local to Boise — we know these roads in every season",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
            <a
              href={SITE.phoneHref}
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <PhoneCall className="h-4 w-4" />
              Get help now — {SITE.phone}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------- Offer band ---------- */}
      <section className="relative overflow-hidden bg-primary/10">
        <div className="hazard-stripes" />
        <div className="container-x flex flex-col items-center gap-6 py-20 text-center">
          <Reveal direction="right">
            <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
              New customer offer
            </p>
            <h2 className="heading-display mt-3 text-5xl text-foreground sm:text-7xl">
              <span className="text-primary">$20 off</span> your first service
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              First time calling us? Mention this website and take $20 off any
              tow, roadside visit or junk car removal.
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <PhoneCall className="h-5 w-5" />
              Claim it — {SITE.phone}
            </a>
          </Reveal>
        </div>
        <div className="hazard-stripes" />
      </section>

      {/* ---------- Service area marquee ---------- */}
      <section className="overflow-hidden border-y border-border py-8">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-8" aria-hidden={copy === 1}>
              {SITE.serviceArea.map((area) => (
                <span
                  key={`${copy}-${area}`}
                  className="flex items-center gap-8 font-display text-3xl tracking-wide text-foreground/70"
                >
                  {area}
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="container-x py-24">
        <Reveal direction="right">
          <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
            From the drivers we've helped
          </p>
          <h2 className="heading-display mt-3 text-5xl sm:text-6xl">
            Word travels fast in the valley
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} direction={i === 1 ? "left" : "right"} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-7">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="relative overflow-hidden">
        <img
          src={roadsideImg}
          alt=""
          aria-hidden="true"
          width={1280}
          height={864}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="container-x relative z-10 py-24 text-center">
          <Reveal direction="right">
            <h2 className="heading-display mx-auto max-w-3xl text-5xl sm:text-7xl">
              Stranded? One call and a truck is on the way.
            </h2>
            <a
              href={SITE.phoneHref}
              className="beacon-pulse mt-10 inline-flex items-center gap-3 rounded-md bg-primary px-9 py-5 text-xl font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <PhoneCall className="h-6 w-6" />
              {SITE.phone}
            </a>
            <p className="mt-4 text-sm text-muted-foreground">{SITE.hours}</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
