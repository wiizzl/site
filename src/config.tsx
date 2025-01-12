import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const config = {
    title: "Pierre Houllière",
    description: "Freelance developer, computer science student",
    keywords: ["developer", "portfolio", "freelance", "web", "student"],

    email: "houllierep@gmail.com",

    socials: [
        { name: "LinkedIn", href: "https://linkedin.com/in/pierrehoulliere", icon: Linkedin },
        { name: "GitHub", href: "https://github.com/wiizzl", icon: Github },
        { name: "Instagram", href: "https://instagram.com/pierre.hlr_", icon: Instagram },
        { name: "Email", href: "mailto:houllierep@gmail.com", icon: Mail },
    ],
};

export { config };
