import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";
import AboutTeaser from "@/components/home/AboutTeaser";
import WorkGrid from "@/components/home/WorkGrid";
import Services from "@/components/home/Services";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 bg-black navbar-offset page-x pb-48 md:pb-50">
        <Hero />
        <AboutTeaser />
        <WorkGrid />
        <Services />
      </main>
      <Footer />
    </>
  );
}