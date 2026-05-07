"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Belief {
    id: string;
    titleTop: string;
    titleBottom: string;
    image: string;
    imageAlt: string;
    stats: string[];
}

const BELIEFS: Belief[] = [
    {
        id: "craft",
        titleTop: "CRAFT",
        titleBottom: "OVER OUTPUT",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        imageAlt: "Designer crafting at desk",
        stats: [
            "Every pixel earns its place",
            "Zero tolerance for mediocrity",
            "Ships only what stops the scroll",
        ],
    },
    {
        id: "ai-native",
        titleTop: "AI",
        titleBottom: "NATIVE",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
        imageAlt: "Abstract AI generative patterns",
        stats: [
            "15+ years of experience",
            "NVIDIA partner agency",
            "50% AI-enabled revenue",
        ],
    },
    {
        id: "obsession",
        titleTop: "OBSESSION",
        titleBottom: "IS THE BRIEF",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
        imageAlt: "Close-up of focused work",
        stats: [
            "We read your competitors' reviews",
            "We study your customers' language",
            "We argue about kerning at midnight",
        ],
    },
    {
        id: "small",
        titleTop: "SMALL TEAM",
        titleBottom: "FULL FIREPOWER",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
        imageAlt: "Small tight-knit creative team collaborating",
        stats: [
            "No account managers",
            "Direct access to senior minds",
            "Small by design. Mighty by obsession.",
        ],
    },
    {
        id: "nigeria",
        titleTop: "BUILT IN",
        titleBottom: "NIGERIA",
        image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80",
        imageAlt: "Lagos skyline at dusk",
        stats: [
            "Lagos-sharpened instincts",
            "World-class ambition",
            "Bound by none",
        ],
    },
    {
        id: "systems",
        titleTop: "SYSTEMS",
        titleBottom: "NOT JUST ASSETS",
        image: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?w=800&q=80",
        imageAlt: "Organised design system grid layout",
        stats: [
            "Full brand language",
            "Rules, rhythm & voice",
            "Coherent from billboard to push notification",
        ],
    },
];

const TOTAL = BELIEFS.length;
const LOOP_ITEMS = [BELIEFS[TOTAL - 1], ...BELIEFS, BELIEFS[0]];
const TRACK_COUNT = LOOP_ITEMS.length;
const DRAG_THRESHOLD = 50;
const TRANSITION = "transform 0.55s cubic-bezier(0.25, 1, 0.35, 1)";

// ─── Component ────────────────────────────────────────────────────────────────

export default function BeliefsCarousel() {
    const [active, setActive] = useState(0);
    const [trackIndex, setTrackIndex] = useState(1); // 1 = first real slide, 0 = clone before start, TRACK_COUNT-1 = clone after end
    // dragDelta is raw px offset applied on top of the snapped position while dragging
    const [dragDelta, setDragDelta] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isResetting, setIsResetting] = useState(false);
    const viewportWidth = useRef(typeof window !== "undefined" ? window.innerWidth : 1);

    const startX = useRef(0);
    const startY = useRef(0);
    const axisLocked = useRef<"x" | "y" | null>(null);
    const activeRef = useRef(active);
    activeRef.current = active;

    // ── Navigation ──────────────────────────────────────────────────────────────

    const wrap = (index: number) => {
        const wrapped = index % TOTAL;
        return wrapped < 0 ? wrapped + TOTAL : wrapped;
    };

    const goTo = useCallback(
        (next: number) => {
            const wrapped = wrap(next);
            if (wrapped === activeRef.current || isAnimating) return;

            const isWrappedRight = activeRef.current === TOTAL - 1 && wrapped === 0;
            const isWrappedLeft = activeRef.current === 0 && wrapped === TOTAL - 1;

            setIsAnimating(true);
            if (isWrappedRight) {
                setTrackIndex(TRACK_COUNT - 1);
                setTimeout(() => {
                    setIsResetting(true);
                    setActive(0);
                    setTrackIndex(1);
                    setIsAnimating(false);
                    setTimeout(() => setIsResetting(false), 50);
                }, 570);
            } else if (isWrappedLeft) {
                setTrackIndex(0);
                setTimeout(() => {
                    setIsResetting(true);
                    setActive(TOTAL - 1);
                    setTrackIndex(TOTAL);
                    setIsAnimating(false);
                    setTimeout(() => setIsResetting(false), 50);
                }, 570);
            } else {
                setActive(wrapped);
                setTrackIndex(wrapped + 1);
                setTimeout(() => setIsAnimating(false), 570);
            }
        },
        [isAnimating],
    );

    // ── Keyboard ─────────────────────────────────────────────────────────────────

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") goTo(activeRef.current + 1);
            if (e.key === "ArrowLeft") goTo(activeRef.current - 1);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [goTo]);

    useEffect(() => {
        const updateWidth = () => {
            viewportWidth.current = window.innerWidth;
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // ── Pointer handlers ─────────────────────────────────────────────────────────

    const onPointerDown = useCallback((e: React.PointerEvent) => {
        if (isAnimating) return;
        startX.current = e.clientX;
        startY.current = e.clientY;
        axisLocked.current = null;
        setIsDragging(true);
        setDragDelta(0);
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }, [isAnimating]);

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        if (!isDragging) return;
        const dx = e.clientX - startX.current;
        const dy = e.clientY - startY.current;

        if (!axisLocked.current) {
            if (Math.abs(dx) > 5 || Math.abs(dy) > 5)
                axisLocked.current = Math.abs(dx) >= Math.abs(dy) ? "x" : "y";
        }

        if (axisLocked.current === "x") {
            e.preventDefault();
            setDragDelta(dx);
        }
    }, [isDragging]);

    const onPointerUp = useCallback((e: React.PointerEvent) => {
        if (!isDragging) return;
        setIsDragging(false);
        const dx = e.clientX - startX.current;

        if (axisLocked.current === "x" && Math.abs(dx) > DRAG_THRESHOLD) {
            goTo(dx < 0 ? activeRef.current + 1 : activeRef.current - 1);
        }

        setDragDelta(0);
        axisLocked.current = null;
    }, [isDragging, goTo]);

    // ── Track transform ──────────────────────────────────────────────────────────
    //
    // The track holds all slides side-by-side in a single flex row.
    // We shift it left by (active / TOTAL * 100%) to show the right slide,
    // then add dragDelta (raw px) on top for the live drag offset.
    //
    // While dragging: no CSS transition so it follows the finger exactly.
    // After release / goTo: re-enable the spring transition and let it snap.

    const slideWidthPercent = 100 / TRACK_COUNT;
    const basePercent = trackIndex * slideWidthPercent;
    const trackTransform = `translateX(calc(-${basePercent}% + ${dragDelta}px))`;
    const trackTransition = isDragging || isResetting ? "none" : TRANSITION;

    // ── Ghost previews ───────────────────────────────────────────────────────────

    const prevBelief = BELIEFS[(active - 1 + TOTAL) % TOTAL];
    const nextBelief = BELIEFS[(active + 1) % TOTAL];

    const ghostDragLeft = isDragging && dragDelta > 0 ? Math.min(dragDelta * 0.1, 16) : 0;
    const ghostDragRight = isDragging && dragDelta < 0 ? Math.max(dragDelta * 0.1, -16) : 0;
    const ghostTransition = isDragging ? "none" : "opacity 0.4s ease, transform 0.55s cubic-bezier(0.25,1,0.35,1)";

    return (
        <section className="w-full bg-black overflow-hidden select-none">

            {/* ── Viewport ── */}
            <div
                className="relative overflow-hidden cursor-grab active:cursor-grabbing"
                style={{ minHeight: "clamp(520px, 85vh, 820px)", touchAction: "pan-y" }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
            >

                {/* ── Slide track ── */}
                {/*
          All slides live in one flex row.
          Width = TOTAL * 100% of the viewport so each slide fills exactly 100vw.
          We translate the whole row left/right to reveal the active slide.
        */}
                <div
                    className="flex h-full"
                    style={{
                        width: `${TRACK_COUNT * 100}%`,
                        transform: trackTransform,
                        transition: trackTransition,
                        willChange: "transform",
                    }}
                >
                    {LOOP_ITEMS.map((belief, index) => {
                        const position = index - trackIndex;
                        const dragProgress = viewportWidth.current ? dragDelta / viewportWidth.current : 0;
                        const clampDrag = Math.max(-1, Math.min(1, dragProgress));
                        const isActiveSlide = position === 0;
                        const isIncoming = clampDrag < 0 ? position === 1 : position === -1;
                        const isLeaving = clampDrag < 0 ? position === 0 : position === 0;
                        const baseScale = isActiveSlide ? 1 : 0.84;
                        const scale = isActiveSlide
                            ? 1 - Math.abs(clampDrag) * 0.1
                            : isIncoming
                                ? 0.84 + Math.abs(clampDrag) * 0.12
                                : 0.84;
                        const opacity = isActiveSlide
                            ? 1 - Math.abs(clampDrag) * 0.5
                            : isIncoming
                                ? 0.4 + Math.abs(clampDrag) * 0.45
                                : 0.18;

                        return (
                            <div
                                key={`${belief.id}-${index}`}
                                className="flex flex-col items-center justify-center px-4 py-10 md:py-14"
                                style={{ width: `${slideWidthPercent}%`, flexShrink: 0 }}
                            >
                                <div
                                    className="h-full w-full flex flex-col items-center justify-center"
                                    style={{
                                        transform: `scale(${scale})`,
                                        opacity,
                                        transition: isDragging ? "none" : "transform 0.55s cubic-bezier(0.25,1,0.35,1), opacity 0.55s cubic-bezier(0.25,1,0.35,1)",
                                    }}
                                >
                                    {/* Title */}
                                    <div className="text-center mb-6 md:mb-8">
                                        <h2
                                            className="font-black uppercase text-white leading-none"
                                            style={{
                                                fontSize: "clamp(3rem, 11vw, 8.5rem)",
                                                letterSpacing: "-0.04em",
                                                lineHeight: 0.92,
                                            }}
                                        >
                                            {belief.titleTop}
                                        </h2>
                                        <h2
                                            className="font-black uppercase text-white/50 leading-none"
                                            style={{
                                                fontSize: "clamp(3rem, 11vw, 8.5rem)",
                                                letterSpacing: "-0.04em",
                                                lineHeight: 0.92,
                                            }}
                                        >
                                            {belief.titleBottom}
                                        </h2>
                                    </div>

                                    {/* Image */}
                                    <div
                                        className="relative overflow-hidden"
                                        style={{
                                            width: "clamp(190px, 28vw, 320px)",
                                            height: "clamp(228px, 33.5vw, 376px)",
                                        }}
                                    >
                                        <Image
                                            src={belief.image}
                                            alt={belief.imageAlt}
                                            fill
                                            className="object-cover"
                                            draggable={false}
                                            priority={belief.id === "craft"}
                                        />
                                    </div>

                                    {/* Stats */}
                                    <div className="mt-6 md:mt-8 text-center">
                                        {belief.stats.map((line, i) => (
                                            <p
                                                key={i}
                                                className="text-white/35 leading-loose tracking-wide font-light"
                                                style={{ fontSize: "clamp(0.7rem, 1.25vw, 0.88rem)" }}
                                            >
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── Left ghost ── */}
                <div
                    className="absolute left-0 top-0 bottom-0 flex flex-col justify-center pointer-events-none overflow-hidden z-10"
                    style={{ width: "clamp(72px, 11vw, 148px)" }}
                >
                    <div
                        className="flex flex-col gap-3 pl-3 md:pl-5"
                        style={{
                            opacity: prevBelief ? 1 : 0,
                            transform: `translateX(${ghostDragLeft}px)`,
                            transition: ghostTransition,
                        }}
                    >
                        {prevBelief && (
                            <>
                                <p
                                    className="font-black uppercase leading-none text-white/[0.09]"
                                    style={{
                                        fontSize: "clamp(1.4rem, 4vw, 3.2rem)",
                                        letterSpacing: "-0.03em",
                                    }}
                                >
                                    {prevBelief.titleTop}
                                    <br />
                                    {prevBelief.titleBottom}
                                </p>
                                <div
                                    className="relative overflow-hidden opacity-25"
                                    style={{
                                        width: "clamp(38px, 5vw, 68px)",
                                        height: "clamp(46px, 6vw, 82px)",
                                    }}
                                >
                                    <Image
                                        src={prevBelief.image}
                                        alt={prevBelief.imageAlt}
                                        fill
                                        className="object-cover"
                                        draggable={false}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* ── Right ghost ── */}
                <div
                    className="absolute right-0 top-0 bottom-0 flex flex-col justify-center items-end pointer-events-none overflow-hidden z-10"
                    style={{ width: "clamp(72px, 11vw, 148px)" }}
                >
                    <div
                        className="flex flex-col gap-3 items-end pr-3 md:pr-5"
                        style={{
                            opacity: nextBelief ? 1 : 0,
                            transform: `translateX(${ghostDragRight}px)`,
                            transition: ghostTransition,
                        }}
                    >
                        {nextBelief && (
                            <>
                                <p
                                    className="font-black uppercase leading-none text-right text-white/[0.09]"
                                    style={{
                                        fontSize: "clamp(1.4rem, 4vw, 3.2rem)",
                                        letterSpacing: "-0.03em",
                                    }}
                                >
                                    {nextBelief.titleTop}
                                    <br />
                                    {nextBelief.titleBottom}
                                </p>
                                <div
                                    className="relative overflow-hidden opacity-25 self-end"
                                    style={{
                                        width: "clamp(38px, 5vw, 68px)",
                                        height: "clamp(46px, 6vw, 82px)",
                                    }}
                                >
                                    <Image
                                        src={nextBelief.image}
                                        alt={nextBelief.imageAlt}
                                        fill
                                        className="object-cover"
                                        draggable={false}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Progress bar ── */}
            <div className="flex justify-center pb-8 md:pb-12">
                <div
                    className="relative rounded-full bg-white/10"
                    style={{ width: "clamp(200px, 50vw, 580px)", height: "2px" }}
                >
                    <div
                        className="absolute top-0 left-0 h-full bg-white rounded-full"
                        style={{
                            width: `${((active + 1) / TOTAL) * 100}%`,
                            transition: TRANSITION,
                        }}
                    />
                    {BELIEFS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-0 p-0 cursor-pointer"
                            style={{
                                left: `${(i / (TOTAL - 1)) * 100}%`,
                                width: i === active ? "10px" : "6px",
                                height: i === active ? "10px" : "6px",
                                background: i <= active ? "white" : "rgba(255,255,255,0.18)",
                                transition: "all 0.45s cubic-bezier(0.25,1,0.35,1)",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}