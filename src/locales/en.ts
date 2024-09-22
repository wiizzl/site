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
            allRightReserved: "All rights reserved",
        },
    },
    pages: {
        hero: {
            hello: "Hi, I'm Pierre",
            slug: "I turn ideas into reality",
            description:
                "I'm a 18-year-old student based in France (Rouen), and I'm passionate about creating digital experience. I enjoy studying and designing solutions to technical needs.",
        },
        guestbook: {
            sign: "Sign my guestbook",
            signIn: "Sign in with",
            signOut: "Sign out",

            writeMessage: "Write a message",
            messageContent: "Message content",

            notif: {
                success: "Your message has been sent!",
                alreadyFound: "You have already signed the guestbook",
                error: "An error occurred. Please try again later",
            },
        },
    },
} as const;
