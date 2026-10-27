import { formatYear } from "@/lib/format";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { BrandMark } from "@/components/brand-mark";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";

export function SiteFooter({
  locale,
  footer,
  languageLabel,
}: {
  locale: Locale;
  footer: Dictionary["footer"];
  languageLabel: string;
}) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_auto]">
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-6 w-6 text-primary" />
            <span className="font-display text-2xl leading-none tracking-tight">
              orza
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {footer.tagline}
          </p>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title}>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {column.title}
            </p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.hash}>
                  <a
                    href={link.hash}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col items-start gap-4 md:items-end">
          <LocaleSwitcher locale={locale} label={languageLabel} />
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto w-full max-w-6xl px-5 py-5 text-xs text-muted-foreground">
          © {formatYear(locale)} Orza. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
