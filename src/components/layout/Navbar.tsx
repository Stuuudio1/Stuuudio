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
    const rowRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLSpanElement>(null);
    const contactRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            gsap.set(logoRef.current, { y: 220 });
            gsap.set(rowRef.current, { opacity: 0, y: 30 });
            gsap.set(contactRef.current, { opacity: 0, x: 20 });

            const intro = gsap.timeline();

            intro
                .to(logoRef.current, {
                    y: 0,
                    duration: 1.15,
                    ease: "power4.out",
                })
                .to(
                    rowRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.55"
                );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top top",
                    end: "+=340",
                    scrub: 1,
                },
            });

            tl.to(
                headerRef.current,
                {
                    height: "78px",
                    ease: "none",
                },
                0
            )
                .to(
                    logoRef.current,
                    {
                        scale: 0.14,
                        x: -6,
                        y: -315,
                        transformOrigin: "left top",
                        ease: "none",
                    },
                    0
                )
                .to(
                    rowRef.current,
                    {
                        y: -300,
                        ease: "none",
                    },
                    0
                )
                .to(
                    taglineRef.current,
                    {
                        opacity: 0,
                        ease: "none",
                    },
                    0
                )
                .to(
                    contactRef.current,
                    {
                        opacity: 1,
                        x: 0,
                        ease: "none",
                    },
                    0.35
                );
        });

        return () => mm.revert();
    }, []);

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-[999] h-screen bg-black overflow-hidden"
        >
            <div className="h-full px-6 md:px-10 pt-8">

                {/* LOGO BLOCK POSITIONED LOWER MANUALLY */}
                <div className="mt-[34vh]">
                    <div
                        ref={logoRef}
                        className="will-change-transform"
                    >
                        <Image
                            src="/icons/logo.svg"
                            alt="Stuuudio"
                            width={1}
                            height={260}
                            priority
                            className="w-full h-auto pointer-events-none select-none"
                        />
                    </div>

                    <div
                        ref={rowRef}
                        className="mt-2 flex items-center justify-between"
                    >
                        <span
                            ref={taglineRef}
                            className="text-[11px] uppercase tracking-[0.22em] text-white/70"
                        >
                            More New, Less Deja Vu
                        </span>

                        <div className="flex items-center gap-8">
                            <nav className="flex items-center gap-7 text-sm">
                                <Link href="/projects">Projects</Link>
                                <Link href="/services">Services</Link>
                                <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}