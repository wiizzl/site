import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const config = {
    title: "Pierre H. - wiizz",
    description:
        "French computer science student, freelance developer. I love to create beautiful and efficient websites.",
    keywords: ["developer", "portfolio"],

    socials: [
        { name: "LinkedIn", href: "https://linkedin.com/in/pierrehoulliere", icon: <Linkedin strokeWidth={1.7} /> },
        { name: "GitHub", href: "https://github.com/wiizzl", icon: <Github /> },
        { name: "Instagram", href: "https://instagram.com/pierre.hlr_", icon: <Instagram /> },
        { name: "Email", href: "mailto:pierre.houlliere@gmail.com", icon: <Mail /> },
    ],
};

export { config };
