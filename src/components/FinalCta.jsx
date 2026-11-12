import { ShieldCheck, Truck } from "lucide-react";
import { CONFIG, buildWhatsAppLink } from "../data/config";
import { colors } from "../data/products";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Icons";

/** CTA penutup – dorongan terakhir sebelum pengunjung pergi */
export default function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28" aria-labelledby="cta-title">
      <img src={colors[0].image} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950" aria-hidden="true" />

      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 id="cta-title" className="font-display text-5xl leading-[0.95] tracking-wide text-white sm:text-7xl">
          Gol Berikutnya <span className="text-brand-500">Dimulai dari Kakimu</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-300">
          Jangan tunggu stok habis. Chat admin sekarang, dapatkan Specs dengan harga promo dan mulai main lebih percaya diri akhir pekan ini.
        </p>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-brand-500 px-9 py-5 text-lg font-bold text-black shadow-[0_10px_50px_-10px_rgba(255,106,0,0.9)] transition hover:-translate-y-1 hover:bg-brand-400"
        >
          <WhatsAppIcon className="h-6 w-6" /> Pesan via WhatsApp
        </a>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-zinc-300">
          <li className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-brand-500" aria-hidden="true" /> {CONFIG.garansi}
          </li>
          <li className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-brand-500" aria-hidden="true" /> {CONFIG.pengiriman}
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
