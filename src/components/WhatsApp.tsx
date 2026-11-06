import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { contact } from "@/lib/data";

export function WhatsApp() {
  return (
    <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-30 grid size-13 place-items-center rounded-full bg-[#128c4a] text-white shadow-[0_10px_30px_-8px_rgb(16_17_20/0.5)] transition hover:scale-105 active:scale-95">
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}
