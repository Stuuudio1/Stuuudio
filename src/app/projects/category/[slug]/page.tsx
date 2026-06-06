"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import StaticNavbar from "@/components/layout/StaticNavbar";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/lib/data/projects";
import { useState, useEffect } from "react";
import Link from "next/link";

const CATEGORY_MAP: Record<string, { label: string; keyword: string }> = {
    "brand-identity": { label: "Brand Identity", keyword: "Brand Identity" },
    "web-development": { label: "Web Development", keyword: "Web Development" },
    "motion-design": { label: "Motion Design", keyword: "Motion" },
    "cinematography": { label: "Cinematography", keyword: "Cinematograph" },
};

export default function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const category = CATEGORY_MAP[slug];

    if (!category) notFound();

    const filtered = PROJECTS.filter((p) =>
        p.type.toLowerCase().includes(category.keyword.toLowerCase())
    );

    const [isFinePointer, setIsFinePointer] = useState(false);

    useEffect(() => {
        setIsFinePointer(
            window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches
        );
    }, []);

    return (
        <>
            <StaticNavbar />
            <main className="pt-24 pb-32 page-x min-h-[80dvh]">
                <div className="flex items-center gap-2 mt-20">
                    <ScrollIndicator />
                    <span className="text-white text-xs uppercase tracking-widest">
                        Scroll down
                    </span>
                </div>

                <div className="flex items-end justify-between mt-10 mb-12 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Link
                                href="/projects"
                                className="text-white/40 text-xs uppercase tracking-widest hover:text-white/70 transition-colors"
                            >
                                All Projects
                            </Link>
                            <span className="text-white/30 text-xs">/</span>
                            <span className="text-white text-xs uppercase tracking-widest">
                                {category.label}
                            </span>
                        </div>
                        <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight leading-none uppercase m-0">
                            {category.label}
                        </h1>
                    </div>
                    <p className="text-white/50 text-sm md:text-base font-normal shrink-0">
                        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                    </p>
                </div>

                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filtered.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isFinePointer={isFinePointer}
                                forceEqual={true}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-40 gap-4">
                        <p className="text-white/30 text-lg font-medium">
                            No projects here yet.
                        </p>
                        <Link
                            href="/projects"
                            className="text-white text-sm uppercase tracking-widest underline underline-offset-4 hover:opacity-60 transition-opacity"
                        >
                            View all projects
                        </Link>
                    </div>
                )}
            </main>

            <div className="pt-12 lg:pb-72">
                <div className="border-b border-white" />
            </div>

            <Footer />
        </>
    );
}