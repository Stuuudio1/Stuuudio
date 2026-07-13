"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useVideoState } from "@/hooks/useVideoState";
import VideoStatusOverlay from "../ui/VideoStatusOverlay";

const WIDE = "DrukTextWide, sans-serif";
const COND = "DrukCond, sans-serif";

function Letter({ char, font, weight }: { char: string; font: string; weight: number }) {
    return (
        <span style={{ fontFamily: font, fontWeight: weight, display: "inline-block", lineHeight: 0.82, verticalAlign: "baseline" }}>
            {char}
        </span>
    );
}

export default function AboutSection() {
    const [playing, setPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [muted, setMuted] = useState(true);
    const { videoRef, status } = useVideoState();

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        const update = () => setProgress((v.currentTime / v.duration) * 100);
        v.addEventListener("timeupdate", update);
        return () => v.removeEventListener("timeupdate", update);
    }, []);

    const togglePlay = () => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) { v.play(); setPlaying(true); }
        else { v.pause(); setPlaying(false); }
    };

    const toggleMute = () => {
        const v = videoRef.current;
        if (!v) return;
        v.muted = !v.muted;
        setMuted(v.muted);
    };

    const seek = (e: React.MouseEvent<HTMLDivElement>) => {
        const v = videoRef.current;
        if (!v || !v.duration || isNaN(v.duration)) return; // ← add this check
        const rect = e.currentTarget.getBoundingClientRect();
        v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration;
    };

    return (
        <section id="about" className="bg-black text-white w-full pb-20">
            <div className="pb-10 md:pb-24 md:mt-0">
                <h2 aria-label="About" style={{ fontSize: "clamp(1.5rem, 10vw, 5rem)", lineHeight: 1, display: "flex", alignItems: "baseline", gap: 0, margin: 0, padding: 0, textTransform: "uppercase", userSelect: "none" }}>
                    <Letter char="A" font={COND} weight={900} />
                    <Letter char="B" font={WIDE} weight={800} />
                    <Letter char="O" font={WIDE} weight={800} />
                    <Letter char="U" font={COND} weight={900} />
                    <Letter char="T" font={WIDE} weight={800} />
                </h2>
            </div>

            <div className="pb-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left — video with custom controls */}
                <div className="relative w-full overflow-hidden h-90 lg:h-169.5 lg:w-180.5">

                    <VideoStatusOverlay status={status} />
                    {/* Video */}
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        disablePictureInPicture
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "85%",
                            objectFit: "cover",
                        }}
                    >
                        <source
                            src="https://res.cloudinary.com/dlfh6aguk/video/upload/v1783196330/Final-Stuuudio_1_dmjkke.mp4"
                            type="video/mp4"
                        />
                    </video>

                    {/* Controls bar — pinned to bottom, visible on hover */}
                    <div
                        className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4 pt-8 opacity-0"
                        style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.6))" }}
                    >
                        {/* Progress bar */}
                        <div
                            className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer"
                            onClick={seek}
                        >
                            <div
                                className="h-full bg-white rounded-full"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4">
                            {/* Play/Pause */}
                            <button onClick={togglePlay} className="text-white cursor-pointer">
                                {playing ? (
                                    /* Pause icon */
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                        <rect x="5" y="3" width="4" height="18" rx="1" />
                                        <rect x="15" y="3" width="4" height="18" rx="1" />
                                    </svg>
                                ) : (
                                    /* Play icon */
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                        <polygon points="5,3 19,12 5,21" />
                                    </svg>
                                )}
                            </button>

                            {/* Mute/Unmute */}
                            <button onClick={toggleMute} className="text-white cursor-pointer">
                                {muted ? (
                                    /* Muted icon */
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                                        <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="white" stroke="none" />
                                        <line x1="23" y1="9" x2="17" y2="15" />
                                        <line x1="17" y1="9" x2="23" y2="15" />
                                    </svg>
                                ) : (
                                    /* Unmuted icon */
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                                        <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="white" stroke="none" />
                                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right — copy column */}
                <div className="flex flex-col md:pt-10">
                    <div className="pb-2 md:pb-16">
                        <h3 className="text-lg lg:text-3xl uppercase" style={{ fontFamily: WIDE, fontWeight: 900 }}>
                            ABOUT US
                        </h3>
                    </div>

                    <div className="flex flex-col justify-between flex-1">
                        <div className="pt-4 pb-8 text-base md:text-lg font-regular" style={{ fontFamily: "var(--font-body)" }}>
                            <p >We're a design and brand consultancy obsessed with one thing: building brands that punch far above their weight. We partner with founders, operators, and ambitious organizations across Africa and beyond who are serious about growth. Not people looking for a new logo or a prettier website. People looking for a brand that earns trust, creates momentum, and works long after launch.
                            </p>
                            <div className="pt-6"></div>
                            <p className="mt-10">
                                Curious about who we are and how we work? Get to know the thinking, the process, and the people behind the work.
                            </p>
                        </div>

                        <div className="pt-5 md:pt-24">
                            <Link href="/about">
                                <button className="p-3 px-5 md:px-8 md:py-4 rounded-full text-sm md:text-base uppercase bg-[#121212] tracking-widest text-white md:hover:bg-white md:hover:text-black transition-colors duration-300 cursor-pointer" style={{ fontWeight: 400 }}>
                                    OUR STORY
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full border-t border-white" />
        </section>
    );
}