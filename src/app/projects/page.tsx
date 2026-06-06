"use client";

import StaticNavbar from "@/components/layout/StaticNavbar";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/lib/data/projects";
import { useState, useEffect } from "react";

export default function ProjectPage() {
    const [isFinePointer, setIsFinePointer] = useState(false);

    useEffect(() => {
        setIsFinePointer(window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches);
    }, []);

    return (
        <>
            <StaticNavbar />
            <main className="pt-24 pb-32 page-x min-h-[80dvh]">
                <div className="flex items-center gap-2 mt-20">
                    <ScrollIndicator />
                    <span className="text-white text-xs uppercase tracking-widest">Scroll down</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {PROJECTS.map((project) => (
                        <ProjectCard 
                        key={project.id} 
                        project={project} 
                        isFinePointer={isFinePointer} 
                        forceEqual={true} 
                        />
                    ))}
                </div>
                
            </main>
            <div className="pt-12 lg:pb-72">
                    <div className="border-b border-white" />
                </div>

            <Footer />
        </>
    );
}
