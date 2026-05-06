// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";

// export default function ProjectCard({ project }: { project: Project }) {
//     const [hovered, setHovered] = useState(false);

//     const isWide = project.layout === "wide";

//     return (
//         <Link
//             href={`#`}
//             // When individual project pages exist, swap # for: `/work/${project.slug}`
//             className={`relative block overflow-hidden group ${isWide ? "col-span-2" : "col-span-1"}`}
//             style={{ aspectRatio: isWide ? "2.4 / 1" : "3 / 4" }}
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             aria-label={`View project: ${project.name}`}
//         >
//             {/* Primary image */}
//             <Image
//                 src={project.imagePrimary}
//                 alt={project.name}
//                 fill
//                 sizes={
//                     isWide
//                         ? "100vw"
//                         : "(max-width: 768px) 50vw, 33vw"
//                 }
//                 className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
//                 priority={project.id === "1"}
//             />

//             {/* Hover image */}
//             <Image
//                 src={project.imageHover}
//                 alt={`${project.name} — detail`}
//                 fill
//                 sizes={
//                     isWide
//                         ? "100vw"
//                         : "(max-width: 768px) 50vw, 33vw"
//                 }
//                 className={`object-cover absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
//                     ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
//             />

//             {/* Gradient overlay */}
//             <div
//                 className={`absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent
//                     transition-opacity duration-400
//                     ${hovered ? "opacity-100" : "opacity-0"}`}
//             />

//             {/* Label */}
//             <div
//                 className={`absolute bottom-4 left-4 right-4 transition-all duration-350
//                     ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
//             >
//                 <p
//                     className="text-white uppercase text-sm tracking-widest font-bold"
//                     style={{ fontFamily: WIDE }}
//                 >
//                     {project.name}
//                 </p>
//                 <p
//                     className="text-white/60 uppercase text-xs tracking-wider mt-0.5"
//                     style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
//                 >
//                     {project.type}
//                 </p>
//             </div>

//             {/* Project number — top right, always visible */}
//             {/* <span
//                 className="absolute top-4 right-4 text-white/30 text-xs tracking-widest"
//                 style={{ fontFamily: COND, fontWeight: 900 }}
//                 aria-hidden="true"
//             >
//                 {String(parseInt(project.id)).padStart(2, "0")}
//             </span> */}
//         </Link>
//     );
// }