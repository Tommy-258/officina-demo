/**
 * Sezione "Perché sceglierci": i tre punti di forza dell'officina.
 */
import SectionHeading from "./SectionHeading";
import { AwardIcon, ReceiptIcon, TimerIcon } from "./Icons";

const reasons = [
  {
    Icon: AwardIcon,
    title: "Esperienza dal 1987",
    text: "Tre generazioni di meccanici e formazione continua sulle nuove motorizzazioni, ibride comprese.",
  },
  {
    Icon: ReceiptIcon,
    title: "Prezzi trasparenti",
    text: "Preventivo scritto prima di iniziare. Se durante il lavoro serve altro, ti chiamiamo: niente extra a sorpresa.",
  },
  {
    Icon: TimerIcon,
    title: "Tempi rapidi",
    text: "Tagliandi e piccoli interventi in giornata. Ti avvisiamo con un messaggio appena l'auto è pronta.",
  },
];

export default function WhyUs() {
  return (
    <section id="perche-noi" aria-labelledby="perche-noi-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="perche-noi-title" eyebrow="Perché sceglierci" title="Un'officina di cui fidarsi" />

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {reasons.map(({ Icon, title, text }, i) => (
            <div key={title} className="relative border-t-2 border-accent-500 pt-6">
              <span className="absolute -top-3.5 right-0 bg-navy-950 pl-3 font-display text-sm font-bold text-navy-400">
                0{i + 1}
              </span>
              <Icon className="size-8 text-accent-400" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-navy-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
