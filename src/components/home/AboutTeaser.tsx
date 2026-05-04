import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="bg-black text-white w-full">
            {/* ABOUT heading — only A and U are horizontally condensed */}
            <div className="px-10 pt-10 pb-16">
                <h2
                    className="text-[6rem] leading-none uppercase tracking-tight select-none"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
                >
                    <span style={{ display: "inline-block", transform: "scaleX(0.55)" }}>A</span>
                    <span>BOUT</span>
                </h2>
            </div>

            {/* Content grid */}
            <div className="px-10 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left — image, max height 650px */}
                <div className="relative w-full overflow-hidden" style={{ height: "650px" }}>
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                        alt="Studio workspace"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>

                {/* Right — copy, pinned to same 650px height so button sits at bottom */}
                <div
                    className="flex flex-col"
                    style={{ height: "650px" }}
                >
                    {/* ABOUT US label — sits near top */}
                    <div>
                        <h3
                            className="text-2xl uppercase pt-6"
                            style={{ fontFamily: "var(--font-heading)", fontWeight: 900 }}
                        >
                            ABOUT US
                        </h3>
                    </div>

                    {/* Large gap between heading and body copy */}
                    <div className="flex-1 flex flex-col justify-between" style={{ paddingTop: "80px" }}>
                        {/* Body copy */}
                        <div
                            className="space-y-4 text-[0.875rem] leading-relaxed"
                            style={{ fontFamily: "var(--font-body)", fontWeight: 100, lineHeight: 1.8, fontSize: "18px" }}
                        >
                            <p className="text-white">
                                WE&apos;RE NOT AN AGENCY.
                                <br />
                                We&apos;re Your Unfair Advantage.
                                <br />
                                <span className="text-white">
                                    Stuuudio is a Lagos-based design and development crew with one
                                    obsession with building digital presence that punches way above
                                    its weight.
                                </span>
                            </p>

                            <p className="text-white">
                                We started because we were tired of watching great Nigerian
                                businesses get buried under ugly websites, outdated designs, and
                                cookie-cutter templates. The big brands weren&apos;t smarter.
                                They just had better design. So we decided to close that gap
                                right here from Lagos.
                            </p>

                            <p className="text-white">
                                We work with founders, operators, and small teams across Nigeria
                                and beyond who are serious about growth. Not people who want a
                                pretty website — people who want a website that works while they
                                sleep.
                            </p>
                        </div>

                        {/* CTA — pinned toward the bottom */}
                        <div className="pt-8">
                            <button
                                className="px-8 py-4 rounded-full border border-white/40 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                            >
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom border */}
            <div className="w-full border-t border-white/20" />
        </section>
    );
}