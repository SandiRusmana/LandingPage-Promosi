/**
 * =====================================================
 *  CONFIG SPECCS – semua yang sering diganti ada di sini
 * =====================================================
 */

export const CONFIG = {
  brand: "Speccs",

  /** Nomor WhatsApp format internasional TANPA "+" / spasi / 0 di depan. Contoh: 6281234567890 */
  whatsappNumber: "6283155785067",

  /** Teks promo (dipakai di hero, countdown, CTA) */
  promo: {
    badge: "PROMO TERBATAS • DISKON HINGGA 40%",
    title: "Flash Sale Speccs",
    subtitle: "Harga spesial berakhir saat timer habis. Setelah itu balik ke harga normal!",
    /** Target waktu countdown (ISO 8601, zona WIB +07:00). GANTI sesuai kebutuhan. */
    endDate: "2027-01-31T23:59:59+07:00",
    stockTotal: 200,
    stockLeft: 37,
  },

  /** Info toko */
  garansi: "Garansi 30 hari kerusakan produksi",
  pengiriman: "Kirim ke seluruh Indonesia",
  rating: { value: "4.9", count: "2.300+" },
  soldCount: "8.500+",

  contact: {
    address: "Jl. Lapangan Futsal No. 10, Kebayoran Baru, Jakarta Selatan 12120",
    hours: ["Senin – Sabtu: 09.00 – 21.00 WIB", "Minggu: 10.00 – 18.00 WIB"],
    email: "halo@speccs.id",
    phoneLabel: "+62 831-5578-5067",
    instagram: "https://instagram.com/speccs.id",
    tiktok: "https://tiktok.com/@speccs.id",
    shopee: "https://shopee.co.id/speccs",
    tokopedia: "https://tokopedia.com/speccs",
  },

  /** Kartu keunggulan. `icon` harus cocok dengan nama di Features.jsx */
  features: [
    {
      icon: "grip",
      title: "Grip Anti-Slip",
      text: "Sol karet pola herringbone mencengkeram lantai indoor. Ngerem dan belok tajam tanpa tergelincir.",
    },
    {
      icon: "light",
      title: "Ringan ±280 Gram",
      text: "Terasa seperti tanpa sepatu. Kaki lebih lincah, napas tetap kuat sampai peluit akhir.",
    },
    {
      icon: "cushion",
      title: "Bantalan Empuk",
      text: "Midsole EVA peredam benturan menjaga tumit & lutut tetap aman di pertandingan beruntun.",
    },
    {
      icon: "durable",
      title: "Tahan Lama",
      text: "Upper synthetic leather diperkuat jahitan ganda. Dipakai tiap minggu tetap awet.",
    },
    {
      icon: "air",
      title: "Sirkulasi Udara",
      text: "Panel mesh & lubang ventilasi bikin kaki adem, nggak lembap dan nggak bau.",
    },
    {
      icon: "control",
      title: "Kontrol Bola Presisi",
      text: "Tekstur 3D di area tendangan membantu first touch dan umpan lebih akurat.",
    },
  ],

  /** Tabel spesifikasi */
  specs: [
    { label: "Material Upper", value: "Synthetic leather + mesh breathable" },
    { label: "Sol", value: "Karet anti-slip non-marking" },
    { label: "Bobot", value: "±280 gram (size 42)" },
    { label: "Ukuran", value: "39 – 44" },
    { label: "Cocok Untuk", value: "Lapangan indoor, vinyl, parket" },
    { label: "Tipe Pemain", value: "Amatir sampai semi-pro" },
  ],

  /** Katalog warna untuk galeri interaktif (gambar diimpor di products.js) */
  sizes: ["39", "40", "41", "42", "43", "44"],
};

/**
 * Bikin link WhatsApp dengan pesan otomatis.
 * Pesan: "Halo, saya tertarik dengan sepatu futsal Speccs [varian] ukuran [ukuran]. Apakah stok masih tersedia?"
 */
export function buildWhatsAppLink({ variant = "", size = "" } = {}) {
  const variantPart = variant ? ` ${variant.replace(/^Speccs\s*/i, "")}` : "";
  const sizePart = size ? ` ukuran ${size}` : "";
  const message = `Halo, saya tertarik dengan sepatu futsal Speccs${variantPart}${sizePart}. Apakah stok masih tersedia?`;
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Format angka ke Rupiah: 399000 -> "Rp399.000" */
export function formatRupiah(value) {
  return "Rp" + new Intl.NumberFormat("id-ID").format(value);
}
