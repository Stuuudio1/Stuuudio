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
    const taglineRef = useRef<HTMLDivElement>(null);
    const taglineTrackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        // ── DESKTOP / TABLET (768px+)
        mm.add("(min-width: 768px)", () => {
            const header = headerRef.current;
            const logo = logoRef.current;
            const navRow = navRowRef.current;
            const tagline = taglineRef.current;

            if (!header || !logo || !navRow || !tagline) return;

            const PADDING = 40;
            const LOGO_TOP = 32;
            const COMPACT_HEIGHT = 72;
            const COMPACT_LOGO_WIDTH = 160;

            gsap.set(logo, {
                position: "absolute",
                top: LOGO_TOP,
                left: PADDING,
                width: `calc(100% - ${PADDING * 2}px)`,
                opacity: 1,
                transformOrigin: "left top",
            });

            // ← ADD THESE TWO LINES HERE
            document.documentElement.style.setProperty("--navbar-compact-height", `${COMPACT_HEIGHT}px`);
            document.documentElement.style.setProperty("--navbar-height", `${COMPACT_HEIGHT}px`);


                requestAnimationFrame(() => {
                    const logoHeight = logo.offsetHeight || 220;
                    const fullLogoWidth = logo.offsetWidth;
                    const navTop = LOGO_TOP + logoHeight + 20;
                    const NATURAL_HEIGHT = navTop + 40 + 20;
                    
                    document.documentElement.style.setProperty("--navbar-height", `${NATURAL_HEIGHT}px`); // already there
                    document.documentElement.style.setProperty("--navbar-compact-height", `${COMPACT_HEIGHT}px`);
                    document.documentElement.style.setProperty("--navbar-height", `${NATURAL_HEIGHT}px`);
                    document.documentElement.style.setProperty("--navbar-compact-height", `${COMPACT_HEIGHT}px`);

                    gsap.set(header, { height: NATURAL_HEIGHT });
                    gsap.set(navRow, {
                        position: "absolute",
                        top: navTop,
                        left: PADDING,
                        right: PADDING,
                        opacity: 0,
                        y: -20,
                    });

                    gsap.to(navRow, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out",
                        delay: 0.2,
                    });

                    const compactLogoHeight = logoHeight * (COMPACT_LOGO_WIDTH / fullLogoWidth);
                    const compactLogoTop = (COMPACT_HEIGHT - compactLogoHeight) / 2;
                    const compactNavTop = (COMPACT_HEIGHT - 32) / 2;

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: document.documentElement,
                            start: "top top",
                            end: "+=360",
                            scrub: 1,
                        },
                    });

                    tl
                        .to(header, { height: COMPACT_HEIGHT, ease: "none" }, 0)
                        .to(logo, { width: COMPACT_LOGO_WIDTH, top: compactLogoTop, ease: "none" }, 0)
                        .to(navRow, { top: compactNavTop, ease: "none" }, 0)
                        .to(tagline, { opacity: 0, ease: "none" }, 0);
                });
            });

            // ── MOBILE (below 768px)
            mm.add("(max-width: 767px)", () => {
                const header = headerRef.current;
                const logo = logoRef.current;
                const navRow = navRowRef.current;

                if (!header || !logo || !navRow) return;

                const PADDING = 16;
                const LOGO_TOP = 16;
                const COMPACT_HEIGHT = 48;
                const COMPACT_LOGO_WIDTH = 90;

                gsap.set(logo, {
                    position: "absolute",
                    top: LOGO_TOP,
                    left: PADDING,
                    width: `calc(100% - ${PADDING * 2}px)`,
                    opacity: 1,
                    transformOrigin: "left top",
                });

                requestAnimationFrame(() => {
                    const logoHeight = logo.offsetHeight || 60;
                    const fullLogoWidth = logo.offsetWidth;
                    const navTop = LOGO_TOP + logoHeight + 10;
                    const NATURAL_HEIGHT = navTop + 28 + 14;

                    document.documentElement.style.setProperty("--navbar-height", `${NATURAL_HEIGHT}px`);
                    document.documentElement.style.setProperty("--navbar-compact-height", `${COMPACT_HEIGHT}px`);

                    gsap.set(header, { height: NATURAL_HEIGHT });
                    gsap.set(navRow, {
                        position: "absolute",
                        top: navTop,
                        left: PADDING,
                        right: PADDING,
                        opacity: 1,
                        y: 0,
                    });

                    const compactLogoHeight = logoHeight * (COMPACT_LOGO_WIDTH / fullLogoWidth);
                    const compactLogoTop = (COMPACT_HEIGHT - compactLogoHeight) / 2;
                    const compactNavTop = (COMPACT_HEIGHT - 22) / 2;

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: document.documentElement,
                            start: "top top",
                            end: "+=260",
                            scrub: 1,
                        },
                    });

                    tl
                        .to(header, { height: COMPACT_HEIGHT, ease: "none" }, 0)
                        .to(logo, { width: COMPACT_LOGO_WIDTH, top: compactLogoTop, ease: "none" }, 0)
                        .to(navRow, { top: compactNavTop, ease: "none" }, 0);
                });
            });

            // ── Marquee ticker
            const track = taglineTrackRef.current;
            if (track) {
                const firstItem = track.querySelector("[data-ticker]") as HTMLElement;
                if (firstItem) {
                    const width = firstItem.offsetWidth;
                    gsap.to(track, {
                        x: `-=${width}`,
                        duration: 12,
                        ease: "none",
                        repeat: -1,
                        modifiers: {
                            x: gsap.utils.unitize((x: string) => parseFloat(x) % width),
                        },
                    });
                }
            }

            return () => mm.revert();
        }, []);

        const taglineText = "More New, Less Deja Vu";

        return (
            <header
                ref={headerRef}
                className="fixed top-0 left-0 right-0 z-999 bg-transparent overflow-hidden"
            >
                {/* Logo */}
                <div ref={logoRef} className="will-change-[width,top]">
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
                    className="flex items-center justify-between will-change-[top]"
                >
                    {/* Marquee tagline — hidden on mobile, visible md+ */}
                    {/* <div></div> */}
                    <div
                        ref={taglineRef}
                        className="hidden md:block overflow-hidden"
                        style={{
                            width: "180px",
                            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                        }}
                    >
                        <div ref={taglineTrackRef} className="flex whitespace-nowrap gap-8">
                            {[0, 1, 2].map((n) => (
                                <span
                                    key={n}
                                    data-ticker={n === 0 ? "true" : undefined}
                                    className="text-[11px] uppercase tracking-[0.22em] text-white/70 shrink-0"
                                >
                                    {taglineText}&nbsp;&nbsp;·&nbsp;&nbsp;
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Nav links — full row on mobile (no marquee taking space) */}
                    <nav className="flex items-center gap-4 md:gap-7 text-white ml-auto md:ml-0"
                        style={{ fontSize: "clamp(0.7rem, 3vw, 0.875rem)" }}
                    >
                        <Link href="#work" className="hover:opacity-60 transition-opacity whitespace-nowrap">
                            Projects
                        </Link>
                        <Link href="#services" className="hover:opacity-60 transition-opacity whitespace-nowrap">
                            Services
                        </Link>
                        <Link href="#about" className="hover:opacity-60 transition-opacity whitespace-nowrap">
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