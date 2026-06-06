import { Letter, WIDE, COND } from "../ui/Letter";
import Image from "next/image";

const teamMembers: { name: string; role: string; img: string; colSpan: string }[] = [
    {
        name: "Adeleke Precious Adekunle",
        role: "Brand Designer",
        img: "/images/Precious.webp",
        colSpan: "col-span-2",
    },
    {
        name: "Dannon Abayomi ",
        role: "Software Developer",
        img: "/images/Dannon.webp",
        colSpan: "col-span-3",
    },
    {
        name: "Olawoyin Julius",
        role: "Motion & Graphic Designer",
        img: "/images/Julius.webp",
        colSpan: "col-span-3",
    },
    {
        name: "Aladesuyi Praise",
        role: "Cinematographer",
        img: "/images/Praise.webp",
        colSpan: "col-span-2",
    },
];

const TeamGrid = () => {
    return (
        <div className="grid grid-cols-5 gap-1" style={{ gridTemplateRows: "650px 650px" }}>
            {teamMembers.map((member, index) => (
                <div
                    key={index}
                    className={`${member.colSpan} relative overflow-hidden`}
                >
                    <Image
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        width={500}
                        height={700}
                    />

                    {/* Deep gradient fade — covers ~70% of the card from the bottom */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 20%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.15) 62%, transparent 75%)",
                        }}
                    />

                    {/* Frosted-glass pill behind the text for extra legibility */}
                    <div
                        className="absolute bottom-0 left-0 right-0 px-6 py-7"
                        style={{
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            background:
                                "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                        }}
                    >
                        <p className="text-white font-black text-lg tracking-tight leading-tight m-0 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                            {member.name}
                        </p>
                        <p className="text-white/80 text-lg font-normal tracking-tight m-0 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                            {member.role}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default function Team() {
    return (
        <>
            <div className="pb-6 md:pb-40 mt-10 md:mt-32 flex items-start justify-between">
                <h2
                    aria-label="Service"
                    style={{
                        lineHeight: 1,
                        userSelect: "none",
                        alignItems: "baseline",
                    }}
                    className="text-[clamp(2rem,3vw,4rem)] lg:text-[clamp(2.4rem,6vw,7rem)] uppercase flex items-center gap-0 m-0 p-0"
                >
                    <Letter char="T" font={WIDE} weight={800} />
                    <Letter char="H" font={COND} weight={900} />
                    <Letter char="E" font={COND} weight={800} />

                    <div className="lg:ml-5">
                        <Letter char="T" font={WIDE} weight={900} />
                        <Letter char="E" font={COND} weight={800} />
                        <Letter char="A" font={COND} weight={900} />
                        <Letter char="M" font={WIDE} weight={800} />
                    </div>
                </h2>

                <div>
                    <p className="text-white font-medium text-xs md:text-2xl max-w-37.5 md:max-w-112.5 lg:max-w-150 xl:max-w-3xl">
                        At our core is a group of creatives who've been in the trenches together. Around us, a wider crew of specialists who join on projects, campaigns, and everything in between.
                    </p>
                </div>

                <div></div>
            </div>

            <TeamGrid />
        </>
    );
}