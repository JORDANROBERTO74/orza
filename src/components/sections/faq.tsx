import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Faq({ faq }: { faq: Dictionary["faq"] }) {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-border bg-muted/40"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />

        <div className="divide-y divide-border border-t border-border">
          {faq.items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-foreground marker:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="relative grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-open:border-primary group-open:text-primary"
                >
                  <span className="absolute h-px w-2.5 bg-current" />
                  <span className="absolute h-2.5 w-px bg-current transition-transform group-open:scale-y-0" />
                </span>
              </summary>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
