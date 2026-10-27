import Image from "next/image";
import { CtaLink } from "@/components/ui/cta-link";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Hero({ hero }: { hero: Dictionary["hero"] }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-20 pt-14 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {hero.badge}
          </p>

          <h1 className="mt-6 text-[2.6rem] leading-[1.02] tracking-[-0.02em] text-foreground sm:text-6xl">
            <span className="block">{hero.titleLead}</span>
            <span className="block italic text-primary">
              {hero.titleAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {hero.lead}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CtaLink href="#pricing">{hero.primaryCta}</CtaLink>
            <CtaLink href="#how" variant="outline">
              {hero.secondaryCta}
            </CtaLink>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">{hero.note}</p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src="/images/hero-table.jpg"
            alt={hero.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
