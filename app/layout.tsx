import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { site, openingHoursSchema } from "@/lib/site";
import "./globals.css";

/*
 * Font self-hosted tramite next/font: vengono scaricati in fase di build e
 * serviti dallo stesso dominio → nessuna richiesta a Google Fonts lato client
 * e nessuno "spostamento" del layout (CLS) grazie al font di fallback calibrato.
 */
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const heading = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const title = `${site.name} | Officina meccanica a Napoli`;

/* ---------- SEO: title, description, Open Graph, Twitter ---------- */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  keywords: [
    "officina Napoli",
    "meccanico Napoli",
    "tagliando auto",
    "revisione auto Napoli",
    "cambio gomme",
    "diagnosi elettronica",
    "ricarica climatizzatore",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    // L'immagine OG è generata da app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#091325",
  width: "device-width",
  initialScale: 1,
};

/*
 * Dati strutturati schema.org (AutoRepair): aiutano Google a mostrare
 * indirizzo, orari e telefono direttamente nei risultati di ricerca.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  openingHours: openingHoursSchema,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${body.variable} ${heading.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // JSON statico generato da dati interni, nessun input utente
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
