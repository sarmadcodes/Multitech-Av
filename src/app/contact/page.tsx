import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { contact } from "@/lib/data";

export const metadata: Metadata = { title: "Contact", description: "Request a quote for LED screens, video walls and audio visual systems." };

export default function Contact() {
  return (
    <>
      <PageHero title="Get a quote" text="Share a few details about your project and our team will get back to you." />
      <section className="mx-auto grid max-w-[1400px] items-start gap-12 px-5 pb-24 md:grid-cols-[1.4fr_1fr] md:px-8">
        <QuoteForm />
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1">
          {contact.offices.map((o) => <div key={o.city}><h2 className="text-xl font-medium tracking-tight">{o.city}</h2><p className="mt-1 text-muted">{o.address}</p><p className="text-muted">{o.phone}</p></div>)}
          <div><h2 className="text-xl font-medium tracking-tight">Email</h2><a href={`mailto:${contact.email}`} className="mt-1 block text-muted hover:text-accent">{contact.email}</a></div>
        </div>
      </section>
    </>
  );
}
