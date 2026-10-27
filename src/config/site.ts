export const site = {
  name: "Orza",
  description:
    "One shared budget for the money a household shares: fixed costs, split rules and what is left at the end of the month.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://orza.vercel.app",
  region: {
    country: "ES",
    currency: "EUR",
    timeZone: "Europe/Madrid",
  },
} as const;

export const navAnchors = {
  product: "#product",
  shared: "#shared",
  pricing: "#pricing",
  faq: "#faq",
} as const;
