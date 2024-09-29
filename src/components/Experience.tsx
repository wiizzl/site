"use client";

import { BriefcaseBusiness, Download } from "lucide-react";
import Image from "next/image";

import { useScopedI18n } from "@/locales/client";

const Experience = () => {
    const t = useScopedI18n("pages.hero.experience");

    const experience = [
        {
            name: t("webDev"),
            details: "Freelance",
            startDate: "04/2023",
            endDate: t("now"),
            image: "https://i.imgur.com/Lr0FsHR.jpeg",
        },
        {
            name: "Campus La Chataîgneraie",
            details: t("bts"),
            startDate: "09/2024",
            endDate: t("now"),
            image: "https://i.imgur.com/8AAoBGY.png",
        },
        {
            name: "Lycée Galilée, Franqueville",
            details: t("bac"),
            startDate: "09/2021",
            endDate: "07/2024",
            image: "https://i.imgur.com/287GhRx.png",
        },
    ];

    return (
        <div className="w-[350px] space-y-6 rounded-2xl border-2 border-base-200 p-5">
            <div className="ml-0.5 flex items-center gap-x-3.5">
                <BriefcaseBusiness strokeWidth={1.5} />
                <h2 className="text-lg font-semibold">{t("title")}</h2>
            </div>
            <div className="space-y-4">
                {experience.map((item, index) => (
                    <div className="flex items-center gap-x-2" key={index}>
                        <div className="avatar rounded-full bg-base-200 p-0.5">
                            <Image
                                src={item.image}
                                alt={`Experience : ${item.name}`}
                                width={30}
                                height={30}
                                className="pointer-events-none aspect-square rounded-full"
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="truncate font-semibold">{item.name}</h3>
                            <div className="flex justify-between">
                                <p className="text-xs">{item.details}</p>
                                <p className="text-xs">
                                    {item.startDate} - {item.endDate}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => alert("Work in progress")} className="btn btn-sm w-full">
                <Download className="size-4" /> {t("downloadCV")}
            </button>
        </div>
    );
};

export { Experience };
