import Image from "next/image";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/dictionaries/en";

type Feature = Pick<
  Dictionary["featureMonth"],
  "eyebrow" | "title" | "lead" | "points" | "imageAlt"
>;

export function FeatureBlock({
  feature,
  image,
  id,
  reverse = false,
}: {
  feature: Feature;
  image: string;
  id: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className={cn("relative", reverse && "lg:order-2")}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src={image}
              alt={feature.imageAlt}
              fill
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className={cn(reverse && "lg:order-1")}>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {feature.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl leading-[1.12] tracking-tight text-foreground md:text-4xl">
            {feature.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {feature.lead}
          </p>

          <ul className="mt-7 space-y-3">
            {feature.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-foreground/85">
                <CheckIcon
                  size={17}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
