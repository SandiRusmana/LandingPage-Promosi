import { buildWhatsAppLink } from "../data/config";
import { WhatsAppIcon } from "./Icons";

/** Tombol WhatsApp melayang di pojok kanan bawah */
export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat Speccs via WhatsApp"
      className="group fixed bottom-4 right-4 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black opacity-0 shadow-lg transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
        Chat admin sekarang
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition group-hover:scale-110">
        <span className="absolute inset-0 animate-ping-slow rounded-full bg-[#25D366]" aria-hidden="true" />
        <WhatsAppIcon className="relative h-8 w-8" />
      </span>
    </a>
  );
}
