import { Github, Instagram, Linkedin } from "lucide-react";

const config = {
    title: "Pierre Houllière",
    description: "Développeur freelance, étudiant en informatique.",
    keywords: ["developer", "portfolio", "freelance", "web", "student"],

    email: "houllierep@gmail.com",

    // see next.config.ts for redirects
    socials: [
        { name: "LinkedIn", icon: Linkedin },
        { name: "GitHub", icon: Github },
        { name: "Instagram", icon: Instagram },
    ],
};

export { config };
