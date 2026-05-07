export interface Project {
    id: string;
    name: string;
    type: string;
    slug: string;
    imagePrimary: string;
    imageHover: string;
    layout: "tall" | "wide";
}

export const PROJECTS: Project[] = [
    {
        id: "1",
        name: "Fintech Dashboard",
        type: "UI / Web Design",
        slug: "fintech-dashboard",
        imagePrimary: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
        imageHover: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
        layout: "tall",
    },
    {
        id: "2",
        name: "Brand Identity",
        type: "Branding / Identity",
        slug: "brand-identity",
        imagePrimary: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
        imageHover: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80",
        layout: "tall",
    },
    {
        id: "3",
        name: "E-Commerce Platform",
        type: "Development / UX",
        slug: "ecommerce-platform",
        imagePrimary: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?w=1400&q=80",
        imageHover: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1400&q=80",
        layout: "wide",
    },
    {
        id: "4",
        name: "Lagos Startup",
        type: "Web / Branding",
        slug: "lagos-startup",
        imagePrimary: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80",
        imageHover: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
        layout: "tall",
    },
    {
        id: "5",
        name: "Mobile App",
        type: "UI / Motion",
        slug: "mobile-app",
        imagePrimary: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
        imageHover: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80",
        layout: "tall",
    },
];