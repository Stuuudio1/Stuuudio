import Image from "next/image";
import Link from "next/link";

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
        <section id="about" className="bg-black text-white w-full pb-20">

            {/* ABOUT heading */}
            <div className="pb-10 md:pb-24 xs:-mt-16 md:mt-0">
                <h2
                    aria-label="About"
                    style={{
                        fontSize: "clamp(5rem, 10vw, 9rem)",
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
                    <Letter char="A" font={COND} weight={900} />
                    <Letter char="B" font={WIDE} weight={800} />
                    <Letter char="O" font={WIDE} weight={800} />
                    <Letter char="U" font={COND} weight={900} />
                    <Letter char="T" font={WIDE} weight={800} />
                </h2>
            </div>

            {/* Content grid */}
            <div className="pb-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left — image */}
                <div className="relative w-full overflow-hidden h-90 lg:h-162.5">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                        alt="Studio workspace"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>

                {/* Right — copy column */}
                <div className="flex flex-col md:pt-10">

                    <div className="pb-2 md:pb-16">
                        <h3
                            className="text-4xl uppercase"
                            style={{ fontFamily: WIDE, fontWeight: 900 }}
                        >
                            ABOUT US
                        </h3>
                    </div>

                    <div className="flex flex-col justify-between flex-1">

                        <div
                            className="pt-4 pb-8 text-sm md:text-lg"
                            style={{
                                fontFamily: "var(--font-body)",
                                fontWeight: 100,
                                lineHeight: 1.5,
                                color: "rgba(255,255,255,0.9)",
                            }}
                        >
                            <p>
                                    WE&apos;RE NOT AN AGENCY.
                            </p>

                            <p>
                                    We&apos;re Your Unfair Advantage.
                                    </p>
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

                        <div className="pt-5 md:pt-10">
                            <Link href="/about">
                                <button
                                    className="px-8 py-4 rounded-full text-base uppercase bg-gray-900/50
                                                tracking-widest text-white hover:bg-white hover:text-black transition-colors 
                                                duration-300 cursor-pointer"
                                    style={{ fontWeight: 400 }}
                                >
                                    LEARN MORE
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full border-t border-white" />
        </section>
    );
}