export interface Service {
    id: string;
    number: string;
    title: string;
    cursorImage: string;
    description: string;
}

export const SERVICES: Service[] = [
    {
        id: "web",
        number: "01",
        title: "Web Design & Development",
        cursorImage:
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&q=80",
        description:
            "We design and build websites that are fast, functional, and built to convert. From the layout to the last line of code, everything is custom.",
    },
    {
        id: "brand",
        number: "02",
        title: "Brand Identity",
        cursorImage:
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&q=80",
        description:
            "We craft the full identity of your brand logo, colour palette, typography, and tone of voice. Everything you need to show up consistently.",
    },
    {
        id: "motion",
        number: "03",
        title: "Motion Design",
        cursorImage:
            "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=300&q=80",
        description:
            "We bring your brand to life through animation and motion graphics, for social, web, and beyond.",
    },
    {
        id: "commercial",
        number: "04",
        title: "Product Commercial",
        cursorImage:
            "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=300&q=80",
        description: "We shoot and produce high-quality visuals and videos that showcase your product at its best.",
    },
];