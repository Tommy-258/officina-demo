/**
 * Sezione "Dove siamo": orari di apertura, indirizzo, contatti e mappa.
 */
import { openingHours, site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import MapEmbed from "./MapEmbed";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "./Icons";

export default function Location() {
  const { street, postalCode, city, region } = site.address;

  return (
    <section id="dove-siamo" aria-labelledby="dove-siamo-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="dove-siamo-title" eyebrow="Dove siamo" title="Orari e indirizzo" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            {/* Orari */}
            <div className="rounded-2xl border border-white/10 bg-navy-900 p-6">
              <h3 className="flex items-center gap-2.5 text-lg font-semibold">
                <ClockIcon className="size-5 text-accent-400" />
                Orari di apertura
              </h3>
              <dl className="mt-4 divide-y divide-white/10">
                {openingHours.map((row) => (
                  <div key={row.days} className="flex flex-col gap-0.5 py-3 sm:flex-row sm:justify-between">
                    <dt className="font-medium text-white">{row.days}</dt>
                    <dd className={row.hours === "Chiuso" ? "text-navy-400" : "text-navy-200"}>{row.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Indirizzo e contatti */}
            <address className="space-y-4 rounded-2xl border border-white/10 bg-navy-900 p-6 not-italic">
              <p className="flex gap-3">
                <MapPinIcon className="mt-0.5 size-5 shrink-0 text-accent-400" />
                <span>
                  {street}
                  <br />
                  {postalCode} {city} ({region})
                </span>
              </p>
              <p className="flex gap-3">
                <PhoneIcon className="mt-0.5 size-5 shrink-0 text-accent-400" />
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </p>
              <p className="flex gap-3">
                <MailIcon className="mt-0.5 size-5 shrink-0 text-accent-400" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          {/* Mappa (caricata solo su richiesta) */}
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:aspect-auto lg:min-h-[420px]">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
