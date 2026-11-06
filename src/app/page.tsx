import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { LedWall } from "@/components/LedWall";
import { HeroWall } from "@/components/HeroWall";
import { PitchExplorer } from "@/components/PitchExplorer";
import { AppPanels } from "@/components/AppPanels";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { QuoteForm } from "@/components/QuoteForm";
import { clients, installations, partners, products, services, stats } from "@/lib/data";

export default function Home() {
  const [a, b, c] = installations;
  return (
    <>
      <section className="relative isolate flex min-h-[calc(100dvh-105px)] items-center overflow-hidden bg-ink text-white">
        <LedWall className="absolute inset-0 -z-20 size-full" />
        <div className="absolute inset-0 -z-10 bg-ink/70 lg:bg-transparent lg:bg-gradient-to-r lg:from-ink/95 lg:via-ink/70 lg:to-ink/40" />
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-8 px-5 py-8 md:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:py-14">
          <Reveal delay={0.15} className="lg:order-2"><HeroWall /></Reveal>
          <Reveal className="lg:order-1">
            <h1 className="max-w-[15ch] text-[2.75rem] font-medium leading-[1.02] tracking-tighter md:text-6xl xl:text-[4.25rem]">Screens and sound that make the room.</h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-zinc-200">LED walls, conference microphones and speakers, designed and installed across Pakistan since 2006.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-lg bg-accent px-6 py-3.5 font-medium whitespace-nowrap text-white transition hover:bg-accent-dark active:scale-[0.98]">Explore Products</Link>
              <Link href="/projects" className="rounded-lg border border-white/50 bg-black/30 px-6 py-3.5 font-medium whitespace-nowrap backdrop-blur transition hover:bg-white hover:text-ink active:scale-[0.98]">View Projects</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Technology partners" className="border-b border-line">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-10 gap-y-4 px-5 py-8 md:px-8">
          {partners.map((p) => <Link key={p.name} href="/partners" className="relative block h-12 w-32 md:w-40"><Image src={`/img/partners/${p.name.toLowerCase()}.png`} alt={p.name} fill sizes="160px" className="object-contain" /></Link>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <Reveal><h2 className="max-w-[20ch] text-4xl font-medium tracking-tighter md:text-5xl">Built for the way each space works</h2></Reveal>
        <Reveal delay={0.1} className="mt-10"><AppPanels /></Reveal>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <h2 className="text-4xl font-medium tracking-tighter md:text-5xl">See what pixel pitch changes</h2>
            <p className="mb-10 mt-4 max-w-[60ch] text-lg text-zinc-300">Pitch is the gap between LEDs. Smaller gaps look sharper up close, and larger gaps cost less for far-away screens. Move the slider to compare.</p>
          </Reveal>
          <Reveal delay={0.1}><PitchExplorer /></Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <Reveal className="relative aspect-[3/2] overflow-hidden rounded-xl">
          <Image src="/img/stock/hang.jpg" alt="Line array speakers hanging above a stage" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-medium tracking-tighter md:text-5xl">Sound as clear as the picture</h2>
          <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted">Microphones and speakers planned with your display, so every voice reaches every seat.</p>
          <div className="mt-7">
            {products.filter((p) => ["conference-microphones", "speakers-sound-systems", "conference-room-systems"].includes(p.slug)).map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group flex items-center gap-4 border-t border-line py-3.5">
                <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg"><Image src={p.image} alt="" fill sizes="80px" className="object-cover" style={{ objectPosition: p.position }} /></span>
                <span className="font-medium group-hover:text-accent">{p.name}</span>
                <ArrowRight size={18} className="ml-auto transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-6 px-5 pb-20 md:grid-cols-[2fr_1fr] md:grid-rows-2 md:px-8 md:pb-28">
        <Reveal className="md:row-span-2">
          <Link href="/projects" className="group relative block h-80 overflow-hidden rounded-xl md:h-full">
            <Image src={a.image} alt={a.title} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent to-50%" />
            <div className="absolute bottom-0 p-6 text-white md:p-8"><h2 className="text-3xl font-medium tracking-tighter md:text-4xl">Installed by our own teams</h2><p className="mt-2 text-zinc-200">{a.title}</p></div>
          </Link>
        </Reveal>
        {[b, c].map((p) => (
          <Reveal key={p.title}>
            <Link href="/projects" className="group relative block h-64 overflow-hidden rounded-xl md:h-full md:min-h-64">
              <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" style={{ objectPosition: p.position }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent to-50%" />
              <p className="absolute bottom-0 p-5 font-medium text-white">{p.title}</p>
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:grid-cols-3 md:px-8">
          {stats.map((s) => (
            <div key={s.label}><p className="font-mono text-6xl font-medium tracking-tight md:text-7xl"><Counter value={s.value} suffix={s.suffix} /></p><p className="mt-2 text-muted">{s.label}</p></div>
          ))}
        </div>
        <h2 className="mx-auto mt-16 max-w-[1400px] px-5 text-3xl font-medium tracking-tighter md:px-8 md:text-4xl">Organisations we have worked with</h2>
        <div className="mt-8 overflow-hidden">
          <div className="marquee flex w-max gap-4 pr-4">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} aria-hidden={i >= clients.length} className="relative h-28 w-44 shrink-0 rounded-xl bg-white shadow-[inset_0_0_0_1px_var(--color-line)]">
                <Image src={`/img/clients/${c.logo}.png`} alt={i < clients.length ? c.name : ""} fill sizes="176px" className="object-contain p-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <Reveal><h2 className="max-w-[18ch] text-4xl font-medium tracking-tighter md:text-5xl">One team from first visit to final handover</h2></Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.07} className="border-t-2 border-ink pt-5"><h3 className="text-xl font-medium tracking-tight">{s.name}</h3><p className="mt-2 leading-relaxed text-muted">{s.text}</p></Reveal>
          ))}
        </div>
        <Link href="/services" className="mt-10 inline-flex items-center gap-2 font-medium hover:text-accent">Our services <ArrowRight size={18} /></Link>
      </section>

      <section className="bg-ink-2 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-[1400px] items-start gap-10 px-5 md:grid-cols-[1fr_1.4fr] md:px-8">
          <div><h2 className="text-4xl font-medium tracking-tighter md:text-5xl">Tell us about your space</h2><p className="mt-4 max-w-[40ch] text-lg text-zinc-300">Share the room or site and we will recommend a system and send a quote.</p></div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
