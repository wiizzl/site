import Image from "next/image";
import Link from "next/link";

import { Bento } from "@/components/Bento";
import { Experience } from "@/components/Experience";
import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { ScrollDown } from "@/components/ScrollDown";

import { Config } from "@/config";
import { cn } from "@/lib/utils";
import { getScopedI18n } from "@/locales/server";

export default async function Home() {
    const t = await getScopedI18n("pages.hero");

    return (
        <section className="my-16 min-h-screen overflow-x-hidden">
            <MaxWidthWrapper>
                <div className="max-w-2xl space-y-5">
                    <h1 className="text-4xl font-bold md:text-5xl">
                        {t("hello")},<br />
                        {t("slug")}
                    </h1>
                    <p>{t("description")}</p>
                    <div className="flex gap-x-6">
                        {Config.Socials.map((item, index) => (
                            <Link
                                href={item.href}
                                target="_blank"
                                className="transition-all duration-300 hover:rotate-3 hover:text-primary"
                                key={index}
                            >
                                {item.icon}
                                <span className="sr-only">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
            <div>
                <div className="mt-24 flex items-center justify-center gap-x-8">
                    {Array.from({ length: 5 }).map((_, index) => {
                        const photoIndex = index + 1;

                        return (
                            <Image
                                src={`/images/hero/${photoIndex}.jpg`}
                                alt={`Photo ${photoIndex}`}
                                loading="lazy"
                                width={500}
                                height={500}
                                className={cn(
                                    "pointer-events-none sm:h-[320px] h-[220px] sm:w-[280px] w-[200px] rounded-3xl object-cover",
                                    index % 2 === 0 ? "rotate-2" : "-rotate-2"
                                )}
                                key={index}
                            />
                        );
                    })}
                </div>
                <div className="mb-12 mt-20 flex items-center justify-center">
                    <ScrollDown id="informations" />
                </div>
            </div>
            <MaxWidthWrapper className="space-y-12">
                <div className="pt-10" id="informations">
                    <Bento />
                </div>
                <div className="space-y-5">
                    <div>
                        <h2 className="text-3xl font-semibold">Apprenez en plus sur moi</h2>
                        <p>
                            Je peux créer des expériences parfaites pour vos utilisateurs tout en partageant votre idée
                            principale.
                        </p>
                    </div>
                    <div className="flex justify-end gap-x-5">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem officia optio est itaque
                            reprehenderit nulla perspiciatis voluptatem dolores in ducimus assumenda fuga nihil saepe
                            fugiat hic dolorum, eaque, amet laborum quibusdam. Facere, corporis odit ex maxime minus
                            eveniet adipisci iusto repellat maiores quis vel consequatur, quae ad doloremque voluptates
                            earum exercitationem quos nemo architecto molestiae numquam dolor! Cumque repellendus
                            mollitia incidunt illum! Maiores asperiores dolores temporibus voluptatum nesciunt quisquam
                            cum officia molestiae quibusdam porro consequuntur perferendis laudantium dolorum minus nemo
                            eveniet, nostrum sunt! Explicabo ipsa fuga magni cumque. In eius blanditiis quibusdam nobis,
                            magni dicta odit aspernatur tenetur ratione quam.
                        </p>
                        <div className="whitespace-nowrap">
                            <Experience />
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    <div>
                        <h2 className="text-3xl font-semibold">Me contacter</h2>
                        <p>
                            Si mon profil vous intéresse n'hésitez pas à me contacter sur les réseaux sociaux ou par
                            mail.
                        </p>
                    </div>
                    <div>{/* TODO: socials icons */}</div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
