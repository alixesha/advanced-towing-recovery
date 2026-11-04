export const SITE = {
  name: "Advanced Towing & Recovery",
  shortName: "Advanced Towing",
  tagline: "24/7 Towing & Recovery in Boise, Idaho",
  phone: "(208) 703-0869",
  phoneHref: "tel:+12087030869",
  email: "advancedtowingidaho@gmail.com",
  emailHref: "mailto:advancedtowingidaho@gmail.com",
  address: "102 E. 45th St., Boise, ID 83714",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=102+E+45th+St+Boise+ID+83714",
  hours: "Always open — 24 hours, 7 days a week",
  offer: "$20 off your first service",
  serviceArea: [
    "Boise",
    "Garden City",
    "Eagle",
    "Meridian",
    "Nampa",
    "Kuna",
    "Star",
    "Caldwell",
    "Southwest Ada County",
  ],
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
