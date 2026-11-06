"use client";
import { useEffect, useRef, useState } from "react";

const stops = [
  { p: 0.9, use: "Boardrooms and briefing centres" },
  { p: 1.5, use: "Control rooms and studios" },
  { p: 2.5, use: "Lobbies and conference halls" },
  { p: 3.9, use: "Auditoriums and stage screens" },
  { p: 6, use: "Malls and low-rise building faces" },
  { p: 10, use: "Roadside and rooftop advertising" },
];

/** Redraws one photo as diodes so visitors can see what pixel pitch changes. */
export function PitchExplorer() {
  const [index, setIndex] = useState(2);
  const canvas = useRef<HTMLCanvasElement>(null);
  const img = useRef<HTMLImageElement | null>(null);
  const stop = stops[index];

  useEffect(() => {
    const draw = () => {
      const c = canvas.current, photo = img.current;
      if (!c || !photo?.complete || !photo.naturalWidth) return;
      const ctx = c.getContext("2d")!;
      const { width, height } = c.getBoundingClientRect();
      c.width = Math.round(width); c.height = Math.round(height);
      // Screen size of one diode: scaled for demonstration, not true to physical size.
      const size = Math.round(2 + stop.p * 2.2);
      const cols = Math.ceil(c.width / size), rows = Math.ceil(c.height / size);
      const low = document.createElement("canvas");
      low.width = cols; low.height = rows;
      const scale = Math.max(cols / photo.naturalWidth, rows / photo.naturalHeight);
      const sw = cols / scale, sh = rows / scale;
      low.getContext("2d")!.drawImage(photo, (photo.naturalWidth - sw) / 2, (photo.naturalHeight - sh) * 0.2, sw, sh, 0, 0, cols, rows);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(low, 0, 0, cols * size, rows * size);
      const tile = document.createElement("canvas");
      tile.width = tile.height = size;
      const t = tile.getContext("2d")!;
      t.fillStyle = "#08090b"; t.fillRect(0, 0, size, size);
      t.globalCompositeOperation = "destination-out";
      t.beginPath(); t.arc(size / 2, size / 2, size * 0.42, 0, Math.PI * 2); t.fill();
      ctx.fillStyle = ctx.createPattern(tile, "repeat")!;
      ctx.fillRect(0, 0, c.width, c.height);
    };
    if (!img.current) {
      img.current = new Image();
      img.current.src = "/img/stock/concert.jpg";
    }
    img.current.onload = draw;
    draw();
    const ro = new ResizeObserver(draw);
    if (canvas.current) ro.observe(canvas.current);
    return () => ro.disconnect();
  }, [stop.p]);

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
      <canvas ref={canvas} role="img" aria-label={`Concert photo shown at pixel pitch ${stop.p} millimetres`} className="aspect-[16/10] w-full rounded-xl bg-black" />
      <div>
        <p className="font-mono text-6xl font-medium tracking-tight md:text-7xl">P{stop.p}</p>
        <p className="mt-3 text-lg text-zinc-300">{stop.use}</p>
        <p className="mt-1 text-zinc-400">Best viewed from about {stop.p < 1 ? 1 : stop.p} m and further</p>
        <label htmlFor="pitch" className="mt-8 block text-sm text-zinc-300">Pixel pitch</label>
        <input id="pitch" type="range" min={0} max={stops.length - 1} step={1} value={index} onChange={(e) => setIndex(+e.target.value)}
          aria-valuetext={`P${stop.p}`} className="mt-3 w-full cursor-grab accent-[#d92d20]" />
        <div className="mt-2 flex justify-between font-mono text-xs text-zinc-400">{stops.map((s) => <span key={s.p}>{s.p}</span>)}</div>
      </div>
    </div>
  );
}
