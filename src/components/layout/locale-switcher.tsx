"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeCookie, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <div
      aria-label={label}
      className="flex items-center gap-0.5 rounded-full border border-border p-0.5"
    >
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={`/${item}${rest ? `/${rest}` : ""}`}
            aria-current={active ? "page" : undefined}
            onClick={() => {
              document.cookie = `${localeCookie}=${item};path=/;max-age=31536000;samesite=lax`;
            }}
            className={cn(
              "rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
