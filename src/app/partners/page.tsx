import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { partners, products } from "@/lib/data";

export const metadata: Metadata = { title: "Partners", description: "Multitech works with Ledman, Samsung, Tricolor, iBoard and BNT." };

export default function Partners() {
  return (
    <>
      <PageHero title="Global manufacturers, local support" text="We supply and install products from our authorized partners, and back them with engineers in Pakistan." />
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-8">
        {partners.map((p) => (
          <Reveal key={p.name} className="grid gap-4 border-t border-line py-10 md:grid-cols-[1fr_1.2fr_1fr]">
            <h2 className="text-4xl font-semibold tracking-tighter">{p.name}</h2>
            <p className="text-lg text-muted">{p.role}</p>
            <ul className="space-y-1 md:text-right">
              {products.filter((x) => x.brand === p.name).map((x) => <li key={x.slug}><Link href={`/products/${x.slug}`} className="font-medium hover:text-accent">{x.name}</Link></li>)}
            </ul>
          </Reveal>
        ))}
      </section>
    </>
  );
}
