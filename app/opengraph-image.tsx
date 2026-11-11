/**
 * Immagine Open Graph (1200×630) generata in fase di build.
 * È quella che appare quando il link viene condiviso su WhatsApp, Facebook,
 * LinkedIn, ecc. Next.js aggiunge automaticamente i meta tag og:image.
 */
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${site.name} – Officina meccanica a Napoli`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #091325 0%, #172a47 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", width: 120, height: 10, background: "#ff7a1a", borderRadius: 5 }} />
        <div style={{ display: "flex", marginTop: 40, fontSize: 96, fontWeight: 800 }}>
          Officina&nbsp;<span style={{ color: "#ff7a1a" }}>Rossi</span>
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 40, color: "#c3cfe2" }}>
          Officina meccanica a Napoli dal 1987
        </div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 30, color: "#94a7c6" }}>
          Tagliando · Freni · Pneumatici · Diagnosi · Clima · Revisione
        </div>
      </div>
    ),
    size,
  );
}
