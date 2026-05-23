export interface Project {
    id: string;
    name: string;
    type: string;
    description: string;
    slug: string;
    imagePrimary: string;
    imageHover: string;
    imagePrimaryTall?: string;
    imageHoverTall?: string; 
    layout: "tall" | "wide";
}

export const PROJECTS: Project[] = [
    {
        id: "1",
        name: "Triskelion",
        type: "Branding / Identity",
        description: "An expressive brand identity created to move everyday money in chat Services Brand Identity",
        slug: "triskelion",
        imagePrimary: "/images/triskelion-work3.png",
        imageHover: "/images/triskelion-work1.webp",
        layout: "tall",
    },
    {
        id: "2",
        name: "Toch",
        type: "Branding / Identity",
        description: "Mobile application with smooth animations and user-friendly interface for enhanced user engagement.",
        slug: "toch",
        imagePrimary: "/images/Group 161.png",
        imageHover: "/images/Group 162.png",
        layout: "tall",
    },
    {
        id: "3",
        name: "Astra",
        type: "Web Development / AI / Blockchain / ",
        description: "An AI-powered blockchain platform built for fashion designers — enabling digital ownership, smart contracts, and creative monetization in the fashion industry.",
        slug: "astra",
        imagePrimaryTall: "/images/astra-tall.png",
        imageHoverTall: "/images/astra-tall2.png", 
        imagePrimary: "/images/astra-work2.png",
        imageHover: "/images/astra-work3.png",
        layout: "wide",
    },
    {
        id: "4",
        name: "Revo",
        type: "Branding / Identity",
        description: "Mobile application with smooth animations and user-friendly interface for enhanced user engagement.",
        slug: "revo",
        imagePrimary: "/images/revolt-1.png",
        imageHover: "/images/revolt-2.png",
        layout: "tall",
    },
    {
        id: "5",
        name: "Focus",
        type: "Branding / Identity",
        description: " ",
        slug: "focus",
        imagePrimary: "/images/focus-work1.webp",
        imageHover: "/images/focus-work2.webp",
        layout: "tall",
    },
    {
        id: "6",
        name: "KDN News",
        type: "Web Development",
        description: "Web application with articles posting and user-friendly interface for enhanced user engagement.",
        slug: "kdnn",
        imagePrimary: "/images/kdn-tall.png",
        imageHover: "/images/kdn-tall2.png",
        layout: "tall",
    },
    {
        id: "7",
        name: "Solbase",
        type: "Web / Branding",
        description: "Website and branding for a Lagos-based startup, combining modern design with local cultural elements.",
        slug: "solbase",
        imagePrimary: "/images/Frame 22.png",
        imageHover: "/images/solbase-work2.webp",
        layout: "tall",
    },
    {
        id: "8",
        name: "Bozin",
        type: "Branding / Identity",
        description: "Mobile application with smooth animations and user-friendly interface for enhanced user engagement.",
        slug: "bozin",
        imagePrimary: "/images/bozn-work1.webp",
        imageHover: "/images/bozn-work3.jpg",
        layout: "tall",
    },
    {
        id: "9",
        name: "Neat n Nailed",
        type: "Branding / Identity",
        description: "Mobile application with smooth animations and user-friendly interface for enhanced user engagement.",
        slug: "neat-and-nailed",
        imagePrimary: "/images/neat-1.png",
        imageHover: "/images/neat-2.png",
        layout: "tall",
    },
];