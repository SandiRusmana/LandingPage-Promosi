import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { CONFIG } from "../data/config";
import { testimonials } from "../data/testimonials";
import SectionHeading from "./SectionHeading";

/** Rating bintang (aksesibel lewat aria-label) */
function Stars({ value }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`Rating ${value} dari 5 bintang`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className={`h-5 w-5 ${n <= value ? "fill-brand-500 text-brand-500" : "text-zinc-600"}`} aria-hidden="true" />
      ))}
    </div>
  );
}

/** Foto pelanggan; bila gagal dimuat tampilkan inisial nama */
function Avatar({ name, src }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  if (failed) {
    return (
      <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-500 font-display text-2xl text-black" aria-hidden="true">
        {initials}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt={`Foto ${name}`}
      loading="lazy"
      width="56"
      height="56"
      onError={() => setFailed(true)}
      className="h-14 w-14 rounded-full border-2 border-brand-500 object-cover"
    />
  );
}

/** Testimoni pelanggan */
export default function Testimonials() {
  return (
    <section id="testimoni" className="relative py-20 sm:py-28" aria-labelledby="testi-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="testi-title"
          eyebrow="Kata Mereka"
          title="Sudah Dibuktikan di Lapangan"
          description={`Rating ${CONFIG.rating.value}/5 dari ${CONFIG.rating.count} ulasan pelanggan. Ini beberapa di antaranya.`}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="relative flex flex-col rounded-3xl border border-white/10 bg-ink-800 p-6"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-brand-500/20" aria-hidden="true" />
              <Stars value={t.rating} />
              <blockquote className="mt-4 flex-1 leading-relaxed text-zinc-200">“{t.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <Avatar name={t.name} src={t.photo} />
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                  <p className="text-xs font-semibold text-brand-400">Beli: {t.product}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
