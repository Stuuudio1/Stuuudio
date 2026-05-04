import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-[100vh] min-h-[300vh] bg-black">
        <section className="px-6 md:px-10 pt-20 border-t border-white/20 text-white">
          test content
        </section>
      </main>
    </>
  );
}