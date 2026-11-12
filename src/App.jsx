import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Specs from "./components/Specs";
import Gallery from "./components/Gallery";
import Catalog from "./components/Catalog";
import PromoCountdown from "./components/PromoCountdown";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

/** Halaman tunggal Speccs – urutan section sesuai alur persuasi */
export default function App() {
  return (
    // reducedMotion="user": animasi dimatikan otomatis bagi pengguna yang memilih kurangi gerakan
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Specs />
        <Gallery />
        <Catalog />
        <PromoCountdown />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </MotionConfig>
  );
}
