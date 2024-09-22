export default {
    layout: {
        header: {
            about: "about",
            projects: "projects",
            monitoring: "monitoring",
            guestbook: "guestbook",

            changeLocale: "Change language",
            changeTheme: "Change theme",
            getSource: "Show source code",
        },
        footer: {
            terms: "Terms",
            privacy: "Privacy",

            allRightReserved: "All rights reserved",
        },
    },
    pages: {
        hero: {
            hello: "Hi, I'm Pierre",
            slug: "I turn ideas into reality",
            description:
                "I'm a 18-year-old student based in France (Rouen), and I'm passionate about creating digital experience. I enjoy studying and designing solutions to technical needs.",
            experience: {
                title: "Experience & Education",
                now: "Present",
                webDev: "Web Developer",
                bac: "HS Diploma in Siences",
                bts: "HND in Computer Science",
                downloadCV: "Download CV",
            },
        },
        guestbook: {
            title: "Sign my guestbook",
            signIn: "Sign in",
            signOut: "Sign out",

            writeMessage: "Write a message",
            messageContent: "Message content",

            info: {
                title: "Read before using it",
                description:
                    "During this connexion, I will only collect your username and email to avoid you putting multiple messages. I will not use this data to send you any email.",
            },

            notif: {
                success: "Your message has been sent!",
                alreadyFound: "You have already signed the guestbook",
                error: "An error occurred. Please try again later",
            },
        },
    },
} as const;
