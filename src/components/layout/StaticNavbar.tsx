"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
    { label: "Projects", href: "/projects", sectionId: null },
    { label: "Services", href: "#services", sectionId: "services", onlyOn: "/about" },
    { label: "About", href: "/about", sectionId: null },
    // { label: "Contact", href: "mailto:Createwithstuuudio@gmail.com?subject=Project%20Inquiry", isExternal: true, sectionId: null },
];

export default function StaticNavbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            window.history.replaceState(null, "", window.location.pathname);
        }
    };

    // Animate menu open/close
    useEffect(() => {
        const menu = menuRef.current;
        const overlay = overlayRef.current;
        const links = linkRefs.current.filter(Boolean);

        if (menuOpen) {
            document.body.style.overflow = "hidden";
            gsap.to(overlay, { autoAlpha: 1, duration: 0.3, ease: "power2.out" });
            gsap.to(menu, { x: "0%", duration: 0.45, ease: "power3.out" });
            gsap.fromTo(
                links,
                { x: 30, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 0.35, stagger: 0.07, ease: "power2.out", delay: 0.15 }
            );
        } else {
            document.body.style.overflow = "";
            gsap.to(overlay, { autoAlpha: 0, duration: 0.25 });
            gsap.to(menu, { x: "100%", duration: 0.4, ease: "power3.in" });
            gsap.to(links, { autoAlpha: 0, duration: 0.2 });
        }
    }, [menuOpen]);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const isActive = (href: string) => {
        if (href.startsWith("mailto") || href.startsWith("#")) return false;
        return pathname === href;
    };

    // Filter links: hide ones with onlyOn if we're not on that page
    const visibleLinks = navLinks.filter(
        ({ onlyOn }) => !onlyOn || pathname === onlyOn
    );

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
                style={{
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    transition: "background 0.3s ease",
                }}
            >
                <div className="mx-auto flex items-center justify-between px-4 md:px-10 py-4 md:py-5">
                    {/* Logo */}
                    <div className="w-22.5 md:w-40">
                    <Link href="/" aria-label="Stuuudio" className="block w-full h-auto">
                        <Image
                            src="/Icons/logo.svg"
                            alt="Stuuudio"
                            width={1200}
                            height={220}
                            className="w-full h-auto pointer-events-none select-none"
                            priority
                        />
                    </Link>    
                    </div>

                    {/* Desktop Nav */}
                    <nav
                        className="hidden md:flex items-center gap-7 text-white ml-auto"
                        style={{ fontSize: "clamp(0.7rem, 3vw, 0.875rem)" }}
                    >
                        {visibleLinks.map(({ label, href, sectionId }) => {
                            if (isActive(href)) return null;

                            if (sectionId) {
                                return (
                                    <a
                                        key={label}
                                        href={href}
                                        onClick={(e) => handleNavClick(e, sectionId)}
                                        className="hover:opacity-60 transition-opacity whitespace-nowrap cursor-pointer"
                                    >
                                        {label}
                                    </a>
                                );
                            }

                            // if (isExternal) {
                            //     return (
                            //         <a
                            //             key={label}
                            //             href={href}
                            //             className="hover:opacity-60 transition-opacity whitespace-nowrap"
                            //         >
                            //             {label}
                            //         </a>
                            //     );
                            // }

                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    className="hover:opacity-60 transition-opacity whitespace-nowrap"
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Hamburger Button — mobile only */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center gap-1.25 w-8 h-8 ml-auto z-60 relative"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        <span className="block w-6 h-[1.5px] bg-white rounded-full" />
                        <span className="block w-6 h-[1.5px] bg-white rounded-full" />
                        <span className="block w-4 h-[1.5px] bg-white rounded-full self-start" />
                    </button>
                </div>
            </header>

            {/* Overlay */}
            <div
                ref={overlayRef}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 z-55 md:hidden"
                style={{
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    opacity: 0,
                    visibility: "hidden",
                    pointerEvents: menuOpen ? "auto" : "none",
                }}
            />

            {/* Mobile Menu Panel */}
            <div
                ref={menuRef}
                className="fixed top-0 right-0 h-full w-3/4 max-w-xs z-60 md:hidden flex flex-col pt-24 px-8 gap-8"
                style={{
                    background: "rgba(0,0,0,0.85)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    borderLeft: "1px solid rgba(255,255,255,0.08)",
                    transform: "translateX(100%)",
                }}
            >
                {/* Close button */}
                <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
                >
                    <span className="block w-6 h-[1.5px] bg-white rounded-full absolute" style={{ transform: "rotate(45deg)" }} />
                    <span className="block w-6 h-[1.5px] bg-white rounded-full absolute" style={{ transform: "rotate(-45deg)" }} />
                </button>

                {visibleLinks.map(({ label, href, sectionId }, i) => {
                    if (sectionId) {
                        return (
                            <a
                                key={label}
                                href={href}
                                ref={(el) => { linkRefs.current[i] = el; }}
                                onClick={(e) => handleNavClick(e, sectionId)}
                                className="text-white text-lg tracking-widest uppercase hover:opacity-60 transition-opacity cursor-pointer"
                                style={{ opacity: 0, visibility: "hidden", letterSpacing: "0.15em" }}
                            >
                                {label}
                            </a>
                        );
                    }

                    // if (isExternal) {
                    //     return (
                    //         <a
                    //             key={label}
                    //             href={href}
                    //             ref={(el) => { linkRefs.current[i] = el; }}
                    //             onClick={() => setMenuOpen(false)}
                    //             className="text-white text-lg tracking-widest uppercase hover:opacity-60 transition-opacity"
                    //             style={{ opacity: 0, visibility: "hidden", letterSpacing: "0.15em" }}
                    //         >
                    //             {label}
                    //         </a>
                    //     );
                    // }

                    return (
                        <Link
                            key={label}
                            href={href}
                            ref={(el) => { linkRefs.current[i] = el; }}
                            onClick={() => setMenuOpen(false)}
                            className={`text-lg tracking-widest uppercase transition-opacity ${
                                isActive(href)
                                    ? "text-white/40 pointer-events-none"
                                    : "text-white hover:opacity-60"
                            }`}
                            style={{ opacity: 0, visibility: "hidden", letterSpacing: "0.15em" }}
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>
        </>
    );
}