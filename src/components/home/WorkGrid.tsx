"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PROJECTS, Project } from "@/lib/data/projects";
import ProjectCard from "../projects/ProjectCard";

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

export default function WorkSection() {
    const [isFinePointer, setIsFinePointer] = useState(false);

    useEffect(() => {
        setIsFinePointer(window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches);
    }, []);

    const topRow = PROJECTS.filter((p) => ["1", "2"].includes(p.id));
    const wideRow = PROJECTS.filter((p) => p.layout === "wide");
    const bottomRow = PROJECTS.filter((p) => ["4", "5"].includes(p.id));

    return (
        <section id="work" className="bg-black text-white w-full pb-8 md:pb-20">

            {/* Header row */}
            <div className="flex items-center justify-between pb-8 md:pb-16 mb-1">
                <h2
                    aria-label="Work"
                    style={{
                        fontSize: "clamp(3.5rem, 10vw, 5rem)",
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

                <Link href="/projects">
                    <button
                        className="px-4 md:px-7 py-2 md:py-3 rounded-full text-[10px] md:text-xs uppercase tracking-widest border border-white
                                    text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer shrink-0"
                        style={{ fontWeight: 400 }}
                    >
                        View All
                    </button>
                </Link>
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