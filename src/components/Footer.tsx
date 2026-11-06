import Link from "next/link";
import { contact, products } from "@/lib/data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1.6fr] md:px-8">
        <div>
          <Logo light />
          <p className="mt-4 max-w-[34ch] leading-relaxed text-zinc-300">LED screens and audio visual systems, designed and installed across Pakistan.</p>
          <a href={`mailto:${contact.email}`} className="mt-6 block hover:text-red-300">{contact.email}</a>
          <a href={contact.phoneHref} className="mt-1 block hover:text-red-300">{contact.phone}</a>
          <a href={contact.landlineHref} className="mt-1 block hover:text-red-300">{contact.landline}</a>
        </div>
        <div>
          <p className="font-medium">Products</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {products.slice(0, 6).map((p) => <li key={p.slug}><Link href={`/products/${p.slug}`} className="hover:text-red-300">{p.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="font-medium">Offices</p>
          <ul className="mt-4 grid grid-cols-2 gap-5 text-sm text-zinc-300">
            {contact.offices.map((o) => <li key={o.city}><span className="block text-white">{o.city}</span>{o.address}<span className="block">{o.phone}</span></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1400px] px-5 py-5 text-sm text-zinc-300 md:px-8">© {new Date().getFullYear()} Multitech. All rights reserved.</p>
      </div>
    </footer>
  );
}
