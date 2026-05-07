"use client";

import { useState, useRef, useEffect } from "react";
import { COND, WIDE } from "../ui/Letter";
import { CursorFollower } from "../ui/CursorFollower";
import { Service } from "@/lib/data/services";

export function ServiceRow({
    service,
    isOpen,
    onToggle,
    isFirst = false,
    isLast = false,
    variant,
}: {
    service: Service;
    isOpen: boolean;
    onToggle: () => void;
    isFirst?: boolean;
    isLast?: boolean;
    variant?: "about";
}) {
    const [hovered, setHovered] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(false);
    const [isFinePointer, setIsFinePointer] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        const mq = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
        setIsFinePointer(mq.matches);
        // Also listen for changes (e.g. connecting a mouse to a tablet)
        const handler = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, []);

    const titleColor = variant === "about" ? "#6b7280" : "rgba(255,255,255,0.85)";
    const numberClass = `text-sm md:text-lg shrink-0 w-10 md:w-16 tabular-nums ${variant === "about" ? "text-gray-500" : "text-white/30"}`;
    const descriptionClass = `${variant === "about" ? "text-gray-500" : "text-white/60"} leading-relaxed text-sm md:text-base max-w-2xl`;

    const charStyle = (layerIndex: 0 | 1, i: number): React.CSSProperties => {
        const isTop = layerIndex === 1;

        // On touch/coarse devices: layer 0 always visible, layer 1 always hidden — no animation
        if (!isFinePointer) {
            return {
                display: "inline-block",
                transform: isTop ? "translateY(150%)" : "translateY(0%)",
                color: titleColor,
                fontSize: "clamp(1rem, 4vw, 1.75rem)",
                fontFamily: "var(--font-body, sans-serif)",
                fontWeight: 300,
                whiteSpace: "pre",
                lineHeight: 1,
            };
        }

        // Desktop: full hover slide animation
        return {
            display: "inline-block",
            transition: `transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)`,
            transitionDelay: `${i * 18}ms`,
            transform: isTop
                ? hovered ? "translateY(0%)" : "translateY(150%)"
                : hovered ? "translateY(-150%)" : "translateY(0%)",
            color: titleColor,
            fontSize: "clamp(1.2rem, 2.2vw, 1.75rem)",
            fontFamily: "var(--font-body, sans-serif)",
            fontWeight: 300,
            whiteSpace: "pre",
            lineHeight: 1,
        };
    };

    const borderClasses = [
        variant === "about" && isFirst ? "border-t border-white/20" : "",
        (!isLast || (variant === "about" && isLast)) ? "border-b border-white/20" : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <>
            {/* Cursor follower — renders null on touch devices internally */}
            <CursorFollower src={service.cursorImage} visible={cursorVisible} />

            <div
                className={borderClasses}
                onMouseEnter={isFinePointer ? () => { setHovered(true); setCursorVisible(true); } : undefined}
                onMouseLeave={isFinePointer ? () => { setHovered(false); setCursorVisible(false); } : undefined}
            >
                {/* Header row */}
                <button
                    onClick={onToggle}
                    className="w-full flex items-center md:gap-6 py-5 md:py-8 text-left cursor-pointer"
                    aria-expanded={isOpen}
                >
                    {/* Number */}
                    <span
                        className={numberClass}
                        style={{
                            fontFamily: WIDE,
                            fontWeight: 100,
                        }}
                    >
                        {service.number}
                    </span>

                    {/* Title — slide animation container */}
                    <div
                        className="flex-1 relative overflow-hidden"
                        style={{ height: isFinePointer ? "2.6em" : "2em" }}
                    >
                        {/* Layer A — visible at rest, slides up on hover (desktop only) */}
                        <span className="absolute inset-0 flex items-center text-xs text-gray-500" aria-hidden="true">
                            {service.title.split("").map((char, i) => (
                                <span key={`a-${i}`} style={charStyle(0, i)}>
                                    {char}
                                </span>
                            ))}
                        </span>

                        {/* Layer B — hidden below at rest, slides in on hover (desktop only) */}
                        <span
                            className="absolute inset-0 flex items-center"
                            aria-label={service.title}
                            aria-hidden={!isFinePointer}
                        >
                            {service.title.split("").map((char, i) => (
                                <span key={`b-${i}`} style={charStyle(1, i)}>
                                    {char}
                                </span>
                            ))}
                        </span>
                    </div>

                    {/* Chevron */}
                    <span
                        className="shrink-0 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center transition-transform duration-500"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        aria-hidden="true"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M5 7.5L10 12.5L15 7.5"
                                stroke="rgba(255,255,255,0.4)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </button>

                {/* Accordion body */}
                <div
                    style={{
                        maxHeight: isOpen ? `${contentHeight}px` : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                >
                    <div ref={contentRef} className="pb-8 md:pb-10">
                        <div className="pl-14 md:pl-22 pr-2 md:pr-0">
                            <p
                                className={descriptionClass}
                                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                            >
                                {service.description}
                            </p>

                            <a
                                href="mailto:Createwithstuuudio@gmail.com"
                                className="mt-6 md:mt-8 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-xs uppercase tracking-widest border border-white/30
                                    text-white/60 hover:border-white hover:text-white transition-all duration-300 inline-block"
                                style={{ fontWeight: 400 }}
                            >
                                Start a project →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}