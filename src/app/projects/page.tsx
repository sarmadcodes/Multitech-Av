import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { clients } from "@/lib/data";

export const metadata: Metadata = { title: "Projects", description: "Video wall and LED screen installations across Pakistan." };

export default function Projects() {
  return (
    <>
      <PageHero title="Work installed across Pakistan" text="A selection of boardrooms, auditoriums, receptions and storefronts delivered by our teams." />
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8"><ProjectGrid /></section>
      <section className="bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
          <h2 className="text-3xl font-medium tracking-tighter md:text-4xl">Organisations we have worked with</h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c) => (
              <li key={c.logo} className="relative h-32 rounded-xl bg-white shadow-[inset_0_0_0_1px_var(--color-line)]">
                <Image src={`/img/clients/${c.logo}.png`} alt={c.name} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-contain p-5" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
