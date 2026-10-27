import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Values({ values }: { values: Dictionary["values"] }) {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow={values.eyebrow}
          title={values.title}
          lead={values.lead}
        />

        <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {values.items.map((item, index) => (
            <div key={item.title} className="bg-card p-7 md:p-8">
              <dt className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-[0.14em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl leading-snug text-foreground">
                  {item.title}
                </span>
              </dt>
              <dd className="mt-3 pl-8 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
