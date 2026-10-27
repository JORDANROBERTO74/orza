import { ImageResponse } from "next/og";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const alt = "Orza — a shared household budget";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f2e24",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#f7f5ef",
            fontSize: "34px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "32px",
              height: "32px",
              borderRadius: "999px",
              border: "3px solid #d9a05b",
            }}
          />
          <span>orza</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "#f7f5ef",
              fontSize: "68px",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            {dict.cta.title}
          </div>
          <div style={{ color: "rgba(247,245,239,0.72)", fontSize: "30px" }}>
            {dict.footer.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
