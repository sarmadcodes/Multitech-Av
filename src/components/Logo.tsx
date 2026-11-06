import Image from "next/image";

/** Vector redraw of the client's logo. Swap for the original artwork if it turns up. */
export function Logo({ light = false, tagline = true }: { light?: boolean; tagline?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <Image src="/img/logo-mark.svg" alt="" width={46} height={46} priority className="size-11 shrink-0 md:size-[46px]" />
      <span className="block">
        <span className={`block text-[27px] font-bold leading-none tracking-tight ${light ? "text-white" : "text-[#e3202b]"}`} style={{ fontFamily: "var(--font-logo)" }}>Multitech</span>
        {tagline && <span className={`mt-1 block whitespace-nowrap text-[9.5px] font-semibold leading-none ${light ? "text-zinc-300" : "text-ink"}`}>Audio Visual &amp; Digital Signage Solutions Provider</span>}
      </span>
    </span>
  );
}
