import { motion } from "framer-motion";
import { ArrowRight, Flame, ShieldCheck, Star, Truck } from "lucide-react";
import { CONFIG, buildWhatsAppLink } from "../data/config";
import { colors } from "../data/products";
import { WhatsAppIcon } from "./Icons";
import CountUp from "./CountUp";

/** Statistik bukti sosial (angka animasi) */
const stats = [
  { to: 8500, suffix: "+", label: "Pasang terjual" },
  { to: 4.9, decimals: 1, suffix: "/5", label: "Rating pelanggan" },
  { to: 280, suffix: " g", label: "Bobot ±" },
];

/** Hero: headline kuat, gambar besar, CTA utama & sekunder, badge promo */
export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32" aria-labelledby="hero-title">
      {/* Dekorasi latar */}
      <div className="stripes absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="absolute -right-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-brand-500/25 blur-[120px]" aria-hidden="true" />
      <div className="absolute -left-40 bottom-0 -z-10 h-[360px] w-[360px] rounded-full bg-brand-600/10 blur-[100px]" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:pb-24">
        {/* Teks */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-300 sm:text-sm"
          >
            <Flame className="h-4 w-4 text-brand-500" aria-hidden="true" />
            {CONFIG.promo.badge}
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 font-display text-[3.6rem] leading-[0.9] tracking-wide text-white sm:text-8xl lg:text-[7rem]"
          >
            Kuasai Lapangan
            <br />
            dengan <span className="text-brand-500">Specs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg"
          >
            Sepatu futsal ringan, grip kuat, dan nyaman dipakai sampai peluit akhir. Lebih lincah, lebih percaya diri,
            dan tahan dipakai tiap minggu. Mulai <strong className="text-white">Rp329.000</strong> saja.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-base font-bold text-black shadow-[0_10px_40px_-10px_rgba(255,106,0,0.8)] transition hover:-translate-y-1 hover:bg-brand-400"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
            <a
              href="#produk"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-base font-semibold text-white transition hover:border-brand-500 hover:text-brand-400"
            >
              Lihat Koleksi
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-300"
          >
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-500" aria-hidden="true" /> Garansi 30 hari
            </li>
            <li className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-brand-500" aria-hidden="true" /> Kirim seluruh Indonesia
            </li>
            <li className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-brand-500 text-brand-500" aria-hidden="true" /> {CONFIG.rating.value} dari{" "}
              {CONFIG.rating.count} ulasan
            </li>
          </motion.ul>
        </div>

        {/* Gambar sepatu */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_-20px_rgba(255,106,0,0.45)]">
            {/* Hero di atas fold: dimuat segera (bukan lazy) agar LCP cepat */}
            <img
              src={colors[0].image}
              alt="Sepatu futsal Speccs warna Black Neon tampak samping"
              className="aspect-[4/3] w-full animate-float object-cover"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
          </div>

          {/* Badge diskon */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: -8 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            className="absolute -left-2 -top-4 grid h-24 w-24 place-items-center rounded-full bg-brand-500 text-center font-display leading-none text-black shadow-xl sm:-left-5 sm:h-28 sm:w-28"
          >
            <span>
              <span className="block text-sm tracking-wider">HEMAT</span>
              <span className="block text-4xl sm:text-5xl">40%</span>
            </span>
          </motion.div>

          {/* Kartu stok */}
          <div className="absolute -bottom-5 right-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/95 px-4 py-3 shadow-xl backdrop-blur sm:right-6">
            <span className="relative flex h-3 w-3" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-red-500" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
            </span>
            <p className="text-sm font-semibold text-white">
              Sisa <span className="text-brand-400">{CONFIG.promo.stockLeft} pasang</span> promo!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bar statistik */}
      <div className="border-y border-white/10 bg-ink-900/80">
        <dl className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/10 px-2 py-5 text-center sm:px-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col px-2">
              <dt className="order-2 text-xs text-zinc-400 sm:text-sm">{s.label}</dt>
              <dd className="order-1 font-display text-3xl text-white sm:text-5xl">
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
