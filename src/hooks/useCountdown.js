import { useEffect, useState } from "react";

/** Hitung selisih waktu ke target dalam hari/jam/menit/detik */
function getTimeLeft(target) {
  const diff = new Date(target).getTime() - Date.now();
  if (Number.isNaN(diff) || diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

/**
 * Custom hook countdown.
 * @param {string|number|Date} target  waktu berakhir (ISO string / timestamp)
 * @returns {{days:number,hours:number,minutes:number,seconds:number,expired:boolean}}
 */
export default function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    setTimeLeft(getTimeLeft(target));
    const id = setInterval(() => {
      const next = getTimeLeft(target);
      setTimeLeft(next);
      if (next.expired) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}
