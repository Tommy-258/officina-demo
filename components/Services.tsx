/**
 * Sezione "Servizi": griglia di card con icona, titolo e breve descrizione.
 * Per aggiungere/rimuovere un servizio basta modificare l'array `services`.
 */
import type { ComponentType, SVGProps } from "react";
import SectionHeading from "./SectionHeading";
import {
  BrakeIcon,
  ClipboardCheckIcon,
  DiagnosticsIcon,
  OilIcon,
  SnowflakeIcon,
  TireIcon,
} from "./Icons";

type Service = {
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    title: "Tagliando e cambio olio",
    description:
      "Olio, filtri e controlli secondo il libretto del costruttore. Il tagliando mantiene valida la garanzia della casa.",
    Icon: OilIcon,
  },
  {
    title: "Freni",
    description:
      "Pastiglie, dischi e liquido freni. Controllo gratuito dello spessore e prova su strada a fine lavoro.",
    Icon: BrakeIcon,
  },
  {
    title: "Pneumatici",
    description:
      "Cambio gomme stagionale, equilibratura, convergenza e deposito pneumatici con etichetta.",
    Icon: TireIcon,
  },
  {
    title: "Diagnosi elettronica",
    description:
      "Spia accesa sul cruscotto? Leggiamo le centraline con strumenti multimarca e ti spieghiamo cosa significa.",
    Icon: DiagnosticsIcon,
  },
  {
    title: "Climatizzatore",
    description:
      "Ricarica gas, ricerca perdite e sanificazione dell'impianto per un abitacolo fresco e pulito.",
    Icon: SnowflakeIcon,
  },
  {
    title: "Revisione",
    description:
      "Pre-controllo e revisione ministeriale. Sistemiamo subito eventuali anomalie, senza doverti far tornare.",
    Icon: ClipboardCheckIcon,
  },
];

export default function Services() {
  return (
    <section id="servizi" aria-labelledby="servizi-title" className="bg-navy-900 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="servizi-title"
          eyebrow="Servizi"
          title="Tutto quello che serve alla tua auto"
          intro="Auto di ogni marca, benzina, diesel, GPL, metano e ibride. Un solo punto di riferimento per manutenzione e riparazioni."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <li
              key={title}
              className="group rounded-2xl border border-white/10 bg-navy-950/60 p-6 transition-colors hover:border-accent-500/50"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-navy-950">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-navy-300">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
