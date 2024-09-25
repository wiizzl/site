import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";

export default function TermsPage() {
    return (
        <section className="my-12 min-h-screen">
            <MaxWidthWrapper>
                <article className="prose max-w-6xl">
                    <h1>Termes et Conditions d'Utilisation</h1>
                    <p>
                        <strong>Dernière mise à jour :</strong> 25/09/24
                    </p>
                    <p>
                        Bienvenue sur <strong>ce portfolio</strong>. En accédant et en utilisant ce site, vous acceptez
                        de respecter les présents termes et conditions d'utilisation. Veuillez les lire attentivement
                        avant d'utiliser le Site. Si vous n'acceptez pas ces termes, veuillez ne pas utiliser le Site.
                    </p>

                    <h2>1. Accès au site</h2>
                    <p>
                        L'accès au Site est gratuit et ouvert à tout utilisateur disposant d'une connexion Internet.
                        Toutefois, je me réserve le droit de restreindre l'accès à certaines parties du Site ou à
                        certaines fonctionnalités à tout moment et sans préavis.
                    </p>

                    <h2>2. Propriété intellectuelle</h2>
                    <p>
                        Tout le contenu disponible sur ce site, y compris, sans s'y limiter, les textes, images, logos,
                        graphiques, vidéos, et tout autre matériel, est protégé par les lois relatives à la propriété
                        intellectuelle et aux droits d'auteur. Vous n'êtes pas autorisé à copier, reproduire, distribuer
                        ou modifier le contenu du Site sans mon consentement écrit préalable.
                    </p>

                    <h2>3. Utilisation acceptable</h2>
                    <p>En utilisant le Site, vous acceptez de ne pas :</p>
                    <ul>
                        <li>
                            Utiliser le Site d'une manière qui pourrait nuire à son fonctionnement ou violer la loi ;
                        </li>
                        <li>
                            Tenter d'accéder de manière non autorisée à toute partie du Site ou à des serveurs connexes
                            ;
                        </li>
                        <li>
                            Transmettre tout contenu illégal, abusif, diffamatoire, ou portant atteinte aux droits
                            d'autrui.
                        </li>
                    </ul>
                    <p>
                        Toute violation de ces règles peut entraîner la suspension ou la résiliation immédiate de votre
                        accès au Site.
                    </p>

                    <h2>4. Responsabilité des utilisateurs</h2>
                    <p>
                        Les utilisateurs sont responsables de s'assurer que leur utilisation du site est conforme aux
                        lois locales en vigueur dans leur juridiction. Vous êtes également responsable de protéger la
                        confidentialité des informations que vous soumettez via ce site (ex. : informations de contact).
                    </p>

                    <h2>5. Limitation de responsabilité</h2>
                    <p>
                        Bien que je m'efforce de maintenir le Site à jour et en bon état de fonctionnement, je ne peux
                        garantir que toutes les informations sur le Site sont toujours exactes, complètes ou exemptes
                        d'erreurs. Le Site et son contenu sont fournis "tels quels", sans aucune garantie de quelque
                        nature que ce soit, explicite ou implicite.
                    </p>
                    <p>
                        Je ne saurais être tenu responsable des dommages directs ou indirects résultant de l'utilisation
                        ou de l'impossibilité d'utiliser le Site, y compris mais sans s'y limiter, les pertes de
                        données, les interruptions de service ou les dommages causés à votre système informatique.
                    </p>

                    <h2>6. Liens vers des sites tiers</h2>
                    <p>
                        Le Site peut contenir des liens vers des sites Web de tiers. Ces liens sont fournis à titre
                        informatif et ne constituent pas une approbation de ces sites ou de leur contenu. Je ne suis pas
                        responsable des pratiques de confidentialité ni du contenu de ces sites tiers.
                    </p>

                    <h2>7. Modifications des termes</h2>
                    <p>
                        Je me réserve le droit de modifier ces termes et conditions à tout moment. Les modifications
                        seront publiées sur cette page, accompagnées de la date de la dernière mise à jour. Je vous
                        encourage à consulter régulièrement ces termes pour être informé de tout changement. Votre
                        utilisation continue du Site après la publication des modifications vaut acceptation des
                        nouveaux termes.
                    </p>

                    <h2>8. Résiliation</h2>
                    <p>
                        Je me réserve le droit de suspendre ou de mettre fin à l'accès de tout utilisateur au Site sans
                        préavis, en cas de violation des termes d'utilisation ou de comportement inapproprié.
                    </p>

                    <h2>9. Droit applicable</h2>
                    <p>
                        Les présents termes sont régis par les lois de la France, sans égard aux principes de conflit de
                        lois. Tout litige relatif à l'utilisation du site sera soumis à la juridiction exclusive des
                        tribunaux compétents de la région Normandie.
                    </p>
                </article>
            </MaxWidthWrapper>
        </section>
    );
}
