"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { hasPlayedIntro, markIntroPlayed } from "@/lib/pageIntro";
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

export default function PageIntro() {
    const overlayRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!hasPlayedIntro) {
            setShow(true);
        }
    }, []);

    useEffect(() => {
        if (!show || !overlayRef.current || !textRef.current) return;

        const overlay = overlayRef.current;
        const text = textRef.current;
        const letters = letterRefs.current.filter(Boolean);
        const navLogo = document.querySelector<HTMLElement>("[data-nav-logo]");

        if (navLogo) navLogo.style.opacity = "0";

        gsap.set(letters, { autoAlpha: 0, y: 20 });

        const tl = gsap.timeline({
            onComplete: () => {
                markIntroPlayed();

                if (navLogo) {
                    gsap.to(navLogo, {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out",
                    });
                }

                setShow(false);
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

            // Slide the overlay up AND simultaneously open the clip from the bottom.
            // As y goes from 0 → -130vh, the bottom edge of the clip rises from
            // 100% → 0%, so the page content is revealed progressively underneath —
            // like a sticker being peeled off from the top.
            .to(overlay, {
                y: "-130vh",
                duration: 2,
                ease: "expo.inOut",
                onStart() {
                    // Start fully unclipped so there's no jump at t=0
                    overlay.style.clipPath = "inset(0 0 0% 0)";
                },
                onUpdate() {
                    // progress 0→1 over this tween
                    const p = (this as unknown as gsap.core.Tween).progress();
                    // bottom clip edge shrinks from 0% → 100% as overlay lifts,
                    // exposing the page content beneath from the bottom up
                    const revealed = p * 100;
                    overlay.style.clipPath = `inset(0 0 ${revealed}% 0)`;
                },
            });

        return () => {
            tl.kill();
            if (navLogo) navLogo.style.opacity = "";
        };
    }, [show]);

    if (!show) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-9999 bg-black flex items-end overflow-hidden"
            style={{ willChange: "transform, clip-path" }}
        >
            <h1
                ref={textRef}
                className="w-full pb-[3%] flex items-baseline select-none leading-none"
                aria-label="Stuuudio"
                style={{
                    fontSize: "clamp(4rem, 50vw, 25rem)",
                    gap: 0,
                }}
            >
                {LOGO_LETTERS.map(({ char, font, weight }, i) => (
                    <span
                        key={i}
                        ref={(el) => { letterRefs.current[i] = el; }}
                        style={{ display: "inline-block" }}
                    >
                        <Letter char={char} font={font} weight={weight} />
                    </span>
                ))}
            </h1>
        </div>
    );
}