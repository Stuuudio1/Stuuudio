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

        const applyBlurOnScroll = (compactHeight: number, scrollEnd: number) => {
            const header = headerRef.current;
            if (!header) return;

            const onScroll = () => {
                const scrolled = window.scrollY;
                const progress = Math.min(scrolled / scrollEnd, 1);
                if (progress >= 1) {
                    header.style.background = "rgba(0,0,0,0.6)";
                    header.style.backdropFilter = "blur(16px)";
                    header.style.backdropFilter = "blur(16px)";
                } else {
                    header.style.background = "transparent";
                    header.style.backdropFilter = "none";
                    header.style.backdropFilter = "none";
                }
            };

            window.addEventListener("scroll", onScroll, { passive: true });
            return () => window.removeEventListener("scroll", onScroll);
        };

        // ── DESKTOP (1025px+)
        mm.add("(min-width: 1025px)", () => {
            const header = headerRef.current;
            const logo = logoRef.current;
            const navRow = navRowRef.current;
            const tagline = taglineRef.current;

            if (!header || !logo || !navRow || !tagline) return;

            const PADDING = 40;
            const LOGO_TOP = 32;
            const COMPACT_HEIGHT = 72;
            const COMPACT_LOGO_WIDTH = 160;
            const SCROLL_END = 360;

            const cleanup = applyBlurOnScroll(COMPACT_HEIGHT, SCROLL_END);

            gsap.set(logo, {
                position: "absolute",
                top: LOGO_TOP,
                left: PADDING,
                width: `calc(100% - ${PADDING * 2}px)`,
                opacity: 1,
                transformOrigin: "left top",
            });

            document.documentElement.style.setProperty("--navbar-compact-height", `${COMPACT_HEIGHT}px`);
            document.documentElement.style.setProperty("--navbar-height", `${COMPACT_HEIGHT}px`);

            requestAnimationFrame(() => {
                const logoHeight = logo.offsetHeight || 220;
                const fullLogoWidth = logo.offsetWidth;
                const navTop = LOGO_TOP + logoHeight + 20;
                const NATURAL_HEIGHT = navTop + 40 + 20;

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
                        end: `+=${SCROLL_END}`,
                        scrub: 1,
                    },
                });

                tl
                    .to(header, { height: COMPACT_HEIGHT, ease: "none" }, 0)
                    .to(logo, { width: COMPACT_LOGO_WIDTH, top: compactLogoTop, ease: "none" }, 0)
                    .to(navRow, { top: compactNavTop, ease: "none" }, 0)
                    .to(tagline, { opacity: 0, ease: "none" }, 0);
            });

            return () => cleanup?.();
        });

        // ── TABLET (768px–1024px)
        mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
            const header = headerRef.current;
            const logo = logoRef.current;
            const navRow = navRowRef.current;
            const tagline = taglineRef.current;

            if (!header || !logo || !navRow || !tagline) return;

            const PADDING = 24;
            const LOGO_TOP = 24;
            const COMPACT_HEIGHT = 64;
            const COMPACT_LOGO_WIDTH = 120;
            const SCROLL_END = 300;

            const cleanup = applyBlurOnScroll(COMPACT_HEIGHT, SCROLL_END);

            gsap.set(logo, {
                position: "absolute",
                top: LOGO_TOP,
                left: PADDING,
                width: `calc(100% - ${PADDING * 2}px)`,
                opacity: 1,
                transformOrigin: "left top",
            });

            document.documentElement.style.setProperty("--navbar-compact-height", `${COMPACT_HEIGHT}px`);
            document.documentElement.style.setProperty("--navbar-height", `${COMPACT_HEIGHT}px`);

            requestAnimationFrame(() => {
                const logoHeight = logo.offsetHeight || 120;
                const fullLogoWidth = logo.offsetWidth;
                const navTop = LOGO_TOP + logoHeight + 16;
                const NATURAL_HEIGHT = navTop + 36 + 16;

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
                        end: `+=${SCROLL_END}`,
                        scrub: 1,
                    },
                });

                tl
                    .to(header, { height: COMPACT_HEIGHT, ease: "none" }, 0)
                    .to(logo, { width: COMPACT_LOGO_WIDTH, top: compactLogoTop, ease: "none" }, 0)
                    .to(navRow, { top: compactNavTop, ease: "none" }, 0)
                    .to(tagline, { opacity: 0, ease: "none" }, 0);
            });

            return () => cleanup?.();
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
            const SCROLL_END = 260;

            const cleanup = applyBlurOnScroll(COMPACT_HEIGHT, SCROLL_END);

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
                        end: `+=${SCROLL_END}`,
                        scrub: 1,
                    },
                });

                tl
                    .to(header, { height: COMPACT_HEIGHT, ease: "none" }, 0)
                    .to(logo, { width: COMPACT_LOGO_WIDTH, top: compactLogoTop, ease: "none" }, 0)
                    .to(navRow, { top: compactNavTop, ease: "none" }, 0);
            });

            // ── Marquee ticker — mobile only
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

            return () => cleanup?.();
        });

        return () => mm.revert();
    }, []);

    const taglineText = "Focused on U, U and U.";

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-999 overflow-hidden"
            style={{
                background: "transparent",
                transition: "background 0.3s ease, backdrop-filter 0.3s ease",
            }}
        >
            {/* Logo */}
            <div ref={logoRef} className="will-change-[width,top]">
                <Image
                    src="/Icons/logo.svg"
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
                {/* Desktop/tablet: static text. Mobile: marquee ticker */}
                <div ref={taglineRef} className="hidden md:block">
                    <span className="tracking-widest text-white" style={{ fontSize: "clamp(0.7rem, 3vw, 0.875rem)" }}>
                        {taglineText}
                    </span>
                </div>

                {/* Mobile marquee — hidden on md+ */}
                <div
                    className="block md:hidden overflow-hidden"
                    style={{
                        width: "140px",
                        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                    }}
                >
                    <div ref={taglineTrackRef} className="flex whitespace-nowrap gap-8">
                        {[0, 1, 2].map((n) => (
                            <span
                                key={n}
                                data-ticker={n === 0 ? "true" : undefined}
                                className="tracking-widest text-white shrink-0"
                                style={{ fontSize: "clamp(0.7rem, 3vw, 0.875rem)" }}
                            >
                                {taglineText}&nbsp;&nbsp;·&nbsp;&nbsp;
                            </span>
                        ))}
                    </div>
                </div>

                {/* Nav links */}
                <nav
                    className="flex items-center gap-4 md:gap-7 text-white ml-auto md:ml-0"
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