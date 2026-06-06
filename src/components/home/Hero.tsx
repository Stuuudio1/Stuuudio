"use client";

import ScrollIndicator from "../ui/ScrollIndicator";
import { useEffect, useRef } from "react";

export default function Hero() {
    const slideshowRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<number | null>(null);

    useEffect(() => {
        const isDesktop = () => window.innerWidth >= 1024;

        const handleScroll = () => {
            if (!slideshowRef.current) return;

            // Mobile & Tablet
            if (!isDesktop()) {
                slideshowRef.current.style.width = "100%";
                return;
            }

            const rect = slideshowRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const progress = Math.min(
                Math.max(1 - rect.top / windowHeight, 0),
                1
            );

            const width = 75 + progress * 25;

            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }

            frameRef.current = requestAnimationFrame(() => {
                if (slideshowRef.current) {
                    slideshowRef.current.style.width = `${width}%`;
                }
            });
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);

            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    return (
        <section className="min-h-screen bg-black flex flex-col pt-72 lg:pt-52 pb-5">
            {/* Top Row */}
            <div className="flex justify-between items-start pb-8">
                <div className="flex items-center gap-2">
                    <ScrollIndicator />
                    <span className="text-white text-xs uppercase tracking-widest">
                        Scroll down
                    </span>
                </div>

                <p className="text-white text-xl lg:text-2xl font-medium w-50 lg:w-full max-w-lg text-left">
                    We're Stuuudio, yup the 3 U's are intentional. They're three
                    U's because we never stop optimizing for: yo
                    <span className="font-bold">U</span>, yo
                    <span className="font-bold">U</span>r brand, yo
                    <span className="font-bold">U</span>r audience.
                </p>
            </div>

            {/* Video */}
            <div className="flex-1 flex flex-col pt-[60px]">
                <div
                    ref={slideshowRef}
                    className="relative overflow-hidden mx-auto"
                    style={{
                        width:
                            typeof window !== "undefined" &&
                            window.innerWidth >= 1024
                                ? "75%"
                                : "100%",
                        aspectRatio: "16/9",
                        transition: "width 0.15s ease-out",
                    }}
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        style={{ pointerEvents: "none" }}
                    >
                        <source
                            src="https://res.cloudinary.com/dlfh6aguk/video/upload/q_auto,f_auto,vc_auto/v1780578065/mavin_wgujdg.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="pt-12 lg:pb-12">
                    <div className="border-b border-white" />
                </div>
            </div>
        </section>
    );
}