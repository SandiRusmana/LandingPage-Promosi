import { useEffect, useState } from "react";
import useInView from "../hooks/useInView";

/** Angka yang naik pelan-pelan saat terlihat di layar (memakai hook useInView) */
export default function CountUp({ to, decimals = 0, suffix = "", duration = 1400 }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(to * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const text = decimals
    ? value.toFixed(decimals)
    : new Intl.NumberFormat("id-ID").format(Math.round(value));
  return (
    <span ref={ref}>
      {text}
      {suffix}
    </span>
  );
}
