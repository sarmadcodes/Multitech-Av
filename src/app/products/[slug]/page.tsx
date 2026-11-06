import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { products } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((x) => x.slug === slug);
  return product ? { title: product.name, description: product.summary } : {};
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  const related = products.filter((p) => p.slug !== slug && p.uses.some((u) => product.uses.includes(u))).slice(0, 3);
  const others = related.length ? related : products.filter((p) => p.slug !== slug).slice(0, 3);
  return (
    <>
      <section className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <Link href="/products" className="text-sm text-muted hover:text-accent">Products</Link>
          <h1 className="mt-3 text-4xl font-medium tracking-tighter md:text-6xl">{product.name}</h1>
          <p className="mt-2 text-muted">{product.brand}</p>
          <p className="mt-5 max-w-[50ch] text-lg leading-relaxed">{product.detail}</p>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-accent px-6 py-3.5 font-medium whitespace-nowrap text-white transition hover:bg-accent-dark active:scale-[0.98]">Get a Quote</Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-paper">
          <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" style={{ objectPosition: product.position }} />
        </div>
      </section>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="text-2xl font-medium tracking-tight">What you get</h2>
            <ul className="mt-5 space-y-3">{product.highlights.map((h) => <li key={h} className="flex gap-3"><Check size={22} className="shrink-0 text-accent" />{h}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-2xl font-medium tracking-tight">Where it works best</h2>
            <div className="mt-5 flex flex-wrap gap-2">{product.uses.map((u) => <span key={u} className="rounded-lg bg-white px-3.5 py-2 shadow-[inset_0_0_0_1px_var(--color-line)]">{u}</span>)}</div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        <h2 className="text-2xl font-medium tracking-tight">Related products</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {others.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-paper"><Image src={p.image} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" style={{ objectPosition: p.position }} /></div>
              <p className="mt-3 font-medium group-hover:text-accent">{p.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
