import Reveal from "./Reveal";

/** Judul section yang konsisten: eyebrow kecil + judul besar + deskripsi */
export default function SectionHeading({ eyebrow, title, description, align = "center", id }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
        <span className="h-0.5 w-6 bg-brand-500" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="font-display text-5xl leading-[0.95] tracking-wide text-white sm:text-6xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">{description}</p>}
    </Reveal>
  );
}
