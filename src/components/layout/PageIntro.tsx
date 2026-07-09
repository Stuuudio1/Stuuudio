"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { markIntroPlayed } from "@/lib/pageIntro";
import { Letter, WIDE, COND } from "@/components/ui/Letter";

const LOGO_LETTERS: { char: string; font: string; weight: number }[] = [
    { char: "S", font: WIDE, weight: 800 },
    { char: "t", font: COND, weight: 900 },
    { char: "u", font: WIDE, weight: 900 },
    { char: "u", font: COND, weight: 1200 },
    { char: "u", font: WIDE, weight: 900 },
    { char: "d", font: COND, weight: 900 },
    { char: "i", font: COND, weight: 900 },
    { char: "o", font: COND, weight: 900 },
];

const PADDING_X = 24;
const DESKTOP_QUERY = "(min-width: 768px)";

export default function PageIntro() {
    const overlayRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const [state, setState] = useState<"pending" | "show" | "done">("pending");
    const [ready, setReady] = useState(false); // NEW: controls overlay visibility

    useEffect(() => {
        const played = sessionStorage.getItem("introPlayed") === "true";
        const isDesktopOrTablet = window.matchMedia(DESKTOP_QUERY).matches;

        if (played || !isDesktopOrTablet) {
            setState("done");
        } else {
            setState("show");
        }
    }, []);

    // Runs BEFORE paint — fixes the scaleX jump
    useLayoutEffect(() => {
        if (state !== "show" || !textRef.current) return;

        const fit = () => {
            const el = textRef.current;
            if (!el) return;
            el.style.transform = "";
            const containerW = window.innerWidth - PADDING_X * 2;
            const textW = el.scrollWidth;
            const scale = containerW / textW;
            el.style.transform = `scaleX(${scale})`;
            el.style.transformOrigin = "left center";
        };

        fit();
        setReady(true); // reveal overlay only once sizing is correct
        window.addEventListener("resize", fit);
        return () => window.removeEventListener("resize", fit);
    }, [state]);

    useEffect(() => {
        if (state !== "show" || !ready || !overlayRef.current || !textRef.current) return;

        const overlay = overlayRef.current;
        const letters = letterRefs.current.filter(Boolean);
        const navHeader = document.querySelector<HTMLElement>("header[data-nav-header]");

        if (navHeader) gsap.set(navHeader, { autoAlpha: 0 });
        gsap.set(letters, { autoAlpha: 0, y: 20 });

        const tl = gsap.timeline({
            onComplete: () => {
                sessionStorage.setItem("introPlayed", "true");
                markIntroPlayed();

                if (navHeader) {
                    gsap.to(navHeader, {
                        autoAlpha: 1,
                        duration: 0.5,
                        ease: "power2.out",
                    });
                }

                setState("done");
            },
        });

        tl
            .to(letters[0], {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
                ease: "power3.out",
            })
            .to(
                letters.slice(1),
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.35,
                    stagger: 0.07,
                    ease: "power3.out",
                },
                "-=0.1"
            )
            .to({}, { duration: 0.5 })
            .to(overlay, {
                y: "-130vh",
                duration: 2,
                ease: "expo.inOut",
                onStart() {
                    overlay.style.clipPath = "inset(0 0 0% 0)";
                },
                onUpdate() {
                    const p = (this as unknown as gsap.core.Tween).progress();
                    const revealed = p * 100;
                    overlay.style.clipPath = `inset(0 0 ${revealed}% 0)`;
                },
            });

        return () => {
            tl.kill();
            if (navHeader) gsap.set(navHeader, { clearProps: "opacity,visibility" });
        };
    }, [state, ready]);

    if (state === "pending") {
        return <div className="fixed inset-0 z-[9999] bg-black" />;
    }

    if (state === "done") return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[9999] bg-black flex items-end overflow-hidden px-6"
            style={{
                willChange: "transform, clip-path",
                opacity: ready ? 1 : 0, // NEW: don't paint until sized correctly
            }}
        >
            <h1
                ref={textRef}
                className="pb-[3%] flex items-baseline select-none leading-none whitespace-nowrap"
                aria-label="Stuuudio"
                style={{
                    fontSize: "clamp(4rem, 20vw, 25rem)",
                    gap: 0,
                }}
            >
                {LOGO_LETTERS.map(({ char, font, weight }, i) => (
                    <span
                        key={i}
                        ref={(el) => { letterRefs.current[i] = el; }}
                        style={{
                            display: "inline-block",
                            flexShrink: 0,
                            opacity: 0, // NEW: hidden from first paint, not after
                        }}
                    >
                        <Letter char={char} font={font} weight={weight} />
                    </span>
                ))}
            </h1>
        </div>
    );
}