import { Letter, WIDE, COND } from "../ui/Letter";

const teamMembers: { name: string; role: string; img: string; colSpan: string }[] = [
    {
        name: "Olawoyin Julius",
        role: "Motion & Graphic Designer",
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&fit=crop&crop=face",
        colSpan: "col-span-2",
    },
    {
        name: "Dannon Abayomi David",
        role: "Web & Mobile Developer",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80&fit=crop&crop=face",
        colSpan: "col-span-3",
    },
    {
        name: "Adeleke Precious Adekunle",
        role: "Brand & Product Designer",
        img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop&crop=face",
        colSpan: "col-span-3",
    },
    {
        name: "Praise West",
        role: "Creative Director",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop&crop=face",
        colSpan: "col-span-2",
    },
];

const TeamGrid = () => {
    return (
        <div className="grid grid-cols-5 gap-1" style={{ gridTemplateRows: "500px 500px" }}>
            {teamMembers.map((member, index) => (
                <div
                    key={index}
                    className={`${member.colSpan} relative overflow-hidden`}
                >
                    <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 px-6 py-5">
                        <p className="text-white font-black text-lg tracking-tight leading-tight m-0">
                            {member.name}
                        </p>
                        <p className="text-white/70 text-lg font-normal tracking-tight m-0">
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
            <div className="pb-6 md:pb-20 mt-10 md:mt-32 flex items-start justify-between">
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
                        Our studio is both small and big. We are a core staff of 4,
                        with a rotating group of people who support daily operations,
                        individual projects, and our clients directly.
                    </p>
                </div>

                <div></div>
            </div>

            <TeamGrid />
        </>
    );
}