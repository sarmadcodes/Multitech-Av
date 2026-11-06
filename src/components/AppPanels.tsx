"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { solutions } from "@/lib/data";

/** Image strips that widen on hover or focus. Stacks into plain tiles on phones. */
export function AppPanels() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-3 md:h-[560px] md:flex-row">
      {solutions.slice(0, 5).map((s, i) => (
        <Link key={s.id} href={`/solutions#${s.id}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}
          className={`group relative h-64 overflow-hidden rounded-xl transition-[flex-grow] duration-700 ease-out-soft md:h-auto md:min-w-0 md:basis-0 ${active === i ? "md:grow-[4]" : "md:grow"}`}>
          <Image src={s.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
            <p className={`text-xl font-medium tracking-tight md:whitespace-nowrap ${active === i ? "" : "md:rotate-180 md:[writing-mode:vertical-rl]"}`}>{s.name}</p>
            <p className={`mt-2 max-w-[42ch] text-sm leading-relaxed text-zinc-200 ${active === i ? "" : "md:hidden"}`}>{s.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
