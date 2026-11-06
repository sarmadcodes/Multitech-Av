import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/data";

export const metadata: Metadata = { title: "Services", description: "Consultation, system design, installation, training and after-sales support." };

export default function Services() {
  return (
    <>
      <PageHero title="We stay after the screen is on" text="Everything needed to plan, install and keep your system running, from one local team." />
      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-24 md:grid-cols-2 md:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:sticky md:top-24 md:self-start"><Image src="/img/real/boardroom-long.jpg" alt="Conference hall with a video wall" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
        <div className="space-y-10">
          {services.map((s) => <Reveal key={s.name} className="border-t-2 border-ink pt-5"><h2 className="text-3xl font-medium tracking-tighter">{s.name}</h2><p className="mt-3 max-w-[50ch] text-lg leading-relaxed text-muted">{s.text}</p></Reveal>)}
        </div>
      </section>
    </>
  );
}
