"use client";

import { useState } from "react";
import Link from "next/link";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { BrandMark } from "@/components/brand-mark";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { CtaLink } from "@/components/ui/cta-link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function SiteHeader({
  locale,
  nav,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5"
          aria-label="Orza"
        >
          <BrandMark className="h-6 w-6 text-primary" />
          <span className="font-display text-2xl leading-none tracking-tight">
            orza
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.items.map((item) => (
            <a
              key={item.hash}
              href={item.hash}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="hidden sm:block">
            <LocaleSwitcher locale={locale} label={nav.language} />
          </div>
          <CtaLink href="#pricing" className="hidden px-5 py-2.5 sm:inline-flex">
            {nav.cta}
          </CtaLink>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background md:hidden"
        >
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4">
            {nav.items.map((item) => (
              <a
                key={item.hash}
                href={item.hash}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-border pt-4">
              <LocaleSwitcher locale={locale} label={nav.language} />
              <CtaLink
                href="#pricing"
                className="px-5 py-2.5"
                onClick={() => setOpen(false)}
              >
                {nav.cta}
              </CtaLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
