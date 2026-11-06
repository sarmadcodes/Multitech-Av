"use client";
import { useEffect, useRef } from "react";

/** Live LED wall: colour field drawn at one sample per pixel pitch, then masked with round diodes. */
export function LedWall({ pitch = 7, className }: { pitch?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const low = document.createElement("canvas");
    const lowCtx = low.getContext("2d")!;
    let image: ImageData, mask: CanvasPattern | null, raf = 0, visible = true, last = 0;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width); canvas.height = Math.round(height);
      low.width = Math.ceil(canvas.width / pitch); low.height = Math.ceil(canvas.height / pitch);
      image = lowCtx.createImageData(low.width, low.height);
      const tile = document.createElement("canvas");
      tile.width = tile.height = pitch;
      const t = tile.getContext("2d")!;
      t.fillStyle = "#08090b"; t.fillRect(0, 0, pitch, pitch);
      t.globalCompositeOperation = "destination-out";
      t.beginPath(); t.arc(pitch / 2, pitch / 2, pitch * 0.4, 0, Math.PI * 2); t.fill();
      mask = ctx.createPattern(tile, "repeat");
    };

    const draw = (ms: number) => {
      const time = ms * 0.00022, d = image.data, w = low.width, h = low.height;
      for (let y = 0, i = 0; y < h; y++) {
        for (let x = 0; x < w; x++, i += 4) {
          const u = x / w, v = y / h;
          const a = Math.sin(u * 5 + time * 2 + Math.sin(v * 4 - time));
          const b = Math.sin(v * 6 - time * 1.4 + Math.cos(u * 3 + time));
          const f = Math.min(1, Math.max(0, (a + b) * 0.5 + 0.55));
          d[i] = 40 + 215 * f; d[i + 1] = 28 + 80 * f * f; d[i + 2] = 70 + 150 * (1 - f) * (0.5 + 0.5 * b); d[i + 3] = 255;
        }
      }
      lowCtx.putImageData(image, 0, 0);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(low, 0, 0, w * pitch, h * pitch);
      ctx.fillStyle = mask!; ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const loop = (ms: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || ms - last < 33) return;
      last = ms; draw(ms);
    };

    resize();
    const ro = new ResizeObserver(() => { resize(); draw(performance.now()); });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);
    if (reduce) draw(4000); else raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, [pitch]);

  return <canvas ref={ref} aria-hidden className={className} />;
}
