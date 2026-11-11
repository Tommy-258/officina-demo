/**
 * Pagina unica del sito: compone le sezioni nell'ordine in cui appaiono.
 * È un Server Component: tutto l'HTML viene generato in build (export statico);
 * solo Header, ContactForm e MapEmbed caricano un po' di JavaScript lato client.
 */
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      {/* Link "salta al contenuto" per chi naviga da tastiera */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-accent-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-950"
      >
        Vai al contenuto
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <WhyUs />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
