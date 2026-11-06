import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/data";

export const metadata: Metadata = { title: "Products", description: "LED walls, LCD video walls, digital signage, interactive displays and conference systems." };

export default function Products() {
  return (
    <>
      <PageHero title="Displays and systems for every space" text="Products from global manufacturers, selected, installed and supported by our team in Pakistan." />
      <section className="mx-auto grid max-w-[1400px] gap-x-6 gap-y-12 px-5 pb-24 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.06}>
            <Link href={`/products/${p.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-paper">
                <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" style={{ objectPosition: p.position }} />
              </div>
              <p className="mt-4 text-sm text-muted">{p.brand}</p>
              <h2 className="mt-1 text-xl font-medium tracking-tight group-hover:text-accent">{p.name}</h2>
              <p className="mt-1.5 leading-relaxed text-muted">{p.summary}</p>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
