export default {
    layout: {
        header: {
            about: "à propos",
            projects: "projets",
            monitoring: "veille",
            guestbook: "livre d'or",

            changeLocale: "Changer la langue",
            changeTheme: "Changer le thème",
            getSource: "Voir le code source",
        },
        footer: {
            terms: "Termes",
            privacy: "Confidentialité",

            allRightReserved: "Tous droits réservés",
        },
    },
    pages: {
        hero: {
            hello: "Bonjour, je m'appelle Pierre",
            slug: "Je transforme des idées en réalité",
            description:
                "Je suis un étudiant de 18 ans vivant en France (Rouen) et je suis passionné par la création d'environnements virtuels. J'aime étudier et concevoir des solutions aux besoins techniques.",

            experience: {
                title: "Expérience & Éducation",
                now: "Présent",
                webDev: "Développeur Web",
                bac: "BAC Général (Maths - SI)",
                bts: "BTS SIO (Option SLAM)",
                downloadCV: "Télécharger mon CV",
            },
        },
        guestbook: {
            title: "Signer mon livre d'or",
            signIn: "Connexion",
            signOut: "Déconnexion",

            writeMessage: "Rédiger un message",
            messageContent: "Contenu de votre message",

            info: {
                title: "À lire avant utilisation",
                description:
                    "Lors de la connexion, je collecterai uniquement votre nom et votre adresse mail afin d'éviter que vous mettiez plusieurs messages. Je n'utiliserai pas ces données pour vous envoyer des emails.",
            },

            notif: {
                success: "Votre message a bien été envoyé !",
                alreadyFound: "Vous avez déjà signé le livre d'or",
                error: "Une erreur est survenue. Veuillez réessayer plus tard",
            },
        },
    },
} as const;
