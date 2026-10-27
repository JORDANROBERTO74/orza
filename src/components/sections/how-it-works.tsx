import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function HowItWorks({ how }: { how: Dictionary["how"] }) {
  return (
    <section id="how" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading eyebrow={how.eyebrow} title={how.title} lead={how.lead} />

        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {how.steps.map((step, index) => (
            <li key={step.title} className="border-t border-border pt-6">
              <p className="font-mono text-xs tracking-[0.16em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
