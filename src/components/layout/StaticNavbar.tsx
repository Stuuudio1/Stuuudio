import Link from "next/link";
import Image from "next/image";

export default function StaticNavbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
            <div className="mx-auto flex items-center justify-between px-4 md:px-10 py-4 md:py-5">
                <div className="w-22.5 md:w-40">
                    <Image
                        src="/Icons/logo.svg"
                        alt="Stuuudio"
                        width={1200}
                        height={220}
                        className="w-full h-auto pointer-events-none select-none"
                        priority
                    />
                </div>

                <nav className="flex items-center gap-4 md:gap-7 text-white ml-auto md:ml-0"
                    style={{ fontSize: "clamp(0.7rem, 3vw, 0.875rem)" }}
                >
                    <Link href="/projects" className="hover:opacity-60 transition-opacity whitespace-nowrap">
                        Projects
                    </Link>
                    <Link href="#services" className="hover:opacity-60 transition-opacity whitespace-nowrap">
                        Services
                    </Link>
                    <Link href="/about" className="hover:opacity-60 transition-opacity whitespace-nowrap">
                        About
                    </Link>
                    <a href="mailto:Createwithstuuudio@gmail.com" className="hover:opacity-60 transition-opacity whitespace-nowrap">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}