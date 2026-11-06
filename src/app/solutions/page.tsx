import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { products, solutions } from "@/lib/data";

export const metadata: Metadata = { title: "Solutions", description: "Audio visual systems for conference rooms, control rooms, outdoor advertising, events, retail and education." };

export default function Solutions() {
  return (
    <>
      <PageHero title="Start with the space, not the screen" text="Every room has different viewing distances, light and running hours. Here is what we recommend for each." />
      <div className="mx-auto max-w-[1400px] space-y-16 px-5 pb-24 md:space-y-24 md:px-8">
        {solutions.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <Reveal className="grid items-center gap-8 md:grid-cols-12">
              <div className={`relative aspect-[16/10] overflow-hidden rounded-xl bg-paper md:col-span-7 ${i % 2 ? "md:order-2 md:col-start-6" : ""}`}><Image src={s.image} alt={s.name} fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" /></div>
              <div className={`md:col-span-4 ${i % 2 ? "md:order-1 md:col-start-1" : "md:col-start-9"}`}>
                <h2 className="text-3xl font-medium tracking-tighter md:text-4xl">{s.name}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{s.text}</p>
                <ul className="mt-5 space-y-2">{s.products.map((slug) => { const p = products.find((x) => x.slug === slug)!; return <li key={slug}><Link href={`/products/${slug}`} className="font-medium underline decoration-line underline-offset-4 hover:text-accent">{p.name}</Link></li>; })}</ul>
              </div>
            </Reveal>
          </section>
        ))}
      </div>
    </>
  );
}
