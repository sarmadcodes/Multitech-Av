"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CaretDown, EnvelopeSimple, List, Phone, WhatsappLogo, X } from "@phosphor-icons/react";
import { contact, products } from "@/lib/data";
import { Logo } from "./Logo";

const links = [
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/partners", label: "Partners" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    // The contact strip scrolls away, so the open menu always fills the screen below the bar.
    if (open && window.scrollY < 36) window.scrollTo({ top: 36, behavior: "instant" });
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="bg-ink text-sm text-zinc-200">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between gap-4 px-5 md:px-8">
          <a href={contact.phoneHref} className="flex items-center gap-1.5 whitespace-nowrap hover:text-white"><Phone size={15} />{contact.phone}</a>
          <a href={contact.landlineHref} className="hidden items-center gap-1.5 whitespace-nowrap hover:text-white md:flex md:mr-auto"><Phone size={15} />{contact.landline}</a>
          <a href={`mailto:${contact.email}`} aria-label={`Email ${contact.email}`} className="flex items-center gap-1.5 hover:text-white"><EnvelopeSimple size={16} /><span className="hidden sm:inline">{contact.email}</span></a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between gap-3 px-5 md:px-8">
          <Link href="/" aria-label="Multitech home">
            <span className="sm:hidden"><Logo tagline={false} /></span>
            <span className="hidden sm:block"><Logo /></span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium xl:flex">
            <div className="group relative">
              <Link href="/products" className="flex items-center gap-1 py-6 hover:text-accent">Products <CaretDown size={13} /></Link>
              <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 translate-y-1 rounded-b-xl border border-line bg-white p-3 opacity-0 shadow-[0_24px_50px_-20px_rgb(16_17_20/0.25)] transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-1">
                  {products.map((p) => (
                    <Link key={p.slug} href={`/products/${p.slug}`} className="rounded-lg px-3 py-2.5 hover:bg-paper">
                      <span className="block">{p.name}</span>
                      <span className="block text-xs font-normal text-muted">{p.brand}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {links.map((l) => <Link key={l.href} href={l.href} className={`hover:text-accent ${pathname === l.href ? "text-accent" : ""}`}>{l.label}</Link>)}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/contact" className="rounded-lg bg-accent px-3.5 py-2.5 text-sm font-medium whitespace-nowrap text-white transition hover:bg-accent-dark active:scale-[0.98] md:px-4">Get a Quote</Link>
            <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-lg border border-line transition active:scale-95 xl:hidden">
              {open ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="flex h-[calc(100dvh-69px)] flex-col overflow-y-auto bg-white px-5 pt-3 xl:hidden">
            <button onClick={() => setProductsOpen(!productsOpen)} aria-expanded={productsOpen} className="flex items-center justify-between border-b border-line py-4 text-2xl font-medium tracking-tight">
              Products <CaretDown size={20} className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ${productsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 py-4">
                  <Link href="/products" className="col-span-2 font-medium text-accent">All products</Link>
                  {products.map((p) => <Link key={p.slug} href={`/products/${p.slug}`} className="text-[15px]">{p.name}</Link>)}
                </div>
              </div>
            </div>
            {links.map((l) => <Link key={l.href} href={l.href} className="border-b border-line py-4 text-2xl font-medium tracking-tight">{l.label}</Link>)}
            <div className="mt-auto grid grid-cols-2 gap-3 py-6">
              <a href={contact.phoneHref} className="flex items-center justify-center gap-2 rounded-lg border border-ink py-3.5 font-medium"><Phone size={18} />Call</a>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-[#128c4a] py-3.5 font-medium text-white"><WhatsappLogo size={20} />WhatsApp</a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
