export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-16 md:px-8 md:pb-16 md:pt-24">
      <h1 className="max-w-[18ch] text-4xl font-medium tracking-tighter md:text-6xl">{title}</h1>
      <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">{text}</p>
    </section>
  );
}
