import { site } from "@/config/site";
import type { Locale } from "@/i18n/config";

export function formatPrice(amountMinor: number, locale: Locale) {
  const hasCents = amountMinor % 100 !== 0;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: site.region.currency,
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0,
  }).format(amountMinor / 100);
}

export function formatYear(locale: Locale, date = new Date()) {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    timeZone: site.region.timeZone,
  }).format(date);
}
