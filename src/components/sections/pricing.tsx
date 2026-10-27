import { CheckIcon } from "@/components/icons";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

export function Pricing({
  pricing,
  locale,
}: {
  pricing: Dictionary["pricing"];
  locale: Locale;
}) {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-t border-border bg-muted/40"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          lead={pricing.lead}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricing.plans.map((plan) => {
            const featured = plan.featured;
            return (
              <article
                key={plan.name}
                className={cn(
                  "flex flex-col rounded-2xl border p-7",
                  featured
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_24px_60px_-40px_rgba(16,62,48,0.9)]"
                    : "border-border bg-card",
                )}
              >
                <h3
                  className={cn(
                    "text-xl",
                    featured ? "text-primary-foreground" : "text-foreground",
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "mt-1.5 text-sm leading-relaxed",
                    featured
                      ? "text-primary-foreground/75"
                      : "text-muted-foreground",
                  )}
                >
                  {plan.summary}
                </p>

                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-mono text-4xl tracking-tight">
                    {plan.amountMinor === 0
                      ? pricing.freeLabel
                      : formatPrice(plan.amountMinor, locale)}
                  </span>
                  {plan.amountMinor > 0 ? (
                    <span
                      className={cn(
                        "text-xs",
                        featured
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground",
                      )}
                    >
                      {pricing.period}
                    </span>
                  ) : null}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm">
                      <CheckIcon
                        size={16}
                        aria-hidden="true"
                        className={cn(
                          "mt-0.5 shrink-0",
                          featured ? "text-accent" : "text-primary",
                        )}
                      />
                      <span
                        className={cn(
                          "leading-relaxed",
                          featured
                            ? "text-primary-foreground/90"
                            : "text-foreground/85",
                        )}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <CtaLink
                  href="#start"
                  variant={featured ? "light" : "outline"}
                  className="mt-7 w-full"
                >
                  {plan.cta}
                </CtaLink>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">{pricing.billed}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {pricing.finePrint}
        </p>
      </div>
    </section>
  );
}
