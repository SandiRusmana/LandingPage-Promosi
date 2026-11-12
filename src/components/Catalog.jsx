import { products } from "../data/products";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

/** Katalog produk – data dari src/data/products.js */
export default function Catalog() {
  return (
    <section id="produk" className="relative bg-ink-900 py-20 sm:py-28" aria-labelledby="catalog-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="catalog-title"
          eyebrow="Koleksi & Harga Promo"
          title="Pilih Speccs Andalanmu"
          description="Harga promo sudah termasuk garansi 30 hari. Stok per ukuran terbatas, amankan sebelum kehabisan."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
