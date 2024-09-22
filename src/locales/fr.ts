export default {
    layout: {
        header: {
            about: "à propos",
            projects: "projets",
            monitoring: "veille",
            guestbook: "signatures",

            changeLocale: "Changer la langue",
            changeTheme: "Changer le thème",
            getSource: "Voir le code source",
        },
        footer: {
            allRightReserved: "Tous droits réservés",
        },
    },
    pages: {
        hero: {
            hello: "Bonjour, je m'appelle Pierre",
            slug: "Je transforme des idées en réalité",
            description:
                "Je suis un étudiant de 18 ans basé en France (Rouen), et je suis passionné par la création d'environnements virtuels. J'aime étudier et concevoir des solutions aux besoins techniques.",
        },
        guestbook: {
            sign: "Signer mon livre",
            signIn: "Connexion avec",
            signOut: "Déconnexion",

            writeMessage: "Rédiger un message",
            messageContent: "Contenu de votre message",

            notif: {
                success: "Votre message a bien été envoyé !",
                alreadyFound: "Vous avez déjà signé le livre",
                error: "Une erreur est survenue. Veuillez réessayer plus tard",
            },
        },
    },
} as const;
