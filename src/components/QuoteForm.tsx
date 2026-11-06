"use client";
import { FormEvent, useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { products } from "@/lib/data";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;
const field = "w-full rounded-lg border border-zinc-400 bg-white px-3.5 py-3 text-ink transition focus:border-accent";

export function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(data.get("name")).trim()) next.name = "Please enter your name.";
    if (String(data.get("phone")).replace(/\D/g, "").length < 10) next.phone = "Please enter a valid phone number.";
    if (!String(data.get("message")).trim()) next.message = "Please tell us a little about the project.";
    setErrors(next);
    // TODO: send to the client's chosen inbox. Demo only, nothing is transmitted yet.
    if (!Object.keys(next).length) setSent(true);
  };

  if (sent) return (
    <div role="status" className="rounded-xl border border-line bg-white p-8 text-ink">
      <CheckCircle size={36} className="text-accent" />
      <p className="mt-4 text-xl font-medium">Thanks, we have your request.</p>
      <p className="mt-2 text-muted">This is a demo form, so nothing has been sent yet.</p>
    </div>
  );

  const err = (k: keyof Errors) => errors[k] && <p id={`${k}-error`} className="text-sm text-accent-dark">{errors[k]}</p>;
  return (
    <form onSubmit={submit} noValidate className="grid gap-5 rounded-xl border border-line bg-white p-6 text-ink md:grid-cols-2 md:p-8">
      <div className="grid content-start gap-2"><label htmlFor="name" className="text-sm font-medium">Name</label><input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby="name-error" className={field} />{err("name")}</div>
      <div className="grid content-start gap-2"><label htmlFor="phone" className="text-sm font-medium">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby="phone-error" className={field} />{err("phone")}</div>
      <div className="grid content-start gap-2"><label htmlFor="company" className="text-sm font-medium">Company</label><input id="company" name="company" autoComplete="organization" className={field} /></div>
      <div className="grid content-start gap-2"><label htmlFor="product" className="text-sm font-medium">Interested in</label>
        <select id="product" name="product" className={field}><option>Not sure yet</option>{products.map((p) => <option key={p.slug}>{p.name}</option>)}</select></div>
      <div className="grid gap-2 md:col-span-2"><label htmlFor="message" className="text-sm font-medium">Project details</label><textarea id="message" name="message" rows={4} aria-invalid={!!errors.message} aria-describedby="message-error" className={field} />{err("message")}</div>
      <button className="rounded-lg bg-accent px-6 py-3.5 font-medium whitespace-nowrap text-white transition hover:bg-accent-dark active:scale-[0.98] md:col-span-2 md:justify-self-start">Get a Quote</button>
    </form>
  );
}
