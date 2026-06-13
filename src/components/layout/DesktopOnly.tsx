"use client";

import { useEffect, useState } from "react";

export default function DesktopOnly({ children }: { children?: React.ReactNode }) {
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    if (isDesktop === null || !isDesktop) return null;
    return <>{children}</>;
}