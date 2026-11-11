/**
 * Sezione "Recensioni": tre recensioni brevi.
 * NB: recensioni e nomi sono FITTIZI (demo di portfolio) e lo dichiariamo
 * esplicitamente in pagina.
 */
import SectionHeading from "./SectionHeading";
import { StarIcon } from "./Icons";

const reviews = [
  {
    name: "Marco R.",
    car: "Fiat Panda",
    text: "Preventivo chiaro al telefono e auto pronta il giorno stesso. Prezzo identico a quello concordato.",
  },
  {
    name: "Giulia S.",
    car: "Toyota Yaris Hybrid",
    text: "Mi hanno spiegato con calma il problema della spia motore, senza farmi cambiare pezzi inutili. Torno sicuramente.",
  },
  {
    name: "Antonio D.",
    car: "Volkswagen Golf",
    text: "Cambio gomme e convergenza in un'ora. Officina pulita, personale gentile e puntuale.",
  },
];

export default function Reviews() {
  return (
    <section id="recensioni" aria-labelledby="recensioni-title" className="bg-navy-900 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="recensioni-title" eyebrow="Recensioni" title="Cosa dicono i nostri clienti" />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-950/60 p-6">
                <div className="flex gap-1 text-accent-400" role="img" aria-label="Valutazione: 5 stelle su 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="size-5" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-navy-100">
                  <p>“{r.text}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {/* Avatar con le iniziali: nessuna foto da caricare */}
                  <span
                    aria-hidden="true"
                    className="grid size-10 place-items-center rounded-full bg-navy-700 font-display text-sm font-bold text-white"
                  >
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{r.name}</span>
                    <span className="block text-sm text-navy-400">{r.car}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-navy-400">Recensioni di esempio a scopo dimostrativo.</p>
      </div>
    </section>
  );
}
