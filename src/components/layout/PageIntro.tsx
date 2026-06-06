"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PageIntro() {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setHidden(true),
        });

        tl.to({}, { duration: 1 })
            .to(overlayRef.current, {
                yPercent: -100,
                duration: 2,
                ease: "expo.inOut",
            });

        return () => {
            tl.kill();
        };
    }, []);

    if (hidden) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[9999] bg-black overflow-hidden"
        >
            <Image
                src="/Icons/logo.svg"
                alt="Studio"
                width={2000}
                height={400}
                priority
                className="
                    absolute
                    left-0
                    bottom-[3%]
                    w-full
                    h-auto
                    select-none
                "
            />
        </div>
    );
}