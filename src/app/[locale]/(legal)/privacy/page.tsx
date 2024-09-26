import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";

export default function PrivacyPage() {
    return (
        <section className="my-12 min-h-screen">
            <MaxWidthWrapper>
                <article className="prose max-w-full">
                    <h1>Politique de confidentialité</h1>
                    <p>
                        <strong>Dernière mise à jour :</strong> 25/09/2024
                    </p>
                    <p>
                        Bienvenue sur mon portfolio. La protection de votre vie privée est importante pour moi, et je
                        m'engage à garantir la sécurité des informations que vous partagez lors de votre visite sur ce
                        site. Cette politique de confidentialité décrit comment les informations personnelles sont
                        collectées, utilisées et protégées lorsque vous visitez ce site.
                    </p>

                    <h2>1. Collecte des informations personnelles</h2>
                    <p>
                        Lorsque vous visitez mon portfolio, je peux collecter certaines informations vous concernant.
                        Cela peut inclure :
                    </p>
                    <ul>
                        <li>
                            <strong>Informations automatiquement collectées</strong> : comme votre adresse IP, le type
                            de navigateur utilisé, le système d'exploitation, les pages visitées, l'heure et la durée de
                            vos visites.
                        </li>
                        <li>
                            <strong>Informations que vous fournissez volontairement</strong> : telles que votre nom,
                            adresse e-mail ou tout autre détail lorsque vous me contactez via un formulaire de contact
                            ou en envoyant un message dans mon livre d'or.
                        </li>
                    </ul>

                    <h2>2. Utilisation des informations</h2>
                    <p>Les informations collectées peuvent être utilisées aux fins suivantes :</p>
                    <ul>
                        <li>Éviter que vous mettiez plusieurs messages dans le livre d'or ;</li>
                        <li>
                            Analyser les données de trafic pour maintenir la sécurité et améliorer les fonctionnalités
                            du site ;
                        </li>
                        <li>
                            Vous envoyer des informations si vous avez expressément consenti à recevoir des
                            communications de ma part.
                        </li>
                    </ul>

                    <h2>3. Partage des informations</h2>
                    <p>Je ne partage pas vos informations personnelles avec des tiers, sauf dans les cas suivants :</p>
                    <ul>
                        <li>Si la loi l'exige ou dans le cadre d'une procédure judiciaire ;</li>
                        <li>Si cela est nécessaire pour protéger mes droits, ma sécurité ou ceux d'autrui ;</li>
                        <li>Si vous avez donné votre consentement explicite pour partager vos informations.</li>
                    </ul>

                    <h2>4. Cookies</h2>
                    <p>
                        Ce site peut utiliser des <strong>cookies</strong> pour améliorer votre expérience de
                        navigation. Un cookie est un petit fichier texte stocké sur votre appareil qui permet de
                        reconnaître votre navigateur et de capturer certaines informations. Vous pouvez configurer votre
                        navigateur pour refuser les cookies ou vous avertir lorsque des cookies sont envoyés. Cependant,
                        certaines fonctionnalités du site peuvent ne pas fonctionner correctement si vous désactivez les
                        cookies.
                    </p>

                    <h2>5. Sécurité des données</h2>
                    <p>
                        Je prends des mesures raisonnables pour protéger vos informations personnelles contre tout accès
                        non autorisé, modification, divulgation ou destruction. Cependant, aucune méthode de
                        transmission sur Internet ni de stockage électronique n'est complètement sécurisée, et je ne
                        peux garantir une sécurité absolue.
                    </p>

                    <h2>6. Liens vers des sites tiers</h2>
                    <p>
                        Mon portfolio peut contenir des liens vers d'autres sites web qui ne sont pas sous mon contrôle.
                        Je ne suis pas responsable des pratiques de confidentialité de ces sites tiers. Je vous
                        recommande de consulter les politiques de confidentialité des sites que vous visitez via ces
                        liens.
                    </p>

                    <h2>7. Vos droits</h2>
                    <p>
                        Conformément aux lois en vigueur, vous disposez de certains droits concernant vos informations
                        personnelles, tels que :
                    </p>
                    <ul>
                        <li>Le droit d'accéder aux informations personnelles que je détiens à votre sujet ;</li>
                        <li>Le droit de demander la correction ou la suppression de vos informations ;</li>
                        <li>
                            Le droit de vous opposer au traitement de vos données personnelles ou de retirer votre
                            consentement.
                        </li>
                    </ul>
                    <p>
                        Si vous souhaitez exercer ces droits, veuillez me contacter à l'adresse e-mail suivante :
                        pierre.houlliere@gmail.com
                    </p>

                    <h2>8. Modifications de la politique de confidentialité</h2>
                    <p>
                        Je me réserve le droit de modifier cette politique de confidentialité à tout moment. Les
                        modifications seront publiées sur cette page, accompagnées de la date de la dernière mise à
                        jour. Je vous encourage à consulter régulièrement cette politique pour être informé des
                        éventuels changements.
                    </p>
                </article>
            </MaxWidthWrapper>
        </section>
    );
}
