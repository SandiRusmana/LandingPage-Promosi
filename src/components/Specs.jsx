import { Check } from "lucide-react";
import { CONFIG } from "../data/config";
import { colors } from "../data/products";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/** Spesifikasi teknis dalam tabel rapi + daftar warna */
export default function Specs() {
  return (
    <section id="spesifikasi" className="relative bg-ink-900 py-20 sm:py-28" aria-labelledby="specs-title">
      <div className="stripes absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Gambar */}
        <Reveal className="relative order-last lg:order-first">
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src={colors[2].image}
              alt="Detail sepatu futsal Speccs Stealth Red"
              loading="lazy"
              width="1536"
              height="1024"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Poin penting">
            {["Non-marking", "Anti-slip", "Ringan", "Breathable"].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/15 px-3 py-1.5 text-sm font-medium text-brand-300">
                <Check className="h-4 w-4" aria-hidden="true" /> {t}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Tabel spesifikasi */}
        <div>
          <SectionHeading
            id="specs-title"
            align="left"
            eyebrow="Spesifikasi"
            title="Detail yang Bikin Beda"
            description="Transparan soal bahan dan kualitas. Karena kamu berhak tahu apa yang dipakai di kakimu."
          />
          <Reveal delay={0.1}>
            <dl className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-ink-800">
              {CONFIG.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`grid grid-cols-5 gap-3 px-5 py-4 sm:px-6 ${i !== 0 ? "border-t border-white/10" : ""} ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <dt className="col-span-2 text-sm font-semibold text-brand-400 sm:text-base">{s.label}</dt>
                  <dd className="col-span-3 text-sm text-zinc-100 sm:text-base">{s.value}</dd>
                </div>
              ))}
              {/* Baris warna */}
              <div className="grid grid-cols-5 gap-3 border-t border-white/10 px-5 py-4 sm:px-6">
                <dt className="col-span-2 text-sm font-semibold text-brand-400 sm:text-base">Warna</dt>
                <dd className="col-span-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-100 sm:text-base">
                  {colors.map((c) => (
                    <span key={c.id} className="inline-flex items-center gap-2">
                      <span className="h-3.5 w-3.5 rounded-full ring-2 ring-white/30" style={{ background: c.hex }} aria-hidden="true" />
                      {c.name}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
