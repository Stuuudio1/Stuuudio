import { Letter, WIDE, COND } from "../ui/Letter";
import Image from "next/image";

const teamMembers = [
    {
        name: "Adeleke Precious Adekunle",
        role: "Brand Designer",
        img: "/images/Precious.webp",
        colSpan: "md:col-span-2",
    },
    {
        name: "Dannon Abayomi",
        role: "Software Developer",
        img: "/images/Dannon.webp",
        colSpan: "md:col-span-3",
    },
    {
        name: "Olawoyin Julius",
        role: "Motion & Graphic Designer",
        img: "/images/Julius.webp",
        colSpan: "md:col-span-3",
    },
    {
        name: "Aladesuyi Praise",
        role: "Cinematographer",
        img: "/images/Praise.webp",
        colSpan: "md:col-span-2",
    },
];

const TeamGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-1 md:auto-rows-[650px]">
            {teamMembers.map((member, index) => (
                <div
                    key={index}
                    className={`${member.colSpan} relative overflow-hidden h-[500px] md:h-auto`}
                >
                    <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover"
                    />

                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 20%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.15) 62%, transparent 75%)",
                        }}
                    />

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
            <div className="pb-25 md:pb-40 mt-32 flex flex-col md:flex-row gap-8 md:gap-0 items-start justify-between">
                <h2
                    aria-label="Service"
                    style={{
                        lineHeight: 1,
                        userSelect: "none",
                        alignItems: "baseline",
                    }}
                    className="text-[clamp(2rem,3vw,4rem)] lg:text-[clamp(2.4rem,6vw,7rem)] uppercase flex items-center m-0 p-0"
                >
                    <div>
                    <Letter char="T" font={WIDE} weight={800} />
                    <Letter char="H" font={COND} weight={900} />
                    <Letter char="E" font={COND} weight={800} />
                    </div>

                    <div className="ml-1.5">
                        <Letter char="T" font={WIDE} weight={900} />
                        <Letter char="E" font={COND} weight={800} />
                        <Letter char="A" font={COND} weight={900} />
                        <Letter char="M" font={WIDE} weight={800} />
                    </div>
                </h2>

                <div>
                    <p className="text-white font-medium text-base lg:text-2xl md:max-w-112.5 lg:max-w-150 xl:max-w-3xl">
                        At our core is a group of creatives who've been in the trenches together. Around us, a wider crew of specialists who join on projects, campaigns, and everything in between.
                    </p>
                </div>

                <div></div>
            </div>

            <TeamGrid />
        </>
    );
}