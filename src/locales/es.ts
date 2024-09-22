export default {
    layout: {
        header: {
            about: "acerca de",
            projects: "proyectos",
            monitoring: "monitoreo",
            guestbook: "libro de visitas",

            changeLocale: "Cambiar idioma",
            changeTheme: "Cambiar tema",
            getSource: "Mostrar código fuente",
        },
        footer: {
            terms: "Términos",
            privacy: "Privacidad",

            allRightReserved: "Todos los derechos reservados",
        },
    },
    pages: {
        hero: {
            hello: "Hola, soy Pierre",
            slug: "Convierto ideas en realidad",
            description:
                "Soy un estudiante de 18 años con sede en Francia (Rouen) y me apasiona crear experiencias digitales. Disfruto estudiando y diseñando soluciones para necesidades técnicas.",

            experience: {
                title: "Experiencia y Educación",
                now: "Presente",
                webDev: "Desarrollador Web",
                bac: "Diploma de Bachillerato en Ciencias",
                bts: "HND en Ciencias de la Computación",
                downloadCV: "Descargar CV",
            },
        },
        guestbook: {
            title: "Firma mi libro de visitas",
            signIn: "Iniciar sesión",
            signOut: "Cerrar sesión",

            writeMessage: "Escribir un mensaje",
            messageContent: "Contenido del mensaje",

            info: {
                title: "Leer antes de usarlo",
                description:
                    "Durante esta conexión, solo recopilaré tu nombre de usuario y correo electrónico para evitar que publiques múltiples mensajes. No utilizaré estos datos para enviarte ningún correo electrónico.",
            },

            notif: {
                success: "¡Tu mensaje ha sido enviado!",
                alreadyFound: "Ya has firmado el libro de visitas",
                error: "Ocurrió un error. Por favor, inténtalo de nuevo más tarde",
            },
        },
    },
} as const;
