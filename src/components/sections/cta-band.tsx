import { CtaLink } from "@/components/ui/cta-link";
import { BrandMark } from "@/components/brand-mark";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function CtaBand({ cta }: { cta: Dictionary["cta"] }) {
  return (
    <section id="start" className="scroll-mt-24 bg-primary">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-end md:justify-between md:py-24">
        <div className="max-w-xl">
          <BrandMark className="h-7 w-7 text-accent" />
          <h2 className="mt-6 text-3xl leading-[1.1] tracking-tight text-primary-foreground md:text-[2.6rem]">
            {cta.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/75">
            {cta.lead}
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <CtaLink href="#pricing" variant="light">
            {cta.button}
          </CtaLink>
          <p className="max-w-[15rem] text-xs leading-relaxed text-primary-foreground/60">
            {cta.note}
          </p>
        </div>
      </div>
    </section>
  );
}
