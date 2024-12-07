import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const config = {
    title: "Pierre Houllière",
    description: "Développeur freelance, étudiant en informatique.",
    keywords: ["développeur", "portfolio", "freelance", "web", "développement"],

    socials: [
        { name: "LinkedIn", href: "https://linkedin.com/in/pierrehoulliere", icon: <Linkedin strokeWidth={1.7} /> },
        { name: "GitHub", href: "https://github.com/wiizzl", icon: <Github /> },
        { name: "Instagram", href: "https://instagram.com/pierre.hlr_", icon: <Instagram /> },
        { name: "Email", href: "mailto:pierre.houlliere@gmail.com", icon: <Mail /> },
    ],
};

export { config };
