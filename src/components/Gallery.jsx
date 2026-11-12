import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONFIG, buildWhatsAppLink } from "../data/config";
import { colors } from "../data/products";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Icons";

/** Galeri interaktif: klik warna → gambar berganti dengan transisi halus */
export default function Gallery() {
  const [activeId, setActiveId] = useState(colors[0].id);
  const [size, setSize] = useState("42");
  const active = colors.find((c) => c.id === activeId);

  return (
    <section id="galeri" className="relative py-20 sm:py-28" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="gallery-title"
          eyebrow="Pilih Gayamu"
          title="4 Warna, 1 Performa"
          description="Klik warna favoritmu dan lihat langsung tampilannya."
        />

        <Reveal className="mt-12 grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          {/* Gambar utama */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.image}
                alt={`Sepatu futsal Speccs warna ${active.name}`}
                loading="lazy"
                width="1536"
                height="1024"
                initial={{ opacity: 0, scale: 1.06, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className="aspect-[4/3] w-full object-cover"
              />
            </AnimatePresence>
            <span
              className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-sm font-semibold backdrop-blur"
              aria-live="polite"
            >
              <span className="h-3 w-3 rounded-full" style={{ background: active.hex }} aria-hidden="true" />
              {active.name}
            </span>
          </div>

          {/* Kontrol */}
          <div>
            <h3 className="font-display text-4xl tracking-wide text-white sm:text-5xl">{active.name}</h3>
            <p className="mt-2 text-zinc-300">{active.tagline}</p>

            <p id="color-label" className="mt-8 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Pilih warna
            </p>
            <div role="radiogroup" aria-labelledby="color-label" className="mt-3 grid grid-cols-4 gap-3">
              {colors.map((c) => {
                const selected = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    aria-label={c.name}
                    onClick={() => setActiveId(c.id)}
                    className={`group overflow-hidden rounded-2xl border-2 bg-ink-800 transition ${
                      selected ? "border-brand-500 shadow-[0_0_0_4px_rgba(255,106,0,0.2)]" : "border-white/10 hover:border-white/40"
                    }`}
                  >
                    <img src={c.image} alt="" loading="lazy" className="aspect-square w-full object-cover transition group-hover:scale-110" />
                    <span className="block py-1.5 text-center text-[11px] font-semibold text-zinc-200 sm:text-xs">{c.name.split(" ")[1]}</span>
                  </button>
                );
              })}
            </div>

            <p id="size-label" className="mt-6 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Pilih ukuran
            </p>
            <div role="radiogroup" aria-labelledby="size-label" className="mt-3 flex flex-wrap gap-2">
              {CONFIG.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  role="radio"
                  aria-checked={size === s}
                  onClick={() => setSize(s)}
                  className={`h-11 w-12 rounded-xl border text-sm font-bold transition ${
                    size === s ? "border-brand-500 bg-brand-500 text-black" : "border-white/20 text-white hover:border-brand-400"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <a
              href={buildWhatsAppLink({ variant: active.name, size })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-brand-400 sm:w-auto"
            >
              <WhatsAppIcon /> Pesan warna ini
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
