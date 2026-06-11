"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SERVICE_CARDS = [
    {
        label: "Brand Identity",
        slug: "brand-identity",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
        gradient: "from-violet-900 via-purple-800 to-indigo-900",
    },
    {
        label: "Web Development",
        slug: "web-development",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        gradient: "from-sky-900 via-blue-800 to-cyan-900",
    },
    {
        label: "Motion Design",
        slug: "motion-design",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
        gradient: "from-rose-900 via-pink-800 to-fuchsia-900",
    },
    {
        label: "Cinematography",
        slug: "cinematography",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
        gradient: "from-amber-900 via-orange-800 to-yellow-900",
    },
];

const ServiceCard = ({
    label,
    slug,
    image,
    gradient,
}: (typeof SERVICE_CARDS)[0]) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Link href={`/projects/category/${slug}`} className="block">
            <div
                className="relative overflow-hidden rounded-sm cursor-pointer group"
                style={{ aspectRatio: "3/4" }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Image — fades out on hover, only on fine-pointer (desktop) devices */}
                <Image
                    src={image}
                    alt={label}
                    fill
                    className={`object-cover transition-opacity duration-500 [@media(pointer:fine)]:${
                        hovered ? "opacity-0" : "opacity-100"
                    }`}
                />

                {/* Gradient overlay — fades in on hover, desktop only */}
                <div
                    className={`absolute inset-0 bg-linear-to-br ${gradient} transition-opacity duration-500 [@media(pointer:fine)]:${
                        hovered ? "opacity-100" : "opacity-0"
                    } pointer-coarse:opacity-0`}
                />

                {/* Centered label — fades in on hover, desktop only */}
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 [@media(pointer:fine)]:${
                        hovered ? "opacity-100" : "opacity-0"
                    } pointer-coarse:opacity-0`}
                >
                    <p className="text-white font-black text-2xl tracking-tight text-center px-6 leading-tight">
                        {label}
                    </p>
                </div>

                {/* Bottom bar — always visible */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 backdrop-blur-md bg-black/40 border-t border-white/10">
                    <p className="text-white font-black text-base tracking-tight leading-tight m-0">
                        {label}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default function ServiceCards() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {SERVICE_CARDS.map((card) => (
                <ServiceCard key={card.slug} {...card} />
            ))}
        </div>
    );
}