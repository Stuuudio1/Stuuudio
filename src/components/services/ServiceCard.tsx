"use client";

import Image from "next/image";
import Link from "next/link";

const SERVICE_CARDS = [
    {
        label: "Brand Identity",
        slug: "brand-identity",
        image: "/images/brand.webp",
    },
    {
        label: "Web Development",
        slug: "web-development",
        image: "/images/dev.webp",
    },
    {
        label: "Cinematography",
        slug: "cinematography",
        image: "/images/cinema.webp",
    },
];

const ServiceCard = ({
    label,
    slug,
    image,
}: (typeof SERVICE_CARDS)[0]) => {
    return (
        <Link href={`/projects/category/${slug}`} className="block">
            <div
                className="relative overflow-hidden rounded-sm cursor-pointer"
                style={{ aspectRatio: "3/4" }}
            >
                <Image
                    src={image}
                    alt={label}
                    fill
                    className="object-cover"
                />

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICE_CARDS.map((card) => (
                <ServiceCard key={card.slug} {...card} />
            ))}
        </div>
    );
}