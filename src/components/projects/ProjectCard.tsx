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
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isFinePointer]);

    return (
        <Link
            href={`/projects/${project.slug}`}
            className={`flex flex-col group ${isWide ? "col-span-2" : "col-span-1"}`}
            onMouseEnter={isFinePointer ? () => setHovered(true) : undefined}
            onMouseLeave={isFinePointer ? () => setHovered(false) : undefined}
            aria-label={`View project: ${project.name}`}
        >
            {/* Image container */}
            <div
                className="relative w-full overflow-hidden"
                style={{ height: "clamp(300px, 50vw, 600px)" }}
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

                {/* Hover image */}
                <Image
                    src={hoverSrc}
                    alt={`${project.name} — detail`}
                    fill
                    sizes={isWide ? "100vw" : "(max-width: 768px) 50vw, 33vw"}
                    className={`object-cover absolute inset-0 transition-all duration-1500 ease-in-out ${isFinePointer ? (showHover ? "opacity-100 scale-100" : "opacity-0 scale-105") : (currentImage === 'hover' ? 'opacity-100' : 'opacity-0')}`}
                />
            </div>

            {/* Caption — always visible below image */}
            <div className="flex justify-between pt-3 pb-1">
                <p
                    className="text-white text-xl lg:text-2xl tracking-widest"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                    {project.name}
                </p>
                <p
                    className="text-white text-lg lg:text-xl tracking-wider mt-0.5"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}

                >
                    {project.type}
                </p>
            </div>
        </Link>
    );
}

export default ProjectCard;