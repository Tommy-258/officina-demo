/**
 * Barra fissa in basso, visibile solo su mobile (< md):
 * "Chiama ora" sempre a portata di pollice + scorciatoia WhatsApp.
 * Componente statico (nessun JS lato client).
 */
import { site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-950/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="flex gap-3">
        <a href={site.phoneHref} className="btn-primary flex-1 shadow-lg shadow-accent-500/20">
          <PhoneIcon className="size-5" />
          Chiama ora
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrivici su WhatsApp"
          className="btn bg-[#25D366] !px-4 text-navy-950"
        >
          <WhatsAppIcon className="size-6" />
        </a>
      </div>
    </div>
  );
}
