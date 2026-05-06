"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
        imagePrimary:
            "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
        imageHover:
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
        layout: "tall",
    },
    {
        id: "2",
        name: "Brand Identity",
        type: "Branding / Identity",
        slug: "brand-identity",
        imagePrimary:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
        imageHover:
            "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80",
        layout: "tall",
    },
    {
        id: "3",
        name: "E-Commerce Platform",
        type: "Development / UX",
        slug: "ecommerce-platform",
        imagePrimary:
            "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?w=1400&q=80",
        imageHover:
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1400&q=80",
        layout: "wide",
    },
    {
        id: "4",
        name: "Lagos Startup",
        type: "Web / Branding",
        slug: "lagos-startup",
        imagePrimary:
            "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80",
        imageHover:
            "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
        layout: "tall",
    },
    {
        id: "5",
        name: "Mobile App",
        type: "UI / Motion",
        slug: "mobile-app",
        imagePrimary:
            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
        imageHover:
            "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80",
        layout: "tall",
    },
];

function ProjectCard({ project }: { project: Project }) {
    const [hovered, setHovered] = useState(false);

    const isWide = project.layout === "wide";

    return (
        <Link
            href={`#`}
            // When individual project pages exist, swap # for: `/work/${project.slug}`
            className={`relative block overflow-hidden group ${isWide ? "col-span-2" : "col-span-1"}`}
            style={{ aspectRatio: isWide ? "2.4 / 1" : "3 / 4" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label={`View project: ${project.name}`}
        >
            {/* Primary image */}
            <Image
                src={project.imagePrimary}
                alt={project.name}
                fill
                sizes={
                    isWide
                        ? "100vw"
                        : "(max-width: 768px) 50vw, 33vw"
                }
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                priority={project.id === "1"}
            />

            {/* Hover image */}
            <Image
                src={project.imageHover}
                alt={`${project.name} — detail`}
                fill
                sizes={
                    isWide
                        ? "100vw"
                        : "(max-width: 768px) 50vw, 33vw"
                }
                className={`object-cover absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                    ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
            />

            {/* Gradient overlay */}
            <div
                className={`absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent
                    transition-opacity duration-400
                    ${hovered ? "opacity-100" : "opacity-0"}`}
            />

            {/* Label */}
            <div
                className={`absolute bottom-4 left-4 right-4 transition-all duration-350
                    ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            >
                <p
                    className="text-white uppercase text-sm tracking-widest font-bold"
                    style={{ fontFamily: WIDE }}
                >
                    {project.name}
                </p>
                <p
                    className="text-white/60 uppercase text-xs tracking-wider mt-0.5"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                    {project.type}
                </p>
            </div>

            {/* Project number — top right, always visible */}
            {/* <span
                className="absolute top-4 right-4 text-white/30 text-xs tracking-widest"
                style={{ fontFamily: COND, fontWeight: 900 }}
                aria-hidden="true"
            >
                {String(parseInt(project.id)).padStart(2, "0")}
            </span> */}
        </Link>
    );
}

export default function WorkSection() {
    // Split projects into rows: first 2, then wide, then last 2
    const topRow = PROJECTS.filter((p) => ["1", "2"].includes(p.id));
    const wideRow = PROJECTS.filter((p) => p.layout === "wide");
    const bottomRow = PROJECTS.filter((p) => ["4", "5"].includes(p.id));

    return (
        <section className="bg-black text-white w-full pb-20">

            {/* Header row */}
            <div className="flex items-center justify-between pb-10 md:pb-16 mb-1">
                <h2
                    aria-label="Work"
                    style={{
                        fontSize: "clamp(5rem, 10vw, 9rem)",
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
                    className="px-7 py-3 rounded-full text-xs uppercase tracking-widest border border-white
                                text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer shrink-0"
                    style={{ fontWeight: 400 }}
                >
                    View All Work
                </button>
            </div>

            {/* Project grid */}
            <div className="flex flex-col gap-1 mt-1">

                {/* Row 1 — two tall cards */}
                <div className="grid grid-cols-2 gap-1">
                    {topRow.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Row 2 — wide card */}
                {wideRow.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}

                {/* Row 3 — two tall cards */}
                <div className="grid grid-cols-2 gap-1">
                    {bottomRow.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>

            {/* Bottom border */}
            <div className="w-full border-t border-white mt-30" />
        </section>
    );
}