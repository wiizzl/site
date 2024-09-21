import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Config = {
    Navigation: [
        { name: "A propos", href: "/about" },
        { name: "Projets", href: "/projects" },
        { name: "Veille", href: "/monitoring" },
        { name: "Signatures", href: "/guestbook" },
    ],
    Socials: [
        { name: "LinkedIn", href: "https://linkedin.com/in/pierrehoulliere", icon: <Linkedin strokeWidth={1.5} /> },
        { name: "GitHub", href: "https://github.com/wiizzl", icon: <Github strokeWidth={1.5} /> },
        { name: "Instagram", href: "https://instagram.com/pierre.hlr_", icon: <Instagram strokeWidth={1.5} /> },
        { name: "Email", href: "mailto:pierre.houlliere@gmail.com", icon: <Mail strokeWidth={1.5} /> },
    ],
    Experience: [
        {
            name: "Développeur Web",
            details: "Freelance",
            startDate: "04/2023",
            endDate: "Présent",
            image: "https://i.imgur.com/Lr0FsHR.jpeg",
        },
        {
            name: "Campus La Chataîgneraie",
            details: "BTS SIO (Option SLAM)",
            startDate: "09/2024",
            endDate: "Présent",
            image: "https://i.imgur.com/8AAoBGY.png",
        },
        {
            name: "Lycée Galilée, Franqueville-St-Pierre",
            details: "BAC Général (Maths - SI)",
            startDate: "09/2021",
            endDate: "07/2024",
            image: "https://i.imgur.com/287GhRx.png",
        },
    ],
};

export { Config };
