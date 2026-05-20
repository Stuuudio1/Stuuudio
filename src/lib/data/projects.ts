export interface Project {
    id: string;
    name: string;
    type: string;
    description: string;
    slug: string;
    imagePrimary: string;
    imageHover: string;
    layout: "tall" | "wide";
}

export const PROJECTS: Project[] = [
    {
        id: "1",
        name: "Triskelion",
        type: "Branding / Identity",
        description: "An expressive brand identity created to move everyday money in chat Services Brand Identity",
        slug: "triskelion",
        // imagePrimary: "/images/triskelion-work2.webp",
        imagePrimary: "/images/triskelion-work3.png",
        imageHover: "/images/triskelion-work1.webp",
        layout: "tall",
    },
    {
        id: "2",
        name: "Solbase",
        type: "Web / Branding",
        description: "Website and branding for a Lagos-based startup, combining modern design with local cultural elements.",
        slug: "project-four",
        imagePrimary: "/images/solbase-work1.webp",
        imageHover: "/images/solbase-work2.webp",
        layout: "tall",
    },
    {
        id: "3",
        name: "Astra",
        type: "Web Development / AI / Blockchain / ",
        description: "An AI-powered blockchain platform built for fashion designers — enabling digital ownership, smart contracts, and creative monetization in the fashion industry.",
        slug: "astra",
        imagePrimary: "/images/astra-work1.png",
        imageHover: "/images/astra-work2.png",
        layout: "wide",
    },
    {
        id: "4",
        name: "Focus",
        type: "Branding / Identity",
        description: " ",
        slug: "focus",
        imagePrimary: "/images/focus-work2.webp",
        imageHover: "/images/focus-work1.webp",
        layout: "tall",
    },
    {
        id: "5",
        name: "Bozin",
        type: "Branding / Identity",
        description: "Mobile application with smooth animations and user-friendly interface for enhanced user engagement.",
        slug: "bozin",
        imagePrimary: "/images/bozn-work1.webp",
        imageHover: "/images/bozn-work3.jpg",
        layout: "tall",
    },
];