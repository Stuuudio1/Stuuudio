'use client';

import { useState } from "react";
import StaticNavbar from "@/components/layout/StaticNavbar";
import Footer from "@/components/layout/Footer";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Image from "next/image";
import { Letter, WIDE, COND } from "../../components/ui/Letter";
import { ServiceRow } from "@/components/services/ServiceRow";
import { SERVICES } from "@/lib/data/services";
import BeliefsCarousel from "@/components/about/BeliefCarousel";
import Team from "@/components/about/Team"


export default function AboutPage() {
        const [openId, setOpenId] = useState<string | null>(null);
    
        const handleToggle = (id: string) => {
            setOpenId((prev) => (prev === id ? null : id));
        };
        
    return (
        <>
            <StaticNavbar />
            <main className="pt-24 page-x pb-48 md:pb-72">
                <div className="flex justify-between items-start pb-8">
                    <div className="flex items-center">
                        <ScrollIndicator />
                        <span className="text-white text-xs uppercase tracking-widest">Scroll down</span>
                    </div>

                    <p className="text-white text-sm md:text-2xl font-medium w-50 lg:w-full max-w-lg text-left">
                        We are a small crew with a big obsession, building brands and digital presence that punch way above their weight.
                    </p>
                </div>

                <div className="relative w-full overflow-hidden h-90 lg:h-300 mt-20 lg:mt-40 pb-20">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                        alt="Studio workspace"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="w-full border-t mt-10 lg:mt-20 border-white" />

                <div className="pb-6 md:pb-20 mt-5">
                    <h2
                        aria-label="Service"
                        style={{
                            fontSize: "clamp(3rem, 10vw, 9rem)",
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
                <p className="font-medium font-var(--font-body) text-white text-base md:text-xl lg:text-2xl">
                    We are a design and strategy studio that builds full creative systems,
                    not isolated deliverables. From identity and messaging to websites,
                    content, and motion, we help brands move from idea to impact with clarity at every step.
                </p>

                <div className="mt-6 lg:mt-20 text-gray-100">
                    {SERVICES.map((service, i) => (
                        <ServiceRow
                            key={service.id}
                            service={service}
                            isOpen={openId === service.id}
                            onToggle={() => handleToggle(service.id)}
                            isFirst={i === 0}
                            isLast={i === SERVICES.length - 1}
                            variant="about"
                        />
                    ))}
                </div>

                {/* <BeliefsCarousel /> */}
                <Team />

            <div className="w-full border-t border-white mt-28" />

            </main>
            <Footer />
        </>
    );
}
