"use client";

import { useRef, useEffect, useCallback, useState } from "react";

export function CursorFollower({
    src,
    visible,
}: {
    src: string;
    visible: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: 0, y: 0 });
    const raf = useRef<number | null>(null);
    const currentPos = useRef({ x: 0, y: 0 });
    const [isFinePointer, setIsFinePointer] = useState(false);

    useEffect(() => {
        setIsFinePointer(window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches);
    }, []);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = useCallback((e: MouseEvent) => {
        pos.current = { x: e.clientX, y: e.clientY };
    }, []);

    useEffect(() => {
        // Don't attach any listeners or start rAF on touch devices
        if (!isFinePointer) return;

        window.addEventListener("mousemove", onMove);
        const animate = () => {
            currentPos.current.x = lerp(currentPos.current.x, pos.current.x, 0.12);
            currentPos.current.y = lerp(currentPos.current.y, pos.current.y, 0.12);
            if (ref.current) {
                ref.current.style.transform = `translate(${currentPos.current.x - 144 - 12}px, ${currentPos.current.y - 72}px)`;
            }
            raf.current = requestAnimationFrame(animate);
        };
        raf.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMove);
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [onMove, isFinePointer]);

    // Don't render anything on touch/tablet devices
    if (!isFinePointer) return null;

    return (
        <div
            ref={ref}
            className="pointer-events-none fixed top-0 left-0 z-50 w-36 h-36 overflow-hidden"
            style={{
                borderRadius: "4px",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.3s ease",
                willChange: "transform",
            }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                aria-hidden="true"
            />
        </div>
    );
}