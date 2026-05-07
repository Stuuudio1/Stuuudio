"use client";
import Image from "next/image";

const SOCIALS = [
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
];

function UnderlineLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            className="group relative inline-block"
            style={{ fontFamily: "var(--font-body, sans-serif)", fontWeight: 300 }}
        >
            {children}
            <span
                className="absolute left-0 bottom-0 h-px bg-white/60 w-full origin-left scale-x-0 transition-transform duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100"
                aria-hidden="true"
            />
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="bg-black text-white w-full overflow-hidden">

            {/* ── Desktop top bar (hidden on mobile/tablet) ── */}
            <div
                className="hidden lg:flex items-center justify-between
                   px-6 md:px-10 py-5 text-white"
                style={{ fontFamily: "var(--font-body, sans-serif)", fontWeight: 300 }}
            >
                <span className="shrink-0 text-base">
                    Inquiries:{" "}
                    <a
                        href="mailto:Createwithstuuudio@gmail.com"
                        className="text-white text-base hover:text-white transition-colors duration-200"
                    >
                        Createwithstuuudio@gmail.com
                    </a>
                </span>

                <nav className="flex items-center text-base gap-4" aria-label="Social links">
                    {SOCIALS.map((s, i) => (
                        <span key={s.label} className="flex items-center gap-4">
                            <UnderlineLink href={s.href}>{s.label}</UnderlineLink>
                            {i < SOCIALS.length - 1 && (
                                <span className="text-white/20" aria-hidden="true"> </span>
                            )}
                        </span>
                    ))}
                </nav>

                <span className="shrink-0 font-medium text-base">Stuuudio©2026</span>
            </div>

            {/* ── Mobile/Tablet layout ── */}
            <div className="lg:hidden">
                {/* Inquiries — sits above the wordmark, full width */}
                <div
                    className="px-4 pt-5 pb-3 text-base text-white"
                    style={{ fontFamily: "var(--font-body, sans-serif)", fontWeight: 300 }}
                >
                    Inquiries:{" "}
                    <a
                        href="mailto:Createwithstuuudio@gmail.com"
                        className="text-white text-sm hover:text-white transition-colors duration-200"
                    >
                        Createwithstuuudio@gmail.com
                    </a>
                </div>

                {/* Wordmark */}
                <div className="w-full px-4 py-4">
                    <Image
                        src="/icons/logo.svg"
                        alt="Stuuudio"
                        width={1200}
                        height={220}
                        priority
                        className="w-full h-auto pointer-events-none select-none"
                    />
                </div>

                {/* Below wordmark: socials left, copyright right */}
                <div
                    className="flex items-center justify-between px-4 pb-5 text-sm text-white"
                    style={{ fontFamily: "var(--font-body, sans-serif)", fontWeight: 300 }}
                >
                    {/* Socials — bottom left */}
                    <nav className="flex items-center" aria-label="Social links">
                        {SOCIALS.map((s, i) => (
                            <span key={s.label} className="flex items-center gap-3">
                                <UnderlineLink href={s.href}>{s.label}</UnderlineLink>
                                {i < SOCIALS.length - 1 && (
                                    <span className="text-white/20" aria-hidden="true"> </span>
                                )}
                            </span>
                        ))}
                    </nav>

                    {/* Copyright — bottom right */}
                    <span className="shrink-0">Stuuudio © 2026</span>
                </div>
            </div>

            {/* ── Desktop wordmark ── */}
            <div className="hidden lg:block w-full px-6 md:px-10 py-8">
                <Image
                    src="/icons/logo.svg"
                    alt="Stuuudio"
                    width={1200}
                    height={220}
                    priority
                    className="w-full h-auto pointer-events-none select-none"
                />
            </div>
        </footer>
    );
}