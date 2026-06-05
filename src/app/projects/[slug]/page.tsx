'use client'

import Footer from "@/components/layout/Footer"
import StaticNavbar from "@/components/layout/StaticNavbar"
import { PROJECT_DETAILS } from "@/lib/data/projectDetails"
import Image from "next/image"
import Link from "next/link"
import { use } from "react"

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
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                <Image
                    src={project.bannerImage.src}
                    alt={project.bannerImage.alt}
                    fill
                    className=""
                    priority
                />
                {/* Navbar sits on top inside the banner */}
                <div className="absolute top-0 left-0 right-0 z-10">
                    <StaticNavbar />
                </div>
                {/* Bottom meta overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-6 flex justify-between items-end z-5">
                    <p className="text-white text-base tracking-widest">{project.name}</p>
                    <p className="text-white text-xs font-regular">{project.type}</p>
                </div>
            </div>

            {/* Project meta — Client | Year | Tagline + Services */}
            <div className="px-6 md:px-12 py-16 md:py-24 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <p className="text-white/40 uppercase text-[10px] tracking-widest mb-3">Client</p>
                    <p className="text-white text-sm">{project.client}</p>
                </div>
                <div>
                    <p className="text-white/40 uppercase text-[10px] tracking-widest mb-3">Year</p>
                    <p className="text-white text-sm">{project.year}</p>
                </div>
<div className="col-span-2">
    <h2 className="text-white text-sm md:text-base font-bold leading-snug">
        {project.tagline}
    </h2>
    <div className="flex flex-col gap-1 mt-4">
    <p className="text-white font-bold text-base mt-16">Services</p>
        {project.services.map((s) => (
            <p key={s} className="text-white text-sm">{s}</p>
        ))}
    </div>
</div>
            </div>

            {/* Feature image — full bleed */}
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                <Image
                    src={project.featureImage.src}
                    alt={project.featureImage.alt}
                    fill
                    className="px-6 md:px-12"
                />
            </div>

            {/* How it started */}
            <div className="px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-1 gap-12">
                <div>
                    <h3 className="text-white text-lg font-bold mb-4"
                        style={{ fontFamily: "DrukTextWide, sans-serif" }}>
                        How it started...
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">{project.howItStarted}</p>
                </div>
                <div>
                    <h3 className="text-white text-lg font-bold mb-4"
                        style={{ fontFamily: "DrukTextWide, sans-serif" }}>
                        The Problem:
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">{project.problem}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-1 px-6 md:px-12">
                {project.beforeImages.map((img) => (
                    <div key={img.src} className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
                        <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    </div>
                ))}
            </div>

            {/* The Result */}
            <div className="px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-white text-lg font-bold"
                        style={{ fontFamily: "DrukTextWide, sans-serif" }}>
                        The Result.
                    </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{project.result}</p>
            </div>

            {/* Grid images — pairs, full bleed */}
            <div className="flex flex-col gap-4 px-6 md:px-12">
                {/* First image — full width */}
                <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                    <Image
                        src={project.gridImages[0].src}
                        alt={project.gridImages[0].alt}
                        fill
                        className=""
                    />
                </div>

                {/* Remaining images — pairs of 2 */}
                {Array.from({ length: Math.ceil((project.gridImages.length - 1) / 2) }).map((_, rowIndex) => {
                    const pair = project.gridImages.slice(rowIndex * 2 + 1, rowIndex * 2 + 3)
                    return (
                        <div key={rowIndex} className="grid grid-cols-2 gap-4">
                            {pair.map((img) => (
                                <div key={img.src} className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
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
            {project.credits && project.credits.length > 0 ?
            (
                <div className="px-6 md:px-12 py-16 md:py-24">
                <p className="text-white font-bold text-2xl mb-8"
                    style={{ fontFamily: "DrukTextWide, sans-serif" }}>
                    {project.credits ? 'Credits' : ''}
                </p>
                <div className="flex flex-wrap divide-x mt-6 divide-white/20">
                    {project.credits.map((c, i) => (
                        <div key={i} className="pr-8 pl-8 first:pl-0">
                            <p className="text-white uppercase text-[11px] font-bold tracking-widest mb-1">{c.role}</p>
                            <p className="text-white text-xs">{c.name}</p>
                        </div>
                    ))}
                </div>
            </div>
                ) : ''
                }

            {/* Next project */}
            {next && (
                <div className="px-6 md:px-12 py-16 md:py-24">
                    <h3 className="text-white font-bold mb-12 text-2xl md:text-4xl"
                        style={{ fontFamily: "DrukTextWide, sans-serif" }}>
                        NEXT
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div />
                        <Link href={`/projects/${next.slug}`} className="group block">
                            <div className="relative w-full mb-4" style={{ aspectRatio: "4 / 3" }}>
                                <Image
                                    src={next.bannerImage.src}
                                    alt={next.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-white text-sm uppercase tracking-widest">{next.name}</p>
                                <p className="text-white/40 text-xs">{next.type}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )}

            <div className=" mt-40" />
            <Footer />
        </div>
    )
}