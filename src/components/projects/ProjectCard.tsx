import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Project } from "@/lib/data/projects";

function ProjectCard({ project, isFinePointer, forceEqual = false }: { project: Project; isFinePointer: boolean, forceEqual?: boolean; }) {
    const [hovered, setHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState<'primary' | 'hover'>('primary');
    const isWide = !forceEqual && project.layout === "wide";
    const showHover = isFinePointer && hovered;
    
    const primarySrc = (forceEqual && project.imagePrimaryTall) 
    ? project.imagePrimaryTall 
    : project.imagePrimary;

    const hoverSrc = (forceEqual && project.imageHoverTall) 
    ? project.imageHoverTall 
    : project.imageHover;

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
            href={`/projects/${project.slug}`}
            className={`relative block overflow-hidden group ${isWide ? "col-span-2" : "col-span-1"}`}
            style={{ aspectRatio: isWide ? "16 / 9" : "3 / 4" }} 
            onMouseEnter={isFinePointer ? () => setHovered(true) : undefined}
            onMouseLeave={isFinePointer ? () => setHovered(false) : undefined}
            aria-label={`View project: ${project.name}`}
        >
            {/* Primary image */}
            <Image
                src={primarySrc}
                alt={project.name}
                fill
                sizes={isWide ? "100vw" : "(max-width: 768px) 50vw, 33vw"}
                className={`object-cover transition-all duration-1500 ease-in-out ${isFinePointer ? "group-hover:scale-105" : ""} ${currentImage === 'primary' ? 'opacity-100' : 'opacity-0'}`}
                priority={project.id === "1"}
            />

            {/* Hover image — desktop hover or mobile slideshow */}
            <Image
                src={hoverSrc}
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
                    style={{ fontFamily: "DrukTextWide, sans-serif" }}
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

export default ProjectCard;