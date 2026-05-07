"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const WIDE = "DrukTextWide, sans-serif";
const COND = "DrukCond, sans-serif";

function Letter({
    char,
    font,
    weight,
}: {
    char: string;
    font: string;
    weight: number;
}) {
    return (
        <span
            style={{
                fontFamily: font,
                fontWeight: weight,
                display: "inline-block",
                lineHeight: 0.82,
                verticalAlign: "baseline",
            }}
        >
            {char}
        </span>
    );
}

interface Project {
    id: string;
    name: string;
    type: string;
    slug: string;
    imagePrimary: string;
    imageHover: string;
    layout: "tall" | "wide";
}

const PROJECTS: Project[] = [
    {
        id: "1",
        name: "Fintech Dashboard",
        type: "UI / Web Design",
        slug: "fintech-dashboard",
        imagePrimary: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
        imageHover: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
        layout: "tall",
    },
    {
        id: "2",
        name: "Brand Identity",
        type: "Branding / Identity",
        slug: "brand-identity",
        imagePrimary: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
        imageHover: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80",
        layout: "tall",
    },
    {
        id: "3",
        name: "E-Commerce Platform",
        type: "Development / UX",
        slug: "ecommerce-platform",
        imagePrimary: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?w=1400&q=80",
        imageHover: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1400&q=80",
        layout: "wide",
    },
    {
        id: "4",
        name: "Lagos Startup",
        type: "Web / Branding",
        slug: "lagos-startup",
        imagePrimary: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80",
        imageHover: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
        layout: "tall",
    },
    {
        id: "5",
        name: "Mobile App",
        type: "UI / Motion",
        slug: "mobile-app",
        imagePrimary: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
        imageHover: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80",
        layout: "tall",
    },
];

function ProjectCard({ project, isFinePointer }: { project: Project; isFinePointer: boolean }) {
    const [hovered, setHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState<'primary' | 'hover'>('primary');
    const isWide = project.layout === "wide";
    const showHover = isFinePointer && hovered;

    useEffect(() => {
        if (!isFinePointer) {
            const interval = setInterval(() => {
                setCurrentImage(prev => prev === 'primary' ? 'hover' : 'primary');
            }, 3000); // Change every 3 seconds
            return () => clearInterval(interval);
        }
    }, [isFinePointer]);

    return (
        <Link
            href="#"
            className={`relative block overflow-hidden group ${isWide ? "col-span-2" : "col-span-1"}`}
            style={{ aspectRatio: isWide ? "2.4 / 1" : "3 / 4" }}
            onMouseEnter={isFinePointer ? () => setHovered(true) : undefined}
            onMouseLeave={isFinePointer ? () => setHovered(false) : undefined}
            aria-label={`View project: ${project.name}`}
        >
            {/* Primary image */}
            <Image
                src={project.imagePrimary}
                alt={project.name}
                fill
                sizes={isWide ? "100vw" : "(max-width: 768px) 50vw, 33vw"}
                className={`object-cover transition-all duration-1500 ease-in-out ${isFinePointer ? "group-hover:scale-105" : ""} ${currentImage === 'primary' ? 'opacity-100' : 'opacity-0'}`}
                priority={project.id === "1"}
            />

            {/* Hover image — desktop hover or mobile slideshow */}
            <Image
                src={project.imageHover}
                alt={`${project.name} — detail`}
                fill
                sizes={isWide ? "100vw" : "(max-width: 768px) 50vw, 33vw"}
                className={`object-cover absolute inset-0 transition-all duration-1500 ease-in-out ${isFinePointer ? (showHover ? "opacity-100 scale-100" : "opacity-0 scale-105") : (currentImage === 'hover' ? 'opacity-100' : 'opacity-0')}`}
            />

            {/* Gradient overlay — desktop hover only */}
            {isFinePointer && (
                <div
                    className={`absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent
                        transition-opacity duration-400 ${showHover ? "opacity-100" : "opacity-0"}`}
                />
            )}

            {/* Label — always visible on mobile, hover-only on desktop */}
            <div
                className={`absolute bottom-4 left-4 right-4 ${
                    isFinePointer
                        ? `transition-all duration-350 ${showHover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`
                        : `transition-opacity duration-1500 ${currentImage === 'hover' ? "opacity-100" : "opacity-0"}`
                }`}
            >
                {/* Always show gradient on mobile so text is readable */}
                {!isFinePointer && (
                    <div className="absolute inset-x-0 bottom-0 -mx-4 -mb-4 h-24 bg-linear-to-t from-black/70 to-transparent pointer-events-none" />
                )}
                <p
                    className="text-white uppercase text-xs tracking-widest font-bold relative"
                    style={{ fontFamily: WIDE }}
                >
                    {project.name}
                </p>
                <p
                    className="text-white/60 uppercase text-[10px] tracking-wider mt-0.5 relative"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                    {project.type}
                </p>
            </div>
        </Link>
    );
}

export default function WorkSection() {
    const [isFinePointer, setIsFinePointer] = useState(false);

    useEffect(() => {
        setIsFinePointer(window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches);
    }, []);

    const topRow = PROJECTS.filter((p) => ["1", "2"].includes(p.id));
    const wideRow = PROJECTS.filter((p) => p.layout === "wide");
    const bottomRow = PROJECTS.filter((p) => ["4", "5"].includes(p.id));

    return (
        <section className="bg-black text-white w-full pb-8 md:pb-20">

            {/* Header row */}
            <div className="flex items-center justify-between pb-8 md:pb-16 mb-1">
                <h2
                    aria-label="Work"
                    style={{
                        fontSize: "clamp(3.5rem, 10vw, 9rem)",
                        lineHeight: 1,
                        display: "flex",
                        alignItems: "baseline",
                        margin: 0,
                        padding: 0,
                        textTransform: "uppercase",
                        userSelect: "none",
                    }}
                >
                    <Letter char="W" font={COND} weight={900} />
                    <Letter char="O" font={WIDE} weight={800} />
                    <Letter char="R" font={WIDE} weight={800} />
                    <Letter char="K" font={COND} weight={900} />
                </h2>

                <button
                    className="px-4 md:px-7 py-2 md:py-3 rounded-full text-[10px] md:text-xs uppercase tracking-widest border border-white
                                text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer shrink-0"
                    style={{ fontWeight: 400 }}
                >
                    View All
                </button>
            </div>

            {/* Project grid */}
            <div className="flex flex-col gap-1 mt-1">
                <div className="grid grid-cols-2 gap-1">
                    {topRow.map((p) => <ProjectCard key={p.id} project={p} isFinePointer={isFinePointer} />)}
                </div>

                {wideRow.map((p) => (
                    <div key={p.id} className="grid grid-cols-2 gap-1">
                        <ProjectCard project={p} isFinePointer={isFinePointer} />
                    </div>
                ))}

                <div className="grid grid-cols-2 gap-1">
                    {bottomRow.map((p) => <ProjectCard key={p.id} project={p} isFinePointer={isFinePointer} />)}
                </div>
            </div>

            <div className="w-full border-t border-white mt-20 md:mt-30" />
        </section>
    );
}