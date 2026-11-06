"use client";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const slides = [
  { src: "/img/stock/concert.jpg", label: "Concerts and events" },
  { src: "/img/real/boardroom-round.jpg", label: "Conference rooms" },
  { src: "/img/stock/hang.jpg", label: "Speakers and sound systems" },
  { src: "/img/stock/stage.jpg", label: "Stage screens" },
  { src: "/img/real/reception-led.jpg", label: "Corporate receptions" },
];
const tiles = Array.from({ length: 9 }, (_, i) => ({ x: i % 3, y: Math.floor(i / 3) }));

/** A 3x3 video wall: one image spans all panels, and panels change in a wave like a real wall. */
export function HeroWall() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), 4200);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="lg:[transform:perspective(1500px)_rotateY(-11deg)]">
      <div className="grid aspect-[16/9] grid-cols-3 grid-rows-3 gap-[3px] rounded-lg bg-[#050506] p-[3px] shadow-[0_40px_90px_-30px_rgb(217_45_32/0.55)] ring-1 ring-white/15">
        {tiles.map(({ x, y }) => (
          <div key={`${x}${y}`} className="relative overflow-hidden bg-ink">
            {slides.map((s, i) => (
              <div key={s.src} className="absolute inset-0 bg-no-repeat" style={{
                backgroundImage: `url(${s.src})`, backgroundSize: "300% 300%", backgroundPosition: `${x * 50}% ${y * 50}%`,
                opacity: i === active ? 1 : 0, transition: "opacity 700ms ease", transitionDelay: `${(x + y) * 90}ms`,
              }} />
            ))}
          </div>
        ))}
      </div>
      <p aria-live="off" className="mt-3 text-sm text-zinc-300">{slides[active].label}</p>
    </div>
  );
}
