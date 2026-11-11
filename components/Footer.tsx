/**
 * Footer: pulsante WhatsApp, link social, contatti rapidi e note legali.
 */
import { navLinks, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, WhatsAppIcon, WrenchIcon } from "./Icons";

const socials = [
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    // pb extra su mobile: lascia spazio alla barra fissa "Chiama ora"
    <footer className="border-t border-white/10 bg-navy-950 pt-14 pb-28 md:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
              <span className="grid size-9 place-items-center rounded-lg bg-accent-500 text-navy-950">
                <WrenchIcon className="size-5" />
              </span>
              <span>
                Officina <span className="text-accent-400">Rossi</span>
              </span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy-300">
              {site.address.street}, {site.address.postalCode} {site.address.city}
              <br />
              Tel. {site.phoneDisplay}
            </p>

            {/* Pulsante WhatsApp: verde ufficiale con testo scuro (contrasto AA) */}
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-6 bg-[#25D366] text-navy-950 hover:bg-[#3ee07a]"
            >
              <WhatsAppIcon className="size-5" />
              Scrivici su WhatsApp
            </a>
          </div>

          <nav aria-label="Link del footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-navy-300 hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-white">Seguici</p>
            <ul className="mt-3 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} su ${label}`}
                    className="grid size-11 place-items-center rounded-xl border border-white/15 text-navy-200 transition-colors hover:border-accent-500 hover:text-accent-400"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-navy-400 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name} · P.IVA 00000000000
          </p>
          <p>Attività fittizia — sito dimostrativo per portfolio.</p>
        </div>
      </div>
    </footer>
  );
}
