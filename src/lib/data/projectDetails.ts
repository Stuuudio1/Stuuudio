export interface ProjectImage {
    src: string
    alt: string
}

export interface ProjectDetail {
    id: string
    slug: string
    client: string
    name: string
    type: string
    year: string
    services: string[]
    tagline: string
    howItStarted: string
    problem: string
    result: string
    bannerImage: ProjectImage       
    featureImage: ProjectImage 
    beforeImages: ProjectImage[]       
    gridImages: ProjectImage[]       
    credits?: {
        role: string
        name: string
    }[]
    nextProject: string
}

export const PROJECT_DETAILS: ProjectDetail[] = [
    {
        id: "1",
        slug: "astra",
        type: 'Web Development / AI / Blockchain',
        client: "Delz Erinle",
        name: "Astra",
        year: "2024",
        services: [
            "AI Platform Design",
            "Blockchain Integration",
            "API Integration",
            "Web Development",
        ],
        tagline: "Astra bridges AI-generated creativity and blockchain-secured commerce giving fashion creators and makers a seamless space to design, connect, and transact with confidence.",
        howItStarted: "Astra started with the idea of bridging the gap between fashion, AI and Web3 infrastructure and it was birthed by building a product that is not only futuristic but also has the ideology of connection traditional attires with spectacular fashion designers and tailors both nationally and Internationally.",
        problem: "The traditional fashion industry runs on informal agreements, delayed payments, and miscommunication between creators and makers. Creators struggle to visualise their ideas before committing to a tailor, while skilled makers have no reliable platform to showcase their work or guarantee fair compensation. Trust is fragile, disputes are common, and there's no infrastructure built for how this industry actually operates.",
        result: "Astra changes the entire flow. Creators can now describe their vision to an AI agent and receive three unique visual concepts for traditional dress designs — no design skills required. Once they've chosen a direction, they can post it as an open job for tailors, makers, and fashion designers to apply for. After reviewing applications and selecting the right maker, both parties move into a private chat where measurements, delivery details, and expectations are aligned. Payment is then secured through a smart contract escrow on the Polygon blockchain, with funds released in milestones as work progresses — so creators only pay for what's delivered, and makers always get paid for what they've done. For those who prefer a ready-made route, Astra's marketplace lets makers upload existing designs for creators to browse, select, and purchase — with the same escrow-backed payment system ensuring every transaction is protected end to end.",
        bannerImage: {
            src: "/images/astra.webp",
            alt: "Astra platform banner",
        },
        featureImage: {
            src: "/images/astra4.webp",
            alt: "Astra platform feature",
        },
        beforeImages: [ 
            { src: "/images/astra-before.webp", alt: "Astra before 1" },
            { src: "/images/astra-before2.webp", alt: "Astra before 2" },
        ],
        gridImages: [
            { src: "/images/astra-feature.webp", alt: "Astra grid image 1" },
            { src: "/images/astra-tall2.webp", alt: "Astra grid image 3" },
            { src: "/images/astra-tall.webp", alt: "Astra grid image 2" },
        ],
        credits: [
            { role: "Web Development", name: "Dannon Abayomi" },
            { role: "Web Development", name: "Sulieman Musa" },
            { role: "Product Designer", name: "Mosope Aderibigbe" },
            { role: "Backend Development", name: "Adelowo Samuel" },
        ],
        nextProject: "triskelion",
    },
    {
        id: "2",
        slug: "triskelion",
        type: 'Brand / Identity',
        client: "Triskelion",
        name: "Triskelion",
        year: "2025",
        services: ["Brand Identity"],
        tagline: "An expressive brand identity created to move everyday money in chat Services Brand Identity",
        howItStarted: "Triskelion didn’t begin with a logo or a color palette. It started with a question: Why do so many creative agencies feel the same? The industry was crowded with agencies chasing trends, recycling ideas, and creating work that looked good but lacked meaning. Everything felt polished, but disconnected. Businesses were getting visuals without vision. Strategy without soul. So before we built the brand, we stepped back and defined what Triskelion should truly stand for.",
        problem: "The Problem: Modern brands move fast, but most creative agencies still operate on surface-level thinking. Clients are expected to fit into templates, trends, and safe ideas instead of building identities that actually feel unique to them. For startups, creators, and ambitious businesses trying to stand out, the creative world can feel repetitive and limiting. We believed there had to be another way. That’s where Triskelion was born. Inspired by movement, evolution, and forward momentum, Triskelion represents the fusion of strategy, creativity, and culture. We’re not here to simply make things “look nice.” We’re here to build brands that move people, challenge expectations, and leave a lasting impression. Because great design shouldn’t just follow culture. It should shape it.",
        result: "Now, with Triskelion fully brought to life, the agency stands as more than just a creative studio it’s a movement built for brands that refuse to blend in. Strategic Creativity: Bold visuals backed by intentional thinking, helping brands communicate with clarity, confidence, and impact. Identity-Driven Design: From branding to digital experiences, every project is crafted to feel distinct, memorable, and culturally relevant. Built for the Misfits: For founders, creators, and businesses that don’t follow trends they create their own lane. Forward Momentum: Inspired by the meaning behind the Triskelion symbol itself, the brand represents constant evolution, movement, and creative ambition.",
        bannerImage: { src: "/images/triskelion.webp", alt: " platform banner" },
        featureImage: { src: "/images/triskelion3.webp", alt: " platform feature" },
        beforeImages: [ 
            { src: "/images/triskelion4.webp", alt: " before 1" },
            { src: "/images/triskelion6.webp", alt: " before 2" },
        ],
        gridImages: [
            { src: "/images/triskelion5.webp", alt: " grid image 1" },
            { src: "/images/triskelion-work1.webp", alt: " grid image 3" },
            { src: "/images/triskelion-work2.webp", alt: " grid image 2" },
        ],
        credits: [],
        nextProject: "solbase",
    },
    {
        id: "3",
        slug: "solbase",
        type: 'Branding / Identity',
        client: "Solbase",
        name: "Solbase",
        year: "2025",
        services: ["Brand Identity", "Motion Design",],
        tagline: "An expressive brand identity created to move everyday money in chat Services Brand Identity",
        howItStarted: "SolBase Tech was built around a simple idea: businesses need technology partners that feel innovative, reliable, and future-focused not cold, overly corporate, or disconnected from real business challenges. But when we looked at the B2B tech space, most brands felt identical. Generic visuals. Complex messaging. Buzzwords with no clarity. Companies were offering “solutions,” yet struggling to communicate trust, innovation, and scalability through their identity. So before designing the brand, we focused on understanding what modern B2B clients actually respond to: confidence, simplicity, and credibility.",
        problem: "In the world of B2B technology, first impressions matter. Businesses want partners that look capable of handling growth, transformation, and innovation at scale. Yet many tech brands fail to visually communicate that level of trust and sophistication.",
        result: "The SolBase Tech identity was designed to reflect innovation in motion — clean, bold, and scalable across every touchpoint. Strategic Branding: A modern visual system built to communicate trust, efficiency, and technological advancement. B2B-Focused Identity: Every design choice was crafted to appeal to businesses looking for dependable and future-ready tech solutions. Future-Driven Aesthetic: The bold orange palette paired with minimal design elements creates a strong, energetic presence that stands out in the crowded tech industry. Built for Growth: From digital platforms to corporate presentations, the identity system was designed to scale seamlessly as the company evolves.",
        bannerImage: { src: "/images/solbase.webp", alt: "Solbase platform banner" },
        featureImage: { src: "/images/solbase-feat.webp", alt: "Solbase platform feature" },
        beforeImages: [ 
            { src: "/images/solbase-work2.webp", alt: " before 1" },
            { src: "/images/before2.webp", alt: " before 2" },
        ],
        gridImages: [
            { src: "/images/solbase-grid1.webp", alt: " grid image 1" },
            { src: "/images/solbase-grid-2.webp", alt: " grid image 2" },
            { src: "/images/solbase-work1.webp", alt: " grid image 3" },
        ],
        credits: [],
        nextProject: "focus",
    },
    {
        id: "4",
        slug: "focus",
        type: 'Web Development, Brand Identity',
        client: "Focus",
        name: "Focus",
        year: "2026",
        services: ["Web Development", "Brand Identity", "Motion Design", "Product Commercial" ],
        tagline: "An expressive brand identity created to move everyday money in chat",
        howItStarted: "Focus was created with a mission bigger than delivery to build a courier brand people could genuinely trust with what matters most. In an industry where delayed shipments, poor communication, and damaged packages have become almost expected, we wanted the brand to stand for the opposite: speed, reliability, and care. Before designing the identity, we focused on understanding what customers truly value in a delivery service. It wasn’t just about getting packages from one place to another. It was about confidence. Knowing your package would arrive safely, professionally handled, and on time",
        problem: "Most delivery brands lean heavily on speed but overlook trust and customer experience. The branding often feels generic, rushed, and forgettable making it difficult for customers to feel secure handing over important deliveries",
        result: "The Focus identity was designed to reflect movement, reliability, and precision. Speed-Driven Identity: A clean and modern visual system built to represent efficiency, fast turnaround times, and seamless delivery experiences. Reliable Package Handling: Every brand element was crafted to reinforce safety, professionalism, and customer trust ensuring the service feels dependable from pickup to delivery. Built on Trust: The branding balances boldness with clarity, helping Focus position itself as more than just another courier company.",
        bannerImage: { src: "/images/focus.webp", alt: " platform banner" },
        featureImage: { src: "/images/focus-feat.webp", alt: " platform feature" },
        beforeImages: [ 
            { src: "/images/focus-before1.webp", alt: " before 1" },
            { src: "/images/focus-work2.webp", alt: " before 2" },
        ],
        gridImages: [
            { src: "/images/focus-grid1.webp", alt: " grid image 1" },
            { src: "/images/focus-grid2.webp", alt: " grid image 2" },
            { src: "/images/focus-work1.webp", alt: " grid image 3" },
        ],
        nextProject: "toch",
    },
    {
        id: "5",
        slug: "toch",
        type: 'Brand Identity',
        client: "Toch",
        name: "Toch",
        year: "2020",
        services: ["", "", "", ""],
        tagline: "",
        howItStarted: "",
        problem: "",
        result: "",
        bannerImage: { src: "/images/toch.webp", alt: " platform banner" },
        featureImage: { src: "/images/toch-feat.webp", alt: " platform feature" },
        beforeImages: [ 
            { src: "/images/Group 161.webp", alt: " before 1" },
            { src: "/images/Group 162.webp", alt: " before 2" },
        ],
        gridImages: [
            { src: "/images/", alt: " grid image 1" },
            { src: "/images/toch-before.webp", alt: " grid image 2" },
            { src: "/images/toch-before2.webp", alt: " grid image 3" },
        ],
        credits: [
            { role: "", name: "" },
            { role: "", name: "" },
            { role: "", name: "" },
            { role: "", name: "" },
        ],
        nextProject: "revo",
    },
    {
        id: "6",
        slug: "revo",
        type: 'Brand Identity',
        client: "Revo",
        name: "Revo",
        year: "2022",
        services: ["Brand Idenity", "Brand Design",],
        tagline: "",
        howItStarted: "",
        problem: "",
        result: "",
        bannerImage: { src: "/images/revolt.webp", alt: " platform banner" },
        featureImage: { src: "/images/revo-feat.webp", alt: " platform feature" },
        beforeImages: [ 
            { src: "/images/revolt-1.webp", alt: " before 1" },
            { src: "/images/revo-before.webp", alt: " before 2" },
        ],
        gridImages: [
            { src: "/images/", alt: " grid image 1" },
            { src: "/images/revo-grid.webp", alt: " grid image 2" },
            { src: "/images/revolt-2.webp", alt: " grid image 3" }
        ],
        credits: [
            { role: "", name: "" },
            { role: "", name: "" },
            { role: "", name: "" },
            { role: "", name: "" },
        ],
        nextProject: "",
    },
]