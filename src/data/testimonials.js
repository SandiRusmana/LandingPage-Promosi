/**
 * DATA TESTIMONI
 * Ganti `photo` dengan foto pelanggan asli (izin dulu ya). Bila gagal dimuat, otomatis tampil inisial nama.
 */
const avatar = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=160&w=160`;

export const testimonials = [
  {
    name: "Asiah",
    role: "Pelosok Banjir",
    rating: 5,
    product: "Speccs Velocity",
    text: "Enteng banget! Awalnya ragu karena harganya terjangkau, ternyata gripnya nempel di lantai vinyl. Udah 3 bulan tiap minggu main, masih mulus.",
    photo: avatar(16120625),
  },
  {
    name: "Edi Nugraha",
    role: "Anchor tim futsal kampus • Bandung",
    rating: 5,
    product: "Speccs Glacier",
    text: "Biasanya kakiku gerah dan lecet. Pakai Glacier adem dan empuk, no lecet sama sekali. Warna birunya juga kece buat difoto!",
    photo: avatar(698532),
  },
  {
    name: "Didah Supratman",
    role: "Pivot • Surabaya",
    rating: 5,
    product: "Speccs Striker Pro",
    text: "Tendangan jadi lebih kerasa kontrolnya. Pengiriman cepet, ukuran pas, admin WA ramah banget. Next mau beli buat adek.",
    photo: avatar(16160902),
  },
  {
    name: "Deni Galon",
    role: "Flank • Yogyakarta",
    rating: 4,
    product: "Speccs Volt Edge",
    text: "Bantalannya nyaman, lutut nggak nyeri lagi habis main 2 match berturut-turut. Recommended buat yang sering main malam!",
    photo: avatar(14664508),
  },
];
