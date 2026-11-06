"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { installations } from "@/lib/data";

export function ProjectGrid() {
  const types = ["All", ...new Set(installations.map((i) => i.type))];
  const [type, setType] = useState("All");
  const shown = installations.filter((i) => type === "All" || i.type === type);
  return (
    <>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {types.map((t) => (
          <button key={t} onClick={() => setType(t)} aria-pressed={type === t}
            className={`rounded-lg border px-4 py-2 text-sm font-medium whitespace-nowrap transition ${type === t ? "border-ink bg-ink text-white" : "border-line hover:border-ink"}`}>{t}</button>
        ))}
      </div>
      <div className="mt-8 grid gap-x-6 gap-y-10 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.article key={p.title} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-paper">
                <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" style={{ objectPosition: p.position }} />
              </div>
              <h2 className="mt-4 text-xl font-medium tracking-tight">{p.title}</h2>
              <p className="mt-1 text-muted">{p.detail}</p>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
