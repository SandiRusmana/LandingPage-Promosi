/**
 * DATA PRODUK & WARNA
 * Ganti gambar: taruh file baru di src/assets lalu ubah import,
 * atau langsung isi `image` dengan URL (mis. Unsplash/CDN kamu).
 */
import shoeNeon from "../assets/shoe-neon.jpg";
import shoeWhite from "../assets/shoe-white.jpg";
import shoeRed from "../assets/shoe-red.jpg";
import shoeLime from "../assets/shoe-lime.jpg";

/** Pilihan warna untuk galeri interaktif */
export const colors = [
  { id: "neon", name: "Black Neon", hex: "#ff6a00", image: shoeNeon, tagline: "Paling laris. Mencolok di lapangan." },
  { id: "white", name: "Arctic Blue", hex: "#3b82f6", image: shoeWhite, tagline: "Clean & fresh, cocok buat tampil beda." },
  { id: "red", name: "Stealth Red", hex: "#ef4444", image: shoeRed, tagline: "Gelap, agresif, penuh intimidasi." },
  { id: "lime", name: "Volt Lime", hex: "#a3e635", image: shoeLime, tagline: "Terang & ringan, mudah dikenali rekan setim." },
];

/** Katalog produk (3–4 kartu). `soldOutSizes` akan tampil dicoret & tidak bisa dipilih. */
export const products = [
  {
    id: "velocity",
    name: "Speccs Velocity",
    tag: "Best Seller",
    image: shoeNeon,
    colorName: "Black Neon",
    price: 549000,
    promoPrice: 329000,
    highlight: "Ringan ±280 gram untuk akselerasi dan dribel cepat.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    soldOutSizes: [],
  },
  {
    id: "striker",
    name: "Speccs Striker Pro",
    tag: "Favorit Semi-Pro",
    image: shoeRed,
    colorName: "Stealth Red",
    price: 649000,
    promoPrice: 399000,
    highlight: "Tekstur 3D di area tendangan untuk shooting lebih akurat.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    soldOutSizes: ["39"],
  },
  {
    id: "glacier",
    name: "Speccs Glacier",
    tag: "Baru",
    image: shoeWhite,
    colorName: "Arctic Blue",
    price: 599000,
    promoPrice: 359000,
    highlight: "Mesh ekstra breathable, kaki adem sepanjang pertandingan.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    soldOutSizes: ["44"],
  },
  {
    id: "volt",
    name: "Speccs Volt Edge",
    tag: "Stok Tipis",
    image: shoeLime,
    colorName: "Volt Lime",
    price: 579000,
    promoPrice: 349000,
    highlight: "Bantalan midsole ekstra empuk, aman untuk lutut & tumit.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    soldOutSizes: ["40", "43"],
  },
];
