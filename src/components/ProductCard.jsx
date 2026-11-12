import { useState } from "react";
import { motion } from "framer-motion";
import { buildWhatsAppLink, formatRupiah } from "../data/config";
import { WhatsAppIcon } from "./Icons";

/** Kartu produk reusable: gambar, harga coret + promo, pilihan ukuran, tombol pesan */
export default function ProductCard({ product, index = 0 }) {
  const { name, tag, image, colorName, price, promoPrice, highlight, sizes, soldOutSizes = [] } = product;
  // Default: ukuran tersedia yang paling populer (42) atau yang pertama tersedia
  const defaultSize = sizes.includes("42") && !soldOutSizes.includes("42") ? "42" : sizes.find((s) => !soldOutSizes.includes(s));
  const [size, setSize] = useState(defaultSize);
  const discount = Math.round((1 - promoPrice / price) * 100);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-800 transition-colors hover:border-brand-500/60"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${name} warna ${colorName}`}
          loading="lazy"
          width="1536"
          height="1024"
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-black">{tag}</span>
        <span className="absolute right-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">-{discount}%</span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-3xl tracking-wide text-white">{name}</h3>
        <p className="text-sm text-zinc-400">{colorName}</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{highlight}</p>

        {/* Harga */}
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl font-extrabold text-brand-400">{formatRupiah(promoPrice)}</span>
          <span className="text-sm text-zinc-400 line-through" aria-label={`Harga normal ${formatRupiah(price)}`}>
            {formatRupiah(price)}
          </span>
        </div>

        {/* Ukuran */}
        <fieldset className="mt-4">
          <legend className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Ukuran</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {sizes.map((s) => {
              const soldOut = soldOutSizes.includes(s);
              const selected = size === s;
              return (
                <button
                  key={s}
                  type="button"
                  disabled={soldOut}
                  aria-pressed={selected}
                  aria-label={soldOut ? `Ukuran ${s} habis` : `Ukuran ${s}`}
                  onClick={() => setSize(s)}
                  className={`h-10 w-10 rounded-lg border text-sm font-bold transition ${
                    soldOut
                      ? "cursor-not-allowed border-white/10 text-zinc-600 line-through"
                      : selected
                      ? "border-brand-500 bg-brand-500 text-black"
                      : "border-white/20 text-white hover:border-brand-400"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </fieldset>

        <a
          href={buildWhatsAppLink({ variant: name, size })}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Pesan ${name} ukuran ${size} via WhatsApp`}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3.5 font-bold text-black transition hover:bg-brand-400 hover:shadow-[0_8px_24px_-6px_rgba(255,106,0,0.7)]"
        >
          <WhatsAppIcon className="h-5 w-5" /> Pesan via WhatsApp
        </a>
      </div>
    </motion.article>
  );
}
