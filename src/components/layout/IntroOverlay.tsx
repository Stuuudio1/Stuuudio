"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroOverlay() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation after a short delay
        const timer = setTimeout(() => setAnimate(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-transform duration-1000 ease-in-out ${animate ? "-translate-y-full" : "translate-y-0"
                }`}
        >
            <Image
                src="/Icons/logo.svg"
                alt="Logo"
                width={200}
                height={200}
                className="w-auto h-32 md:h-48"
            />
        </div>
    );
}
