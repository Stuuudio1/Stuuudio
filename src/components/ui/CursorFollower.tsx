"use client";

import { useRef, useEffect, useCallback } from "react";

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

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = useCallback((e: MouseEvent) => {
        pos.current = { x: e.clientX, y: e.clientY };
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", onMove);
        const animate = () => {
            currentPos.current.x = lerp(currentPos.current.x, pos.current.x, 0.12);
            currentPos.current.y = lerp(currentPos.current.y, pos.current.y, 0.12);
            if (ref.current) {
                // 144 = image width (w-36), 12 = gap — places image to the left of the cursor
                ref.current.style.transform = `translate(${currentPos.current.x - 144 - 12}px, ${currentPos.current.y - 72}px)`;
            }
            raf.current = requestAnimationFrame(animate);
        };
        raf.current = requestAnimationFrame(animate);
        return () => {
            window.removeEventListener("mousemove", onMove);
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [onMove]);

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