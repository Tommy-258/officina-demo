"use client";

/**
 * Modulo di contatto con validazione lato client.
 *
 * - Validazione al blur di ogni campo e all'invio (messaggi in italiano).
 * - Accessibile: aria-invalid, aria-describedby collegati ai messaggi d'errore,
 *   focus automatico sul primo campo non valido.
 * - Demo: il sito è statico e non ha un backend, quindi l'invio simula
 *   l'esito positivo. Per renderlo funzionante basta inviare i dati a un
 *   servizio come Formspree, Web3Forms o una API route (vedi README).
 */
import { useRef, useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { CheckIcon } from "./Icons";

type Fields = { name: string; phone: string; car: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = { name: "", phone: "", car: "", message: "" };

/** Regole di validazione: restituiscono un messaggio d'errore o undefined */
const validators: Record<keyof Fields, (v: string) => string | undefined> = {
  name: (v) => (v.trim().length < 2 ? "Inserisci il tuo nome." : undefined),
  phone: (v) => {
    // Accetta cifre, spazi, trattini, punti e "+" iniziale; 6–15 cifre totali
    const digits = v.replace(/\D/g, "");
    if (!v.trim()) return "Inserisci un numero di telefono.";
    if (!/^\+?[\d\s.\-/]+$/.test(v.trim()) || digits.length < 6 || digits.length > 15)
      return "Il numero di telefono non sembra valido.";
  },
  car: (v) => (v.trim().length < 2 ? "Indica marca e modello dell'auto." : undefined),
  message: (v) =>
    v.trim().length < 10 ? "Descrivi brevemente l'intervento (almeno 10 caratteri)." : undefined,
};

function validate(values: Fields): Errors {
  const errors: Errors = {};
  (Object.keys(validators) as (keyof Fields)[]).forEach((key) => {
    const msg = validators[key](values[key]);
    if (msg) errors[key] = msg;
  });
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  // Aggiorna il valore e, se il campo era già in errore, ri-valida in tempo reale
  const handleChange = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: validators[key](value) }));
  };

  const handleBlur = (key: keyof Fields) => {
    setErrors((e) => ({ ...e, [key]: validators[key](values[key]) }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);

    const firstInvalid = (Object.keys(found) as (keyof Fields)[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    // Simulazione dell'invio (sostituire con una vera chiamata fetch)
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
    setValues(initial);
  };

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-center rounded-2xl border border-accent-500/40 bg-navy-900 p-8 text-center sm:p-12">
        <span className="grid size-14 place-items-center rounded-full bg-accent-500 text-navy-950">
          <CheckIcon className="size-7" />
        </span>
        <h3 className="mt-5 text-2xl font-bold">Richiesta inviata!</h3>
        <p className="mt-2 max-w-sm text-navy-300">
          Grazie, ti richiamiamo entro poche ore lavorative per confermare l&apos;appuntamento.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-ghost mt-6">
          Invia un&apos;altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate // usiamo la nostra validazione al posto dei popup del browser
      className="rounded-2xl border border-white/10 bg-navy-900 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" name="name" autoComplete="name" value={values.name} error={errors.name}
          onChange={handleChange} onBlur={handleBlur} />
        <Field label="Telefono" name="phone" type="tel" inputMode="tel" autoComplete="tel"
          placeholder="es. 333 123 4567" value={values.phone} error={errors.phone}
          onChange={handleChange} onBlur={handleBlur} />
        <div className="sm:col-span-2">
          <Field label="Modello dell'auto" name="car" placeholder="es. Fiat Panda 1.2 2018"
            value={values.car} error={errors.car} onChange={handleChange} onBlur={handleBlur} />
        </div>
        <div className="sm:col-span-2">
          <Field label="Messaggio" name="message" multiline
            placeholder="Di che intervento hai bisogno? Quando preferisci passare?"
            value={values.message} error={errors.message} onChange={handleChange} onBlur={handleBlur} />
        </div>
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary mt-6 w-full disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Invio in corso…" : "Invia richiesta"}
      </button>
      <p className="mt-4 text-xs text-navy-400">
        Preferisci parlare con qualcuno? Chiama il{" "}
        <a href={site.phoneHref} className="text-navy-200 underline underline-offset-2 hover:text-white">
          {site.phoneDisplay}
        </a>
        . I dati inseriti servono solo a ricontattarti.
      </p>
    </form>
  );
}

/* ---------- Campo singolo (input o textarea) con etichetta ed errore ---------- */

type FieldProps = {
  label: string;
  name: keyof Fields;
  value: string;
  error?: string;
  onChange: (name: keyof Fields, value: string) => void;
  onBlur: (name: keyof Fields) => void;
  multiline?: boolean;
  type?: string;
  inputMode?: "tel" | "text";
  autoComplete?: string;
  placeholder?: string;
};

function Field({ label, name, value, error, onChange, onBlur, multiline, ...rest }: FieldProps) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  const className = `mt-2 block w-full rounded-xl border bg-navy-950 px-4 py-3 text-white placeholder:text-navy-500 transition-colors focus:outline-none focus:ring-2 ${
    error
      ? "border-red-400 focus:ring-red-400/40"
      : "border-white/15 focus:border-accent-500 focus:ring-accent-500/30"
  }`;

  const common = {
    id,
    name,
    value,
    required: true,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    onBlur: () => onBlur(name),
    className,
  };

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy-100">
        {label}
      </label>
      {multiline ? (
        <textarea {...common} rows={5} placeholder={rest.placeholder}
          onChange={(e) => onChange(name, e.target.value)} />
      ) : (
        <input {...common} {...rest} type={rest.type ?? "text"}
          onChange={(e) => onChange(name, e.target.value)} />
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
