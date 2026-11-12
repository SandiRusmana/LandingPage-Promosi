import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CONFIG, buildWhatsAppLink } from "../data/config";
import { WhatsAppIcon } from "./Icons";

/** Menu navigasi – `href` mengarah ke id section */
const links = [
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
];

/** Navbar sticky: logo, menu, CTA, hamburger di mobile */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Beri background setelah halaman di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu mobile dengan tombol Escape
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-ink-950/90 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navigasi utama">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2" aria-label="Speccs – ke atas halaman">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500 font-display text-2xl leading-none text-black -skew-x-6">
            S
          </span>
          <span className="font-display text-3xl tracking-wider text-white">
            SPECS<span className="text-brand-500">.</span>
          </span>
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="group relative text-sm font-medium text-zinc-200 transition-colors hover:text-white">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-[0_8px_24px_-6px_rgba(255,106,0,0.7)] sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pesan Sekarang
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg text-white hover:bg-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 pb-5 pt-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-lg font-semibold text-zinc-100 hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3.5 font-bold text-black"
                >
                  <WhatsAppIcon /> Pesan via WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">{CONFIG.brand}</span>
    </header>
  );
}
