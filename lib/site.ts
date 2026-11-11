/**
 * Dati centrali del sito.
 * Tutti i contatti, gli orari e i contenuti testuali "di business" stanno qui,
 * così per adattare il template a un'altra officina basta modificare questo file.
 *
 * NB: "Officina Rossi" è un'attività FITTIZIA creata per una demo di portfolio.
 * Numeri, indirizzo e recensioni sono inventati.
 */

export const site = {
  name: "Officina Rossi",
  tagline: "Autoriparazioni a Napoli dal 1987",
  description:
    "Officina meccanica a Napoli: tagliando, freni, pneumatici, diagnosi elettronica, climatizzatore e revisione. Preventivi chiari e tempi rapidi.",
  // URL pubblico usato per canonical e Open Graph (sovrascrivibile da env).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://officina-rossi.vercel.app",
  locale: "it_IT",

  // Contatti (fittizi)
  phoneDisplay: "081 123 4567",
  phoneHref: "tel:+390811234567",
  whatsappHref:
    "https://wa.me/390811234567?text=Ciao%2C%20vorrei%20informazioni%20per%20un%20intervento%20sulla%20mia%20auto.",
  email: "info@officinarossi.example",

  address: {
    street: "Via dei Meccanici 42",
    postalCode: "80142",
    city: "Napoli",
    region: "NA",
    country: "IT",
  },
  // Link a Google Maps (ricerca generica sulla città: l'indirizzo è fittizio)
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Napoli",
  mapsEmbedSrc: "https://www.google.com/maps?q=Napoli&z=13&output=embed",

  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

/** Orari di apertura (mostrati nella sezione "Dove siamo") */
export const openingHours = [
  { days: "Lunedì – Venerdì", hours: "08:00 – 13:00 · 14:30 – 19:00" },
  { days: "Sabato", hours: "08:30 – 13:00" },
  { days: "Domenica", hours: "Chiuso" },
] as const;

/** Formato schema.org per gli stessi orari (usato nel JSON-LD) */
export const openingHoursSchema = [
  "Mo-Fr 08:00-13:00",
  "Mo-Fr 14:30-19:00",
  "Sa 08:30-13:00",
];

/** Link di navigazione (ancore verso le sezioni della pagina) */
export const navLinks = [
  { href: "#servizi", label: "Servizi" },
  { href: "#perche-noi", label: "Perché noi" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#dove-siamo", label: "Dove siamo" },
  { href: "#contatti", label: "Contatti" },
] as const;
