"use client";

import { useRef, useEffect, useState } from "react";
import { WIDE } from "../ui/Letter";
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
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, []);

    const numberClass = `text-sm md:text-lg shrink-0 w-10 md:w-16 tabular-nums text-[#767676]`;
    const descriptionClass = `text-[#767676] leading-relaxed text-sm md:text-base max-w-2xl`;

    const borderClasses = [
        variant === "about" && isFirst ? "border-t border-white/20" : "",
        (!isLast || (variant === "about" && isLast)) ? "border-b border-white/20" : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={borderClasses}>
            {/* Header row */}
            <button
                onClick={onToggle}
                className="w-full flex items-center md:gap-6 py-5 md:py-8 text-left cursor-pointer"
                aria-expanded={isOpen}
            >
                {/* Number */}
                <span
                    className={numberClass}
                    style={{ fontFamily: WIDE, fontWeight: 100 }}
                >
                    {service.number}
                </span>

                {/* Title — plain, no animation */}
                <div className="flex-1 text-[#767676]">
                    <span
                        style={{
                            fontSize: "clamp(1rem, 2.5vw, 1.75rem)",
                            fontFamily: "var(--font-body, sans-serif)",
                            fontWeight: 500,
                            lineHeight: 1,
                        }}
                    >
                        {service.title}
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
                    <div className="pl-10 md:pl-22 pr-2 md:pr-0 text-[#767676]">
                        <p
                            className={descriptionClass}
                            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                        >
                            {service.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}