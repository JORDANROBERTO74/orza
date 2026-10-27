import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { absoluteUrl } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { Values } from "@/components/sections/values";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FeatureBlock } from "@/components/sections/feature-block";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/json-ld";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const jsonLd = structuredData(locale, dict.meta.description);

  return (
    <main>
      <Hero hero={dict.hero} />
      <Values values={dict.values} />
      <HowItWorks how={dict.how} />
      <FeatureBlock
        id="product"
        image="/images/month-ledger.jpg"
        feature={dict.featureMonth}
      />
      <FeatureBlock
        id="shared"
        image="/images/split-household.jpg"
        feature={dict.featureSplit}
        reverse
      />
      <Pricing pricing={dict.pricing} locale={locale} />
      <Faq faq={dict.faq} />
      <CtaBand cta={dict.cta} />
      <JsonLd data={jsonLd} />
    </main>
  );
}

function structuredData(locale: Locale, description: string) {
  const organizationId = `${site.url}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.name,
        url: site.url,
        logo: absoluteUrl("/icon.svg"),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description,
        inLanguage: locale,
        publisher: { "@id": organizationId },
      },
    ],
  };
}
