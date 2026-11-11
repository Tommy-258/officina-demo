/**
 * Intestazione standard di sezione: etichetta piccola + titolo + testo opzionale.
 * Usata da tutte le sezioni per mantenere coerenza visiva.
 */
type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
};

export default function SectionHeading({ eyebrow, title, intro, id }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-navy-300">{intro}</p>}
    </div>
  );
}
