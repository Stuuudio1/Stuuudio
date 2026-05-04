"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const headerRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const navRowRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const header = headerRef.current;
            const logo = logoRef.current;
            const navRow = navRowRef.current;
            const tagline = taglineRef.current;

            if (!header || !logo || !navRow || !tagline) return;

            const PADDING = 40; // px-10 = 40px
            const LOGO_TOP = 32; // where logo rests in hero state (near top)

            // Initial states

            // Logo: positioned near top, but starts further DOWN (slides up into place)
            gsap.set(logo, {
                position: "absolute",
                top: LOGO_TOP,
                left: PADDING,
                right: PADDING,
                width: `calc(100% - ${PADDING * 2}px)`,
                y: 600,         // starts 260px below resting spot, slides up
                opacity: 0,
            });

    
            requestAnimationFrame(() => {
                const logoHeight = logo.offsetHeight || 220;
                const navTop = LOGO_TOP + logoHeight + 20;
                const NATURAL_HEIGHT = LOGO_TOP + logoHeight + 20 + 40 + 20;

            document.documentElement.style.setProperty(
                "--navbar-height",
                `${NATURAL_HEIGHT}px`
            );

                gsap.set(header, {
                    height: `${NATURAL_HEIGHT}px`,
                });

                gsap.set(navRow, {
                    position: "absolute",
                    top: navTop,
                    left: PADDING,
                    right: PADDING,
                    opacity: 0,
                    y: -20,
                });

                // ── Intro animation 
                const intro = gsap.timeline({ delay: 0.1 });

                intro
                    .to(logo, {
                        y: 0,
                        opacity: 1,
                        duration: 2.5,
                        ease: "power4.out",
                    })
                    .to(
                        navRow,
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            ease: "power3.out",
                        },
                        "-=0.55"
                    );

                // Scroll collapse 
                const COMPACT_HEIGHT = 78;
                document.documentElement.style.setProperty("--navbar-compact-height", `${COMPACT_HEIGHT}px`);
                const COMPACT_LOGO_WIDTH = 160;
                const logoNaturalWidth = header.offsetWidth - PADDING * 2;
                const scaleFactor = COMPACT_LOGO_WIDTH / logoNaturalWidth;
                const compactLogoHeight = logoHeight * scaleFactor;
                const compactLogoTop = (COMPACT_HEIGHT - compactLogoHeight) / 2;
                const compactNavTop = (COMPACT_HEIGHT - 24) / 2;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: document.documentElement,
                        start: "top top",
                        end: "+=400",
                        scrub: 1.2,
                    },
                });

                tl
                    .to(header, {
                        height: `${COMPACT_HEIGHT}px`,
                        ease: "none",
                    }, 0)
                    .to(logo, {
                        scale: scaleFactor,
                        top: compactLogoTop,
                        transformOrigin: "left top",
                        ease: "none",
                    }, 0)
                    .to(navRow, {
                        top: compactNavTop,
                        ease: "none",
                    }, 0)
                    .to(tagline, {
                        opacity: 0,
                        ease: "none",
                    }, 0);
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-999 bg-transparent overflow-hidden"
            // style={{ height: "100vh" }} 
        >
            {/* Logo */}
            <div ref={logoRef} className="will-change-transform">
                <Image
                    src="/icons/logo.svg"
                    alt="Stuuudio"
                    width={1200}
                    height={220}
                    priority
                    className="w-full h-auto pointer-events-none select-none"
                />
            </div>

            {/* Nav row */}
            <div
                ref={navRowRef}
                className="flex items-center justify-between will-change-transform mt-6"
            >
                <span
                    ref={taglineRef}
                    className="text-[11px] uppercase tracking-[0.22em] text-white/70"
                >
                    More New, Less Deja Vu
                </span>

                <nav className="flex items-center gap-7 text-sm text-white">
                    <Link href="/projects" className="hover:opacity-60 transition-opacity">
                        Projects
                    </Link>
                    <Link href="/services" className="hover:opacity-60 transition-opacity">
                        Services
                    </Link>
                    <Link href="/about" className="hover:opacity-60 transition-opacity">
                        About
                    </Link>
                    <Link href="/contact" className="hover:opacity-60 transition-opacity">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}