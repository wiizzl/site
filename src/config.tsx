import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Config = {
    Title: "Pierre H. - wiizz",
    Description:
        "French computer science student, freelance developer. I love to create beautiful and efficient websites.",
    Keywords: ["developer", "portfolio", "dev"],

    Socials: [
        { name: "LinkedIn", href: "https://linkedin.com/in/pierrehoulliere", icon: <Linkedin strokeWidth={1.5} /> },
        { name: "GitHub", href: "https://github.com/wiizzl", icon: <Github strokeWidth={1.5} /> },
        { name: "Instagram", href: "https://instagram.com/pierre.hlr_", icon: <Instagram strokeWidth={1.5} /> },
        { name: "Email", href: "mailto:pierre.houlliere@gmail.com", icon: <Mail strokeWidth={1.5} /> },
    ],
};

export { Config };
