# Officina Rossi — sito one-page (demo portfolio)

Sito vetrina per **Officina Rossi**, un'officina meccanica **fittizia** di Napoli.
Progetto dimostrativo per portfolio: nomi, numeri di telefono, indirizzo e recensioni sono inventati.

> One-page website for a fictional auto repair shop in Naples, Italy. Built with Next.js (App Router) + Tailwind CSS, exported as a fully static site.

## Stack

- **Next.js 16** (App Router) con export statico (`output: "export"`)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens in `app/globals.css`)
- Font self-hosted con `next/font` (Inter + Sora)
- Nessuna libreria UI o di icone: icone SVG inline, zero dipendenze extra

## Sezioni

1. **Hero**: titolo, sottotitolo, CTA "Prenota un intervento" e "Chiamaci", numeri chiave
2. **Servizi**: tagliando, freni, pneumatici, diagnosi elettronica, climatizzatore, revisione
3. **Perché sceglierci**: esperienza, prezzi trasparenti, tempi rapidi
4. **Recensioni**: 3 recensioni di esempio (dichiarate come tali)
5. **Dove siamo**: orari, indirizzo, contatti e mappa Google caricata su richiesta
6. **Contatti**: modulo (nome, telefono, modello auto, messaggio) con validazione lato client
7. **Footer**: pulsante WhatsApp, social, link rapidi
8. **Barra fissa "Chiama ora"** visibile solo su mobile

## Avvio in locale

Richiede Node.js 20.9 o superiore.

```bash
npm install
npm run dev        # sviluppo su http://localhost:3000
npm run build      # genera il sito statico nella cartella /out
npm start          # serve la cartella /out in locale
```

## Deploy su Vercel

1. Pubblica il repository su GitHub.
2. Su [vercel.com](https://vercel.com) → **Add New → Project** → importa il repository.
3. Vercel riconosce Next.js in automatico: nessuna configurazione necessaria.
4. (Opzionale) Imposta la variabile d'ambiente `NEXT_PUBLIC_SITE_URL` con il dominio
   definitivo (es. `https://www.officinarossi.it`): viene usata per canonical, Open Graph e sitemap.

Essendo un export statico, la cartella `out/` si può pubblicare anche su Netlify,
GitHub Pages, Cloudflare Pages o qualsiasi hosting statico.

## Struttura del progetto

```
app/
  layout.tsx           # <html>, font, metadati SEO/Open Graph, JSON-LD schema.org
  page.tsx             # composizione delle sezioni
  globals.css          # Tailwind + design tokens (colori, font, bottoni)
  opengraph-image.tsx  # immagine di condivisione 1200×630 generata in build
  icon.svg             # favicon
  robots.ts, sitemap.ts
components/
  Header.tsx           # header fisso + menu mobile (client)
  Hero.tsx, Services.tsx, WhyUs.tsx, Reviews.tsx
  Location.tsx         # orari, indirizzo, mappa
  MapEmbed.tsx         # mappa Google "a richiesta" (client)
  Contact.tsx          # sezione contatti
  ContactForm.tsx      # modulo con validazione (client)
  Footer.tsx, MobileCallBar.tsx
  SectionHeading.tsx   # titolo di sezione riutilizzabile
  Icons.tsx            # icone SVG inline
lib/
  site.ts              # TUTTI i dati dell'officina: contatti, orari, link
```

**Per adattare il sito a un'altra attività** basta modificare `lib/site.ts`, e i testi
nei singoli componenti.

## Scelte tecniche

**Prestazioni**
- Pagina interamente pre-renderizzata in HTML; JavaScript lato client solo per menu mobile, modulo e mappa.
- Nessuna immagine nell'hero: lo sfondo è CSS, quindi l'LCP è testo e appare subito.
- La mappa Google si carica **solo al click** (pattern "facade"): evita centinaia di KB di script
  al caricamento ed è più rispettosa della privacy (nessun contatto con Google senza azione dell'utente).
- Font self-hosted con `next/font`, senza spostamenti del layout.

**SEO**
- `title`, `meta description`, canonical, Open Graph e Twitter Card in `app/layout.tsx`.
- Immagine Open Graph generata automaticamente.
- Dati strutturati `AutoRepair` (schema.org) con indirizzo, telefono e orari.
- `robots.txt` e `sitemap.xml` generati in build. `lang="it"` sul documento.

**Accessibilità**
- HTML semantico (`header`, `nav`, `main`, `section` con `aria-labelledby`, `address`, `figure`/`blockquote`).
- Link "Vai al contenuto", stati di focus visibili, menu chiudibile con Esc.
- Contrasto AA: testo blu notte sui bottoni arancioni e verdi.
- Modulo con `label`, `aria-invalid`, `aria-describedby` e focus sul primo campo errato.
- Animazioni ridotte se l'utente imposta `prefers-reduced-motion`.

## Modulo di contatto

Il sito è statico, quindi **l'invio è simulato**: dopo la validazione compare un messaggio di conferma.
Per riceverlo davvero, in `components/ContactForm.tsx` sostituisci la simulazione in `handleSubmit`
con una chiamata a un servizio di form (Formspree, Web3Forms, Getform…), ad esempio:

```ts
await fetch("https://formspree.io/f/<il-tuo-id>", {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: JSON.stringify(values),
});
```

Se si passa a un backend proprio (API route o Server Action), va rimosso `output: "export"` da `next.config.ts`.
In un sito reale andrebbero aggiunti anche il consenso privacy (GDPR) e una pagina di informativa.

## Licenza

Progetto dimostrativo, libero di essere usato come base per altri lavori.
