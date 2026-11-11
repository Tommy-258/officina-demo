"use client";

/**
 * Header fisso con logo, navigazione a ancore e menu a scomparsa su mobile.
 * È un Client Component solo per gestire l'apertura/chiusura del menu.
 */
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon, WrenchIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Chiude il menu con il tasto Esc (accessibilità da tastiera)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} – torna all'inizio`}>
          <span className="grid size-9 place-items-center rounded-lg bg-accent-500 text-navy-950">
            <WrenchIcon className="size-5" />
          </span>
          <span className="font-display text-lg font-bold text-white">
            Officina <span className="text-accent-400">Rossi</span>
          </span>
        </a>

        {/* Navigazione desktop */}
        <nav aria-label="Navigazione principale" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-navy-200 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={site.phoneHref} className="btn-primary hidden !px-4 !py-2.5 text-sm md:inline-flex">
          <PhoneIcon className="size-4" />
          {site.phoneDisplay}
        </a>

        {/* Pulsante menu mobile */}
        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        id="mobile-menu"
        aria-label="Navigazione mobile"
        className={`border-t border-white/10 bg-navy-950 md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col px-4 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-navy-100 hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
