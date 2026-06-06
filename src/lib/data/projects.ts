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
        name: "Astra",
        type: "Web Development",
        description: "An AI-powered blockchain platform built for fashion designers — enabling digital ownership, smart contracts, and creative monetization in the fashion industry.",
        slug: "astra",
        imagePrimary: "/images/astra-tall.webp",
        imageHover: "/images/astra-tall3.webp",
        layout: "tall",
    },
        {
        id: "2",
        name: "Triskelion",
        type: "Brand Identity, Design System",
        description: "An expressive brand identity created to move everyday money in chat Services Brand Identity",
        slug: "triskelion",
        imagePrimary: "/images/triskelion-work3.webp",
        imageHover: "/images/triskelion-work1.webp",
        layout: "tall",
    },
    {
        id: "3",
        name: "Mavin",
        type: "Cinematography",
        description: "A behind the scene cinematography of the Colorado Music video shoot of Johnny Drille, Ayra Starr and Young Jon",
        slug: "mavin",
        imagePrimary: "/images/triskelion-work3.webp",
        imageHover: "/images/triskelion-work1.webp",
        layout: "wide",
    },
    {
        id: "4",
        name: "Toch",
        type: "Brand Identity, Graphic Design",
        description: "Mobile application with smooth animations and user-friendly interface for enhanced user engagement.",
        slug: "toch",
        imagePrimary: "/images/Group 161.webp",
        imageHover: "/images/Group 162.webp",
        layout: "tall",
    },
    {
        id: "6",
        name: "Focus",
        type: "Brand Identity, Graphic Design",
        description: " ",
        slug: "focus",
        imagePrimary: "/images/focus-work1.webp",
        imageHover: "/images/focus-work2.webp",
        layout: "tall",
    },
    // {
    //     id: "5",
    //     name: "Revo",
    //     type: "Brand Identity, Type Design",
    //     description: "Mobile application with smooth animations and user-friendly interface for enhanced user engagement.",
    //     slug: "revo",
    //     imagePrimary: "/images/revolt-1.webp",
    //     imageHover: "/images/revolt-2.webp",
    //     layout: "tall",
    // },
];