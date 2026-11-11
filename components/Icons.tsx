/**
 * Icone SVG inline (stile "outline", tratto 2px).
 * Inline invece di una libreria esterna: zero dipendenze, zero richieste di rete
 * e solo le icone effettivamente usate finiscono nel bundle.
 * Tutte ereditano il colore dal testo (currentColor) e sono decorative
 * (aria-hidden): il significato è sempre affidato al testo accanto.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Wrapper comune per le icone a tratto */
function Outline({ children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ---------- Servizi ---------- */

export const OilIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M12 2.7c-2.6 3.4-6 7.4-6 11.3a6 6 0 0 0 12 0c0-3.9-3.4-7.9-6-11.3Z" />
    <path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" />
  </Outline>
);

export const BrakeIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
  </Outline>
);

export const TireIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <path d="m8.5 8.5 1.4 1.4M14.1 14.1l1.4 1.4M15.5 8.5l-1.4 1.4M9.9 14.1l-1.4 1.4" />
  </Outline>
);

export const DiagnosticsIcon = (p: IconProps) => (
  <Outline {...p}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M6.5 11h2.5l1.5-3 3 6 1.5-3h2.5" />
  </Outline>
);

export const SnowflakeIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M12 2v20M4.9 7l14.2 10M4.9 17 19.1 7" />
    <path d="m9.5 3.5 2.5 2 2.5-2M9.5 20.5l2.5-2 2.5 2" />
  </Outline>
);

export const ClipboardCheckIcon = (p: IconProps) => (
  <Outline {...p}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
    <path d="m9 13 2 2 4-4" />
  </Outline>
);

/* ---------- Perché noi ---------- */

export const AwardIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="12" cy="8" r="6" />
    <path d="M8.2 13.3 7 22l5-3 5 3-1.2-8.7" />
  </Outline>
);

export const ReceiptIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M5 2h14v20l-3-2-2 2-2-2-2 2-2-2-3 2Z" />
    <path d="M9 7h6M9 11h6M9 15h4" />
  </Outline>
);

export const TimerIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2 2M10 2h4" />
  </Outline>
);

/* ---------- UI / contatti ---------- */

export const PhoneIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </Outline>
);

export const CalendarIcon = (p: IconProps) => (
  <Outline {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Outline>
);

export const ClockIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </Outline>
);

export const MapPinIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Outline>
);

export const MailIcon = (p: IconProps) => (
  <Outline {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </Outline>
);

export const CheckIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Outline>
);

export const WrenchIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z" />
  </Outline>
);

export const MenuIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Outline>
);

export const CloseIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Outline>
);

/* ---------- Icone piene (stelle e brand) ---------- */

export const StarIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" />
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.5c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V14h2.7v8h3.3Z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <Outline {...p}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </Outline>
);
