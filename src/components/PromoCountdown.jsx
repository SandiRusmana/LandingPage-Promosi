import { AnimatePresence, motion } from "framer-motion";
import { Timer } from "lucide-react";
import { CONFIG, buildWhatsAppLink } from "../data/config";
import useCountdown from "../hooks/useCountdown";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Icons";

/** Satu kotak angka; animasi geser saat nilai berubah */
function TimeBox({ value, label }) {
  const text = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="relative grid h-20 w-16 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-ink-950 sm:h-28 sm:w-24">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={text}
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="font-display text-5xl text-white sm:text-7xl"
          >
            {text}
          </motion.span>
        </AnimatePresence>
        <span className="absolute inset-x-0 top-1/2 h-px bg-white/10" aria-hidden="true" />
      </div>
      <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-zinc-300 sm:text-sm">{label}</span>
    </div>
  );
}

/** Banner promo dengan countdown (custom hook useCountdown) */
export default function PromoCountdown() {
  const { days, hours, minutes, seconds, expired } = useCountdown(CONFIG.promo.endDate);
  const { stockLeft, stockTotal } = CONFIG.promo;
  const soldPercent = Math.round(((stockTotal - stockLeft) / stockTotal) * 100);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" aria-labelledby="promo-title">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400" aria-hidden="true" />
      <div className="stripes absolute inset-0 -z-10 opacity-40 mix-blend-overlay" aria-hidden="true" />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-brand-400">
            <Timer className="h-4 w-4" aria-hidden="true" /> {expired ? "Promo berakhir" : "Waktu terbatas"}
          </p>
          <h2 id="promo-title" className="mt-4 font-display text-5xl leading-none text-black sm:text-7xl">
            {CONFIG.promo.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-medium text-black/80 sm:text-lg">
            {expired ? "Promo ini sudah selesai. Tanya admin untuk promo berikutnya!" : CONFIG.promo.subtitle}
          </p>
        </Reveal>

        {!expired && (
          <Reveal delay={0.1}>
            {/* role="timer" supaya screen reader tahu ini hitung mundur */}
            <div role="timer" aria-label={`Sisa waktu promo ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`} className="mt-10 flex justify-center gap-2 sm:gap-4">
              <TimeBox value={days} label="Hari" />
              <TimeBox value={hours} label="Jam" />
              <TimeBox value={minutes} label="Menit" />
              <TimeBox value={seconds} label="Detik" />
            </div>

            {/* Progress stok */}
            <div className="mx-auto mt-10 max-w-md rounded-2xl bg-black/85 p-4 text-left">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-white">Stok promo</span>
                <span className="text-brand-400">Tersisa {stockLeft} pasang</span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/15" role="progressbar" aria-valuenow={soldPercent} aria-valuemin={0} aria-valuemax={100} aria-label="Persentase stok promo terjual">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${soldPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-red-500"
                />
              </div>
              <p className="mt-2 text-xs text-zinc-300">{soldPercent}% sudah diamankan pelanggan lain.</p>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-ink-800"
          >
            <WhatsAppIcon className="h-5 w-5 text-brand-400" />
            {expired ? "Tanya Promo Terbaru" : "Amankan Promo Sekarang"}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
