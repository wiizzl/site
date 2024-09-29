"use client";

import { Experience } from "./Experience";

import { useScopedI18n } from "@/locales/client";

const Learn = () => {
    const t = useScopedI18n("pages.hero.learn");

    return (
        <div className="space-y-5">
            <div className="space-y-0.5">
                <h2 className="text-3xl font-semibold">{t("title")}</h2>
                <p>{t("description")}</p>
            </div>
            <div className="flex justify-end gap-x-5">
                <p className="text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem officia optio est itaque reprehenderit
                    nulla perspiciatis voluptatem dolores in ducimus assumenda fuga nihil saepe fugiat hic dolorum,
                    eaque, amet laborum quibusdam. Facere, corporis odit ex maxime minus eveniet adipisci iusto repellat
                    maiores quis vel consequatur, quae ad doloremque voluptates earum exercitationem quos nemo
                    architecto molestiae numquam dolor! Cumque repellendus mollitia incidunt illum! Maiores asperiores
                    dolores temporibus voluptatum nesciunt quisquam cum officia molestiae quibusdam porro consequuntur
                    perferendis laudantium dolorum minus nemo eveniet, nostrum sunt! Explicabo ipsa fuga magni cumque.
                    In eius blanditiis quibusdam nobis, magni dicta odit aspernatur tenetur ratione quam.
                </p>
                <div className="whitespace-nowrap">
                    <Experience />
                </div>
            </div>
        </div>
    );
};

export { Learn };
