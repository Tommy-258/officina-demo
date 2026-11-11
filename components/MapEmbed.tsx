"use client";

/**
 * Mappa Google "a richiesta" (pattern facade).
 * All'apertura della pagina mostriamo solo un segnaposto leggero: l'iframe di
 * Google Maps (centinaia di KB di JS + cookie di terze parti) viene caricato
 * solo quando l'utente clicca. Vantaggi:
 *  - punteggio Lighthouse migliore (niente script pesanti al caricamento)
 *  - più rispettoso della privacy (nessun contatto con Google senza consenso)
 */
import { useState } from "react";
import { site } from "@/lib/site";
import { MapPinIcon } from "./Icons";

export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={`Mappa: ${site.name}, ${site.address.city}`}
        src={site.mapsEmbedSrc}
        className="size-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <div className="relative grid size-full place-items-center overflow-hidden bg-navy-800">
      {/* Finta mappa stilizzata in puro CSS */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgb(255_255_255/0.07)_2px,transparent_2px),linear-gradient(90deg,rgb(255_255_255/0.07)_2px,transparent_2px),linear-gradient(35deg,transparent_48%,rgb(255_255_255/0.12)_48%,rgb(255_255_255/0.12)_52%,transparent_52%)] [background-size:56px_56px,56px_56px,100%_100%]"
      />
      <div className="relative flex flex-col items-center gap-4 p-6 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-accent-500 text-navy-950 shadow-lg shadow-accent-500/30">
          <MapPinIcon className="size-7" />
        </span>
        <p className="text-sm text-navy-200">
          La mappa viene caricata da Google Maps solo su tua richiesta.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => setLoaded(true)} className="btn-primary !py-2.5 text-sm">
            Mostra la mappa
          </button>
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !py-2.5 text-sm"
          >
            Apri in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
