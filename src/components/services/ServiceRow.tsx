"use client";

import { useState, useRef, useEffect } from "react";
import { COND } from "../ui/Letter";
import { CursorFollower } from "../ui/CursorFollower";

export interface Service {
    id: string;
    number: string;
    title: string;
    cursorImage: string;
    description: string;
}

export function ServiceRow({
    service,
    isOpen,
    onToggle,
    isLast = false,
}: {
    service: Service;
    isOpen: boolean;
    onToggle: () => void;
    isLast?: boolean;
}) {
    const [hovered, setHovered] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(false);
    const [isFinePonter, setIsFinePointer] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
        // Detect fine pointer (desktop mouse) once on mount
        setIsFinePointer(window.matchMedia("(pointer: fine)").matches);
    }, []);

    const charStyle = (layerIndex: 0 | 1, i: number): React.CSSProperties => {
        const isTop = layerIndex === 1;
        // On touch devices, always show layer 0 at rest position, hide layer 1
        const effectiveHover = isFinePonter && hovered;
        return {
            display: "inline-block",
            transition: isFinePonter
                ? `transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)`
                : "none",
            transitionDelay: isFinePonter ? `${i * 18}ms` : "0ms",
            transform: isTop
                ? effectiveHover ? "translateY(0%)" : "translateY(150%)"
                : effectiveHover ? "translateY(-150%)" : "translateY(0%)",
            color: "rgba(255,255,255,0.85)",
            fontSize: "clamp(1.2rem, 2.2vw, 1.75rem)",
            fontFamily: "var(--font-body, sans-serif)",
            fontWeight: 300,
            whiteSpace: "pre",
            lineHeight: 1,
        };
    };

    return (
        <>
            {/* Cursor follower — desktop only */}
            <CursorFollower src={service.cursorImage} visible={cursorVisible} />

            <div
                className={!isLast ? "border-b border-white/20" : ""}
                onMouseEnter={isFinePonter ? () => { setHovered(true); setCursorVisible(true); } : undefined}
                onMouseLeave={isFinePonter ? () => { setHovered(false); setCursorVisible(false); } : undefined}
            >
                {/* Header row */}
                <button
                    onClick={onToggle}
                    className="w-full flex items-center gap-6 py-8 text-left cursor-pointer"
                    aria-expanded={isOpen}
                >
                    {/* Number */}
                    <span
                        className="text-white/30 shrink-0 w-16 tabular-nums"
                        style={{
                            fontFamily: COND,
                            fontWeight: 900,
                            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                        }}
                    >
                        {service.number}
                    </span>

                    {/* Title — slide animation container */}
                    <div
                        className="flex-1 relative overflow-hidden"
                        style={{ height: "2.6em" }}
                    >
                        {/* Layer A — visible at rest, slides up on hover (desktop only) */}
                        <span className="absolute inset-0 flex items-center" aria-hidden="true">
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
                            aria-hidden={!isFinePonter}
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
                        className="shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-500"
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
                    <div ref={contentRef} className="pb-10">
                        <div className="pl-[5.5rem]">
                            <p
                                className="text-white/60 leading-relaxed text-base max-w-2xl"
                                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                            >
                                {service.description}
                            </p>

                            <button
                                className="mt-8 px-6 py-3 rounded-full text-xs uppercase tracking-widest border border-white/30
                                    text-white/60 hover:border-white hover:text-white transition-all duration-300 cursor-pointer"
                                style={{ fontWeight: 400 }}
                            >
                                Start a project →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}