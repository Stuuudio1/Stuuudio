'use client'

import Footer from "@/components/layout/Footer"
import StaticNavbar from "@/components/layout/StaticNavbar"
import { PROJECT_DETAILS } from "@/lib/data/projectDetails"
import Image from "next/image"
import Link from "next/link"
import { use, useRef, useState } from "react"
import { useVideoState } from "@/hooks/useVideoState"
import VideoStatusOverlay from "@/components/ui/VideoStatusOverlay"
import { COND, Letter, WIDE } from "@/components/ui/Letter"

function FeatureVideo({ src }: { src: string }) {
    const { videoRef, status } = useVideoState();
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        if (!videoRef.current) return;
        if (playing) { videoRef.current.pause(); setPlaying(false); }
        else { videoRef.current.play(); setPlaying(true); }
    };

    return (
        <div
            className="relative w-full cursor-pointer px-6 md:px-12 h-[400px] md:h-[600px] lg:h-[680px]"
            onClick={status === "ready" ? toggle : undefined}
        >
            <VideoStatusOverlay status={status} />
            <video
                ref={videoRef}
                src={src}
                className="absolute inset-0 w-full h-full object-cover"
                playsInline
                onEnded={() => setPlaying(false)}
                onPause={() => setPlaying(false)}
                onPlay={() => setPlaying(true)}
            />
            {status === "ready" && !playing && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <div className="w-0 h-0 ml-1" style={{ borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "18px solid white" }} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const project = PROJECT_DETAILS.find((p) => p.slug === slug)

    if (!project) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <StaticNavbar />
                <p className="text-white/40 uppercase tracking-widest text-xs">Coming soon</p>
            </div>
        )
    }

    const next = PROJECT_DETAILS.find((p) => p.slug === project.nextProject)

    return (
        <div className="bg-black text-white min-h-screen">

            {/* Banner — full bleed, navbar floats on top */}
            <div className="relative w-full h-[400px] md:h-[600px] lg:h-[720px]">
                <Image
                    src={project.bannerImage.src}
                    alt={project.bannerImage.alt}
                    fill
                    className="object-contain md:object-cover"
                    priority
                />
                {/* Navbar sits on top inside the banner */}
                <div className="absolute top-0 left-0 right-0 z-10">
                    <StaticNavbar />
                </div>
                {/* Bottom meta overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-6 flex justify-between items-end z-5">
                    <p className="text-white text-base tracking-widest">{project.name}</p>
                    <p className="text-white text-sm font-regular">{project.type}</p>
                </div>
            </div>

            {/* Project meta — Client | Year | Tagline + Services */}
            <div className="px-6 md:px-12 py-16 md:py-24 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <p className="text-white text-[14px] font-semibold tracking-widest mb-3">Client</p>
                    <p className="text-white text-sm">{project.client}</p>
                </div>
                <div>
                    <p className="text-white text-[14px] font-semibold tracking-widest mb-3">Year</p>
                    <p className="text-white text-sm">{project.year}</p>
                </div>
                {project.liveUrl && (
                    <div>
                        <p className="text-white text-[14px] font-semibold tracking-widest mb-3">Live Site</p>
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-sm underline underline-offset-4 hover:text-white/60 transition-colors duration-200"
                        >
                            Visit Site ↗
                        </a>
                    </div>
                )}
                <div className={project.liveUrl ? "" : "col-span-2"}>
                    <h2 className="text-white text-sm md:text-base font-bold leading-snug">
                        {project.tagline}
                    </h2>
                    <div className="flex flex-col gap-1 mt-4">
                        <p className="text-white font-bold text-sm">Services</p>
                        <div></div>
                        {project.services.map((s) => (
                            <p key={s} className="text-white text-sm font-extralight">{s}</p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feature image or video — full bleed */}
            {
                project.type === 'Cinematography' ? (
                    <FeatureVideo src={project.featureImage.src} />
                ) : (
                    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[720px]">
                        <Image
                            src={project.featureImage.src}
                            alt={project.featureImage.alt}
                            fill
                            className="object-contain md:object-cover px-6 md:px-12"
                        />
                    </div>
                )
            }

            {/* How it started */}
            <div className="px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-1 gap-12">
                <div>
                    <h3 className="text-white mb-4 text-3xl font-extrabold"
                    >
                        How it started...
                    </h3>
                    <p className="text-white text-base leading-relaxed">{project.howItStarted}</p>
                </div>
                <div className="pt-12 md:pt-0 flex-col">
                    <h3 className="text-white mb-4 text-3xl font-extrabold"
                    >
                        The Problem:
                    </h3>
                    <p className="text-white text-base leading-relaxed">{project.problem}</p>
                </div>
            </div>

            {/* Before images */}
            <div className="grid grid-cols-2 gap-4 mt-1 px-6 md:px-12">
                {project.beforeImages.map((img) => (
                    <div key={img.src} className="relative w-full h-[300px] md:h-[500px] lg:h-[700px]">
                        <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    </div>
                ))}
            </div>

            {/* The Result */}
            <div className="px-6 md:px-12 py-16 md:py-24">
                <h3 className="text-white text-3xl font-extrabold mb-6">
                    The Result.
                </h3>
                <ul className="flex flex-col gap-4">
                    {project.result.map((item, i) => (
                        <li key={i} className={`flex gap-3 items-start ${item.heading ? "ml-4" : ""}`}>
                            {item.heading && (
                                <span className="mt-[6px] w-2 h-2 rounded-full bg-white shrink-0" />
                            )}
                            <span className={`text-white text-base leading-relaxed ${!item.heading ? "text-white/70" : ""}`}>
                                {item.heading && (
                                    <strong className="font-bold">{item.heading}: </strong>
                                )}
                                {item.text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Grid images — pairs, full bleed */}
            <div className="flex flex-col gap-4 px-6 md:px-12">
                {/* First image — full width */}
                <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px]">
                    <Image
                        src={project.gridImages[0].src}
                        alt={project.gridImages[0].alt}
                        fill
                        className="object-contain md:object-cover"
                    />
                </div>

                {/* Remaining images — pairs of 2 */}
                {Array.from({ length: Math.ceil((project.gridImages.length - 1) / 2) }).map((_, rowIndex) => {
                    const pair = project.gridImages.slice(rowIndex * 2 + 1, rowIndex * 2 + 3)
                    return (
                        <div key={rowIndex} className="grid grid-cols-2 gap-4">
                            {pair.map((img) => (
                                <div key={img.src} className="relative w-full h-[200px] md:h-[600px] lg:h-[900px]">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>

            {/* Credits */}
            {project.credits && project.credits.length > 0 && (
                <div className="px-6 md:px-12 py-16 md:py-24">
                    <p className="text-white font-bold text-2xl mb-8"
                        style={{ fontFamily: "DrukTextWide, sans-serif" }}>
                        Credits
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap mt-6 gap-y-8 md:gap-y-0 md:divide-x md:divide-white/20">
                        {project.credits.map((c, i) => (
                            <div key={i} className="md:pr-8 md:pl-8 md:first:pl-0">
                                <p className="text-white uppercase text-[11px] font-bold tracking-widest mb-1">{c.role}</p>
                                <p className="text-white text-xs">{c.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Next project */}
            {
                next && (
                    <div className="px-6 md:px-12 py-16 md:py-24">
                        <Link href={`/projects/${next.slug}`}>
                            <h2 aria-label="About" style={{ fontSize: "clamp(1.5rem, 4.5vw, 5rem)", lineHeight: 1, display: "flex", alignItems: "baseline", gap: 0, margin: 0, padding: 0, textTransform: "uppercase", userSelect: "none" }}>
                                <Letter char="N" font={WIDE} weight={800} />
                                <Letter char="E" font={COND} weight={800} />
                                <Letter char="X" font={COND} weight={900} />
                                <Letter char="T" font={WIDE} weight={800} />
                            </h2>
                        </Link>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div />
                            <Link href={`/projects/${next.slug}`} className="group block">
                                <div className="relative w-full h-[400px] md:h-[450px]">
                                    <Image
                                        src={next.bannerImage.src}
                                        alt={next.name}
                                        fill
                                        className="object-contain md:object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-white text-base font-bold uppercase tracking-widest">{next.name}</p>
                                    <p className="text-white/80 text-sm">{next.type}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            }

            <div className="mt-30" />
            <Footer />
        </div >
    )
}