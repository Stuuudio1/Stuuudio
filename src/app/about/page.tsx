'use client';

import { useState, useEffect } from "react";
import StaticNavbar from "@/components/layout/StaticNavbar";
import Footer from "@/components/layout/Footer";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { Letter, WIDE, COND } from "../../components/ui/Letter";
import { ServiceRow } from "@/components/services/ServiceRow";
import { SERVICES } from "@/lib/data/services";
import Team from "@/components/about/Team"
import ServiceCards from "@/components/services/ServiceCard";
import { useVideoState } from "@/hooks/useVideoState";
import VideoStatusOverlay from "@/components/ui/VideoStatusOverlay";


export default function AboutPage() {
    const [openId, setOpenId] = useState<string | null>(null);
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

    const handleToggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

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
        <>
            <StaticNavbar />
            <main className="pt-24 page-x pb-48 md:pb-72">
                <div className="flex justify-between items-start pb-8 mt-20 mb-8">
                    <div className="flex items-center gap-2">
                        <ScrollIndicator />
                    </div>

                    <p className="text-white text-base md:text-xl font-medium w-70 lg:w-full max-w-lg text-left">
                        We're not a traditional agency. We're a collective of designers, developers, filmmakers, and strategists who had already built strong careers in our own disciplines before coming together with a shared belief: the best work happens when great people build as one team.
                        Stuuudio brings together complementary expertise, thoughtful collaboration, and an uncompromising commitment to craft. We don't chase trends or create work for portfolios. We build brands, products, and experiences that are designed to endure, perform, and move businesses forward.
                    </p>
                    <div></div>
                </div>

                <div className="relative w-full overflow-hidden h-90 lg:h-169.5">

                    <VideoStatusOverlay status={status} />
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
                            height: "90%",
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
                    {/* </div> */}
                </div>

                <div id="services" className="w-full border-t mt-10 lg:mt-20 border-white" />

                <div className="pb-6 md:pb-20 mt-10">
                    <h2
                        aria-label="Service"
                        style={{
                            fontSize: "clamp(5rem, 10vw, 5rem)",
                            lineHeight: 1,
                            display: "flex",
                            alignItems: "baseline",
                            gap: 0,
                            margin: 0,
                            padding: 0,
                            textTransform: "uppercase",
                            userSelect: "none",
                        }}
                    >
                        <Letter char="S" font={WIDE} weight={800} />
                        <Letter char="E" font={COND} weight={900} />
                        <Letter char="R" font={WIDE} weight={800} />
                        <Letter char="V" font={COND} weight={900} />
                        <Letter char="I" font={COND} weight={800} />
                        <Letter char="C" font={WIDE} weight={900} />
                        <Letter char="E" font={WIDE} weight={800} />
                    </h2>

                </div>
                <p className="font-medium font-var(--font-body) text-white text-base md:text-xl ">
                    We offer everything a brand needs to go from idea to impact. Identity, web, motion, and film, all under one roof. No handoffs, no gaps, just one crew seeing it through from start to finish.
                </p>

                <div className="mt-6 lg:mt-20 text-gray-100">
                    {SERVICES.map((service, i) => (
                        <ServiceRow
                            key={service.id}
                            service={service}
                            isOpen={openId === service.id}
                            onToggle={() => handleToggle(service.id)}
                            isFirst={i === 0}
                            isLast={i === SERVICES.length - 1}
                            variant="about"
                        />
                    ))}
                </div>

                {/* Service Category Cards */}
                <div className="mt-16 lg:py-28">
                    <ServiceCards />
                </div>

                <Team />

                <div className="w-full border-t border-white mt-28" />

            </main>
            <Footer />
        </>
    );
}
