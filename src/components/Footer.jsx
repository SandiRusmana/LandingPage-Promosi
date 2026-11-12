import { Clock, Mail, MapPin, Phone, ShoppingBag } from "lucide-react";
import { CONFIG, buildWhatsAppLink } from "../data/config";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "./Icons";

/** Link sosial media */
const socials = [
  { label: "Instagram Speccs", href: CONFIG.contact.instagram, Icon: InstagramIcon },
  { label: "TikTok Speccs", href: CONFIG.contact.tiktok, Icon: TikTokIcon },
  { label: "Speccs di Shopee", href: CONFIG.contact.shopee, Icon: ShoppingBag },
  { label: "Speccs di Tokopedia", href: CONFIG.contact.tokopedia, Icon: ShoppingBag },
];

/** Footer: kontak, alamat, jam operasional, sosial media */
export default function Footer() {
  const { contact } = CONFIG;
  return (
    <footer className="border-t border-white/10 bg-ink-900 pb-24 pt-14 sm:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-4xl tracking-wider text-white">
            SPECS<span className="text-brand-500">.</span>
          </p>
          <p className="mt-3 max-w-xs text-zinc-300">Sepatu futsal ringan, grip kuat, harga bersahabat. Dibuat oleh pemain, untuk pemain.</p>
          <ul className="mt-5 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-brand-500 hover:text-black"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-400">Kontak</h3>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li className="flex gap-3">
              <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {contact.phoneLabel}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
              <address className="not-italic">{contact.address}</address>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-400">Jam Operasional</h3>
          <ul className="mt-4 space-y-3 text-zinc-300">
            {contact.hours.map((h) => (
              <li key={h} className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                {h}
              </li>
            ))}
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
              Admin WhatsApp balas &lt; 10 menit
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-sm text-zinc-400 sm:px-6">
        © {new Date().getFullYear()} {CONFIG.brand}. Semua hak dilindungi.
      </p>
    </footer>
  );
}
