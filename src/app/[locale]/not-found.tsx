"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function NotFound() {
  const pathname = usePathname() ?? "/en";
  const segment = pathname.split("/")[1];
  const locale = isLocale(segment) ? segment : "en";
  const dict = getDictionary(locale);

  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-start justify-center px-5 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 text-3xl tracking-tight text-foreground md:text-4xl">
        {dict.notFound.title}
      </h1>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        {dict.notFound.body}
      </p>
      <Link
        href={`/${locale}`}
        className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
      >
        {dict.notFound.action}
      </Link>
    </main>
  );
}
