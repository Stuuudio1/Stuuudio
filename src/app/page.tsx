import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";
import AboutTeaser from "@/components/home/AboutTeaser";
export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ height: "calc(var(--navbar-height, 328px) + 155px)" }} aria-hidden="true" />
      <main style={{ paddingInline: "var(--page-padding-x)" }} className="relative z-10 bg-black">
        <Hero />
        <AboutTeaser />
      </main>
    </>
  );
}