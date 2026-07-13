export interface ProjectImage {
    src: string
    alt: string
}

export interface ResultPoint {
    heading?: string
    text: string
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
    result: ResultPoint[]
    bannerImage: ProjectImage
    featureImage: ProjectImage
    beforeImages: ProjectImage[]
    gridImages: ProjectImage[]
    liveUrl?: string
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
        liveUrl: "https://astra.fashion",
        type: 'Web Development',
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
        result: [
            { text: "Astra changes the entire flow." },
            { heading: "AI-Powered Design", text: "Creators can now describe their vision to an AI agent and receive three unique visual concepts for traditional dress designs no design skills required." },
            { heading: "Open Job Market", text: "Once they've chosen a direction, they can post it as an open job for tailors, makers, and fashion designers to apply for." },
            { heading: "Private Collaboration", text: "After selecting the right maker, both parties move into a private chat where measurements, delivery details, and expectations are aligned." },
            { heading: "Escrow Payments", text: "Payment is secured through a smart contract escrow on the Polygon blockchain, with funds released in milestones so creators only pay for what's delivered, and makers always get paid for what they've done." },
            { heading: "Marketplace", text: "Astra's marketplace lets makers upload existing designs for creators to browse, select, and purchase with the same escrow-backed payment system protecting every transaction." },
        ],
        bannerImage: {
            src: "/images/astra.webp",
            alt: "Astra platform banner",
        },
        featureImage: {
            src: "/images/astra-work3.webp",
            alt: "Astra platform feature",
        },
        beforeImages: [
            { src: "/images/astra-before.webp", alt: "Astra before 1" },
            { src: "/images/astra-tall3.webp", alt: "Astra before 2" },
        ],
        gridImages: [
            { src: "/images/astra-work1.webp", alt: "Astra grid image 1" },
            { src: "/images/astra-before2.webp", alt: "Astra grid image 3" },
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
        slug: "mavin",
        type: 'Cinematography',
        client: "Mavin",
        name: "Mavin",
        year: "2026",
        services: ["Cinematography",],
        tagline: "Behind the scene cinematography of the Colorado Music video shoot of Johnny Drille, Ayra Starr and Young Jonn",
        howItStarted: " The Mavin project was born out of a desire to capture the raw, authentic energy of a music video shoot in a way that felt cinematic, intimate, and visually compelling. We wanted to go beyond just documenting the process and instead create a visual narrative that showcased the artistry, collaboration, and behind-the-scenes magic that goes into bringing a music video to life. The goal was to create a piece that not only highlighted the talent of the artists but also gave fans an exclusive look at the creative process from start to finish.  ",
        problem: " Music video shoots are often fast-paced, chaotic environments where capturing high-quality behind-the-scenes footage can be challenging. The lighting, movement, and energy of the shoot can make it difficult to get clear, cinematic shots that truly convey the atmosphere and artistry of the production. Additionally, there’s often a lot of important moments happening simultaneously, making it hard to know where to focus the camera to capture the most compelling content.",
        result: [{ text: "The final cinematography piece for the Mavin project successfully captured the essence of the music video shoot, showcasing the artists' performances, the creative process, and the collaborative energy on set." },
        { text: "The footage was edited in a way that felt dynamic and engaging, with a mix of wide shots that captured the scale of the production and close-ups that highlighted the emotions and interactions between the artists and crew." },
        { text: "The final product not only provided fans with an exclusive behind-the-scenes look but also served as a standalone piece of content that celebrated the artistry and hard work that goes into creating a music video." },
        ],
        bannerImage: { src: "/images/mavin-feature.webp", alt: " platform banner" },
        featureImage: { src: "https://res.cloudinary.com/dlfh6aguk/video/upload/v1781092163/Bts_Final_Cut_1_2_lr1qcx.mp4", alt: " platform feature" },
        beforeImages: [
            { src: "/images/mavin-before.webp", alt: " before 1" },
            { src: "/images/mavin-before1.webp", alt: " before 2" },
        ],
        gridImages: [
            { src: "/images/mavin-grid1.webp", alt: " grid image 1" },
            { src: "/images/mavin-work2.webp", alt: " grid image 2" },
            { src: "/images/mavin-grid6.webp", alt: " grid image 3" }
        ],
        // credits: [
        //     { role: "", name: "" },
        //     { role: "", name: "" },
        //     { role: "", name: "" },
        //     { role: "", name: "" },
        // ],
        nextProject: "astra",
    },
    {
        id: "3",
        slug: "triskelion",
        type: 'Brand Identity',
        client: "Triskelion",
        name: "Triskelion",
        year: "2025",
        services: ["Brand Identity"],
        tagline: "An expressive brand identity created to move everyday money in chat Services Brand Identity",
        howItStarted: "Triskelion didn’t begin with a logo or a color palette. It started with a question: Why do so many creative agencies feel the same? The industry was crowded with agencies chasing trends, recycling ideas, and creating work that looked good but lacked meaning. Everything felt polished, but disconnected. Businesses were getting visuals without vision. Strategy without soul. So before we built the brand, we stepped back and defined what Triskelion should truly stand for.",
        problem: "The Problem: Modern brands move fast, but most creative agencies still operate on surface-level thinking. Clients are expected to fit into templates, trends, and safe ideas instead of building identities that actually feel unique to them. For startups, creators, and ambitious businesses trying to stand out, the creative world can feel repetitive and limiting. We believed there had to be another way. That’s where Triskelion was born. Inspired by movement, evolution, and forward momentum, Triskelion represents the fusion of strategy, creativity, and culture. We’re not here to simply make things “look nice.” We’re here to build brands that move people, challenge expectations, and leave a lasting impression. Because great design shouldn’t just follow culture. It should shape it.",
        result: [
            { text: "Now, with Triskelion fully brought to life, the agency stands as more than just a creative studio it's a movement built for brands that refuse to blend in." },
            { heading: "Strategic Creativity", text: "Bold visuals backed by intentional thinking, helping brands communicate with clarity, confidence, and impact." },
            { heading: "Identity-Driven Design", text: "From branding to digital experiences, every project is crafted to feel distinct, memorable, and culturally relevant." },
            { heading: "Built for the Misfits", text: "For founders, creators, and businesses that don't follow trends they create their own lane." },
            { heading: "Forward Momentum", text: "Inspired by the meaning behind the Triskelion symbol itself, the brand represents constant evolution, movement, and creative ambition." },
        ],
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
        // credits: [],
        nextProject: "spotify",
    },
    {
        id: "4",
        slug: "spotify",
        type: 'Cinematography',
        client: "Spotify",
        name: "Spotify",
        year: "2026",
        services: ["Cinematography"],
        tagline: "A behind the scene cinematography of a spotify africa ad shoot campaign",
        howItStarted: "The Spotify Africa project was born out of a desire to capture the vibrant energy and cultural richness of the African music scene in a way that felt authentic, cinematic, and visually compelling. We wanted to go beyond just documenting the process and instead create a visual narrative that showcased the artistry, collaboration, and behind-the-scenes magic that goes into bringing a music campaign to life. The goal was to create a piece that not only highlighted the talent of the artists but also gave fans an exclusive look at the creative process from start to finish.",
        problem: "Music campaign shoots are often fast-paced, dynamic environments where capturing high-quality behind-the-scenes footage can be challenging. The lighting, movement, and energy of the shoot can make it difficult to get clear, cinematic shots that truly convey the atmosphere and artistry of the production. Additionally, there’s often a lot of important moments happening simultaneously, making it hard to know where to focus the camera to capture the most compelling content.",
        result: [
            { text: "The final cinematography piece for the Spotify Africa project successfully captured the essence of the music campaign shoot, showcasing the artists' performances, the creative process, and the collaborative energy on set." },
            { text: "The footage was edited in a way that felt dynamic and engaging, with a mix of wide shots that captured the scale of the production and close-ups that highlighted the emotions and interactions between the artists and crew." },
            { text: "The final product not only provided fans with an exclusive behind-the-scenes look but also served as a standalone piece of content that celebrated the artistry and hard work that goes into creating a music campaign." },
        ],
        bannerImage: { src: "/images/spotify-banner1.webp", alt: "Spotify platform banner" },
        featureImage: { src: "https://res.cloudinary.com/dlfh6aguk/video/upload/v1781093027/Final_Export_2.0_Spotify_1_dfh7md.mp4", alt: "Spotify platform feature" },
        beforeImages: [
            { src: "/images/spotifywork5.webp", alt: " before 1" },
            { src: "/images/spotify-work4.webp", alt: " before 2" },
        ],
        gridImages: [
            { src: "/images/spotify-feature.webp", alt: " grid image 1" },
            { src: "/images/spotify-work6.webp", alt: " grid image 2" },
            { src: "/images/spotify-work7.webp", alt: " grid image 3" },
        ],
        // credits: [],
        nextProject: "mavin",
    },
    // {
    //     id: "4",
    //     slug: "focus",
    //     type: 'Web Development, Brand Identity',
    //     client: "Focus",
    //     name: "Focus",
    //     year: "2026",
    //     services: ["Web Development", "Brand Identity", "Motion Design", "Product Commercial"],
    //     tagline: "An expressive brand identity created to move everyday money in chat",
    //     howItStarted: "Focus was created with a mission bigger than delivery to build a courier brand people could genuinely trust with what matters most. In an industry where delayed shipments, poor communication, and damaged packages have become almost expected, we wanted the brand to stand for the opposite: speed, reliability, and care. Before designing the identity, we focused on understanding what customers truly value in a delivery service. It wasn’t just about getting packages from one place to another. It was about confidence. Knowing your package would arrive safely, professionally handled, and on time",
    //     problem: "Most delivery brands lean heavily on speed but overlook trust and customer experience. The branding often feels generic, rushed, and forgettable making it difficult for customers to feel secure handing over important deliveries",
    //     result: [
    //         { text: "The Focus identity was designed to reflect movement, reliability, and precision." },
    //         { heading: "Speed-Driven Identity", text: "A clean and modern visual system built to represent efficiency, fast turnaround times, and seamless delivery experiences." },
    //         { heading: "Reliable Package Handling", text: "Every brand element was crafted to reinforce safety, professionalism, and customer trust ensuring the service feels dependable from pickup to delivery." },
    //         { heading: "Built on Trust", text: "The branding balances boldness with clarity, helping Focus position itself as more than just another courier company." },
    //     ],
    //     bannerImage: { src: "/images/focus.webp", alt: " platform banner" },
    //     featureImage: { src: "/images/focus-feat.webp", alt: " platform feature" },
    //     beforeImages: [
    //         { src: "/images/focus-before1.webp", alt: " before 1" },
    //         { src: "/images/focus-work2.webp", alt: " before 2" },
    //     ],
    //     gridImages: [
    //         { src: "/images/focus-grid1.webp", alt: " grid image 1" },
    //         { src: "/images/focus-grid2.webp", alt: " grid image 2" },
    //         { src: "/images/focus-work1.webp", alt: " grid image 3" },
    //     ],
    //     nextProject: "kdnnn",
    // },
//     {
//     id: "5",
//     slug: "fufu-planet",
//     liveUrl: "https://fufuplanet.com/",
//     type: 'Web Development',
//     client: "Fufu Planet",
//     name: "Fufu Planet",
//     year: "2026",
//     services: ["Web Development"],
//     tagline: "A seamless admin experience for Africa's favourite comfort food.",
//     howItStarted: "Fufu Planet came to us needing a robust management layer behind their growing food delivery operation. The platform was already live and gaining traction, but the internal tooling hadn't kept pace orders were hard to track, vendor management was scattered, and the support team had no centralised system to work from.",
//     problem: "The core challenge was bringing structure to a busy, multi-sided operation. Vendors needed to be onboarded and managed, orders tracked across states, customer support tickets resolved efficiently, and business performance visible at a glance all from a single, reliable admin interface.",
//     result: [
//         { text: "We built a full-featured admin panel that gives the Fufu Planet team complete visibility and control over their platform. Every major workflow from vendor onboarding to order fulfilment to customer support now lives in one cohesive system." },
//         { heading: "Clean Interface", text: "The dashboard surfaces key business metrics immediately on login, with dedicated modules for vendors, orders, support tickets, and platform settings each built to handle real operational volume." },
//         { heading: "Integrated Data Layer", text: "We implemented a consistent three-layer architecture using TanStack Query and Zustand, ensuring data stays fresh, server state is managed predictably, and the UI responds quickly even under load." },
//         { heading: "Built for Scale", text: "Every section was wired directly to the live backend, with optimistic updates, error boundaries, and loading states handled throughout so the team can work confidently without running into dead ends." },
//     ],
//     bannerImage: { src: "/images/fufu-banner.webp", alt: "Fufu Planet admin platform banner" },
//     featureImage: { src: "/images/fufu-planet-desktop.webp", alt: "Fufu Planet admin platform feature view" },
//     beforeImages: [
//         { src: "/images/bg.webp", alt: "Fufu Planet before 1" },
//         { src: "/images/fufu.webp", alt: "Fufu Planet before 2" },
//     ],
//     gridImages: [
//         { src: "/images/fufu7.webp", alt: "Fufu Planet grid image 1" },
//         { src: "/images/fufu4.webp", alt: "Fufu Planet grid image 2" },
//         { src: "/images/fufu5.webp", alt: "Fufu Planet grid image 3" },
//     ],
//     credits: [
//         // { role: "Designer", name: "Morewa Olayiwo" },
//         // { role: "Backend Developer", name: "Ifeanyi Victor" },
//     ],
//     nextProject: "astra",
// },
  
]