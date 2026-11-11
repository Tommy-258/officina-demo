/**
 * Sezione "Contatti": testo introduttivo + modulo di prenotazione.
 * Il modulo è un Client Component separato, così il resto resta statico.
 */
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contatti" aria-labelledby="contatti-title" className="bg-navy-900/50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading
            id="contatti-title"
            eyebrow="Prenota"
            title="Prenota un intervento"
            intro="Compila il modulo e ti richiamiamo per fissare l'appuntamento e darti un preventivo. Nessun impegno."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a href={site.phoneHref} className="btn-ghost">
              <PhoneIcon className="size-5" />
              {site.phoneDisplay}
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <WhatsAppIcon className="size-5 text-[#25D366]" />
              Scrivici su WhatsApp
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
