"use client";

import { useState } from "react";
import { Letter, WIDE, COND } from "../ui/Letter";
import { ServiceRow } from "../services/ServiceRow";
import { SERVICES, Service } from "@/lib/data/services";

export default function ServicesSection() {
    const [openId, setOpenId] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section id="services" className="bg-black text-white w-full pb-12 md:pb-20 md:px-0">

            {/* SERVICE heading */}
            <div className="pb-6 md:pb-20">
                <h2
                    aria-label="Service"
                    style={{
                        fontSize: "clamp(3rem, 10vw, 5rem)",
                        lineHeight: 1,
                        display: "flex",
                        alignItems: "baseline",
                        gap: 0,
                        margin: 0,
                        padding: 0,
                        textTransform: "uppercase",
                        userSelect: "none",
                    }}
                >
                    <Letter char="S" font={WIDE} weight={800} />
                    <Letter char="E" font={COND} weight={900} />
                    <Letter char="R" font={WIDE} weight={800} />
                    <Letter char="V" font={COND} weight={900} />
                    <Letter char="I" font={COND} weight={800} />
                    <Letter char="C" font={WIDE} weight={900} />
                    <Letter char="E" font={WIDE} weight={800} />
                </h2>
            </div>

            {/* Top divider */}
            <div className="w-full border-t border-white/20" />

            {/* Accordion list — single open */}
            <div>
                {SERVICES.map((service, i) => (
                    <ServiceRow
                        key={service.id}
                        service={service}
                        isOpen={openId === service.id}
                        onToggle={() => handleToggle(service.id)}
                        isLast={i === SERVICES.length - 1}
                    />
                ))}
            </div>

            {/* Bottom border */}
            <div className="w-full border-t border-white mt-16" />
        </section>
    );
}