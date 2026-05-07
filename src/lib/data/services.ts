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
            "We design and build websites that do the selling before you open your mouth. Every pixel is intentional — every interaction earns its place. From lightning-fast marketing sites to complex web apps, we close the gap between great ideas and great execution.",
    },
    {
        id: "brand",
        number: "02",
        title: "Brand Identity",
        cursorImage:
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&q=80",
        description:
            "Your brand is the first thing people feel before they read a single word. We build identities that are impossible to ignore — rooted in strategy, executed with obsession. From naming to brand books, we give Nigerian businesses the visual language to compete anywhere in the world.",
    },
    {
        id: "motion",
        number: "03",
        title: "Motion Design",
        cursorImage:
            "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=300&q=80",
        description:
            "Still brands don't survive a scrolling world. Motion is how personality moves — how a brand breathes, reacts, and surprises. We craft micro-interactions, animated brand assets, and scroll-driven experiences that turn passive viewers into active believers.",
    },
    {
        id: "commercial",
        number: "04",
        title: "Product Commercial",
        cursorImage:
            "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=300&q=80",
        description:
            "Product shoots that make people want to reach through the screen. We handle creative direction, styling, and post-production for brands that need their products to look as good as they perform. Built for founders who are done leaving money on the table with bad visuals.",
    },
];