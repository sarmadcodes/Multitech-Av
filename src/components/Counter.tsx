"use client";
import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/** Renders the real number by default, so it is never stuck at 0 if animation cannot run. */
export function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6, ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`; },
    });
    return () => { controls.stop(); if (ref.current) ref.current.textContent = `${value}${suffix}`; };
  }, [inView, reduce, value, suffix]);
  return <span ref={ref}>{value}{suffix}</span>;
}
