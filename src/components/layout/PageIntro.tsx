"use client";

import { useEffect, useRef, useState } from "react";
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

export default function PageIntro() {
    const overlayRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

    // Three states: "pending" (checking), "show" (play intro), "done" (skip)
    const [state, setState] = useState<"pending" | "show" | "done">("pending");

    // On mount, check sessionStorage — this runs only client-side
    useEffect(() => {
        const played = sessionStorage.getItem("introPlayed") === "true";
        if (played) {
            setState("done");
        } else {
            setState("show");
        }
    }, []);

    // Scale the h1 to fill full padded width
    useEffect(() => {
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
        window.addEventListener("resize", fit);
        return () => window.removeEventListener("resize", fit);
    }, [state]);

    // Run the GSAP intro
    useEffect(() => {
        if (state !== "show" || !overlayRef.current || !textRef.current) return;

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
    }, [state]);

    // "pending" — render a black overlay that covers everything while we check sessionStorage.
    // This prevents any flash of page content before we know whether to play the intro.
    // It's invisible to the user either way since it resolves in the same microtask tick.
    if (state === "pending") {
        return (
            <div className="fixed inset-0 z-[9999] bg-black" />
        );
    }

    if (state === "done") return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[9999] bg-black flex items-end overflow-hidden px-6"
            style={{ willChange: "transform, clip-path" }}
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
                        style={{ display: "inline-block", flexShrink: 0 }}
                    >
                        <Letter char={char} font={font} weight={weight} />
                    </span>
                ))}
            </h1>
        </div>
    );
}