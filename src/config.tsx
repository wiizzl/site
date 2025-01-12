import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const config = {
    title: "Pierre Houllière",
    description: "Développeur freelance, étudiant en informatique.",
    keywords: ["developer", "portfolio", "freelance", "web", "student"],

    email: "houllierep@gmail.com",

    // see next.config.ts for redirects
    socials: [
        { name: "LinkedIn", href: "/linkedin", icon: Linkedin },
        { name: "GitHub", href: "/github", icon: Github },
        { name: "Instagram", href: "/instagram", icon: Instagram },
        { name: "Email", href: "mailto:houllierep@gmail.com", icon: Mail },
    ],

    work: [
        {
            name: "FOLDING-ART",
            href: "https://folding-art.fr",
            description: "Paper art e-commerce site.",
        },
        {
            name: "Laine & Maille",
            href: "https://laine-maille.fr",
            description: "Handmade plush e-commerce site.",
        },
    ],

    projects: [
        {
            name: "Cosmic Pics",
            href: "https://github.com/wiizzl/cosmic-pics",
            image: "https://i.imgur.com/HEHDSEn.png",
            description: "Innovative app that utilizes NASA's API to display images in a smart and engaging way.",
            stack: ["React Native", "Expo", "TailwindCSS"],
            language: ["Typescript", "Python"],
        },
        {
            name: "the french tototte",
            href: "https://the-french-tototte-ten.vercel.app/",
            image: "https://i.imgur.com/UNjG7Xu.png",
            description: "Frontend of an adult luxury pacifier website (BastiUI challenge).",
            stack: ["React", "Next.js", "TailwindCSS"],
            language: ["Typescript"],
        },
        {
            name: "B-Pump",
            href: "https://github.com/B-Pump",
            image: "https://i.imgur.com/k8bFJJK.png",
            description: "Robot sports coach using AI to help user improve their movement.",
            stack: ["React Native", "Expo", "three.js", "TailwindCSS", "Mediapipe", "Socket.io", "OpenCV", "FastAPI"],
            language: ["Typescript", "Python"],
        },
        {
            name: "Info Galilée",
            href: "https://info-galilee.vercel.app",
            image: "https://i.imgur.com/gbhzBzm.png",
            description:
                "Site bringing together courses for students in the engineering sciences class at my high school.",
            stack: ["React", "Next.js", "TailwindCSS", "contentlayer", "shadcn/ui"],
            language: ["Typescript", "Markdown (MDX)"],
        },
    ],
};

export { config };
