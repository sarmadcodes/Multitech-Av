import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto min-h-[60dvh] max-w-[1400px] px-5 py-24 md:px-8">
      <h1 className="text-5xl font-medium tracking-tighter">Page not found</h1>
      <Link href="/" className="mt-6 inline-block font-medium text-accent">Back to home</Link>
    </section>
  );
}
