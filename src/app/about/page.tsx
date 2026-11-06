import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Counter } from "@/components/Counter";
import { stats } from "@/lib/data";

export const metadata: Metadata = { title: "About", description: "Multitech has delivered audio visual systems in Pakistan since 2006." };

export default function About() {
  return (
    <>
      <PageHero title="Audio visual specialists since 2006" text="We help organisations choose, install and run display and sound systems that suit how they actually work." />
      <div className="relative mx-auto aspect-[21/9] max-w-[1400px] overflow-hidden md:rounded-xl"><Image src="/img/stock/stage.jpg" alt="Stage with LED screens at a concert" fill priority sizes="100vw" className="object-cover object-[center_65%]" /></div>
      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
        <h2 className="max-w-[16ch] text-3xl font-medium tracking-tighter md:text-5xl">Start with the need, then find the technology</h2>
        <div className="max-w-[58ch] space-y-5 text-lg leading-relaxed text-muted">
          <p>Every project begins with a study of the client&apos;s needs and plans for growth. Only then do we recommend a system, so it still fits as the organisation expands.</p>
          <p>Today we work with defence, government, corporate, education and retail clients from offices in Karachi, Lahore, Islamabad and Peshawar.</p>
        </div>
      </section>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 md:grid-cols-3 md:px-8">
          {stats.map((s) => <div key={s.label}><p className="font-mono text-6xl font-medium tracking-tight"><Counter value={s.value} suffix={s.suffix} /></p><p className="mt-2 text-muted">{s.label}</p></div>)}
        </div>
      </section>
    </>
  );
}
