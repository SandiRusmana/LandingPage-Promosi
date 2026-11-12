import { motion } from "framer-motion";
import { Feather, Footprints, Gauge, Layers, ShieldCheck, Wind } from "lucide-react";
import { CONFIG } from "../data/config";
import SectionHeading from "./SectionHeading";

/** Peta nama ikon (dari config.js) ke komponen lucide */
const iconMap = {
  grip: Footprints,
  light: Feather,
  cushion: Layers,
  durable: ShieldCheck,
  air: Wind,
  control: Gauge,
};

/** Keunggulan produk dalam kartu ikon */
export default function Features() {
  return (
    <section id="keunggulan" className="relative py-20 sm:py-28" aria-labelledby="features-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="features-title"
          eyebrow="Kenapa Speccs?"
          title="Dibuat untuk Pemain yang Nggak Mau Kalah"
          description="Enam alasan kenapa ribuan pemain futsal pindah ke Speccs."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {CONFIG.features.map((f, i) => {
            const Icon = iconMap[f.icon] || Gauge;
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800 p-6 transition-colors hover:border-brand-500/60 sm:p-7"
              >
                <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-500/0 blur-2xl transition-colors duration-300 group-hover:bg-brand-500/30" aria-hidden="true" />
                <span className="font-display absolute right-5 top-3 text-6xl text-white/5" aria-hidden="true">
                  0{i + 1}
                </span>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/15 text-brand-400 transition group-hover:bg-brand-500 group-hover:text-black">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-300">{f.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
