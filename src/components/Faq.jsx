import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data/faq";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/** Accordion FAQ – dapat dioperasikan dengan keyboard (Tab + Enter/Space) */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative bg-ink-900 py-20 sm:py-28" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading id="faq-title" eyebrow="FAQ" title="Masih Ada Pertanyaan?" description="Jawaban cepat untuk hal yang paling sering ditanyakan." />

        <Reveal className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border transition-colors ${open ? "border-brand-500/60 bg-ink-800" : "border-white/10 bg-ink-800/60"}`}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white sm:px-6 sm:py-5 sm:text-lg"
                  >
                    {item.q}
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all ${open ? "rotate-45 bg-brand-500 text-black" : "bg-white/10 text-white"}`}>
                      <Plus className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 leading-relaxed text-zinc-300 sm:px-6">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
