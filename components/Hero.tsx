/**
 * Hero: titolo principale, sottotitolo, due call-to-action e un riquadro
 * con i numeri chiave. Nessuna immagine pesante: lo sfondo è puro CSS,
 * così il contenuto principale (LCP) è testo e si carica subito.
 */
import { site } from "@/lib/site";
import { CalendarIcon, CheckIcon, PhoneIcon, StarIcon } from "./Icons";

const stats = [
  { value: "35+", label: "anni di esperienza" },
  { value: "4,9", label: "valutazione media", star: true },
  { value: "24h", label: "per la maggior parte dei lavori" },
];

const highlights = ["Preventivo gratuito", "Ricambi originali o equivalenti", "Garanzia 12 mesi"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Sfondo decorativo: bagliore arancione + griglia sottile */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-accent-500/15 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] size-[28rem] rounded-full bg-navy-600/30 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="eyebrow">{site.tagline}</p>
          <h1 className="mt-4 text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-6xl">
            La tua auto in buone mani,{" "}
            <span className="text-accent-400">senza sorprese.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
            Meccanica, elettronica e revisione nel cuore di Napoli. Ti diciamo prima quanto costa e
            quando è pronta — e manteniamo la parola.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contatti" className="btn-primary">
              <CalendarIcon className="size-5" />
              Prenota un intervento
            </a>
            <a href={site.phoneHref} className="btn-ghost">
              <PhoneIcon className="size-5" />
              Chiamaci
            </a>
          </div>

          <ul className="mt-9 flex flex-col gap-2.5 text-sm text-navy-200 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <CheckIcon className="size-4 text-accent-400" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Riquadro con i numeri chiave */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-navy-800/80 to-navy-900/80 p-6 shadow-2xl shadow-black/40 sm:p-8">
          <dl className="grid gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0">
                {/* dt (etichetta) prima nel DOM per gli screen reader, mostrata dopo con `order` */}
                <dt className="order-2 text-sm leading-snug text-navy-300">{s.label}</dt>
                <dd className="order-1 flex shrink-0 items-center gap-1.5 font-display text-4xl font-extrabold text-white sm:text-5xl">
                  {s.value}
                  {s.star && <StarIcon className="size-7 text-accent-400" />}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
