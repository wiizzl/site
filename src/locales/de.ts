export default {
    layout: {
        header: {
            about: "über mich",
            projects: "projekte",
            monitoring: "überwachung",
            guestbook: "gästebuch",

            changeLocale: "Sprache ändern",
            changeTheme: "Design ändern",
            getSource: "Quellcode anzeigen",
        },
        footer: {
            terms: "Bedingungen",
            privacy: "Datenschutz",

            allRightReserved: "Alle Rechte vorbehalten",
        },
    },
    pages: {
        hero: {
            hello: "Hallo, ich bin Pierre",
            slug: "Ich verwandle Ideen in Realität",
            description:
                "Ich bin ein 18-jähriger Student aus Frankreich (Rouen) und leidenschaftlich daran interessiert, digitale Erlebnisse zu schaffen. Ich genieße es, technische Bedürfnisse zu studieren und Lösungen dafür zu entwickeln.",

            experience: {
                title: "Erfahrung & Bildung",
                now: "Gegenwart",
                webDev: "Webentwickler",
                bac: "Abitur in Naturwissenschaften",
                bts: "HND in Informatik",
                downloadCV: "Lebenslauf herunterladen",
            },
        },
        guestbook: {
            title: "Signiere mein Gästebuch",
            signIn: "Einloggen",
            signOut: "Ausloggen",

            writeMessage: "Eine Nachricht schreiben",
            messageContent: "Nachrichteninhalt",

            info: {
                title: "Vor der Nutzung lesen",
                description:
                    "Während dieser Verbindung werde ich nur deinen Benutzernamen und deine E-Mail-Adresse sammeln, um zu verhindern, dass du mehrere Nachrichten schreibst. Ich werde diese Daten nicht verwenden, um dir E-Mails zu senden.",
            },

            notif: {
                success: "Deine Nachricht wurde gesendet!",
                alreadyFound: "Du hast das Gästebuch bereits signiert",
                error: "Ein Fehler ist aufgetreten. Bitte versuche es später erneut",
            },
        },
    },
} as const;
