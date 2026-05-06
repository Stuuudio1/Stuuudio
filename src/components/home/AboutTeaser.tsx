import Image from "next/image";

const WIDE = "DrukTextWide, sans-serif";
const COND = "DrukCond, sans-serif";

function Letter({
    char,
    font,
    weight,
    scaleX,
}: {
    char: string;
    font: string;
    weight: number;
    scaleX?: number;
}) {
    return (
        <span
            style={{
                fontFamily: font,
                fontWeight: weight,
                display: "inline-block",
                lineHeight: 0.82,
                verticalAlign: "baseline",
                transform: scaleX ? `scaleX(${scaleX})` : undefined,
                transformOrigin: "left bottom",
            }}
        >
            {char}
        </span>
    );
}

export default function AboutSection() {
    return (
        <section className="bg-black text-white w-full pb-20 pt-0">

            {/* ABOUT heading */}
            <div className="pb-0 md:pb-2 lg:pb-24">
                <h2
                    aria-label="About"
                    style={{
                        fontSize: "clamp(3.5rem, 10vw, 9rem)",
                        lineHeight: 1,
                        display: "flex",
                        alignItems: "baseline",
                        gap: 0,
                        margin: 0,
                        padding: 0,
                        paddingTop: 0,
                        textTransform: "uppercase",
                        userSelect: "none",
                    }}
                >
                    <Letter char="A" font={COND} weight={900} />
                    <Letter char="B" font={WIDE} weight={800} />
                    <Letter char="O" font={WIDE} weight={800} />
                    <Letter char="U" font={COND} weight={900} />
                    <Letter char="T" font={WIDE} weight={800} />
                </h2>
            </div>

            {/* Content grid */}
            <div className="pb-12 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                {/* Left — image */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                        alt="Studio workspace"
                        // fill
                        width={900}
                        height={600}
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        style={{ height: "550px" }}
                    />
                </div>

                {/* Right — copy column — no fixed height on mobile */}
                <div className="flex flex-col lg:pt-10 lg:h-[550px]">

                    <div className="pb-3 lg:pb-16">
                        <h3
                            className="text-xl lg:text-4xl uppercase"
                            style={{ fontFamily: WIDE, fontWeight: 900 }}
                        >
                            ABOUT US
                        </h3>
                    </div>

                    <div className="flex flex-col lg:justify-between lg:flex-1">
                        <div
                            className="pb-6 lg:pb-8 text-sm lg:text-lg space-y-3"
                            style={{
                                fontFamily: "var(--font-body)",
                                fontWeight: 100,
                                lineHeight: 1.5,
                                color: "rgba(255,255,255,0.9)",
                            }}
                        >
                            <p>WE&apos;RE NOT AN AGENCY.</p>
                            <p>We&apos;re Your Unfair Advantage.</p>
                            <p>
                                Stuuudio is a Lagos-based design and development crew with one
                                obsession building digital presence that punches way above
                                its weight.
                            </p>
                            <p>
                                We started because we were tired of watching great Nigerian
                                businesses get buried under ugly websites, outdated designs, and
                                cookie-cutter templates. The big brands weren&apos;t smarter.
                                They just had better design. So we decided to close that gap
                                right here from Lagos.
                            </p>
                            <p>
                                We work with founders, operators, and small teams across Nigeria
                                and beyond who are serious about growth. Not people who want a
                                pretty website — people who want a website that works while they
                                sleep.
                            </p>
                        </div>

                        <div className="pt-4 lg:pt-10">
                            <button
                                className="px-8 py-4 rounded-full text-sm lg:text-base uppercase bg-gray-900/50
                                            tracking-widest text-white hover:bg-white hover:text-black transition-colors 
                                            duration-300 cursor-pointer"
                                style={{ fontWeight: 400 }}
                            >
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full border-t border-white" />
        </section>
    );
}