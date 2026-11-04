import { createFileRoute } from "@tanstack/react-router";
import {
  BatteryCharging,
  Car,
  CircleDollarSign,
  KeyRound,
  PhoneCall,
  Route,
  Snowflake,
  Truck,
} from "lucide-react";
import heroImg from "@/assets/hero-tow-truck.jpg";
import flatbedImg from "@/assets/service-flatbed.jpg";
import roadsideImg from "@/assets/service-roadside.jpg";
import junkImg from "@/assets/service-junk-car.jpg";
import winchImg from "@/assets/service-winch-out.jpg";
import longHaulImg from "@/assets/service-long-distance.jpg";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Towing Services — Advanced Towing & Recovery, Boise ID" },
      {
        name: "description",
        content:
          "Light-duty towing, heavy-duty recovery, flatbed transport, roadside assistance, winch-outs and junk car removal in Boise, Idaho. 24/7 — call (208) 703-0869.",
      },
      {
        property: "og:title",
        content: "Towing Services — Advanced Towing & Recovery, Boise ID",
      },
      {
        property: "og:description",
        content:
          "Towing, recovery, roadside assistance and junk car removal across Boise and the Treasure Valley. Open 24/7 — call (208) 703-0869.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const SERVICES = [
  {
    icon: Truck,
    title: "Light-Duty Towing",
    image: flatbedImg,
    alt: "Flatbed tow truck loading a sedan at golden hour",
    description:
      "Sedans, SUVs, motorcycles and light trucks — loaded and secured with modern flatbed and wheel-lift equipment so your vehicle rides smooth and arrives undamaged.",
    points: ["Flatbed & wheel-lift trucks", "Accident & breakdown tows", "Apartment / private-property tows"],
  },
  {
    icon: Snowflake,
    title: "Heavy-Duty & Winch-Out Recovery",
    image: winchImg,
    alt: "Tow truck winching a damaged car out of a ditch at night",
    description:
      "Off the road, in a ditch, stuck in snow or mud — our recovery gear and experienced operators pull vehicles back onto pavement without making the situation worse.",
    points: ["Ditch & off-road recovery", "Snow and mud extraction", "Accident scene recovery"],
  },
  {
    icon: BatteryCharging,
    title: "Roadside Assistance",
    image: roadsideImg,
    alt: "Technician jump-starting a car at night on a highway shoulder",
    description:
      "Many calls never need a tow. Our roadside techs carry the gear to fix the common failures right where you sit — fast, day or night.",
    points: ["Jump starts & battery issues", "Lockouts", "Flat tire changes & fuel delivery"],
  },
  {
    icon: Route,
    title: "Long-Distance Transport",
    image: longHaulImg,
    alt: "Flatbed tow truck carrying a car on an open highway at dusk",
    description:
      "Need a vehicle moved across the valley or across the state? We plan the route, quote it upfront and deliver on schedule with regular updates.",
    points: ["Boise ↔ Treasure Valley", "Statewide Idaho transport", "Dealership & fleet moves"],
  },
  {
    icon: CircleDollarSign,
    title: "Junk Car Removal",
    image: junkImg,
    alt: "Rusted junk car being winched onto a flatbed at a salvage yard",
    description:
      "Free up your driveway or property. We haul away non-running and scrap vehicles, and handle the title and paperwork so you don't have to chase it down.",
    points: ["Non-running vehicles", "Title & paperwork handled", "Fast scheduling, clear pricing"],
  },
  {
    icon: KeyRound,
    title: "Emergency 24/7 Response",
    image: heroImg,
    alt: "Heavy-duty tow truck with beacon lights on a city street at night",
    description:
      "Breakdowns don't keep business hours. Neither do we. A real dispatcher answers at 2 a.m., on holidays, in the snow — and a truck rolls.",
    points: ["Nights, weekends & holidays", "Highway & freeway response", "Priority dispatch for emergencies"],
  },
] as const;

function ServicesPage() {
  return (
    <div>
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-border pb-20 pt-40">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
        <div className="container-x relative z-10">
          <Reveal direction="right">
            <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
              Our services
            </p>
            <h1 className="heading-display mt-3 max-w-3xl text-6xl sm:text-7xl">
              Every tow, every recovery, every hour
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              From a dead battery in a parking garage to a full recovery off a
              snowy shoulder — one number covers it all.
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-7 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <PhoneCall className="h-5 w-5" />
              {SITE.phone}
            </a>
          </Reveal>
        </div>
      </section>

      {/* Alternating service rows: image enters from the left, text from the right */}
      <section className="container-x py-24">
        <div className="flex flex-col gap-20">
          {SERVICES.map((service, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={service.title}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  flip ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal direction="left">
                  <div className="overflow-hidden rounded-xl border border-border">
                    <img
                      src={service.image}
                      alt={service.alt}
                      width={1280}
                      height={864}
                      loading="lazy"
                      className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80"
                    />
                  </div>
                </Reveal>

                <Reveal direction="right" delay={150}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <h2 className="heading-display mt-5 text-4xl sm:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm text-foreground/90"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-card">
        <div className="container-x flex flex-col items-center gap-6 py-20 text-center">
          <Reveal direction="right">
            <Car className="h-10 w-10 text-primary" />
            <h2 className="heading-display mt-4 max-w-2xl text-5xl sm:text-6xl">
              Not sure what you need? Just call.
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Describe the situation and we'll send the right truck with the
              right gear — and a clear price before we roll.
            </p>
            <a
              href={SITE.phoneHref}
              className="beacon-pulse mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-9 py-5 text-xl font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <PhoneCall className="h-6 w-6" />
              {SITE.phone}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
