import type { NextConfig } from "next";

/**
 * Configurazione Next.js
 * - output "export": genera un sito 100% statico nella cartella /out
 *   (deployabile su Vercel, Netlify, GitHub Pages o qualsiasi hosting statico).
 * - images.unoptimized: necessario con l'export statico (nessun server per
 *   l'ottimizzazione delle immagini a runtime).
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
